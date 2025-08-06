'use client';

import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import Sidebar from '../components/sidebar';
import { products } from './data';
import Link from 'next/link';

export default function ProdukPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter((p) =>
    (p.title + ' ' + p.description).toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="dashboard-container">
      <Sidebar />
      <main className="main-content">
        <h1>📦 Daftar Produk</h1>

        <input
          type="text"
          placeholder="Search Di Sini (contoh: generik)"
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="product-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((p) => (
              <Link key={p.id} href={`/produk/${p.id}`} className="card-link">
                <ProductCard
                  title={p.title}
                  img={p.img}
                  description={p.description}
                />
              </Link>
            ))
          ) : (
            <p style={{ marginTop: '20px' }}>Tidak ada produk ditemukan.</p>
          )}
        </div>
      </main>

      <style jsx>{`
        .dashboard-container {
          display: flex;
          min-height: 100vh;
          background: #0f1123;
          overflow-x: hidden;
        }

        .main-content {
          flex: 1;
          padding: 30px;
          color: #fff;
          max-width: 100%;
          box-sizing: border-box;
        }

        .search-input {
          width: 100%;
          max-width: 400px;
          padding: 10px;
          margin-bottom: 20px;
          border-radius: 6px;
          border: none;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
          margin-top: 20px;
        }

        .card-link {
          text-decoration: none;
          color: inherit;
        }
      `}</style>
    </div>
  );
}
