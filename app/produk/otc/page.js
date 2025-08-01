"use client";

import Sidebar from "@components/sidebar/index.jsx";
import Image from "next/image";

export default function GenerikPage() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ padding: "20px", flex: 1 }}>
        <h1>OTC & HERBAL</h1>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <div style={{ width: "200px" }}>
            <Image
              src="/Gambar/otc-herbal.jpeg"
              alt="Generik"
              width={200}
              height={150}
            />
            <h3>OTC & HERBAL</h3>
            <p>
              Melalui produk OTC & Herbal seperti Fituno, kami membantu meningkatkan kekebalan tubuh. Produk OTC & Herbal
              lainnya juga dapat membantu menjaga kesehatan Anda seperti Enkasari dan Batugin.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
