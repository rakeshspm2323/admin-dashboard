import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Login from "./login";
import AdminDashboard from "./dashboard";

export default function AdminIndex() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const router = useRouter();
  const page = "Admin";

//   const checkLoggedInStatus = () => {
//     const userIsLoggedIn = localStorage.getItem("accessToken") !== null;
//     setLoggedIn(userIsLoggedIn);
//   };

//   useEffect(() => {
//     checkLoggedInStatus();
//     if (!isLoggedIn) {
//       // router.push('/login');
//     }
//   }, [isLoggedIn, router]);

  return (
    <>
      {isLoggedIn ? <AdminDashboard /> : <Login page={page} />}
    </>
  );
}
