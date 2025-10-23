import { Link, NavLink } from 'react-router-dom';
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

  const activeClass = 'text-indigo-600 font-bold border-b-2 border-indigo-600';
  const inactiveClass = 'hover:text-indigo-600 transition';

  return (
    <header className="bg-white shadow-md left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link
            to="/"
            className="text-3xl font-extrabold text-indigo-600 hover:text-indigo-500"
          >
            SkillSwap
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-6 items-center font-medium text-gray-700">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? activeClass : inactiveClass
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                isActive ? activeClass : inactiveClass
              }
            >
              Skills
            </NavLink>
            <NavLink
              to="/top-providers"
              className={({ isActive }) =>
                isActive ? activeClass : inactiveClass
              }
            >
              Top Providers
            </NavLink>

            {user ? (
              <>
                <NavLink
                  to="/profile"
                  className="relative flex items-center gap-2 hover:opacity-80 transition"
                  title={user.displayName || 'User'} // hover e name show hobe
                >
                  <img
                    src={user.photoURL}
                    alt="Profile"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="hidden md:inline">My Profile</span>
                </NavLink>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive
                      ? activeClass
                      : 'bg-green-500 text-white px-4 py-1 rounded-lg hover:bg-green-600 transition'
                  }
                >
                  Login
                </NavLink>
                <NavLink
                  to="/signup"
                  className={({ isActive }) =>
                    isActive
                      ? activeClass
                      : 'bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-600 transition'
                  }
                >
                  Signup
                </NavLink>
              </>
            )}
          </nav>

          {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-50 shadow-lg px-4 py-4 space-y-3">
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `block py-2 px-3 rounded ${
                isActive ? 'bg-indigo-100 font-bold' : 'hover:bg-indigo-100'
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/skills"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `block py-2 px-3 rounded ${
                isActive ? 'bg-indigo-100 font-bold' : 'hover:bg-indigo-100'
              }`
            }
          >
            Skills
          </NavLink>
          <NavLink
            to="/top-providers"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `block py-2 px-3 rounded ${
                isActive ? 'bg-indigo-100 font-bold' : 'hover:bg-indigo-100'
              }`
            }
          >
            Top Providers
          </NavLink>

          {user ? (
            <>
              <NavLink
                to="/profile"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 py-2 px-3 rounded hover:bg-indigo-100 transition"
                title={user.displayName || 'User'}
              >
                <img
                  src={user.photoURL}
                  alt="Profile"
                  className="w-8 h-8 rounded-full object-cover"
                />
                My Profile
              </NavLink>
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
              <NavLink
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="block py-2 px-3 rounded bg-green-500 text-white hover:bg-green-600 transition"
              >
                Login
              </NavLink>
              <NavLink
                to="/signup"
                onClick={() => setMenuOpen(false)}
                className="block py-2 px-3 rounded bg-blue-500 text-white hover:bg-blue-600 transition"
              >
                Signup
              </NavLink>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
