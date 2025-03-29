import React, { useState } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";

import "./App.css";
import "boxicons";
import Users from "./Components/Users";
function App() {
  // handle input
  /*
  const [isName, setName] = useState("");
  const [isEmail, setEmail] = useState("");
  const [isPassword, setPassword] = useState("");
  const [isConfirmPassword, setConfirmPassword] = useState("");
  */

  const [isFormData, setFormData] = useState({
    isName: "",
    isEmail: "",
    isPassword: "",
    isConfirmPassword: "",
  });

  const [isError, setError] = useState("");

  const [isUsers, setUsers] = useState([]); // isUsers is an empty array by default

  const handleChanges = (e) => {
    // destructuring
    // const {isName, value}

    // console.log(e.target.value);
    // console.log(e.target.name);

    /*const isName = e.target.name;
    const value = e.target.value;*/

    // short way for all the inputs
    const { name, value } = e.target;

    // console.log(name, value);

    /*setFormData({
      //...isFormData,
      [name]: value,
    })*/

    setFormData((prevState) => ({
      ...prevState, // Spread previous state to keep other fields
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    // camel case
    e.preventDefault(); // to stop the page from refresing by default. suppose give here a log then you see a printed in console for few milliseconds to prevent that we use event.preventDefault()

    // console.log("Form submitted", { isName, isEmail, isPassword });

    if (isFormData.isPassword.length < 8) {
      setError("Password must be of 8 characters long!");
      return;
    }

    if (isFormData.isPassword !== isFormData.isConfirmPassword) {
      setError("Password does'nt match with the current password");
      return;
    }

    if (!/[!@#$%^&*()<>,./"']/.test(isFormData.isPassword)) {
      // if the password does'nt contain any of these symbols that a password contain contain atmost one of them.
      setError(
        "Password must contain at least one of the following symbols: '!@#$%^&*()<>,./' "
      );
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(isFormData.isEmail)) {
      setError("Invalid email address");
      return;
    } // The ^ ensures that matching starts from the beginning of the email string. Without it, the regex could match a valid email anywhere inside the string, which might allow invalid inputs.

    // one atleast capital letter
    if (!/[A-Z]/.test(isFormData.isPassword)) {
      setError("Password must contain at least one capital letter");
      return;
    }

    // const copyUsers = [...isUser]// spread operator(copy of array
    // copyUsers.push({ name: isName, email: isEmail });

    // old data + new data
    // setUsers([...isUsers, { name: isName, email: isEmail }]); // Update the state with new user.

    // setUsers([...isUsers, isFormData]);
    // setUsers([...isUsers, { name: isFormData.isName, email: isFormData.isEmail }]);

    setUsers((prevUsers) => {
      return [
        ...prevUsers,
        { name: isFormData.isName, email: isFormData.isEmail },
      ];
    });
    // In an arrow function with {}, you must include an explicit return. Otherwise, the function does not return anything

    /*
    // or

    setUsers((prevUsers) => [
      ...prevUsers, 
      { name: isFormData.isName, email: isFormData.isEmail }
    ]);


    */

    // console.log(isUsers);

    setError("");

    setFormData({
      isName: "",
      isEmail: "",
      isPassword: "",
      isConfirmPassword: "",
    });

    /*
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    */

    toast.success("The User is successfully logged in!", {
      // This means the toast message appears every time the form submission is successful.
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
              // value={isName}
              value={isFormData.isName}
              onChange={(e) => {
                // setName(e.target.value);
                handleChanges(e);
              }}
              id="name"
              name="isName"
              type="text"
              placeholder="Enter your name"
              className="p-2 rounded-md  w-full"
              required
            />
            <label htmlFor="isEmail" className="text-white mb-1 underline">
              Email
            </label>
            <input
              // value={isEmail}
              value={isFormData.isEmail}
              onChange={(e) => {
                // setEmail(e.target.value);
                handleChanges(e);
              }}
              id="isEmail"
              type="email"
              name="isEmail"
              placeholder="Enter your email"
              className="p-2 rounded-md  w-full"
              required
            />
            <label htmlFor="isPassword" className="text-white mb-1 underline">
              Password
            </label>
            <input
              // value={isPassword}
              value={isFormData.isPassword}
              onChange={(e) => {
                // setPassword(e.target.value);
                handleChanges(e);
              }}
              id="isPassword"
              name="isPassword"
              type="password"
              placeholder="Enter your password"
              className="p-2 rounded-md  w-full"
              required
            />
            <label
              htmlFor="isConfirmPassword"
              className="text-white mb-1 underline"
            >
              Confirm Password
            </label>
            <input
              // value={isConfirmPassword}
              value={isFormData.isConfirmPassword}
              onChange={handleChanges}
              name="isConfirmPassword"
              id="isConfirmPassword"
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
      {/* .map() is a method for arrays */}

      <div className="hidden ml-6 sm:flex flex-col gap-4 p-4 bg-gray-900 rounded-lg shadow-lg w-72">
        <h2 className="text-yellow-400 text-lg font-bold text-center">
          Registered Users
        </h2>
        {isUsers.length === 0 ? (
          <p className="text-gray-500 text-center">No users yet</p>
        ) : (
          isUsers.map((elem, index) => <Users key={index} element={elem} />)
        )}
      </div>
    </div>
  );
}

export default App;
// outline-none
//  In JSX, the return keyword is unnecessary inside an arrow function when it directly returns JSX.
// No Need for return in Arrow Function: When using an arrow function {} requires return, but () allows implicit return.
