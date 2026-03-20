import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Clock, ChevronRight } from 'lucide-react';
import { SiFacebook, SiInstagram, SiX } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { ROUTE_PATHS } from '@/lib/index';
import { IMAGES } from '@/assets/images';
import { Button } from '@/components/ui/button';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) {
        const height = headerRef.current.offsetHeight;
        setHeaderHeight(height);
        document.documentElement.style.setProperty('--header-height', `${height}px`);
      }
    };

    updateHeight();
    const resizeObserver = new ResizeObserver(updateHeight);
    if (headerRef.current) {
      resizeObserver.observe(headerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: ROUTE_PATHS.HOME, label: 'Home' },
    { path: ROUTE_PATHS.ABOUT, label: 'About' },
    { path: ROUTE_PATHS.SERVICES, label: 'Services' },
    { path: ROUTE_PATHS.GALLERY, label: 'Gallery' },
    { path: ROUTE_PATHS.PRICING, label: 'Pricing' },
    { path: ROUTE_PATHS.CONTACT, label: 'Contact' },
  ];

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#fafafa]/95 backdrop-blur-xl border-b border-gray-200 shadow-sm'
            : 'bg-[#ffffff]/80 backdrop-blur-md'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-18">
            <NavLink
              to={ROUTE_PATHS.HOME}
              className="flex items-center space-x-3 group"
              onClick={closeMobileMenu}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full group-hover:bg-primary/30 transition-all" />
                < img
                  src={IMAGES.LOGO2_81}
                  alt="Desai Car Detailing"
                  className="relative w-19 h-19 object-contain"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Desai Car Detailing
                </h1>
                <p className="text-xs text-muted-foreground">Premium Protection & Care for Your Vehicle</p>
              </div>
            </NavLink>

            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-primary text-white shadow-md'
                        : 'text-gray-700 hover:text-primary hover:bg-primary/10'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="hidden lg:flex items-center space-x-3">
              <Button
                asChild
                variant="default"
                className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/30 transition-all"
              >
                <NavLink to={ROUTE_PATHS.CONTACT}>Book Now</NavLink>
              </Button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-accent transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[70px] left-0 w-full z-50 lg:hidden bg-white border-t border-gray-200 shadow-lg"
          >
            <div className="px-4 py-4 space-y-2">
              {/* NAV ITEMS */}
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-lg text-base font-medium transition ${
                      isActive
                        ? 'bg-primary text-white shadow-md'
                        : 'text-gray-700 hover:bg-primary/10 hover:text-primary'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              {/* BUTTON */}
              <Button
                asChild
                className="w-full mt-3 bg-gradient-to-r from-primary to-secondary"
              >
                <NavLink to={ROUTE_PATHS.CONTACT} onClick={closeMobileMenu}>
                  Book Now
                </NavLink>
              </Button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </header>

      <main style={{ paddingTop: `${headerHeight}px` }}>{children}</main>

      <footer id='footer' className="relative bg-card border-t border-border">
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-20">

          <motion.a
             onClick={() => {
                      document.getElementById("top")?.scrollIntoView({ behavior: "smooth" });
                    }}
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="group relative flex items-center justify-center w-14 h-14 rounded-full 
            bg-white/90 backdrop-blur-md shadow-xl border border-white/40 
            hover:bg-primary hover:scale-110 transition-all"
          >

            {/* Pulse ring */}
            <span className="absolute inline-flex h-full w-full rounded-full bg-primary/30 animate-ping"></span>

            {/* Arrow */}
            <ChevronRight className="w-7 h-7 -rotate-90 text-primary group-hover:text-white transition-colors" />

          </motion.a>

        </div>
        <div className="container mx-auto px-4 py-8 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <img
                  src={IMAGES.LOGO2_81}
                  alt="Desai Car Detailing"
                  className="w-16 h-16 object-contain"
                />
                <div>
                  <h3 className="text-lg font-bold">Desai Car Detailing</h3>
                  <p className="text-xs text-muted-foreground">Estd. 2003 • Ahmedabad</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Your trusted partner for luxury car detailing, ceramic coating, and paint protection services since 2003.
              </p>
              <div className="flex space-x-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-md flex items-center justify-center transition-all
                  bg-primary text-white
                  md:bg-primary/10 md:text-primary md:hover:bg-primary md:hover:text-white"
                  aria-label="Facebook"
                >
                  <SiFacebook className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-md flex items-center justify-center transition-all
                      bg-primary text-white
                      md:bg-primary/10 md:text-primary md:hover:bg-primary md:hover:text-white"
                  aria-label="Instagram"
                >
                  <SiInstagram className="w-5 h-5" />
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-md flex items-center justify-center transition-all
                    bg-primary text-white
                    md:bg-primary/10 md:text-primary md:hover:bg-primary md:hover:text-white"
                  aria-label="X (Twitter)"
                >
                  <SiX className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-md flex items-center justify-center transition-all
                      bg-primary text-white
                      md:bg-primary/10 md:text-primary md:hover:bg-primary md:hover:text-white"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className='hidden md:block'>
              <h4 className="text-lg font-semibold mb-4 ">Quick Links</h4>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2">
                <li className="flex items-start space-x-3">
                  <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium leading-tight">+91 91064 07236</p>
                    <p className="text-[13px] text-muted-foreground">Mon-Sat, 9AM-7PM</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium leading-tight">info@desaicardetailing.com</p>
                    <p className="text-[13px] text-muted-foreground">24/7 Email Support</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium leading-tight">Satellite Road</p>
                    <p className="text-[13px] text-muted-foreground">Ahmedabad, Gujarat</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className='hidden md:block'>
              <h4 className="text-lg font-semibold mb-4">Business Hours</h4>
              <ul className="space-y-2">
                <li className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Monday - Friday</p>
                    <p className="text-xs text-muted-foreground">9:00 AM - 7:00 PM</p>
                  </div>
                </li>
                <li className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Saturday</p>
                    <p className="text-xs text-muted-foreground">10:00 AM - 6:00 PM</p>
                  </div>
                </li>
                <li className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Sunday</p>
                    <p className="text-xs text-muted-foreground">Closed</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-muted-foreground">
                © 2026 Desai Car Detailing. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center md:justify-end gap-4">
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Cookie Policy
                </a>
              </div>
              
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}