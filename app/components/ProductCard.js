/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';

export default function ProductCard({ img, title, description }) {
  return (
    <div style={{
      background: '#ffffff',
      borderRadius: '12px',
      padding: '20px',
      color: '#1f2937',
      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)',
      transition: 'transform 0.2s',
      height: '100%',
      width:'300px'
    }}>
     <img
  src={img}
  alt={title}
  style={{
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    marginBottom: '12px',
    objectFit: 'contain', 
  }}
/>
      <h3 style={{ fontSize: '18px', marginBottom: '10px', color: '#2563eb' }}>{title}</h3>
      <p style={{ fontSize: '14px', lineHeight: '1.5' }}>{description}</p>
    </div>
  );
}
