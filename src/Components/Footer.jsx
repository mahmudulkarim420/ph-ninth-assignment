import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaReact,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';
import { SiHyperskill } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 items-center">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center mb-4">
            <SiHyperskill className="w-10 h-10 text-blue-600" />
            <span className="text-3xl font-bold text-blue-500">SkillSwap</span>
          </div>
          <p className="text-sm text-gray-400">Learn, Grow, and Connect</p>
        </div>

        <div className="text-center  hover:cursor-pointer">
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <nav className="flex flex-col gap-2">
            <Link
              to="/about"
              className="hover:text-blue-500 hover:underline transition"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="hover:text-blue-500 hover:underline transition"
            >
              Contact
            </Link>
            <Link
              to="/blog"
              className="hover:text-blue-500 hover:underline transition"
            >
              Blog
            </Link>
            <Link
              to="/offers"
              className="hover:text-blue-500 hover:underline transition"
            >
              Offers
            </Link>
            <Link
              to="/support"
              className="hover:text-blue-500 hover:underline transition"
            >
              Support
            </Link>
          </nav>
        </div>

        <div className="flex flex-col items-center md:items-end">
          <h3 className="font-bold text-lg mb-4 md:mr-8">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaYoutube />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-400 mt-8 text-sm">
        © {new Date().getFullYear()} SkillSwap Industries Ltd. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
