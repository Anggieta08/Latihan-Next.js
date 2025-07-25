import React from 'react'
import Link from 'next/link'
import Image from 'next/image';


export const Rules = ({elemen_gambar}) => {
  return (
    <div>
        {/* Aturan Main */}
        <div className="reasons-section">{elemen_gambar}
          <h4>🏁 YUK SIMAK ATURAN MAINNYA 🏁</h4>
          <div className="rules-list">
            <div className="rules-item">📝 <strong>Pendaftarannya gampang banget cuma 2 langkah aja nih:</strong>
              <div>1. <strong>Registrasi:</strong> Klik link undangan dari Email atau WhatsApp</div>
              <div>2. <strong>Check-in:</strong> Di venue saat Hari H (06 Agustus 2025 pukul 12.30 – 14.00)</div>
            </div>
            <div className="rules-item">🥳 <strong>Siap-siap dapat doorprize menarik :</strong>
              <div>√ Setiap peserta yang sudah daftar otomatis masuk dalam undian loh</div>
              <div>√ Panitia undi secara random, dan yang beruntung bisa dapat hadiah kece</div>
            </div>
            <div className="rules-item">💌⁉ <strong>Mau hadiah lebih besar ?</strong>
              <div>Jika kamu sudah registrasi + check-in, kamu bisa ikutan <b>GRANDPRIZE lohh .... 🎁🌟</b></div>
            </div>
          </div>
        </div>

        {/* Kenapa Harus Datang */}
        <div className="reasons-section">
          <h4>🤔 Kenapa Harus Datang ?</h4>
          <div className="reasons-grid">
            <div className="reason-card">🎊🎁 Acaranya seru banyak hadiah</div>
            <div className="reason-card">😻🤗 Bervibes positif penuh kejutan</div>
            <div className="reason-card">✌🏻💕 Moment kebersamaan nya sangat terasa</div>
            <div className="reason-card">🎙🤩 Ada penampilan spesial & hiburan yang bikin terngiang-ngiang</div>
            <div className="reason-card">😍🫱🏻‍🫲🏻 Bisa ketemu dan seru-seruan bareng teman-teman dari berbagai divisi</div>
            <div className="reason-card">🎁🌟 Dan kamu bisa dapat kenang-kenangan eksklusif dari perayaan &quot;HUT BIOFARMA yang ke - 135 tahun&quot;</div>
          </div>
        </div>
    </div>
  )
}
