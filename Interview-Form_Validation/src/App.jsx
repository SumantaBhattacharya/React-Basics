import React, { useState } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";

import "./App.css";
import "boxicons";
function App() {
  // handle input
  const [isName, setName] = useState("");
  const [isEmail, setEmail] = useState("");
  const [isPassword, setPassword] = useState("");
  const [isConfirmPassword, setConfirmPassword] = useState("");

  const [isError, setError] = useState("");

  const handleSubmit = (e) => {
    // camel case
    e.preventDefault(); // to stop the page from refresing by default. suppose give here a log then you see a printed in console for few milliseconds to prevent that we use event.preventDefault()

    // console.log("Form submitted", { isName, isEmail, isPassword });

    if (isPassword.length < 8) {
      setError("Password must be of 8 characters long!");
      return;
    }

    if (isPassword !== isConfirmPassword) {
      setError("Password does'nt match with the current password");
      return;
    }

    if (!/[!@#$%^&*()<>,./"']/.test(isPassword)) {
      // if the password does'nt contain any of these symbols that a password contain contain atmost one of them.
      setError(
        "Password must contain at least one of the following symbols: '!@#$%^&*()<>,./' "
      );
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(isEmail)) {
      setError("Invalid email address");
      return;
    } // The ^ ensures that matching starts from the beginning of the email string. Without it, the regex could match a valid email anywhere inside the string, which might allow invalid inputs.

    // one atleast capital letter
    if (!/[A-Z]/.test(isPassword)) {
      setError("Password must contain at least one capital letter");
      return;
    }    

    setError("");

    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");

    toast.success("The User is successfully logged in!", {
      position: "top-center",
      autoClose: 3004,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      className: "font-[Fredoka One]",
      style: {
        color: "green",
        fontSize: "16px",
        borderRadius: "8px",
        boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.2)",
        fontFamily: "Fredoka One, cursive",
      },
      transition: Bounce,
    });
  };

  return (
    <div className="h-screen flex justify-center items-center px-4">
      <div className="flex flex-col items-center sm:items-start gap-4 w-full max-w-md">
        <div className="w-full">
          <h1 className="font-[Fredoka One] text-yellow-400 text-3xl font-bold text-center sm:text-left">
            Create an <br /> Account
          </h1>
          <h3 className="text-blue-500 mt-2 text-center sm:text-left">
            Sign up to continue
          </h3>
        </div>

        <div className="bg-[rgb(36,39,41)] rounded-xl p-6 w-full">
          <form
            // onSubmit={handleSubmit}
            onSubmit={(e) => {
              // console.log("Form submitted");
              // Redirect the user to the home page or any other page.
              // window.location.href = "/";

              handleSubmit(e);
            }}
            action=""
            className="flex flex-col gap-4"
          >
            <label htmlFor="name" className="text-white mb-1 underline ">
              Full Name
            </label>
            <input
              value={isName}
              onChange={(e) => {
                setName(e.target.value);
              }}
              id="name"
              type="text"
              placeholder="Enter your name"
              className="p-2 rounded-md  w-full"
              required
            />
            <label id="email" className="text-white mb-1 underline">
              Email
            </label>
            <input
              value={isEmail}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              id="email"
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-md  w-full"
              required
            />
            <label htmlFor="passowrd" className="text-white mb-1 underline">
              Password
            </label>
            <input
              value={isPassword}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              id="password"
              type="password"
              placeholder="Enter your password"
              className="p-2 rounded-md  w-full"
              required
            />
            <label
              htmlFor="ConfirmPassword"
              className="text-white mb-1 underline"
            >
              Confirm Password
            </label>
            <input
              value={isConfirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
              id="ConfirmPassword"
              type="password"
              placeholder="Confirm Password"
              className="p-2 rounded-md w-full"
              required
            />

            {isError && (
              <p className="text-red-500 font-semibold text-sm absolute bottom-4 right-4 bg-[rgb(36,39,41)] px-4 py-2 rounded-md shadow-lg">
                {isError}
              </p>
            )}

            <button className="bg-yellow-400 text-black flex justify-center items-center py-2 rounded-md gap-1 font-bold w-full">
              Sign up
              <box-icon type="solid" name="hand-right"></box-icon>
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-4 text-center">
            By registering, you agree to our{" "}
            <a
              href="#"
              className="text-indigo-600 hover:underline"
              style={{ textDecoration: "none" }}
            >
              Terms and Conditions
            </a>
            <span className="mx-1">and</span>
            <a href="#" className="text-indigo-600 hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>

        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
}

export default App;
// outline-none
