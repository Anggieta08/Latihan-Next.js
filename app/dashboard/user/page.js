import Link from 'next/link';

export default function UserPage() {
    
<Link href="/dashboard/user">
  <p>User</p>
</Link>

  const users = [
    { id: 1, nama: "Andi", email: "andi@example.com" },
    { id: 2, nama: "Budi", email: "budi@example.com" },
  ];

  return (
    <div className="user-page">
      <h1 className="user-title">Daftar Pengguna</h1>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nama</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.nama}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
