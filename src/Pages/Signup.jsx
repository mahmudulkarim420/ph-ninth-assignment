import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const Signup = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photo.value;

   
    createUser(email, password)
      .then(() => {
      
        updateUserProfile(name, photoURL)
          .then(() => {
            toast.success("Signup successful! Please log in.");
            form.reset();
            navigate("/login");
          })
          .catch(() => toast.error("Failed to update profile."));
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>
        <Toaster position="top-center" />
        <form onSubmit={handleSignup}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full mb-3 p-3 border rounded-md"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full mb-3 p-3 border rounded-md"
            required
          />
          <input
            type="text"
            name="photo"
            placeholder="Profile Image URL"
            className="w-full mb-3 p-3 border rounded-md"
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
            Sign Up
          </button>
        </form>
        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-600 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
