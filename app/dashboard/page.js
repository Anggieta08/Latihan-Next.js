"use client";

import Image from "next/image";
import Link from "next/link";
import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import Sidebar from "../components/sidebar/index.jsx";

const barData = [
  { name: "Feb", product: 400 },
  { name: "Mar", product: 500 },
  { name: "Apr", product: 300 },
  { name: "May", product: 600 },
  { name: "Jun", product: 450 },
  { name: "Jul", product: 250 },
];

const pieData = [
  { name: "A", value: 400 },
  { name: "B", value: 300 },
  { name: "C", value: 300 },
  { name: "D", value: 200 },
];

const COLORS = ["#ff4b6e", "#ffc93c", "#36d399", "#7c3aed"];

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <Sidebar/>
      <main className="main-content">
        <div className="header">
          <h1>Total Product</h1>
        </div>
        <div className="grid">
          <div className="card center">
        <Image src="/Gambar/profil.jpeg" alt="User" width={60} height={60} />
            <p>Total Product</p>
            <h2>4</h2>
          </div>

          <div className="card">
            <div className="bar-container">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="product" fill="#4f46e5" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="card">
            <div className="pie-container">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={pieData} cx="50%" cy="50%" outerRadius={60} dataKey="value">
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="card" style={{ gridColumn: "span 2" }}>
            <h2>Sales Statistics</h2>
            <div style={{ background: "#7c3aed", height: "20px", margin: "10px 0", borderRadius: "6px", width: "80%" }}></div>
            <div style={{ background: "#36d399", height: "20px", margin: "10px 0", borderRadius: "6px", width: "60%" }}></div>
            <div style={{ background: "#ffc93c", height: "20px", margin: "10px 0", borderRadius: "6px", width: "50%" }}></div>
          </div>
        </div>
      </main>
    </div>
  );
}
