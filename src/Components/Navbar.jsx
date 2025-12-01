import { Link, NavLink } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { HiMenu, HiX } from 'react-icons/hi';
import { SiHyperskill } from 'react-icons/si';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.error(err));
  };

  const activeClass = 'text-indigo-600 font-bold underline';
  const inactiveClass = 'hover:text-indigo-600 transition';

  return (
    <header className="bg-white shadow-md left-0 w-full z-50 sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link
            to="/"
            className="flex items-center gap-2 text-3xl font-extrabold text-indigo-600 hover:text-indigo-500"
          >
            <SiHyperskill className="w-10 h-10 text-blue-600" />{' '}
            <span>SkillSwap</span>
          </Link>

          <nav className="hidden md:flex gap-6 items-center mx-auto font-medium text-gray-700">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? activeClass : inactiveClass
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/all-items"
              className={({ isActive }) =>
                isActive ? activeClass : inactiveClass
              }
            >
              All Items
            </NavLink>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                isActive ? activeClass : inactiveClass
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? activeClass : inactiveClass
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/support"
              className={({ isActive }) =>
                isActive ? activeClass : inactiveClass
              }
            >
              Support
            </NavLink>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <>
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    `relative flex items-center gap-2 ${
                      isActive ? activeClass : 'hover:opacity-80 transition'
                    }`
                  }
                  title={user.displayName || 'User'}
                >
                  <img
                    src={user.photoURL}
                    alt="Profile"
                    className="w-10 h-10 rounded-full object-cover"
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
          </div>

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
            All Items
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `block py-2 px-3 rounded ${
                isActive ? 'bg-indigo-100 font-bold' : 'hover:bg-indigo-100'
              }`
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `block py-2 px-3 rounded ${
                isActive ? 'bg-indigo-100 font-bold' : 'hover:bg-indigo-100'
              }`
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/support"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `block py-2 px-3 rounded ${
                isActive ? 'bg-indigo-100 font-bold' : 'hover:bg-indigo-100'
              }`
            }
          >
            Support
          </NavLink>

          {user ? (
            <>
              <NavLink
                to="/profile"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-2 py-2 px-3 rounded ${
                    isActive ? 'text-indigo-600 font-bold' : 'hover:opacity-80'
                  } transition`
                }
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
