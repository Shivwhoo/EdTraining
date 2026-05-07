import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

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
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/edTraining.avif" alt="EdTraining" className="h-16 md:h-20 w-auto" />
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              link.dropdown ? (
                <div key={link.name} className="relative group flex items-center">
                  <Link
                    to={link.path}
                    className="text-gray-600 hover:text-brand px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                  >
                    {link.name}
                    <ChevronDown className="ml-1 w-4 h-4 text-slate-400 group-hover:text-brand transition-colors" />
                  </Link>
                  <div className="absolute top-full left-0 mt-0 w-56 rounded-b-md rounded-t-sm shadow-xl bg-white border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      {link.dropdown.map(subLink => (
                        <Link
                          key={subLink.name}
                          to={subLink.path}
                          className="block px-5 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-brand transition-colors"
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-gray-600 hover:text-brand px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                >
                  {link.name}
                </Link>
              )
            ))}
          </nav>
          <div className="hidden md:flex items-center">
            <Link
              to="/booking-a-demo-class"
              className="bg-brand hover:bg-brand-dark text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg"
            >
              Demo Booking
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
