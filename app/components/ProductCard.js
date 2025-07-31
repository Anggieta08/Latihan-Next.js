'use client';
import Image from 'next/image';

export default function ProductCard({ img, title, description, category }) {
  return (
    <div className="card">
      <Image
        src={img}
        alt={title}
        width={150}
        height={150}
        style={{ objectFit: "cover", borderRadius: "8px" }}
      />
      <h3>{title}</h3>
      <p className="category">{category}</p>
      <p className="desc">{description}</p>

      <style jsx>{`
        .card {
          background: #1e293b;
          padding: 15px;
          border-radius: 10px;
          color: #fff;
          text-align: center;
        }
        .card h3 {
          margin: 10px 0 5px;
          font-size: 16px;
        }
        .card .category {
          font-weight: bold;
          color: #93c5fd;
        }
        .card .desc {
          font-size: 13px;
          color: #e2e8f0;
        }
      `}</style>
    </div>
  );
}
