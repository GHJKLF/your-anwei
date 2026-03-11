export interface Review {
  name: string;
  location: string;
  rating: number;
  text: string;
  useCase: string;
  image?: string;
}

export const REVIEWS: Review[] = [
  {
    name: "Sarah M.",
    location: "Portland, OR",
    rating: 5,
    text: "I have floor-to-ceiling windows in my apartment and dreaded cleaning day. One pass with the AquaBLADE and they look like they were professionally done. No streaks, no lint, no going back over spots. This thing is unreal.",
    useCase: "Windows",
    image: "/images/product-1.webp",
  },
  {
    name: "David K.",
    location: "Austin, TX",
    rating: 5,
    text: "Our glass shower door had permanent-looking hard water stains. The concentrate dissolved them in minutes, and the squeegee left it spotless. Now I hit it after every shower and it stays crystal clear. Should have bought this years ago.",
    useCase: "Shower Glass",
    image: "/images/product-2.webp",
  },
  {
    name: "Jennifer L.",
    location: "Chicago, IL",
    rating: 5,
    text: "I am a professional house cleaner and I have tried every squeegee on the market. The AquaBLADE is the first one that actually lives up to the hype. My clients notice the difference. I ordered three more for my team.",
    useCase: "Professional Cleaning",
    image: "/images/product-3.webp",
  },
  {
    name: "Marcus T.",
    location: "Miami, FL",
    rating: 4,
    text: "Use it on my car windshield and side mirrors after washing. Perfect clarity every time. The suction hook lives in my garage now. Only reason for 4 stars is I wish the handle was a bit longer for large windshields.",
    useCase: "Car Glass",
    image: "/images/product-4.webp",
  },
  {
    name: "Emily R.",
    location: "Denver, CO",
    rating: 5,
    text: "My glass cooktop has never looked this clean. I was using paper towels and glass cleaner before, always left streaks and lint. The AquaBLADE plus the concentrate leaves it looking like new in seconds. Genuinely impressed.",
    useCase: "Cooktop",
    image: "/images/product-5.webp",
  },
];
