import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'La Villa', path: '/la-villa' },
  { label: 'Storia', path: '/storia' },
  { label: 'Spazi', path: '/spazi' },
  { label: 'Eventi', path: '/eventi' },
  { label: 'Contatti', path: '/contatti' },
];

const LOGO_SHIELD = '/images/IMG_0287.png';
const LOGO_TEXT   = '/images/IMG_0292.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location]);

  const linkClass = (path) =>
    `uppercase transition-colors duration-300 ${
      location.pathname === path
        ? scrolled ? 'text-foreground' : 'text-white'
        : scrolled ? 'text-muted-foreground hover:text-foreground' : 'text-white/70 hover:text-white'
    }`;

  const goHome = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const iconClass = scrolled
    ? 'text-muted-foreground hover:text-foreground'
    : 'text-white/70 hover:text-white';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-background/90 backdrop-blur-lg border-b border-border/30' : 'bg-transparent'
      }`}
    >
      {/* Desktop */}
      <nav className="hidden md:grid grid-cols-3 items-center h-20 max-w-7xl mx-auto px-8 lg:px-12">

        {/* Left: first 3 links */}
        <div className="flex items-center gap-7 justify-start">
          {navLinks.slice(0, 3).map((link) => (
            <Link
              key={link.path}
              to={link.path}
              style={{ fontFamily: "'Cinzel', serif", fontWeight: 500, letterSpacing: '0.35em', fontSize: '11px' }}
              className={linkClass(link.path)}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Center: logo */}
        <div className="flex items-center justify-center">
          <Link to="/" onClick={goHome} className="flex items-center gap-2.5">
            <img src={LOGO_SHIELD} alt="Villa Angeli" className="h-16 w-auto" />
            <img
              src={LOGO_TEXT}
              alt="Villa Angeli"
              className={`h-10 w-auto transition-all duration-500 ${scrolled ? 'opacity-90 max-w-[200px]' : 'opacity-0 max-w-0 overflow-hidden'}`}
            />
          </Link>
        </div>

        {/* Right: last 3 links + social icons */}
        <div className="flex items-center gap-6 justify-end">
          {navLinks.slice(3).map((link) => (
            <Link
              key={link.path}
              to={link.path}
              style={{ fontFamily: "'Cinzel', serif", fontWeight: 500, letterSpacing: '0.35em', fontSize: '11px' }}
              className={linkClass(link.path)}
            >
              {link.label}
            </Link>
          ))}

          <div className="flex items-center gap-3 ml-4 pl-4 border-l border-border/30">
            <a href="https://www.instagram.com/villa__angeli" target="_blank" rel="noopener noreferrer" className={`transition-colors duration-300 ${iconClass}`} aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
            <a href="https://www.tiktok.com/@villa_angeli" target="_blank" rel="noopener noreferrer" className={`transition-colors duration-300 ${iconClass}`} aria-label="TikTok">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
              </svg>
            </a>
            <a href="mailto:info@villa-angeli.com" className={`transition-colors duration-300 ${iconClass}`} aria-label="Email">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile */}
      <nav className="md:hidden flex items-center justify-between h-16 px-5">
        <Link to="/" onClick={goHome} className="flex items-center gap-2">
          <img src={LOGO_SHIELD} alt="Villa Angeli" className="h-12 w-auto" />
          <img src={LOGO_TEXT} alt="Villa Angeli" className="h-8 w-auto" />
        </Link>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 text-foreground" aria-label="Menu">
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-8 py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  style={{ fontFamily: "'Cinzel', serif", fontWeight: 500, letterSpacing: '0.35em', fontSize: '11px' }}
                  className={`uppercase py-3 border-b border-border/20 last:border-0 transition-colors ${
                    location.pathname === link.path ? 'text-foreground' : 'text-muted-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}