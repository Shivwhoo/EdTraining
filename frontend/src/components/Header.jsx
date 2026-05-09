import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);

  const closeMobile = () => {
    setMobileOpen(false);
    setCoursesOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { 
      name: 'Courses', 
      path: '/courses',
      dropdown: [
        { name: 'Grade 8th-10th', path: '/grade-8th-to-10th-all-boards' },
        { name: 'Grade 11th-12th', path: '/grade-11th-to-12th-all-boards' },
        { name: 'Competitive Exams', path: '/competitive-exams' },
        { name: 'Engineering', path: '/engineering-all-branches' },
      ]
    },
    { name: 'Online Subscription', path: '/online-subscription' },
    { name: 'Home Schooling', path: '/home-schooling' },
    { name: 'Contact', path: '/contact' },
  ];

  const baseNavClass = "px-3 py-2 text-sm font-mono font-bold uppercase tracking-wider transition-all flex items-center border-2";
  const activeNavClass = `${baseNavClass} bg-[#FEF08A] text-[#1C1C1C] border-[#1C1C1C]`;
  const inactiveNavClass = `${baseNavClass} text-[#4A4A4A] border-transparent hover:text-[#1C1C1C] hover:bg-[#FEF08A] hover:border-[#1C1C1C]`;

  return (
    <header className="bg-[#FDFBF7] border-b-2 border-[#1C1C1C] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center" onClick={closeMobile}>
              <img src="/edTraining.avif" alt="EdTraining" className="h-12 md:h-20 w-auto" />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-4 lg:space-x-8">
            {navLinks.map((link) => {
              const isDropdownActive = link.dropdown
                ? link.dropdown.some(sub => pathname === sub.path) || pathname === link.path
                : false;

              return link.dropdown ? (
                <div key={link.name} className="relative group flex items-center">
                  <Link
                    to={link.path}
                    className={isDropdownActive ? activeNavClass : inactiveNavClass}
                  >
                    {link.name}
                    <ChevronDown className="ml-1 w-4 h-4 transition-colors" />
                  </Link>
                  
                  <div className="absolute top-full left-0 mt-2 w-64 bg-[#FDFBF7] border-2 border-[#1C1C1C] shadow-[4px_4px_0px_rgba(28,28,28,1)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 origin-top-left -rotate-1 group-hover:rotate-0">
                    <div className="py-2 flex flex-col">
                      {link.dropdown.map(subLink => (
                        <NavLink
                          key={subLink.name}
                          to={subLink.path}
                          className={({ isActive }) =>
                            `block px-5 py-3 text-sm font-mono border-b border-dashed border-[#d1d5db] last:border-0 transition-colors ${
                              isActive
                                ? 'bg-[#FEF08A] text-[#1C1C1C] font-bold'
                                : 'text-[#4A4A4A] hover:bg-[#FEF08A] hover:text-[#1C1C1C] hover:font-bold'
                            }`
                          }
                        >
                          {subLink.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div key={link.name} className="flex items-center">
                  <NavLink
                    to={link.path}
                    end={link.path === '/'}
                    className={({ isActive }) => isActive ? activeNavClass : inactiveNavClass}
                  >
                    {link.name}
                  </NavLink>
                </div>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <motion.div
              whileHover={{ y: -2, x: -2 }}
              whileTap={{ y: 2, x: 2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <NavLink
                to="/booking-a-demo-class"
                className={({ isActive }) =>
                  `border-2 border-[#1C1C1C] px-6 py-2.5 text-sm font-mono font-bold uppercase tracking-wider transition-shadow inline-block ${
                    isActive
                      ? 'bg-[#1C1C1C] text-[#FEF08A] shadow-[6px_6px_0px_rgba(28,28,28,0.4)]'
                      : 'bg-[#FEF08A] text-[#1C1C1C] shadow-[4px_4px_0px_rgba(28,28,28,1)] hover:shadow-[6px_6px_0px_rgba(28,28,28,1)]'
                  }`
                }
              >
                Demo Booking
              </NavLink>
            </motion.div>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 border-2 border-[#1C1C1C] bg-[#FDFBF7] shadow-[3px_3px_0px_rgba(28,28,28,1)] active:shadow-none active:translate-x-[3px] active:translate-y-[3px] transition-all"
            onClick={() => setMobileOpen(prev => !prev)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5 text-[#1C1C1C]" /> : <Menu className="w-5 h-5 text-[#1C1C1C]" />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden border-t-2 border-[#1C1C1C] bg-[#FDFBF7]"
          >
            <div className="flex flex-col px-4 py-3 gap-1">
              {navLinks.map((link) => {
                const isDropdownActive = link.dropdown
                  ? link.dropdown.some(sub => pathname === sub.path) || pathname === link.path
                  : false;

                if (link.dropdown) {
                  return (
                    <div key={link.name}>
                      {/* Courses toggle row */}
                      <button
                        onClick={() => setCoursesOpen(prev => !prev)}
                        className={`w-full flex items-center justify-between px-3 py-2.5 text-sm font-mono font-bold uppercase tracking-wider border-2 transition-all ${
                          isDropdownActive
                            ? 'bg-[#FEF08A] text-[#1C1C1C] border-[#1C1C1C]'
                            : 'text-[#4A4A4A] border-transparent'
                        }`}
                      >
                        {link.name}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${coursesOpen ? 'rotate-180' : ''}`} />
                      </button>

                      <AnimatePresence>
                        {coursesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden ml-4 border-l-2 border-dashed border-[#1C1C1C]"
                          >
                            {link.dropdown.map(subLink => (
                              <NavLink
                                key={subLink.name}
                                to={subLink.path}
                                onClick={closeMobile}
                                className={({ isActive }) =>
                                  `block px-4 py-2.5 text-sm font-mono border-b border-dashed border-[#d1d5db] last:border-0 transition-colors ${
                                    isActive
                                      ? 'bg-[#FEF08A] text-[#1C1C1C] font-bold'
                                      : 'text-[#4A4A4A]'
                                  }`
                                }
                              >
                                {subLink.name}
                              </NavLink>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    end={link.path === '/'}
                    onClick={closeMobile}
                    className={({ isActive }) =>
                      `block px-3 py-2.5 text-sm font-mono font-bold uppercase tracking-wider border-2 transition-all ${
                        isActive
                          ? 'bg-[#FEF08A] text-[#1C1C1C] border-[#1C1C1C]'
                          : 'text-[#4A4A4A] border-transparent'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                );
              })}

              {/* Mobile Demo Booking CTA */}
              <div className="pt-2 pb-1">
                <NavLink
                  to="/booking-a-demo-class"
                  onClick={closeMobile}
                  className={({ isActive }) =>
                    `block text-center px-6 py-3 text-sm font-mono font-bold uppercase tracking-wider border-2 border-[#1C1C1C] shadow-[4px_4px_0px_rgba(28,28,28,1)] transition-all ${
                      isActive
                        ? 'bg-[#1C1C1C] text-[#FEF08A]'
                        : 'bg-[#FEF08A] text-[#1C1C1C]'
                    }`
                  }
                >
                  Book a Demo Class
                </NavLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}