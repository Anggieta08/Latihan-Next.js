"use client";

import Sidebar from "@components/sidebar/index.jsx";
import Image from "next/image";
import "./etikal.css";

export default function GenerikPage() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div className="etikal-container">
        <div className="card-horizontal">
          <div className="image-wrapper">
            <Image
              src="/Gambar/etikall.jpeg"
              alt="Etikal"
              width={300}
              height={200}
              className="image"
            />
          </div>

          <div className="description">
            <h3>ETIKAL</h3>
            <p>
              Obat Etikal ditandai dengan lingkaran berwarna merah dan bergaris tepi hitam
              dengan tulisan K warna hitam di dalam lingkaran warna merah. Kimia Farma
              memproduksi lebih dari 100 produk etikal yang diproduksi dengan kualitas dan
              mutu yang terjamin. Beberapa produk unggulan Kimia Farma seperti Lipidef,
              Merokaf, Avicov Favipiravir, Tecavir, Alergine, Kimoxil, Loprezol, Rahistin,
              Kifarox, dan Protofen bisa didapatkan di berbagai apotek di seluruh Indonesia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
 