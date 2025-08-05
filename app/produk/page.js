'use client';

import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import Sidebar from '../components/sidebar';
import { products } from './data';
import Link from 'next/link';

export default function ProdukPage() {
  const [showDropdown, setShowDropdown] = useState(false);


  return (
    <div className="dashboard-container">
      <Sidebar />
      <main className="main-content">
        <h1>📦 Daftar Produk</h1>
        <div className="product-grid">
          {products.map((p) => (
          <Link key={p.id} href={`/produk/${p.id}`}>
              <ProductCard title={p.title} img={p.img} description={p.description} />
          </Link>

          ))}
        </div>
      </main>

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

        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
}
