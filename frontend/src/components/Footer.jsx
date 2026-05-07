import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">About Us</h3>
            <div className="mb-4">
              <Link to="/" className="inline-block bg-white rounded p-2">
                <img src="/edTraining.avif" alt="EdTraining" className="h-16 w-auto" />
              </Link>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Bridging academic learning and real-world success through personalized guidance and flexible online programs.
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <span className="font-medium text-white w-20 shrink-0">Address:</span>
                <span>Innov8 Mantri 5th Floor Bellandur ORR, Bengaluru, Karnataka 560103</span>
              </li>
              <li className="flex items-center">
                <span className="font-medium text-white w-20 shrink-0">Email:</span>
                <a href="mailto:help@theedtraining.com" className="hover:text-brand transition-colors">help@theedtraining.com</a>
              </li>
              <li className="flex items-center">
                <span className="font-medium text-white w-20 shrink-0">Phone:</span>
                <a href="tel:+919538672074" className="hover:text-brand transition-colors">+91 95386 72074</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-brand transition-colors">About</Link></li>
              <li><Link to="/courses" className="hover:text-brand transition-colors">Courses</Link></li>
              <li><Link to="/contact" className="hover:text-brand transition-colors">Contact</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-brand transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions" className="hover:text-brand transition-colors">Terms and Conditions</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <span className="text-sm text-slate-400 font-medium uppercase tracking-wider">Our Partners</span>
            <div className="flex items-center gap-4 grayscale opacity-75 hover:grayscale-0 transition-all bg-white/5 p-2 rounded-lg">
              <a href="https://theedmentor.com/" target="_blank" rel="noopener noreferrer">
                <img src="/edMentor.avif" alt="EdMentor" className="h-6 w-auto mix-blend-screen" />
              </a>
              <a href="https://theedcompass.com/" target="_blank" rel="noopener noreferrer">
                <img src="/edCompass.avif" alt="EdCompass" className="h-6 w-auto mix-blend-screen" />
              </a>
              <a href="https://meraminds.com/" target="_blank" rel="noopener noreferrer">
                <img src="/meramind.avif" alt="MeraMinds" className="h-6 w-auto mix-blend-screen" />
              </a>
            </div>
          </div>
          <p className="text-sm text-slate-400 text-center md:text-right">© 2026 EdTraining. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
