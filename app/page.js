"use client";
import React from "react";
import Image from "next/image";
import { Landing } from "./components/landing";
import { Rules } from "./components/rules";
import { Footer } from "./components/footer";
import ImageLogo from '@/public/Gambar/Gambar_Logo.png'


// ✅ Gambar dari public folder (tanpa import langsung)
const gambarBunga = "/Gambar/Gambar_Bunga.png";
const gambarBuku = "/Gambar/GAmbar_Buku.png"; // pastikan nama file-nya benar
const gambarLampu = "/Gambar/Gambar_Lampu.png";
const gambarBotolKimia = "/Gambar/Gambar_Botol_Kimia.png";
const gambarLove = "/Gambar/Gambar_Love.png";


export default function Page() {
  const label = "HUT BIOFARMA 135 Tahun";

  return (
    <main>
      <div className="card-container">
        {/* Gambar bunga dan buku sebagai dekorasi */}
        <Image
          src={gambarBunga}
          alt="Dekorasi Bunga"
          className="background-floating"
          width={200}
          height={200}
        />
        <Image
          src={gambarBuku}
          alt="Dekorasi Buku"
          className="background-floating-kanan"
          width={200}
          height={200}
        />

        <Image
          src={gambarBotolKimia}
          alt="Dekorasi Botol Kimia"
          className="background-floating-kanan-bawah"
          width={300}
          height={250}
        />

         <Image
          src={gambarLove}
          alt="Dekorasi Love"
          className="background-floating-kanan-bawah"
          width={250}
          height={250}
        />

        {/* Komponen Landing dengan gambar variabel */}
        <Landing var_terima={label} tanggal="6 Agustus 2025" gambar={gambarLampu} gambar_logo={ImageLogo}  />
        {/* <Landing var_terima={label} tanggal="6 Agustus 2025" gambar={gambarBuku} /> */}

        {/* Komponen Rules */}
        <Rules elemen_gambar={gambarLampu} />
      </div>

      <Footer />
    </main>
  );
}
