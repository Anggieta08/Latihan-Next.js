"use client";
import React from "react";
import Image from "next/image";
import { Landing } from "../components/landing";
import { Rules } from "./components/rules";
import { Footer } from "./components/footer";
import ImageLogo from '@/public/Gambar/Gambar_Logo.png'
import ImageKaca_Pembesar from '@/public/Gambar/Kaca_Pembesar.png'
import Imagesel from '@/public/Gambar/sel.png'
import Imagevirus from '@/public/Gambar/virus.png'


const gambarBunga = "/Gambar/Gambar_Bunga.png";
const gambarBuku = "/Gambar/Gambar_Buku.png"; 
const gambarLampu = "/Gambar/Gambar_Lampu.png";
const gambarBotolKimia = "/Gambar/Gambar_Botol_Kimia.png";
const gambarLove = "/Gambar/Gambar_Love.png";


export default function Page() {
  const label = "HUT BIOFARMA 135 Tahun";

  return (
    <main>
      <div className="card-container">
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

       <Landing
  var_terima={label}
  tanggal="6 Agustus 2025"
  gambar={gambarLampu}
  gambar_logo={ImageLogo}
  kaca_pembesar={ImageKaca_Pembesar}
  sel={Imagesel}
  virus={Imagevirus}
/>
        <Rules elemen_gambar={gambarLampu} virus={Imagevirus} />
      </div>

      <Footer />
    </main>
  );
}

var_terima={label}
tanggal="6 Agustus 2025"
gambaar={gambarLampu}
