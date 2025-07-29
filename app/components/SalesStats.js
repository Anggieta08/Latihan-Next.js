export function SalesStats() {
  const stats = [
    { label: '3 Monate', value: '2GBs 09/10' },
    { label: '2 Monate', value: '6GBs 09/10' },
    { label: '1 Monat', value: '10GBs 09/10' },
  ];

  return (
    <div className="bg-white text-black p-4 rounded-xl shadow-lg mt-6">
      <h2 className="font-bold mb-4">Sales Statistics</h2>
      <ul className="space-y-3">
        {stats.map((s, i) => (
          <li key={i} className="flex justify-between items-center border-b pb-2">
            <span>{s.label}</span>
            <span className="font-bold text-purple-600">{s.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
