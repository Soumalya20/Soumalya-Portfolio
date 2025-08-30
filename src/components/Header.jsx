import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Code2, Sun, Moon, Home, Briefcase, Info, Phone, Menu, X } from "lucide-react";

export default function Header({ dark, setDark }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLink = ({ isActive }) =>
    `nav-link ${isActive ? 'active text-indigo-500' : 'text-slate-600 dark:text-slate-300'}`;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-slate-950/80 border-b border-slate-200/50 dark:border-slate-800/50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <Code2 className="relative h-8 w-8 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
            Soumalya Mukherjee
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          <NavLink to="/" className={navLink} end>
            <Home className="h-4 w-4 mr-2" /> Home
          </NavLink>
          <NavLink to="/projects" className={navLink}>
            <Briefcase className="h-4 w-4 mr-2" /> Projects
          </NavLink>
          <NavLink to="/about" className={navLink}>
            <Info className="h-4 w-4 mr-2" /> About
          </NavLink>
          <NavLink to="/contact" className={navLink}>
            <Phone className="h-4 w-4 mr-2" /> Contact
          </NavLink>
        </div>

        {/* Right side buttons */}
        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={() => setDark((d) => !d)}
            className="relative p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 hover:scale-110 group"
            title="Toggle theme"
            aria-label="Toggle dark mode"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            {dark ? (
              <Sun className="h-5 w-5 text-amber-500 relative z-10" />
            ) : (
              <Moon className="h-5 w-5 text-slate-600 relative z-10" />
            )}
          </button>

          {/* Hire Me button */}
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
          >
            Hire Me
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800`}>
        <div className="px-4 py-4 space-y-2">
          <NavLink
            to="/"
            className="block px-4 py-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
            end
          >
            <Home className="h-4 w-4 inline mr-3" /> Home
          </NavLink>
          <NavLink
            to="/projects"
            className="block px-4 py-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Briefcase className="h-4 w-4 inline mr-3" /> Projects
          </NavLink>
          <NavLink
            to="/about"
            className="block px-4 py-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Info className="h-4 w-4 inline mr-3" /> About
          </NavLink>
          <NavLink
            to="/contact"
            className="block px-4 py-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Phone className="h-4 w-4 inline mr-3" /> Contact
          </NavLink>
          
          {/* Mobile Hire Me button */}
          <div className="pt-2">
            <Link
              to="/contact"
              className="block w-full text-center px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hire Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
