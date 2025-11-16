import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-background-secondary/80 backdrop-blur-lg border-b border-border-primary">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-xl sm:text-2xl font-bold text-gradient hover:opacity-80 transition-opacity">
            &lt;/dev&gt;
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex gap-6 lg:gap-8">
            <li>
              <Link
                to="/"
                className={`text-base lg:text-lg transition-colors relative group ${
                  isActive('/') ? 'text-accent-primary' : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                Home
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-accent-primary transition-all ${
                    isActive('/') ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`text-base lg:text-lg transition-colors relative group ${
                  isActive('/about') ? 'text-accent-primary' : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                About
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-accent-primary transition-all ${
                    isActive('/about') ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className={`text-base lg:text-lg transition-colors relative group ${
                  isActive('/projects') ? 'text-accent-primary' : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                Projects
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-accent-primary transition-all ${
                    isActive('/projects') ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`text-base lg:text-lg transition-colors relative group ${
                  isActive('/contact') ? 'text-accent-primary' : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                Contact
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-accent-primary transition-all ${
                    isActive('/contact') ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-64 opacity-100 mt-4' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <ul className="flex flex-col gap-4 pb-4">
            <li>
              <Link
                to="/"
                onClick={handleLinkClick}
                className={`block text-base transition-colors ${
                  isActive('/') ? 'text-accent-primary' : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={handleLinkClick}
                className={`block text-base transition-colors ${
                  isActive('/about') ? 'text-accent-primary' : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                onClick={handleLinkClick}
                className={`block text-base transition-colors ${
                  isActive('/projects') ? 'text-accent-primary' : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={handleLinkClick}
                className={`block text-base transition-colors ${
                  isActive('/contact') ? 'text-accent-primary' : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
