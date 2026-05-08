import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Header() {
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

  return (
    <header className="bg-[#FDFBF7] border-b-2 border-[#1C1C1C] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/edTraining.avif" alt="EdTraining" className="h-16 md:h-20 w-auto" />
            </Link>
          </div>

          <nav className="hidden md:flex space-x-4 lg:space-x-8">
            {navLinks.map((link) => (
              link.dropdown ? (
                <div key={link.name} className="relative group flex items-center">
                  <Link
                    to={link.path}
                    className="text-[#4A4A4A] hover:text-[#1C1C1C] hover:bg-[#FEF08A] border-2 border-transparent hover:border-[#1C1C1C] px-3 py-2 text-sm font-mono font-bold uppercase tracking-wider transition-all flex items-center"
                  >
                    {link.name}
                    <ChevronDown className="ml-1 w-4 h-4 text-[#4A4A4A] group-hover:text-[#1C1C1C] transition-colors" />
                  </Link>
                  
                  <div className="absolute top-full left-0 mt-2 w-64 bg-[#FDFBF7] border-2 border-[#1C1C1C] shadow-[4px_4px_0px_rgba(28,28,28,1)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 origin-top-left -rotate-1 group-hover:rotate-0">
                    <div className="py-2 flex flex-col">
                      {link.dropdown.map(subLink => (
                        <Link
                          key={subLink.name}
                          to={subLink.path}
                          className="block px-5 py-3 text-sm font-mono text-[#4A4A4A] hover:bg-[#FEF08A] hover:text-[#1C1C1C] hover:font-bold border-b border-dashed border-[#d1d5db] last:border-0 transition-colors"
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div key={link.name} className="flex items-center">
                  <Link
                    to={link.path}
                    className="text-[#4A4A4A] hover:text-[#1C1C1C] hover:bg-[#FEF08A] border-2 border-transparent hover:border-[#1C1C1C] px-3 py-2 text-sm font-mono font-bold uppercase tracking-wider transition-all flex items-center"
                  >
                    {link.name}
                  </Link>
                </div>
              )
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <motion.div
              whileHover={{ y: -2, x: -2 }}
              whileTap={{ y: 2, x: 2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link
                to="/booking-a-demo-class"
                className="bg-[#FEF08A] text-[#1C1C1C] border-2 border-[#1C1C1C] px-6 py-2.5 text-sm font-mono font-bold uppercase tracking-wider shadow-[4px_4px_0px_rgba(28,28,28,1)] hover:shadow-[6px_6px_0px_rgba(28,28,28,1)] transition-shadow inline-block"
              >
                Demo Booking
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </header>
  );
}