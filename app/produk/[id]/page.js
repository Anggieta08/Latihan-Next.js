'use client';

import { useParams } from 'next/navigation';
import { products } from '../data';
import Sidebar from '../../components/sidebar';
import Image from 'next/image';

export default function ProductDetailPage() {
  const params = useParams();
  const id = parseInt(params.id);
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
        <h1>{product.title}</h1>
        <Image
          src={product.img}
          alt={product.title}
          width={400}
          height={300}
          style={{
            borderRadius: '8px',
            marginBottom: '20px',
          }}
        />
        <p>{product.description}</p>
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
