'use client';

import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import Sidebar from '../components/sidebar';
import { products } from './data';
import Link from 'next/link';

export default function ProdukPage() {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter berdasarkan kata dalam title/description
  const filteredProducts = products.filter((p) =>
    (p.title + ' ' + p.description).toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="dashboard-container">
      <Sidebar />
      <main className="main-content">
        <h1>📦 Daftar Produk</h1>

        {/* 🔍 Input pencarian */}
        <input
          type="text"
          placeholder="Cari produk (contoh: generik)"
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* 📦 Daftar produk */}
        <div className="product-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((p) => (
              <div key={p.id} className="card-wrapper">
                <Link href={`/produk/${p.id}`}>
                  <a className="card-link">
                    <ProductCard
                      title={p.title}
                      img={p.img}
                      description={p.description}
                    />
                  </a>
                </Link>
              </div>
            ))
          ) : (
            <p style={{ marginTop: '20px' }}>Tidak ada produk ditemukan.</p>
          )}
        </div>
      </main>

      {/* 💅 Styling */}
      <style jsx>{`
        .dashboard-container {
          display: flex;
          min-height: 100vh;
          background: #0f1123;
        }

        .main-content {
          flex: 1;
          padding: 30px;
          color: #fff;
        }

        h1 {
          font-size: 28px;
          margin-bottom: 20px;
          color: #facc15;
        }

        .search-input {
          padding: 12px 16px;
          border-radius: 8px;
          border: none;
          width: 100%;
          max-width: 600px;
          margin-bottom: 30px;
          font-size: 16px;
          color: #111827;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
        }

        .card-wrapper {
          width: 100%;
          height: 100%;
        }

        .card-link {
          text-decoration: none;
          color: inherit;
          display: block;
          height: 100%;
        }
      `}</style>
    </div>
  );
}
