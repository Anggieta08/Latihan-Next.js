export async function POST(request) {
  const { username, password } = await request.json();

  if (username === 'admin' && password === '1234') {
    return Response.json({ message: 'Login berhasil' });
  } else {
    return Response.json(
      { message: 'Username atau password salah' },
      { status: 401 }
    );
  }
}
