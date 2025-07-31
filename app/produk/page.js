'use client';
import Link from 'next/link';
import ProductCard from '../components/ProductCard';
import Sidebar from '../components/sidebar';

export default function ProdukPage() {
  const products = [
    {
      id:1,
      img: "/Gambar/generik.jpeg",
      title: "GENERIK",
      description: "Ada dua jenis obat generik, yaitu obat generik bermerek dagang dan obat generik berlogo yang",
      description: "dipasarkan dengan merek kandungan zat aktifnya. Kami memproduksi 200 produk generik berlogo dengan merek Kimia Farma seperti Paracetamol",
      description:"Amoxicillin dan Omeprazole yang tersedia di seluruh apotek di Indonesia. Kimia Farma menjamin ketersediaan obat untuk menjaga kesehatan masyarakat Indonesia.",
    },
    {
      img: "/Gambar/etIkall.jpeg",
      title: "ETIKAL",
      description: "Obat Etikal ditandai dengan lingkaran berwarna merah dan bergaris tepi hitam dengan tulisan K warna hitam di dalam lingkaran warna merah",
      description: "Kimia Farma memproduksi lebih dari 100 produk etikal yang diproduksi dengan kualitas dan mutu yang terjamin. Beberapa produk unggulan Kimia Farma", 
      description:"seperti Lipidef, Merokaf, Avicov Favipiravir, Tecavir, Alergine, Kimoxil, Loprezol, Rahistin, Kifarox, dan Protofen bisa didapatkan di berbagai apotek di seluruh Indonesia.",
    },
    {
      img: "/Gambar/OTCHerb.jpeg",
      title: "OTC & HERBAL.",
      description: "Melalui produk OTC & Herbal seperti Fituno, kami membantu meningkatkan kekebalan tubuh. Produk", 
      description: "OTC & Herbal lainnya juga dapat membantu menjaga kesehatan Anda seperti Enkasari dan Batugin.",
    },
    {
      img: "/Gambar/kosmetik.jpeg",
      title: "KOSMETIK.",
      description: "Menjadi cantik bisa menjadi milik Anda. Temukan produk kosmetik kami melalui brand legendaris Marcks dan Venus.",
    },
  ];

  return (
    <div className="dashboard-container">
     <Sidebar/>

      <main className="main-content">
        <h1>📦 Daftar Produk</h1>
        <div className="product-grid">
          {products.map((p, i) => (
            <ProductCard key={i} {...p} />
          ))}
        </div>
      </main>

      <style jsx>{`
        .dashboard-container {
          display: flex;
          min-height: 100vh;
          background: #0f1123;
        }
        .sidebar {
          width: 220px;
          background: #1e293b;
          color: white;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        .sidebar a {
          color: white;
          text-decoration: none;
          padding: 8px;
          border-radius: 6px;
          transition: background 0.3s;
        }
        .sidebar a:hover {
          background: #334155;
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
