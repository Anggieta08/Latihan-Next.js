/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';

export default function ProductCard({ img, title, description }) {
  return (
    <div style={{
      background: '#1e293b',
      borderRadius: '10px',
      padding: '20px',
      color: '#fff',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
    }}>
      <img src={img} alt={title} style={{ width: '100%', borderRadius: '8px', marginBottom: '10px' }} />
      <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>{title}</h3>
      <p style={{ fontSize: '14px' }}>{description}</p>
    </div>
  );
}
