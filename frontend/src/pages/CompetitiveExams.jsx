import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Target, BookOpen, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CompetitiveExams() {
  return (
    <>
      <Helmet>
        <title>Competitive Exams | EdTraining</title>
        <meta name="description" content="Preparation for all national level examinations including DHBBC, KCET, and Olympiad." />
        <link rel="canonical" href="https://www.theedtraining.com/competitive-exams" />
      </Helmet>

      {/* Removed bg-slate-50 to let the global dot-grid show through */}
      <div className="py-20 lg:py-32 min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-serif font-black text-[#1C1C1C] mb-8 leading-tight">
              Competitive <br className="hidden md:block"/>
              <span className="bg-[#FBCFE8] px-6 py-2 inline-block border-4 border-[#1C1C1C] shadow-[6px_6px_0px_rgba(28,28,28,1)] rotate-1 mt-4 font-mono uppercase tracking-tight">
                Examinations
              </span>
            </h1>
            <p className="text-xl text-[#4A4A4A] max-w-2xl mx-auto font-serif border-b-2 border-dashed border-[#1C1C1C] pb-8 mt-8 leading-relaxed">
              Comprehensive preparation for all national level examinations to secure your future.
            </p>
          </div>

          <div className="space-y-12 md:space-y-16 mb-24 max-w-4xl mx-auto">
            
            {/* KCET Card */}
            <motion.div 
              whileHover={{ y: -8, rotate: 0 }} 
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-[#FDFBF7] p-8 md:p-10 border-4 border-[#1C1C1C] shadow-[12px_12px_0px_rgba(28,28,28,1)] flex flex-col md:flex-row gap-8 items-start relative -rotate-1"
            >
              <div className="absolute -top-4 left-10 md:left-20 w-32 h-8 bg-white/60 border-2 border-dashed border-[#1C1C1C] rotate-3 backdrop-blur-sm shadow-sm z-10"></div>
              
              <div className="w-16 h-16 bg-[#FEF08A] border-4 border-[#1C1C1C] shadow-[4px_4px_0px_rgba(28,28,28,1)] flex items-center justify-center flex-shrink-0 -rotate-2">
                <Target className="w-8 h-8 text-[#1C1C1C]" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-mono font-bold text-[#1C1C1C] mb-3 uppercase tracking-wider inline-block border-b-4 border-[#1C1C1C] pb-1">KCET</h2>
                <p className="text-lg text-[#4A4A4A] font-serif mb-8 leading-relaxed">
                  Karnataka Common Entrance Test for 12th (2nd PUC)
                </p>
                <div className="inline-block bg-[#1C1C1C] text-[#FDFBF7] font-mono font-bold uppercase tracking-wider px-5 py-2 border-2 border-[#1C1C1C] shadow-[4px_4px_0px_rgba(254,240,138,1)] text-sm rotate-1">
                  Weekly 2 classes <span className="text-[#FEF08A] mx-2">+</span> weekly tests
                </div>
              </div>
            </motion.div>

            {/* DHBBC Card */}
            <motion.div 
              whileHover={{ y: -8, rotate: 0 }} 
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-[#FDFBF7] p-8 md:p-10 border-4 border-[#1C1C1C] shadow-[12px_12px_0px_rgba(28,28,28,1)] flex flex-col md:flex-row gap-8 items-start relative rotate-1"
            >
              <div className="absolute -top-4 right-10 md:right-20 w-32 h-8 bg-white/60 border-2 border-dashed border-[#1C1C1C] -rotate-2 backdrop-blur-sm shadow-sm z-10"></div>
              
              <div className="w-16 h-16 bg-[#bfdbfe] border-4 border-[#1C1C1C] shadow-[4px_4px_0px_rgba(28,28,28,1)] flex items-center justify-center flex-shrink-0 rotate-2">
                <BookOpen className="w-8 h-8 text-[#1C1C1C]" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-mono font-bold text-[#1C1C1C] mb-3 uppercase tracking-wider inline-block border-b-4 border-[#1C1C1C] pb-1">DHBBC</h2>
                <p className="text-lg text-[#4A4A4A] font-serif mb-8 leading-relaxed">
                  Dr. Homi Bhabha Balvaidnyanik Competition (classes 6th and 9th)
                </p>
                <div className="inline-block bg-[#1C1C1C] text-[#FDFBF7] font-mono font-bold uppercase tracking-wider px-5 py-2 border-2 border-[#1C1C1C] shadow-[4px_4px_0px_rgba(191,219,254,1)] text-sm -rotate-1">
                  Weekly 1 class <span className="text-[#bfdbfe] mx-2">+</span> weekly tests
                </div>
              </div>
            </motion.div>

            {/* Olympiad Card */}
            <motion.div 
              whileHover={{ y: -8, rotate: 0 }} 
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-[#FDFBF7] p-8 md:p-10 border-4 border-[#1C1C1C] shadow-[12px_12px_0px_rgba(28,28,28,1)] flex flex-col md:flex-row gap-8 items-start relative -rotate-2"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-white/60 border-2 border-dashed border-[#1C1C1C] rotate-1 backdrop-blur-sm shadow-sm z-10"></div>
              
              <div className="w-16 h-16 bg-[#FBCFE8] border-4 border-[#1C1C1C] shadow-[4px_4px_0px_rgba(28,28,28,1)] flex items-center justify-center flex-shrink-0 -rotate-1">
                <Award className="w-8 h-8 text-[#1C1C1C]" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-mono font-bold text-[#1C1C1C] mb-3 uppercase tracking-wider inline-block border-b-4 border-[#1C1C1C] pb-1">Olympiad</h2>
                <p className="text-lg text-[#4A4A4A] font-serif mb-8 leading-relaxed">
                  IMO and NSO for classes 8th and 12th
                </p>
                <div className="inline-block bg-[#1C1C1C] text-[#FDFBF7] font-mono font-bold uppercase tracking-wider px-5 py-2 border-2 border-[#1C1C1C] shadow-[4px_4px_0px_rgba(251,207,232,1)] text-sm rotate-1">
                  Weekly 2 classes <span className="text-[#FBCFE8] mx-2">+</span> monthly tests
                </div>
              </div>
            </motion.div>

          </div>

          <div className="text-center">
            <motion.div whileHover={{ y: -4, x: -4 }} whileTap={{ y: 2, x: 2 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className="inline-block">
              <Link 
                to="/booking-a-demo-class" 
                className="bg-[#A7F3D0] text-[#1C1C1C] px-10 py-5 text-lg font-mono font-bold uppercase tracking-wider shadow-[8px_8px_0px_rgba(28,28,28,1)] hover:shadow-[10px_10px_0px_rgba(28,28,28,1)] transition-shadow inline-block border-4 border-[#1C1C1C] rotate-1"
              >
                Book a demo class now
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </>
  );
}