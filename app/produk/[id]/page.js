/* eslint-disable @next/next/no-img-element */
'use client';

import { useParams } from 'next/navigation';
import { products } from '../../data/index.js';
import Sidebar from '../../components/sidebar';


export default function ProductDetailPage() {
  const params = useParams(); 
  const id = parseInt(params.id); 
  const product = products.find((p) => p.id === id); 

  if (!product) {
    return (
      <>
        <Sidebar />
        <div style={{ marginLeft: '200px', padding: '40px', color: 'white' }}>
          <h1>Produk tidak ditemukan</h1>
        </div>
      </>
    );
  }

  return (
    <>
      <Sidebar />
      <div
        style={{
          marginLeft: '200px',
          padding: '40px',
          background: '#0f1123',
          color: '#fff',
          minHeight: '100vh',
        }}
      >
        <h1>{product.title}</h1>
        <img
          src={product.img}
          alt={product.title}
          style={{
            width: '400px',
            borderRadius: '8px',
            marginBottom: '20px',
          }}
        />
        <p>{product.description}</p>
      </div>
    </>
  );
}
