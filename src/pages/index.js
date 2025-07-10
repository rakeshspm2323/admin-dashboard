import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-blue-100 to-blue-200">
      <h1 className="md:text-4xl text-3xl font-bold mb-4 text-gray-800 text-center">Welcome to the Admin Dashboard</h1>
      <p className="text-lg mb-6 text-gray-600">Please log in to manage car rental listings.</p>
      <Link
        href="/admin/login"
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded shadow transition-all ease-in-out duration-300"
      >
        Go to Login
      </Link>
    </div>
  );
}
