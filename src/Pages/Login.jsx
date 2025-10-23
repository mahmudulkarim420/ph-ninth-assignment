// src/Pages/Login.jsx
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const { loginUser, resetPassword } = useContext(AuthContext); // resetPassword add kora lagbe
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/home";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then(() => {
        toast.success("Login successful!");
        navigate(from, { replace: true });
      })
      .catch((error) => toast.error(error.message));
  };

  const handleResetPassword = () => {
    const email = prompt("Please enter your email for password reset:");
    if (!email) {
      toast.error("Email is required!");
      return;
    }

    resetPassword(email)
      .then(() => toast.success("Password reset email sent! Check your inbox."))
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <Toaster position="top-center" />
        <form onSubmit={handleLogin}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full mb-3 p-3 border rounded-md"
            required
          />
          <div className="relative mb-3">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="w-full p-3 border rounded-md"
              required
            />
            <div
              className="absolute top-3 right-3 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-md mt-4"
          >
            Login
          </button>
        </form>

        <p
          onClick={handleResetPassword}
          className="text-center text-sm mt-2 text-red-500 cursor-pointer hover:underline"
        >
          Forgot Password?
        </p>

        <p className="text-center mt-4">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-indigo-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
