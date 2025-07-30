/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import Link from "next/link";

export default function UserPage() {
  const users = [
    {
      id: 1,
      name: "Andi Saputra",
      email: "andi@example.com",
      role: "Admin",
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Budi Santoso",
      email: "budi@example.com",
      role: "User",
      photo: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      id: 3,
      name: "Citra Dewi",
      email: "citra@example.com",
      role: "Editor",
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 4,
      name: "Dewi Lestari",
      email: "dewi@example.com",
      role: "User",
      photo: "https://randomuser.me/api/portraits/women/65.jpg",
    },
  ];

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>Menu</h2>
        <Link href="/dashboard">📊 Dashboard</Link>
        <Link href="/user">👤 User</Link>
        <Link href="/produk">📦 Produk</Link>
        <Link href="/laporan">📑 Laporan</Link>
      </aside>

      <main className="main-content">
        <div className="header">
          <h1>👥 Manajemen User</h1>
        </div>

        <div className="user-grid">
          {users.map((user) => (
            <div key={user.id} className="user-card">
              // eslint-disable-next-line @next/next/no-img-element
              <img src={user.photo} alt={user.name} className="avatar" />
              <h3>{user.name}</h3>
              <p>{user.email}</p>
              <span className={`badge ${user.role.toLowerCase()}`}>
                {user.role}
              </span>
            </div>
          ))}
        </div>
      </main>

      <style jsx>{`
        .dashboard-container {
          display: flex;
          min-height: 100vh;
          background: #0f1123;
        }

        /* Sidebar */
        .sidebar {
          width: 220px;
          background: #1e293b;
          color: white;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        .sidebar h2 {
          margin-bottom: 10px;
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

        /* Main content */
        .main-content {
          flex: 1;
          padding: 30px;
          color: #fff;
        }
        .header {
          margin-bottom: 25px;
        }
        .header h1 {
          margin: 0;
          font-size: 24px;
          color: #e2e8f0;
        }

        /* User Grid */
        .user-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
        }

        .user-card {
          background: white;
          border-radius: 12px;
          padding: 20px;
          text-align: center;
          box-shadow: 0 5px 12px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          transition: transform 0.2s ease;
        }

        .user-card:hover {
          transform: translateY(-5px);
        }

        .avatar {
          width: 85px;
          height: 85px;
          border-radius: 50%;
          object-fit: cover;
        }

        .user-card h3 {
          margin: 5px 0 0;
          font-size: 18px;
          color: #1e293b;
        }

        .user-card p {
          margin: 2px 0;
          font-size: 14px;
          color: #555;
        }

        .badge {
          display: inline-block;
          margin-top: 5px;
          padding: 5px 12px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 600;
          color: white;
        }
        .badge.admin {
          background: #ef4444;
        }
        .badge.user {
          background: #10b981;
        }
        .badge.editor {
          background: #f59e0b;
        }
      `}</style>
    </div>
  );
}
