'use client';

import { useParams } from 'next/navigation';
import { products } from '../data'; 
import Sidebar from '@components/sidebar';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductDetailPage() {
  const params = useParams();
  const id = parseInt(params?.id);
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="container">
        <Sidebar />
        <main className="content">
          <h1>Produk tidak ditemukan</h1>
        </main>
        <style jsx>{`
          .container {
            display: flex;
            min-height: 100vh;
            background: #0f1123;
            color: #fff;
          }
          .content {
            flex: 1;
            padding: 40px;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="container">
      <Sidebar />
      <main className="content">
        <div className="product-detail-card">
          <h1>{product.title}</h1>
          <Image
            src={product.img || '/img/default.jpg'}
            alt={product.title}
            width={300}
            height={400}
            style={{
              borderRadius: '10px',
              marginBottom: '20px',
              objectFit: 'cover',
              width: '100%',
              maxWidth: '300px',
              height: 'auto',
            }}
          />
          <p>{product.description}</p>
          <Link href="/produk">
            <button className="back-button">← Kembali</button>
          </Link>
        </div>
      </main>

      <style jsx>{`
        .container {
          display: flex;
          min-height: 100vh;
          background: #0f1123;
          color: #fff;
        }
        .content {
          flex: 1;
          padding: 40px;
        }
        .product-detail-card {
          background: #1a1c2c;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          max-width: 600px;
        }
        .back-button {
          margin-top: 20px;
          background-color: #ffffff10;
          border: none;
          padding: 10px 16px;
          color: #fff;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.2s ease;
        }
        .back-button:hover {
          background-color: #ffffff30;
        }
      `}</style>
    </div>
  );
}
