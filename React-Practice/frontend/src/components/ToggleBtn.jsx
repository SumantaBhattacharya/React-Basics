import { useState, useEffect } from "react";
import { Login } from "../pages/Login";
import { Logout } from "../pages/LogoutButton";

const ToggleBtn = () => {
  // Initialize state from localStorage
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return !!localStorage.getItem("accessToken");
  });

  // Optional: re-check token on mount (for extra safety)
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setIsLoggedIn(!!token);
  }, []);

  const handleToggle = () => {
    if (isLoggedIn) {
      // Logout - remove token and update state
      localStorage.removeItem("accessToken");
      setIsLoggedIn(false);
    } else {
      // Check if login form has credentials and trigger login
      const emailInput = document.querySelector('input[name="email"]');
      const passwordInput = document.querySelector('input[name="password"]');
      const loginButton = document.querySelector('button[type="submit"]');
      
      if (emailInput?.value && passwordInput?.value && loginButton) {
        // Credentials exist - trigger the actual login button
        console.log("Credentials found, triggering login...");
        loginButton.click();
      } else {
        // No credentials - just toggle state (for demo)
        // This will show the login form where user can enter credentials
        setIsLoggedIn(true);
      }
    }
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8 w-full">
      {/* Toggle Button */}
      <button
        onClick={handleToggle}
        className={`px-6 py-3 rounded-lg font-semibold shadow-md transition-colors duration-300 ${
          isLoggedIn ? "bg-red-500 hover:bg-red-600 text-white" : "bg-green-500 hover:bg-green-600 text-white"
        }`}
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>

      {/* Conditional Rendering - keeping both as you requested */}
      {!!isLoggedIn && (
        <div className="text-center p-6 bg-green-50 rounded-lg border border-green-200">
          <h3 className="text-xl font-bold mb-4 text-green-800">You are logged in</h3>
          <p className="text-green-600 mb-4">Authentication successful!</p>
          <Logout onLogout={handleLogout} />
        </div>
      )}

      {isLoggedIn ? (
        <div className="text-center p-6 bg-green-50 rounded-lg border border-green-200">
          <h3 className="text-xl font-bold mb-4 text-green-800">You are logged in</h3>
          <p className="text-green-600 mb-4">Authentication successful!</p>
          <Logout onLogout={handleLogout} />
        </div>
      ) : (
        <div className="text-center p-6 bg-blue-50 rounded-lg border border-blue-200 w-full max-w-md">
          <h3 className="text-xl font-bold mb-4 text-blue-800">Please log in</h3>
          <Login onLogin={handleLogin} />
        </div>
      )}
    </div>
  );
};

export default ToggleBtn;