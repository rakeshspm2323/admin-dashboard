// import { useAuth } from "@/context/AuthContext";
// import { useRouter } from "next/router";
// import { useState } from "react";

// export default function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const { setAuthenticated } = useAuth();
//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const res = await fetch("/api/auth", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ username, password }),
//     });

//     if (res.ok) {
//       setAuthenticated(true);
//       router.push("/dashboard");
//     } else {
//       alert("Invalid login");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
//         <h2 className="text-xl mb-4 font-bold">Admin Login</h2>
//         <input className="border p-2 mb-3 w-full" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
//         <input type="password" className="border p-2 mb-3 w-full" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
//         <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">Login</button>
//       </form>
//     </div>
//   );
// }


import React, { useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
// import "../../app/globals.css";

export default function Login({page}) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });
  const { setAuthenticated } = useAuth();
  const router = useRouter();

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
      isValid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await fetch("/api/auth", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setAuthenticated(true);
          router.push("/admin/dashboard");
        } else {
          console.error("Failed to register user");
        }
      } catch (error) {
        console.error("Error during form submission:", error);
      }
    }
  };

  return (
    <div className=" bg-gradient-to-r from-cyan-500/30 to-blue-500/30 flex h-[100vh] w-[100vw] flex-col justify-center px-6 py-8 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
          {page} Login Page
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="username"
              className="block font-medium leading-6 text-white"
            >
              Username
            </label>
            <div className="mt-0.5">
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                onChange={handleChange}
                className={`block w-full rounded-md border-0 py-2 px-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6 ${
                  errors.username ? "border-red-500" : ""
                }`}
                placeholder="Enter Username"
              />
              {errors.username && (
                <p className="mt-2 text-sm text-red-500">{errors.username}</p>
              )}
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block font-medium leading-6 text-white"
              >
                Password
              </label>
            </div>
            <div className="mt-0.5">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                onChange={handleChange}
                className={`block w-full rounded-md border-0 py-2 px-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6 ${
                  errors.password ? "border-red-500" : ""
                }`}
                placeholder="Enter Password"
              />
              {errors.password && (
                <p className="mt-2 text-sm text-red-500">{errors.password}</p>
              )}
            </div>
            <div className="text-sm flex items-center justify-end mt-2">
              <Link
                href="#"
                className="px-2 font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Forgot password?
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2.5 font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-300 ease-in-out cursor-pointer"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
