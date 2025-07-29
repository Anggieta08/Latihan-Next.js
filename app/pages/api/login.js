export default function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    if (username === 'admin' && password === '12345') {
      res.status(200).json({ message: 'Login berhasil!' });
    } else {
      res.status(401).json({ message: 'Username atau password salah!' });
    }
  } else {
    res.status(405).json({ message: 'Method tidak diperbolehkan' });
  }
}
