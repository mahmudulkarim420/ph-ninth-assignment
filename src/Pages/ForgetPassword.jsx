import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { useLocation, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const ForgetPassword = () => {
  const { resetPassword } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location]);

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter your email address!');
      return;
    }

    resetPassword(email)
      .then(() => {
        toast.success('Password reset email sent!');
        setTimeout(() => {
          window.location.href = 'https://mail.google.com';
        }, 2000);
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Reset Password</h2>
        <Toaster position="top-center" />

        <form onSubmit={handleResetPassword}>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full mb-4 p-3 border rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-md"
          >
            Reset Password
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          <button
            onClick={() => navigate('/login')}
            className="text-indigo-600 hover:underline"
          >
            Back to Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default ForgetPassword;
