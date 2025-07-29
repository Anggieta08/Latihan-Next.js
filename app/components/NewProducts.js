import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: '1 фев', Produk: 500 },
  { name: '3 фев', Produk: 750 },
  { name: '5 фев', Produk: 600 },
  { name: '7 фев', Produk: 850 },
  { name: '9 фев', Produk: 700 },
];

export function NewProducts() {
  return (
    <div className="bg-white text-black p-4 rounded-xl shadow-lg">
      <h2 className="font-bold mb-2">New Products</h2>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="Produk" fill="#4ade80" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
