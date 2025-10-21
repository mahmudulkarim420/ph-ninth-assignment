import { useContext, useState } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';
import toast from 'react-hot-toast';

const Signup = () => {
  const { createUser, googleLogin, updateUserProfile } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photo.value;
    const password = form.password.value;

    if (!/[A-Z]/.test(password)) {
      toast.error('Password must contain at least one uppercase letter');
      return;
    }
    if (!/[a-z]/.test(password)) {
      toast.error('Password must contain at least one lowercase letter');
      return;
    }
    if (password.length < 6) {
      toast.error('Password must be at least 6 characters long');
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result);
        updateUserProfile(name, photoURL)
          .then(() => {
            toast.success('Signup Successful');
            navigate('/');
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => toast.error(err.message));
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        toast.success('Login Successful');
        navigate('/');
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSignup}
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          className="input w-full mb-3"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input w-full mb-3"
          required
        />
        <input
          type="text"
          name="photo"
          placeholder="Photo URL"
          className="input w-full mb-3"
        />
        <div className="relative mb-3">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            className="input w-full"
            required
          />
          <button
            type="button"
            className="absolute right-2 top-1/2 -translate-y-1/2"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </button>
        </div>

        <button type="submit" className="btn btn-primary w-full mb-3">
          Signup
        </button>

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="btn btn-outline w-full"
        >
          Signup with Google
        </button>

        <p className="mt-3 text-center">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-500">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
