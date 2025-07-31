 /* eslint-disable react/jsx-no-comment-textnodes */
import Image from "next/image"

{user && (
  <div className="bg-white text-black rounded-xl p-6 shadow-lg text-center">
    // eslint-disable-next-line react/jsx-no-undef, react/jsx-no-undef
    <Image
      src="/Gambar/profil.jpg"
      width={80}
      height={80}
      alt="User"
      className="rounded-full mx-auto"
    />
    <p className="mt-4 text-lg font-bold">{user.name}</p>
    <p className="text-sm text-gray-500">{user.role}</p>
    <div className="mt-4 bg-green-300 text-center text-black font-bold py-1 rounded-full w-10 mx-auto">
      {user.totalProducts}
    </div>
  </div>
)}
