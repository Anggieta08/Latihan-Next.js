import './globals.css'; // Gunakan ini jika file berada di folder /app
// Hapus baris di bawah jika tidak ada file styles/globals.css di luar folder /app
// import '../styles/globals.css';

export const metadata = {
  title: 'HUT Bio Farma 135 Tahun',
  description: 'Perayaan HUT ke-135 Bio Farma dengan gaya retro futuristik!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          integrity="sha512-1ycn6IcaQQ40/MKBW2W4Nz5LCRa9QIv6D6+8eAb4X4Y5kR9oV0TjP6MHBv4c9F36AT9bF+mTb1dZBY2x0f5pBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
