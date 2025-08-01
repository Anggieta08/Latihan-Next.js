"use client";

import Sidebar from "@components/sidebar/index.jsx";
import Image from "next/image";

export default function GenerikPage() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ padding: "20px", flex: 1 }}>
        <h1>GENERIK</h1>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <div style={{ width: "200px" }}>
            <Image
              src="/Gambar/generik.jpeg"
              alt="Generik"
              width={200}
              height={150}
            />
            <h3>GENERIK</h3>
            <p>
             Ada dua jenis obat generik, yaitu obat generik bermerek dagang dan obat generik berlogo yang dipasarkan dengan merek kandungan zat aktifnya. 
             Kami memproduksi 200 produk generik berlogo dengan merek Kimia Farma seperti Paracetamol, Amoxicillin dan Omeprazole 
             yang tersedia di seluruh apotek di Indonesia. Kimia Farma menjamin ketersediaan obat untuk menjaga kesehatan masyarakat Indonesia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
