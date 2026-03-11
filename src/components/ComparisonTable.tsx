import { COMPARISON } from "@/lib/config";

export default function ComparisonTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
      <table className="w-full text-sm" role="table">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="px-4 py-4 text-left font-heading text-sm font-semibold text-charcoal sm:px-6">
              Feature
            </th>
            <th className="bg-sage/5 px-4 py-4 text-center font-heading text-sm font-semibold text-sage-dark sm:px-6">
              AquaBLADE
            </th>
            <th className="px-4 py-4 text-center font-heading text-sm font-semibold text-slate sm:px-6">
              Paper Towels
            </th>
            <th className="px-4 py-4 text-center font-heading text-sm font-semibold text-slate sm:px-6">
              Cheap Squeegee
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {COMPARISON.map((row) => (
            <tr key={row.feature} className="transition-colors duration-150 hover:bg-cream/50">
              <td className="px-4 py-3.5 font-medium text-charcoal sm:px-6">
                {row.feature}
              </td>
              <td className="bg-sage/5 px-4 py-3.5 text-center font-semibold text-sage-dark sm:px-6">
                {row.aquablade}
              </td>
              <td className="px-4 py-3.5 text-center text-slate sm:px-6">
                {row.paperTowels}
              </td>
              <td className="px-4 py-3.5 text-center text-slate sm:px-6">
                {row.cheapSqueegee}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
