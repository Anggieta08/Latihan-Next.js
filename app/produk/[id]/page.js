/* eslint-disable @next/next/no-img-element */ 
'use client';

import React from 'react';
import { useParams, notFound } from 'next/navigation';
import { products } from '../../../data';
import Sidebar from '@components/sidebar';

const Page = () => {
  const params = useParams();
  const id = parseInt(params.id);
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <><Sidebar />
      <div style={{ padding: 40, color: 'white' }}>
        <h1>Produk tidak ditemukan</h1>
      </div></>
    );
 
  }

  return (
    <div style={{ padding: '40px', background: '#0f1123', color: '#fff', minHeight: '100vh' }}>
      <h1>{product.title}</h1>
  <img
  src={product.img}
  alt={product.title}
  style={{
    width: '400px',
    borderRadius: '8px',
    marginBottom: '20px'
  }}
/>

      <p>{product.description}</p>
    </div>
  );
};

export default Page;
