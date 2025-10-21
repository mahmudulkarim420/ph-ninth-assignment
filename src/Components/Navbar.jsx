import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.error(err));
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link
            to="/"
            className="text-3xl font-extrabold text-indigo-600 hover:text-indigo-500"
          >
            SkillSwap
          </Link>

          <nav className="hidden md:flex gap-6 items-center font-medium text-gray-700">
            <Link to="/" className="hover:text-indigo-600 transition">
              Home
            </Link>
            <Link to="/skills" className="hover:text-indigo-600 transition">
              Skills
            </Link>
            <Link
              to="/top-providers"
              className="hover:text-indigo-600 transition"
            >
              Top Providers
            </Link>

            {user ? (
              <>
                <Link
                  to="/profile"
                  className="hover:text-indigo-600 transition"
                >
                  {user.displayName || 'Profile'}
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="bg-green-500 text-white px-4 py-1 rounded-lg hover:bg-green-600 transition"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-600 transition"
                >
                  Signup
                </Link>
              </>
            )}
          </nav>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="focus:outline-none text-gray-700"
            >
              {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-gray-50 shadow-lg px-4 py-4 space-y-3">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="block py-2 px-3 rounded hover:bg-indigo-100"
          >
            Home
          </Link>
          <Link
            to="/skills"
            onClick={() => setMenuOpen(false)}
            className="block py-2 px-3 rounded hover:bg-indigo-100"
          >
            Skills
          </Link>
          <Link
            to="/top-providers"
            onClick={() => setMenuOpen(false)}
            className="block py-2 px-3 rounded hover:bg-indigo-100"
          >
            Top Providers
          </Link>

          {user ? (
            <>
              <Link
                to="/profile"
                onClick={() => setMenuOpen(false)}
                className="block py-2 px-3 rounded hover:bg-indigo-100"
              >
                {user.displayName || 'Profile'}
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="w-full text-left py-2 px-3 rounded bg-red-500 text-white hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="block py-2 px-3 rounded bg-green-500 text-white hover:bg-green-600 transition"
              >
                Login
              </Link>
              <Link
                to="/signup"
                onClick={() => setMenuOpen(false)}
                className="block py-2 px-3 rounded bg-blue-500 text-white hover:bg-blue-600 transition"
              >
                Signup
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
