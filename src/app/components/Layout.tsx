import { Outlet, Link, useLocation } from 'react-router';
import { useEffect, useState } from 'react';
import { Phone, Mail, Menu, X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import logoImg from '../../imports/Prince_Guard_Logo__3_.png';
import mobileNavBg from '../../imports/WhatsApp_Image_2026-05-15_at_10.48.16-1.jpeg';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

const scrollTop = () => window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

export function Layout() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/contact', label: 'Get In Touch' },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden w-full">
      <ScrollToTop />

      {/* Header */}
      <header style={{ backgroundColor: '#1e3080' }} className="text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 z-50 relative" onClick={() => { closeMenu(); scrollTop(); }}>
              <ImageWithFallback
                src={logoImg}
                alt="Prince Guards logo"
                className="h-14 w-14 object-contain rounded-lg"
              />
              <div>
                <div className="font-bold text-xl tracking-tight">PRINCE GUARDS</div>
                <div className="text-xs text-[#d4af37]">Professional Security Services</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={scrollTop}
                  className={`transition-colors font-medium ${
                    isActive(to) ? 'text-[#d4af37] font-semibold' : 'text-white hover:text-[#d4af37]'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden text-white p-2 rounded-md z-50 relative"
              onClick={() => setMenuOpen(prev => !prev)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Full-Screen Overlay */}
        <div
          className="md:hidden fixed inset-0 z-40 transition-all duration-500"
          style={{
            opacity: menuOpen ? 1 : 0,
            pointerEvents: menuOpen ? 'auto' : 'none',
            transform: menuOpen ? 'translateY(0)' : 'translateY(-100%)',
            transition: 'opacity 0.4s ease, transform 0.4s ease',
          }}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${mobileNavBg})` }}
          />
          {/* Blue Overlay */}
          <div className="absolute inset-0 bg-[#1e3080]/60 backdrop-blur-sm" />

          {/* Content */}
          <div className="relative h-full flex flex-col items-center justify-center">
            <nav className="flex flex-col items-center gap-6 w-full px-8">
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => { closeMenu(); scrollTop(); }}
                  className="w-full text-center py-4 text-2xl font-bold rounded-xl transition-all duration-200 backdrop-blur-md"
                  style={{
                    color: isActive(to) ? '#d4af37' : 'white',
                    backgroundColor: isActive(to) ? 'rgba(212,175,55,0.25)' : 'rgba(255,255,255,0.05)',
                    border: isActive(to) ? '2px solid rgba(212,175,55,0.5)' : '2px solid rgba(255,255,255,0.1)',
                  }}
                >
                  {label}
                </Link>
              ))}
              {/* Divider */}
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-70 my-2" />
              <a
                href="tel:+2349011187971"
                className="text-center bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/20 hover:bg-white/20 transition-all duration-200 active:scale-95"
              >
                <p className="text-gray-300 text-sm mb-1">Call us 24/7</p>
                <p className="text-[#d4af37] font-bold text-xl">+2349011187971</p>
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full overflow-x-hidden">
        <Outlet />
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#1e3080' }} className="text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <ImageWithFallback
                  src={logoImg}
                  alt="Prince Guards logo"
                  className="h-12 w-12 object-contain rounded-lg"
                />
                <div className="font-bold text-lg">PRINCE GUARDS</div>
              </div>
              <p className="text-gray-300 mb-4">
                Professional security services you can trust. We provide comprehensive security solutions
                tailored to your specific needs.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-[#d4af37]">Quick Links</h3>
              <ul className="space-y-2">
                {navLinks.map(({ to, label }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      onClick={scrollTop}
                      className="text-gray-300 hover:text-[#d4af37] transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-[#d4af37]">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-300">
                  <Phone className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                  <span>+2349011187971</span>
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <Mail className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                  <span className="break-all">theprinceguards@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#2a47a8] mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2026 Prince Guards. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
