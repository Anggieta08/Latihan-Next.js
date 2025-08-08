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
<Sidebar/>

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
          /* background dihapus agar mengikuti warna default */
        }

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

        .main-content {
          flex: 1;
          padding: 30px;
          color: #1e293b;
          background: #1c2a47;
        }

        .header {
          margin-bottom: 25px;
        }

        .header h1 {
          margin: 0;
          font-size: 24px;
          color: #ffffffff;
        }

        .user-table {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .table-header {
          display: grid;
          grid-template-columns: 1fr 2fr 3fr 1fr;
          padding: 12px 20px;
          background: #1e293b;
          color: #ffffffff;
          font-weight: 600;
          border-bottom: 2px solid #334155;
        }

        .table-row {
          display: grid;
          grid-template-columns: 1fr 2fr 3fr 1fr;
          padding: 15px 20px;
          background: white;
          color: #1e293b;
          border-radius: 8px;
          align-items: center;
          transition: background 0.2s ease;
          box-shadow: 0 2px 4px rgba(146, 78, 78, 0.05);
        }

        .table-row:hover {
          background: #32456b;
        }

        .badge {
          display: inline-block;
          padding: 5px 12px;
          border-radius: 8px;
          font-size: 17px;
          font-weight: 600;
          color: white;
          text-align: center;
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

        .user-table {
  width: 100%;
  border-collapse: collapse;
}

.user-table th {
  background: #1e293b; /* warna sidebar */
  color: white;
  padding: 12px;
  text-align: left;
}

.user-table td {
  background: #b3caeeff; /* warna sidebar */
  color: white;
  padding: 12px;
  border-bottom: 1px solid #334155;
}

.user-table tr:hover td {
  background: #9cbeeeff; /* sedikit lebih terang saat hover */
}

.user-role {
  background: #10b981; /* hijau untuk role */
  color: white;
  padding: 6px 12px;
  border-radius: 6px;
}
      `}</style>
    </div>
  );
}
