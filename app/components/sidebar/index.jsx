// components/Sidebar/index.jsx
"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const Sidebar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <aside className="sidebar">
      <h2>Menu</h2>
      <Link href="/dashboard">📊 Dashboard</Link>
      <Link href="/user">👤 User</Link>

      <div className="dropdown-container">
        <button className="dropdown-toggle" onClick={toggleDropdown}>
          📦 Produk ▾
        </button>
        {showDropdown && (
          <div className="dropdown-menu">
            <Link href="/produk/generik">• Generik</Link>
            <Link href="/produk/etikal">• Etikal</Link>
            <Link href="/produk/otc">• OTC & Herbal</Link>
            <Link href="/produk/kosmetik">• Kosmetik</Link>
          </div>
        )}
      </div>

      <style jsx>{`
        .sidebar {
          width: 220px;
          background: #1e293b;
          color: white;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          min-height: 100vh;
        }

        .sidebar a {
          color: white;
          text-decoration: none;
          padding: 8px;
          border-radius: 4px;
          transition: background 0.3s;
        }

        .sidebar a:hover {
          background: #334155;
        }

        .dropdown-container {
          display: flex;
          flex-direction: column;
        }

        .dropdown-toggle {
          background: none;
          border: none;
          color: white;
          text-align: left;
          padding: 8px;
          cursor: pointer;
          font-size: 16px;
        }

        .dropdown-menu {
          display: flex;
          flex-direction: column;
          padding-left: 16px;
          margin-top: 4px;
        }

        .dropdown-menu a {
          padding: 4px 8px;
          font-size: 14px;
        }

        .dropdown-menu a:hover {
          background: #475569;
          border-radius: 4px;
        }
      `}</style>
    </aside>
  );
};

export default Sidebar;
