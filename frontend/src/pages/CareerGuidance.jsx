import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function CareerGuidance() {
  return (
    <>
      <Helmet>
        <title>Career Guidance | EdTraining</title>
        <meta name="description" content="Expert career guidance for students." />
        <link rel="canonical" href="https://www.theedtraining.com/career-guidance" />
      </Helmet>

      {/* Removed bg-slate-50 to let the global dot-grid texture show through */}
      <div className="py-20 lg:py-32 min-h-[70vh] flex flex-col items-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="mb-16">
            <h1 className="text-4xl md:text-6xl font-serif font-black text-[#1C1C1C] mb-6 leading-tight">
              Career <br className="hidden md:block"/>
              <span className="bg-[#FBCFE8] px-6 py-1 inline-block border-4 border-[#1C1C1C] shadow-[6px_6px_0px_rgba(28,28,28,1)] rotate-2 mt-4 font-mono uppercase tracking-tight">
                Guidance
              </span>
            </h1>
            <p className="text-xl text-[#4A4A4A] mb-10 max-w-2xl mx-auto font-serif border-b-2 border-dashed border-[#1C1C1C] pb-8 mt-8 leading-relaxed">
              Navigate your future with confidence. Our expert mentors provide personalized career counseling to help you discover the right path.
            </p>
          </div>

          <motion.div 
            whileHover={{ y: -8, rotate: 0 }} 
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-[#FDFBF7] p-10 md:p-16 border-4 border-[#1C1C1C] shadow-[12px_12px_0px_rgba(28,28,28,1)] -rotate-1 relative max-w-3xl mx-auto"
          >
            {/* Faux Tape */}
            <div className="absolute -top-4 right-10 md:right-20 w-32 h-8 bg-white/60 border-2 border-dashed border-[#1C1C1C] rotate-2 backdrop-blur-sm shadow-sm"></div>

            <h2 className="text-2xl md:text-3xl font-mono font-black text-[#1C1C1C] mb-8 uppercase tracking-widest border-b-4 border-[#1C1C1C] pb-4 inline-block">
              Discover Your Potential
            </h2>
            
            <p className="text-xl text-[#1C1C1C] mb-12 font-serif leading-relaxed text-left md:text-center">
              Whether you are deciding on a <span className="font-mono font-bold bg-[#A7F3D0] px-2 py-0.5 border-2 border-[#1C1C1C] shadow-[2px_2px_0px_rgba(28,28,28,1)] rotate-1 inline-block mx-1">college major</span>, exploring different <span className="font-mono font-bold bg-[#FEF08A] px-2 py-0.5 border-2 border-[#1C1C1C] shadow-[2px_2px_0px_rgba(28,28,28,1)] -rotate-1 inline-block mx-1">industries</span>, or planning your long-term career trajectory...
              <br/><br/>
              We're here to guide you every step of the way.
            </p>
            
            <div className="flex justify-center">
              <motion.div whileHover={{ y: -4, x: -4 }} whileTap={{ y: 2, x: 2 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Link to="/booking-a-demo-class" className="bg-[#1C1C1C] text-[#FDFBF7] px-8 py-5 text-lg font-mono font-bold uppercase tracking-wider shadow-[8px_8px_0px_rgba(251,207,232,1)] hover:shadow-[10px_10px_0px_rgba(251,207,232,1)] transition-shadow inline-block border-4 border-[#1C1C1C]">
                  Book a Demo Class Now
                </Link>
              </motion.div>
            </div>

          </motion.div>

        </div>
      </div>
    </>
  );
}