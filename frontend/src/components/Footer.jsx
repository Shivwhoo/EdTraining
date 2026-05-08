import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-[#F4F4F0] border-t-4 border-[#1C1C1C] text-[#1C1C1C] py-16 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          
          <div>
            <h3 className="text-[#1C1C1C] font-mono font-bold uppercase tracking-wider text-lg border-b-2 border-[#1C1C1C] inline-block mb-6 pb-1">
              About Us
            </h3>
            <div className="mb-6">
              <Link to="/" className="inline-block bg-[#FDFBF7] border-2 border-[#1C1C1C] p-2 shadow-[4px_4px_0px_rgba(28,28,28,1)] -rotate-1 hover:rotate-0 transition-transform">
                <img src="/edTraining.avif" alt="EdTraining" className="h-16 w-auto" />
              </Link>
            </div>
            <p className="text-[#4A4A4A] font-serif text-base leading-relaxed mb-8">
              Bridging academic learning and real-world success through personalized guidance and flexible online programs.
            </p>
            <div className="flex gap-4">
              <motion.a whileHover={{ y: -4, x: -2 }} whileTap={{ y: 0, x: 0 }} href="https://www.linkedin.com/company/theedmentor/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="bg-[#FDFBF7] border-2 border-[#1C1C1C] p-2 text-[#1C1C1C] shadow-[2px_2px_0px_rgba(28,28,28,1)] hover:bg-[#FEF08A] hover:shadow-[4px_4px_0px_rgba(28,28,28,1)] transition-colors">
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a whileHover={{ y: -4, x: -2 }} whileTap={{ y: 0, x: 0 }} href="https://www.linkedin.com/company/theedmentor/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="bg-[#FDFBF7] border-2 border-[#1C1C1C] p-2 text-[#1C1C1C] shadow-[2px_2px_0px_rgba(28,28,28,1)] hover:bg-[#FEF08A] hover:shadow-[4px_4px_0px_rgba(28,28,28,1)] transition-colors">
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a whileHover={{ y: -4, x: -2 }} whileTap={{ y: 0, x: 0 }} href="https://www.linkedin.com/company/theedmentor/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="bg-[#FDFBF7] border-2 border-[#1C1C1C] p-2 text-[#1C1C1C] shadow-[2px_2px_0px_rgba(28,28,28,1)] hover:bg-[#FEF08A] hover:shadow-[4px_4px_0px_rgba(28,28,28,1)] transition-colors">
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a whileHover={{ y: -4, x: -2 }} whileTap={{ y: 0, x: 0 }} href="https://www.linkedin.com/company/theedmentor/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="bg-[#FDFBF7] border-2 border-[#1C1C1C] p-2 text-[#1C1C1C] shadow-[2px_2px_0px_rgba(28,28,28,1)] hover:bg-[#FEF08A] hover:shadow-[4px_4px_0px_rgba(28,28,28,1)] transition-colors">
                <Twitter className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          <div>
            <h3 className="text-[#1C1C1C] font-mono font-bold uppercase tracking-wider text-lg border-b-2 border-[#1C1C1C] inline-block mb-6 pb-1">
              Contact Info
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start border-b border-dashed border-[#d1d5db] pb-3">
                <span className="font-mono font-bold text-[#1C1C1C] w-20 shrink-0 uppercase tracking-wide">Address:</span>
                <span className="font-serif text-[#4A4A4A] leading-relaxed">Innov8 Mantri 5th Floor Bellandur ORR, Bengaluru, Karnataka 560103</span>
              </li>
              <li className="flex items-center border-b border-dashed border-[#d1d5db] pb-3">
                <span className="font-mono font-bold text-[#1C1C1C] w-20 shrink-0 uppercase tracking-wide">Email:</span>
                <a href="mailto:help@theedtraining.com" className="font-serif text-[#4A4A4A] hover:text-[#1C1C1C] hover:bg-[#FEF08A] px-1 -ml-1 transition-colors border border-transparent hover:border-[#1C1C1C]">
                  help@theedtraining.com
                </a>
              </li>
              <li className="flex items-center border-b border-dashed border-[#d1d5db] pb-3">
                <span className="font-mono font-bold text-[#1C1C1C] w-20 shrink-0 uppercase tracking-wide">Phone:</span>
                <a href="tel:+919538672074" className="font-serif text-[#4A4A4A] hover:text-[#1C1C1C] hover:bg-[#FEF08A] px-1 -ml-1 transition-colors border border-transparent hover:border-[#1C1C1C]">
                  +91 95386 72074
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#1C1C1C] font-mono font-bold uppercase tracking-wider text-lg border-b-2 border-[#1C1C1C] inline-block mb-6 pb-1">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm flex flex-col items-start">
              <li>
                <Link to="/about" className="font-mono font-bold uppercase tracking-wider text-[#4A4A4A] hover:text-[#1C1C1C] hover:bg-[#FEF08A] px-2 py-1 -ml-2 transition-colors border-2 border-transparent hover:border-[#1C1C1C]">
                  About
                </Link>
              </li>
              <li>
                <Link to="/courses" className="font-mono font-bold uppercase tracking-wider text-[#4A4A4A] hover:text-[#1C1C1C] hover:bg-[#FEF08A] px-2 py-1 -ml-2 transition-colors border-2 border-transparent hover:border-[#1C1C1C]">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/contact" className="font-mono font-bold uppercase tracking-wider text-[#4A4A4A] hover:text-[#1C1C1C] hover:bg-[#FEF08A] px-2 py-1 -ml-2 transition-colors border-2 border-transparent hover:border-[#1C1C1C]">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="font-mono font-bold uppercase tracking-wider text-[#4A4A4A] hover:text-[#1C1C1C] hover:bg-[#FEF08A] px-2 py-1 -ml-2 transition-colors border-2 border-transparent hover:border-[#1C1C1C]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="font-mono font-bold uppercase tracking-wider text-[#4A4A4A] hover:text-[#1C1C1C] hover:bg-[#FEF08A] px-2 py-1 -ml-2 transition-colors border-2 border-transparent hover:border-[#1C1C1C]">
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>
          
        </div>

        <div className="border-t-2 border-[#1C1C1C] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <span className="text-sm text-[#1C1C1C] font-mono font-bold uppercase tracking-wider bg-[#FDFBF7] px-3 py-1 border-2 border-[#1C1C1C] shadow-[2px_2px_0px_rgba(28,28,28,1)] -rotate-2">
              Our Partners
            </span>
            <div className="flex items-center gap-4 bg-[#FDFBF7] border-2 border-[#1C1C1C] p-3 shadow-[4px_4px_0px_rgba(28,28,28,1)] rotate-1 hover:rotate-0 transition-transform">
              <a href="https://theedmentor.com/" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
                <img src="/edMentor.avif" alt="EdMentor" className="h-6 w-auto mix-blend-multiply" />
              </a>
              <a href="https://theedcompass.com/" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
                <img src="/edCompass.avif" alt="EdCompass" className="h-6 w-auto mix-blend-multiply" />
              </a>
              <a href="https://meraminds.com/" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
                <img src="/meramind.avif" alt="MeraMinds" className="h-6 w-auto mix-blend-multiply" />
              </a>
            </div>
          </div>
          
          <p className="text-sm font-mono text-[#4A4A4A] text-center md:text-right uppercase tracking-wider">
            © 2026 EdTraining. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
}