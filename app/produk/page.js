"use client";

import { useState } from "react";
import Link from "next/link";

export default function Sidebar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
   <><Sidebar />
   <div className="dropdown-container">

    </div><style jsx>{`
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
      `}</style></>
  );
}
