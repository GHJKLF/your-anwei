import { COMPARISON } from "@/lib/config";

export default function ComparisonTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm" role="table">
        <thead>
          <tr className="border-b border-border-light">
            <th className="py-5 pr-6 text-left text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-light">
              Feature
            </th>
            <th className="px-4 py-5 text-center text-[11px] font-semibold uppercase tracking-[0.15em] text-gold">
              AquaBLADE
            </th>
            <th className="px-4 py-5 text-center text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-light">
              Paper Towels
            </th>
            <th className="px-4 py-5 text-center text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-light">
              Cheap Squeegee
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border-light">
          {COMPARISON.map((row) => (
            <tr key={row.feature}>
              <td className="py-4 pr-6 font-medium text-charcoal">
                {row.feature}
              </td>
              <td className="px-4 py-4 text-center font-medium text-charcoal">
                {row.aquablade}
              </td>
              <td className="px-4 py-4 text-center text-slate-light">
                {row.paperTowels}
              </td>
              <td className="px-4 py-4 text-center text-slate-light">
                {row.cheapSqueegee}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
