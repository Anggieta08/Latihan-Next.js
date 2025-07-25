'use client';
import React from 'react'
import Link from 'next/link'
import GambarFooter from '@/public/Gambar/Gambar_Logo.png';
import Image from 'next/image';

export default function Page() {
  return (
   <main>
  <Footer />
</main>

  );
}

export const Landing = ({Image}) => {
    
  }

export const Footer = () => {
  return (
    <div>
        {/* Footer */}
        <div className="footer">
          💬🔊 Ayo Rayakan Momen Bersejarah Bareng Tim BioFarma #Karena BioFarma tuh...
          <br />GAK ADA 2NYA!

          {/* Social Media Section */}
          <div className="sosmed-footer-retro">
            <h2 className="footer-title">IKUTI MEDIA SOSIAL KAMI</h2>
            <div className="sosmed-links">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
                <span>Instagram</span>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube"></i>
                <span>YouTube</span>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>
   </div>
  )
}
