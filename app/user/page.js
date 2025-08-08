"use client";

import Link from "next/link";
import Sidebar from "../components/Sidebar/index.jsx";

export default function UserPage() {
  const users = [
    { id: 1, name: "Andi Saputra", email: "andi@example.com", role: "User" },
    { id: 2, name: "Budi Santoso", email: "budi@example.com", role: "User" },
    { id: 3, name: "Citra Dewi", email: "citra@example.com", role: "User" },
    { id: 4, name: "Dewi Lestari", email: "dewi@example.com", role: "User" },
  ];

  return (
    <div className="dashboard-container">
      <Sidebar />

      <main className="main-content">
        <div className="header">
          <h1>👥 Manajemen User</h1>
        </div>

        <div className="user-table">
          <div className="table-header">
            <span>ID</span>
            <span>Nama</span>
            <span>Email</span>
            <span>Role</span>
          </div>
          {users.map((user) => (
            <div key={user.id} className="table-row">
              <span>{user.id}</span>
              <span>{user.name}</span>
              <span>{user.email}</span>
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
          background: #0f1123; /* sama dengan halaman produk */
          overflow-x: hidden;
        }

        .main-content {
          flex: 1;
          padding: 30px;
          color: #ffffff;
          max-width: 100%;
          box-sizing: border-box;
        }

        .header {
          margin-bottom: 25px;
        }

        .header h1 {
          margin: 0;
          font-size: 24px;
          color: #ffffff;
        }

        .user-table {
          display: flex;
          flex-direction: column;
          gap: 12px;
          width: 100%;
        }

        .table-header,
        .table-row {
          display: grid;
          grid-template-columns: 1fr 2fr 3fr 1fr;
          align-items: center;
          padding: 14px 20px;
          border-radius: 10px;
        }

        .table-header {
          background: #ffffffff;
          font-weight: bold;
          color: #000000ff;
          border: 1px solid #2a2e4a;
        }

        .table-row {
          background: #ffffffff;
          color: #000000ff;
          transition: background 0.2s ease;
          border: 1px solid #2a2e4a;
        }

        .table-row:hover {
          background: #7c7c8aff;
        }

        .badge {
          padding: 6px 14px;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 600;
          display: inline-block;
          text-align: center;
        }

        .badge.user {
          background: #9193f0ff;
        }
      `}</style>
    </div>
  );
}
