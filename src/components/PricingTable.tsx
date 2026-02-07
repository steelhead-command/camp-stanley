const rates = [
  {
    type: "Tent Site",
    weekday: "$35",
    weekend: "$45",
    weekly: "$200",
    bestValue: true,
  },
  {
    type: "Cabin",
    weekday: "$120",
    weekend: "$150",
    weekly: "$700",
    bestValue: true,
  },
  {
    type: "Group Site",
    weekday: "$85",
    weekend: "$110",
    weekly: "$500",
    bestValue: true,
  },
];

const seasons = [
  { label: "Peak Season", period: "May – September" },
  { label: "Off-Peak", period: "October – April", discount: "15% off listed rates" },
];

export default function PricingTable() {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-stone/10">
              <th className="py-4 pr-6 text-xs font-medium uppercase tracking-[0.15em] text-sage">
                Accommodation
              </th>
              <th className="px-6 py-4 text-xs font-medium uppercase tracking-[0.15em] text-sage">
                Weekday
              </th>
              <th className="px-6 py-4 text-xs font-medium uppercase tracking-[0.15em] text-sage">
                Weekend
              </th>
              <th className="px-6 py-4 text-xs font-medium uppercase tracking-[0.15em] text-sage">
                Weekly
              </th>
            </tr>
          </thead>
          <tbody>
            {rates.map((rate) => (
              <tr key={rate.type} className="border-b border-stone/5">
                <td className="py-4 pr-6 font-medium text-foreground">{rate.type}</td>
                <td className="px-6 py-4 text-driftwood">{rate.weekday}</td>
                <td className="px-6 py-4 text-driftwood">{rate.weekend}</td>
                <td className="px-6 py-4 text-driftwood">
                  <span className="flex items-center gap-2">
                    {rate.weekly}
                    {rate.bestValue && (
                      <span className="rounded-full bg-sage/15 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-sage">
                        Best value
                      </span>
                    )}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-8">
        {seasons.map((s) => (
          <div key={s.label} className="text-sm">
            <span className="font-medium text-foreground">{s.label}</span>
            <span className="text-driftwood"> — {s.period}</span>
            {s.discount && (
              <span className="ml-2 text-sage">({s.discount})</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
