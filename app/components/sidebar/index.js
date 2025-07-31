import React from 'react'
import Link from 'next/link'

const Sidebar = () => {
  return (
    <aside className="sidebar">
        <h2>Welcome</h2>
        <Link href="/dashboard">📊 Dashboard</Link>
        <Link href="/user">👤 User</Link>
        <Link href="/produk">📦 Produk</Link>
        <Link href="/laporan">📑 Laporan</Link>
        <Link href="/pengaturan">pengaturan</Link>
      </aside>
  )
}

export default Sidebar