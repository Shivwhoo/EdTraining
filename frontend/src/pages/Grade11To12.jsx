import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Grade11To12() {
  const boards = ['CBSE', 'ICSE', 'Karnataka', 'Maharashtra'];

  return (
    <>
      <Helmet>
        <title>Grade 11th & 12th - All Boards | EdTraining</title>
        <meta name="description" content="Academic courses for 11th and 12th Grade covering all major boards with specialized subjects." />
        <link rel="canonical" href="https://www.theedtraining.com/grade-11th-to-12th-all-boards" />
      </Helmet>

      {/* Removed bg-white so the Layout's dot-grid shows through */}
      <div className="py-20 lg:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-serif font-black text-[#1C1C1C] mb-6 leading-tight">
              11th to 12th Grade <br className="hidden md:block"/>
              <span className="bg-[#FEF08A] px-6 py-1 inline-block border-4 border-[#1C1C1C] shadow-[6px_6px_0px_rgba(28,28,28,1)] -rotate-2 mt-4 font-mono uppercase tracking-tight">
                All Boards
              </span>
            </h1>
            <p className="text-xl text-[#4A4A4A] max-w-2xl mx-auto font-serif border-b-2 border-dashed border-[#1C1C1C] pb-8 mt-8">
              Specialized senior secondary education preparing students for board excellence and future careers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 mb-24">
            
            {/* Boards Card */}
            <motion.div 
              whileHover={{ y: -8, rotate: 0 }} 
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-[#FDFBF7] p-8 md:p-10 border-4 border-[#1C1C1C] shadow-[8px_8px_0px_rgba(28,28,28,1)] -rotate-2 relative flex flex-col"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/60 border-2 border-dashed border-[#1C1C1C] rotate-3 backdrop-blur-sm shadow-sm"></div>
              
              <h2 className="text-2xl font-mono font-bold text-[#1C1C1C] mb-8 border-b-4 border-[#1C1C1C] pb-4 uppercase tracking-wider">
                Boards Covered
              </h2>
              <ul className="space-y-0 flex-grow">
                {boards.map((board) => (
                  <li key={board} className="flex items-center text-lg text-[#1C1C1C] font-serif border-b border-dashed border-[#d1d5db] py-4 last:border-0">
                    <CheckCircle2 className="w-6 h-6 text-[#D32F2F] mr-4 flex-shrink-0" />
                    {board}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Subjects Card */}
            <motion.div 
              whileHover={{ y: -8, rotate: 0 }} 
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-[#FDFBF7] p-8 md:p-10 border-4 border-[#1C1C1C] shadow-[8px_8px_0px_rgba(28,28,28,1)] rotate-1 relative flex flex-col"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/60 border-2 border-dashed border-[#1C1C1C] -rotate-2 backdrop-blur-sm shadow-sm"></div>
              
              <h2 className="text-2xl font-mono font-bold text-[#1C1C1C] mb-8 border-b-4 border-[#1C1C1C] pb-4 uppercase tracking-wider">
                Subjects
              </h2>
              <ul className="space-y-0 flex-grow">
                <li className="flex items-center text-lg text-[#1C1C1C] font-serif border-b border-dashed border-[#d1d5db] py-4">
                  <CheckCircle2 className="w-6 h-6 text-[#D32F2F] mr-4 flex-shrink-0" />
                  Physics
                </li>
                <li className="flex items-center text-lg text-[#1C1C1C] font-serif border-b border-dashed border-[#d1d5db] py-4">
                  <CheckCircle2 className="w-6 h-6 text-[#D32F2F] mr-4 flex-shrink-0" />
                  Chemistry
                </li>
                <li className="flex items-center text-lg text-[#1C1C1C] font-serif border-b border-dashed border-[#d1d5db] py-4">
                  <CheckCircle2 className="w-6 h-6 text-[#D32F2F] mr-4 flex-shrink-0" />
                  Mathematics / Biology
                </li>
                <li className="flex items-center text-lg text-[#1C1C1C] font-serif border-b border-dashed border-[#d1d5db] py-4 border-transparent">
                  <CheckCircle2 className="w-6 h-6 text-[#D32F2F] mr-4 flex-shrink-0" />
                  Optional Subjects
                </li>
              </ul>
            </motion.div>

          </div>

          {/* Delivery Pattern (The Sticky Note) */}
          <div className="bg-[#FEF08A] border-4 border-[#1C1C1C] p-10 md:p-16 shadow-[12px_12px_0px_rgba(28,28,28,1)] rotate-1 text-center relative max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-mono font-black text-[#1C1C1C] mb-8 uppercase tracking-widest underline decoration-wavy decoration-4 underline-offset-8">
              Delivery Pattern
            </h2>
            
            <div className="text-xl text-[#1C1C1C] space-y-8 font-serif">
              <p className="italic text-[#4A4A4A]">All the chapters and streams —</p>
              
              <div className="bg-[#FDFBF7] border-4 border-[#1C1C1C] inline-block px-6 py-4 shadow-[6px_6px_0px_rgba(28,28,28,1)] -rotate-1">
                <p className="font-mono font-bold uppercase tracking-wide md:text-lg">
                  Weekly 2 Classes <span className="text-[#D32F2F] mx-2">•</span> Monthly Tests <span className="text-[#D32F2F] mx-2">•</span> Exam Prep
                </p>
              </div>
            </div>
            
            <div className="mt-16 flex justify-center">
              <motion.div whileHover={{ y: -4, x: -4 }} whileTap={{ y: 2, x: 2 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Link to="/booking-a-demo-class" className="bg-[#1C1C1C] text-[#FDFBF7] px-10 py-5 text-lg font-mono font-bold uppercase tracking-wider shadow-[8px_8px_0px_rgba(167,243,208,1)] hover:shadow-[10px_10px_0px_rgba(167,243,208,1)] transition-shadow inline-block border-4 border-[#1C1C1C]">
                  Book a demo class now
                </Link>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}