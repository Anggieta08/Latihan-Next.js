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
  .product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
  }

  .product-card {
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(8px);
    border-radius: 16px;
    overflow: hidden;
    transition: transform 0.3s ease;
    color: white;
    box-shadow: 0 0 10px rgba(96,165,250,0.3);
  }

  .product-card:hover {
    transform: translateY(-5px) scale(1.03);
  }

  .product-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .product-card h4 {
    font-size: 18px;
    margin: 15px;
    color: #93c5fd;
  }

  .badge {
    background: #60a5fa;
    color: white;
    font-size: 12px;
    padding: 5px 10px;
    border-radius: 12px;
    margin-left: 15px;
  }
`}</style>

    </div>
  );
}
