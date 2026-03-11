import fs from "fs";
import path from "path";
import https from "https";
import http from "http";

const API_KEY = "36a4d2859a42aabaaac1dc4eee448f20";
const CREATE_URL = "https://api.kie.ai/api/v1/jobs/createTask";
const POLL_URL = "https://api.kie.ai/api/v1/jobs/recordInfo";
const OUTPUT_DIR = path.resolve(
  new URL(".", import.meta.url).pathname,
  "../public/images"
);

const IMAGES = [
  {
    name: "use-windows.png",
    prompt:
      "Professional product photography of a person using a sleek silicone squeegee on a large window, bright natural sunlight streaming through crystal-clear glass, modern home interior, warm tones, clean composition",
    ratio: "1:1",
    resolution: null,
  },
  {
    name: "use-mirrors.png",
    prompt:
      "Professional product photography of a silicone squeegee being used on a bathroom mirror, modern bathroom, marble countertop, warm soft lighting, streak-free reflection visible",
    ratio: "1:1",
    resolution: null,
  },
  {
    name: "use-shower.png",
    prompt:
      "Professional product photography of a silicone squeegee on glass shower door, modern bathroom, water droplets on glass, warm lighting, clean and minimal",
    ratio: "1:1",
    resolution: null,
  },
  {
    name: "use-cooktop.png",
    prompt:
      "Professional product photography of a silicone squeegee being used on a glass cooktop, modern kitchen, clean surface, warm overhead lighting",
    ratio: "1:1",
    resolution: null,
  },
  {
    name: "use-car.png",
    prompt:
      "Professional product photography of a silicone squeegee being used on a car windshield, sunny day, clear glass result, automotive setting",
    ratio: "1:1",
    resolution: null,
  },
  {
    name: "video-poster.png",
    prompt:
      "Professional product photography of a complete silicone squeegee cleaning kit laid out on a warm white marble surface, soft natural lighting, all kit components visible: blue squeegee tool, scrubbing attachment, folded microfiber cloths, warm earth tones, overhead flat lay composition",
    ratio: "16:9",
    resolution: null,
  },
  {
    name: "before.png",
    prompt:
      "Close up photograph of a dirty streaky glass window with visible smudges fingerprints and water marks, overcast lighting, realistic",
    ratio: "16:9",
    resolution: null,
  },
  {
    name: "after.png",
    prompt:
      "Close up photograph of a perfectly clean crystal clear glass window, bright natural sunlight streaming through, no streaks or marks, sparkling clean, realistic",
    ratio: "16:9",
    resolution: null,
  },
];

function fetch(url, options = {}) {
  return new Promise((resolve, reject) => {
    const mod = url.startsWith("https") ? https : http;
    const req = mod.request(url, options, (res) => {
      const chunks = [];
      res.on("data", (c) => chunks.push(c));
      res.on("end", () => {
        const body = Buffer.concat(chunks);
        resolve({ status: res.statusCode, headers: res.headers, body });
      });
    });
    req.on("error", reject);
    if (options.body) req.write(options.body);
    req.end();
  });
}

async function fetchJson(url, options = {}) {
  const res = await fetch(url, options);
  return { status: res.status, data: JSON.parse(res.body.toString()) };
}

async function createTask(prompt, ratio, resolution) {
  const input = { prompt, ratio };
  if (resolution) input.resolution = resolution;
  const payload = {
    model: "nano-banana-2",
    input,
  };

  const res = await fetchJson(CREATE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify(payload),
  });

  const taskId = res.data?.data?.taskId || res.data?.data?.task_id;
  if (taskId) return taskId;
  throw new Error(`createTask failed: ${JSON.stringify(res.data)}`);
}

async function pollTask(taskId) {
  const url = `${POLL_URL}?taskId=${taskId}`;
  while (true) {
    const res = await fetchJson(url, {
      method: "GET",
      headers: { Authorization: `Bearer ${API_KEY}` },
    });

    const d = res.data?.data;
    const state = d?.state;

    if (state === "success" || state === "completed") {
      // resultJson may be a string or object
      let result = d.resultJson;
      if (typeof result === "string" && result) {
        try { result = JSON.parse(result); } catch {}
      }
      // Try various structures to find image URL
      const imageUrl =
        result?.resultUrls?.[0] ||
        result?.url ||
        result?.image_url ||
        result?.output?.url ||
        (Array.isArray(result) ? result[0]?.url : null) ||
        (result?.images ? result.images[0]?.url : null) ||
        d.resultUrl ||
        d.result_url;
      if (!imageUrl) {
        console.log("Full response:", JSON.stringify(res.data, null, 2));
        throw new Error("No image URL in completed response");
      }
      return imageUrl;
    }

    if (state === "failed" || state === "error") {
      throw new Error(`Task failed: ${d.failMsg || JSON.stringify(d)}`);
    }

    // Log state periodically
    process.stdout.write(".");

    await new Promise((r) => setTimeout(r, 3000));
  }
}

async function downloadFile(url, dest) {
  // Follow redirects manually
  let currentUrl = url;
  for (let i = 0; i < 5; i++) {
    const res = await fetch(currentUrl, { method: "GET" });
    if (res.status >= 300 && res.status < 400 && res.headers.location) {
      currentUrl = res.headers.location;
      continue;
    }
    fs.writeFileSync(dest, res.body);
    return;
  }
  throw new Error("Too many redirects");
}

async function main() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  console.log(`Output: ${OUTPUT_DIR}`);
  console.log(`Generating ${IMAGES.length} images...\n`);

  for (const img of IMAGES) {
    const dest = path.join(OUTPUT_DIR, img.name);
    console.log(`[${img.name}] Creating task...`);

    try {
      const taskId = await createTask(img.prompt, img.ratio, img.resolution);
      console.log(`[${img.name}] Task ID: ${taskId} - polling...`);

      const imageUrl = await pollTask(taskId);
      console.log(`[${img.name}] Done! Downloading...`);

      await downloadFile(imageUrl, dest);
      const size = fs.statSync(dest).size;
      console.log(
        `[${img.name}] Saved (${(size / 1024).toFixed(1)} KB)\n`
      );
    } catch (err) {
      console.error(`[${img.name}] ERROR: ${err.message}\n`);
    }
  }

  console.log("All done!");
}

main();
