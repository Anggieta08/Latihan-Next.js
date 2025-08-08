'use client';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2 style={{ marginBottom: '20px' }}>🧭 Menu</h2>
      <ul>
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href="/produk">Produk</Link></li>
        <li><Link href="/user">User</Link></li>
      </ul>

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

        /* Hilangkan bullet point dan jarak bawaan */
        .sidebar ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .sidebar a {
          color: white;
          text-decoration: none;
          padding: 8px;
          border-radius: 6px;
          display: block; /* Biar klik seluruh kotak */
          transition: background 0.3s;
        }

        /* Ubah warna hover di sini */
       .sidebar a:hover {
  background-color: #38bdf8; /* biru terang */
}

        .sidebar ul {
          list-style: none;
          padding: 0;
          margin: 0;
}
`}</style>
</div>
  );
}
