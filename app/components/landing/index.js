import React , { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ImageBiondFest from '@/public/Gambar/Gambar_BiondFest.png'
import Image135Tahun from '@/public/Gambar/Gambar_135Tahun.png'
import ImageLampu from '@/public/Gambar/Gambar_Lampu.png'
import ImageTanganKanan from '@/public/Gambar/Gambar_Tangan_Kanan.png'
import ImageTanganKiri from '@/public/Gambar/Gambar_Tangan_Kiri.png'
import Gambar_Lampu from '@/public/Gambar/Gambar_Lampu.png';
import Imagesel from '@/public/Gambar/sel.png';
import Imagevirus from '@/public/Gambar/virus.png';


export const Landing = ({var_terima, tanggal, gambar, gambar_logo, kaca_pembesar, sel, virus,  }) => {
      const [timeLeft, setTimeLeft] = useState({
        days: "--",
        hours: "--",
        minutes: "--",
        seconds: "--",
      });
    
      useEffect(() => {
        const eventDate = new Date("August 6, 2025 13:00:00").getTime();
    
        const interval = setInterval(() => {
          const now = new Date().getTime();
          const distance = eventDate - now;
    
          if (distance < 0) {
            setTimeLeft({ days: "0", hours: "0", minutes: "0", seconds: "0" });
            clearInterval(interval);
            return;
          }
    
          const days = Math.floor(distance / (1000 * 60 * 60 * 24));
          const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
          setTimeLeft({
            days,
            hours,
            minutes,
            seconds: seconds.toString().padStart(2, "0"),
          });
        }, 1000);
    
        return () => clearInterval(interval);
      }, []);
  return (
    <>  
        <div className="card">
          <div className="card-logo">
            <div className="logo-wrapper">
              <Image src={gambar_logo} alt="Logo Biofarma" width={250} height={150} />
              <Image src={ImageBiondFest} alt="Logo BiondFest" width={250} height={150} />
              <Image src={Image135Tahun} alt="Logo 135 Tahun" width={150} height={150} />
              <Image src={ImageLampu} alt="Gambar Footer" width={100} height={100} />
              <Image src={kaca_pembesar} alt="Gambar Footer" width={100} height={100} />
              <Image src={Imagesel} alt="Gambar sel" width={100} height={100} />
              <Image src={Imagevirus} alt="Gambar virus" width={100} height={100} />
            </div>
          </div>

          <div className="tangan-wrapper kiri">
            <Image src={ImageTanganKiri} alt="Deco Kiri" width={90} height={90} className="elemen-tangan" />
          </div>
          <div className="tangan-wrapper kanan">
            <Image src={ImageTanganKanan} alt="Deco Kanan" width={90} height={90} className="elemen-tangan" />
          </div>
        </div>

        <h2 className="judul-hut">{var_terima}</h2>
        <p className="deskripsi-hut">
          Siap-siap untuk perayaan yang paling heboh! Kami telah menyiapkan banyak kejutan, keseruan, dan momen kebersamaan untuk seluruh tim Bio Farma.
          <br />Mari rayakan bersama-sama, <strong>#BioFarma: Solid Dari Hati Menyala Tanpa Henti</strong>
        </p>

        <div className="info">
          🗖 Tanggal : {tanggal} | ⏰ Waktu Acara : 13.00 - selesai |
          <span className="lokasi-label"> 📍 Lokasi :</span>
          <Link href="https://www.google.com/maps/place/PT+Biofarma+(Persero)..." target="_blank" className="lokasi-tempat">
            Aula Gedung Utama BioFarma
          </Link>
        </div>

        <div className="countdown">
          <div className="countdown-item"><h1>{timeLeft.days}</h1><span>Days</span></div>
          <div className="countdown-item"><h1>{timeLeft.hours}</h1><span>Hours</span></div>
          <div className="countdown-item"><h1>{timeLeft.minutes}</h1><span>Minutes</span></div>
          <div className="countdown-item"><h1>{timeLeft.seconds}</h1><span>Seconds</span></div>
        </div>
 
        <div className="register-button">
          <button className="loop-pulse" onClick={() => alert("Fitur pendaftaran belum aktif.")}>Daftar sekarang</button>
        </div>
    </>

  )
}
 