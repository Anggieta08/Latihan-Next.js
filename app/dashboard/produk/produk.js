'use client';

import ProductCard from './components/ProductCard';
import Link from "next/link";


export default function HomePage() {
  const products = [
    {
      image: "/produk.jpg",
      title: "Paracetamol Generik",
      description: "Obat penurun panas dan pereda nyeri. Digunakan untuk sakit kepala, demam, dll.",
      category: "Generik"
    },
    {
      image: "/produk.jpg",
      title: "Herbal Batuk",
      description: "Sirup herbal untuk meredakan batuk dan tenggorokan gatal.",
      category: "OTC & Herbal"
    },
     {
      image: "/produk.jpg",
      title: "Herbal Batuk",
      description: "Sirup herbal untuk meredakan batuk dan tenggorokan gatal.",
      category: "OTC & Herbal"
    },
     {
      image: "/produk.jpg",
      title: "Herbal Batuk",
      description: "Sirup herbal untuk meredakan batuk dan tenggorokan gatal.",
      category: "OTC & Herbal"
    },
  ];

  return (
    <main style={{ padding: '40px', background: '#000', minHeight: '100vh' }}>
      <h1 style={{ color: 'white', textAlign: 'center' }}>Daftar Produk</h1>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginTop: '30px'
      }}>
        {products.map((p, i) => (
          <ProductCard key={i} {...p} />
        ))}
      </div>
    </main>
  );
}
