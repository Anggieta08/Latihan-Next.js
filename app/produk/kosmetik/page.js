"use client";

import Sidebar from "@components/sidebar/index.jsx";
import Image from "next/image";

export default function GenerikPage() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ padding: "20px", flex: 1 }}>
        <h1>KOSMETIK</h1>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <div style={{ width: "200px" }}>
            <Image
              src="/Gambar/kosmetik.jpeg"
              alt="Generik"
              width={200}
              height={150}
            />
            <h3>KOSMETIK</h3>
            <p>
             Menjadi cantik bisa menjadi milik Anda. 
             Temukan produk kosmetik kami melalui brand legendaris Marcks dan Venus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
