import React, { useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";

export const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axiosInstance.post("/auth/login", {
        email: formData.email,
        password: formData.password,
      });

      // Store token in localStorage
      localStorage.setItem("accessToken", response.data.data.accessToken);

      toast.success("Login successful!", {
        position: "top-center",
        autoClose: 2000,
        theme: "dark",
        transition: Bounce,
      });

      setFormData({ email: "", password: "" });

      // Notify parent component immediately
      if (onLogin) onLogin();
    } catch (err) {
      setError(err.message || "Login failed");
      toast.error(err.message || "Login failed", {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
        transition: Bounce,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full flex flex-col justify-center items-center w-full">
      <div className="bg-neutral-900 rounded-2xl p-6 w-full max-w-md shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-center text-white">Log in to your account</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="text-neutral-300 text-sm">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="p-2 rounded-lg bg-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />

          <label className="text-neutral-300 text-sm">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="p-2 rounded-lg bg-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />

          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="bg-white text-black font-semibold py-2 rounded-lg hover:bg-neutral-200 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-xs text-neutral-500 mt-4 text-center">
          Don't have an account?{" "}
          <a href="/signup" className="text-yellow-400 hover:underline">
            Sign up
          </a>
        </p>
      </div>

      <ToastContainer />
    </div>
  );
};
