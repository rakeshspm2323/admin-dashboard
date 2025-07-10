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
          console.error("Invalid credentials");
          setAuthenticated(false);
          alert("Invalid username or password");
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
                className={`block text-sm w-full rounded-md py-2 px-2 text-white border outline-none  shadow-sm ring-inset placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-orange-400 sm:leading-6 ${
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
                className={`block text-sm w-full rounded-md py-2 px-2 text-white border outline-none  shadow-sm ring-inset placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-orange-400 sm:leading-6 ${
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
