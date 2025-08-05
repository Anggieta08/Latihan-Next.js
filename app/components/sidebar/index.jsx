'use client';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2 style={{ marginBottom: '20px' }}>🧭 Menu</h2>
      <Link href="/dashboard">Beranda</Link>
      <Link href="/produk">Produk</Link>

    
      <style jsx>{`
        .sidebar {
          width: 220px;
          background: #1e293b;
          color: white;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 15px;
          min-height: 100vh;
        }

        .sidebar a {
          color: white;
          text-decoration: none;
          padding: 8px;
          border-radius: 6px;
          transition: background 0.3s;
        }

        .sidebar a:hover {
          background: #334155;
        }
      `}</style>
    </div>
  );
}
