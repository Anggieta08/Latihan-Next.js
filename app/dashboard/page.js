'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line
} from 'recharts';

export default function DashboardPage() {
  const newProductData = [
    { name: 'Feb 1', Produk: 500 },
    { name: 'Feb 3', Produk: 750 },
    { name: 'Feb 5', Produk: 600 },
    { name: 'Feb 7', Produk: 850 },
    { name: 'Feb 9', Produk: 700 },
  ];

  const pieData = [
    { name: 'Category A', value: 400 },
    { name: 'Category B', value: 300 },
    { name: 'Category C', value: 300 },
    { name: 'Category D', value: 200 },
  ];

  const lineData = [
    { time: '7:00', value: 200 },
    { time: '8:00', value: 500 },
    { time: '9:00', value: 300 },
    { time: '10:00', value: 700 },
  ];

  const salesStats = [
    { label: '3 Monate', value: '2GBs 09/10' },
    { label: '2 Monate', value: '6GBs 09/10' },
    { label: '1 Monat', value: '10GBs 09/10' },
  ];

  const pieColors = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042'];

const [user, setUser] = useState(null);

useEffect(() => {
  setUser({
    name: 'John Doe',
    role: 'Product Manager',
    image: "/Gambar/profil.jpg",
  });
}, []);


  return (
    <div className="min-h-screen bg-gray-900 text-white flex">
      <aside className="w-64 bg-gray-800 p-4">
        <div className="text-2xl font-bold mb-8">Prodcr Management</div>
        <nav className="space-y-4 text-gray-300">
          <div>🧾 Oursse</div>
          <div>📦 Prroduction</div>
          <div>📝 Memanisi</div>
          <div>📊 Pookensi</div>
          <div className="text-white font-semibold">📁 Proko</div>
          <div>📂 Kuace</div>
        </nav>
      </aside>

      <main className="flex-1 p-8 space-y-6">
        <h1 className="text-3xl font-bold">Total PProducts</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white text-black rounded-xl p-6 shadow-lg text-center">
            <Image
              src="/Gambar/profil.jpg"
              width={80}
              height={80}
              alt="User"
              className="rounded-full mx-auto"
            />
            <p className="mt-4 text-lg font-bold">Total Products</p>
            <p className="text-sm text-gray-500">New Product</p>
            <div className="mt-4 bg-green-300 text-center text-black font-bold py-1 rounded-full w-10 mx-auto">
              4
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white text-black p-4 rounded-xl shadow-lg">
            <h2 className="font-bold mb-2">New Products</h2>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={newProductData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="Produk" fill="#4ade80" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white text-black p-4 rounded-xl shadow-lg">
            <h2 className="font-bold mb-2">Product Categories</h2>
            <div className="flex flex-col md:flex-row justify-between">
              <PieChart width={150} height={150}>
                <Pie data={pieData} dataKey="value" outerRadius={60}>
                  {pieData.map((_, i) => (
                    <Cell key={`cell-${i}`} fill={pieColors[i % pieColors.length]} />
                  ))}
                </Pie>
              </PieChart>
              <LineChart width={200} height={150} data={lineData}>
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
              </LineChart>
            </div>
          </div>
        </div>

        <div className="bg-white text-black p-4 rounded-xl shadow-lg">
          <h2 className="font-bold mb-4">Sales Statistics</h2>
          <ul className="space-y-3">
            {salesStats.map((s, i) => (
              <li key={i} className="flex justify-between items-center border-b pb-2">
                <span>{s.label}</span>
                <span className="font-bold text-purple-600">{s.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
