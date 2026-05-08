import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Courses() {
  return (
    <>
      <Helmet>
        <title>Courses | EdTraining</title>
        <meta name="description" content="Explore our personalized online training courses." />
        <link rel="canonical" href="https://www.theedtraining.com/courses" />
      </Helmet>

      {/* Removed bg-slate-50 so the global dot-grid texture shows through */}
      <div className="min-h-[60vh] py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-serif font-black text-[#1C1C1C] mb-8 leading-tight">
              Our <br className="hidden md:block"/>
              <span className="bg-[#A7F3D0] px-6 py-2 inline-block border-4 border-[#1C1C1C] shadow-[6px_6px_0px_rgba(28,28,28,1)] -rotate-2 mt-4 font-mono uppercase tracking-tight">
                Courses
              </span>
            </h1>
            <p className="text-xl text-[#4A4A4A] font-serif border-b-2 border-dashed border-[#1C1C1C] pb-8 mt-8 max-w-2xl mx-auto leading-relaxed">
              Discover personalized training designed to fit your unique learning needs. Reach out to us at{' '}
              <a href="mailto:help@theedtraining.com" className="font-mono font-bold text-[#1C1C1C] bg-[#FEF08A] px-1 border-2 border-transparent hover:border-[#1C1C1C] transition-all whitespace-nowrap">
                help@theedtraining.com
              </a>.
            </p>
          </div>

          {/* Course Links - Styled as stacked, slightly messy index cards */}
          <div className="space-y-8 mb-24">
            
            <motion.div whileHover={{ y: -8, rotate: 0, x: -4 }} transition={{ type: "spring", stiffness: 300 }}>
              <Link 
                to="/grade-8th-to-10th-all-boards"
                className="block bg-[#FDFBF7] p-8 md:p-10 border-4 border-[#1C1C1C] shadow-[8px_8px_0px_rgba(28,28,28,1)] hover:shadow-[12px_12px_0px_rgba(28,28,28,1)] rotate-1 hover:bg-[#FEF08A] transition-colors group relative"
              >
                <div className="absolute top-0 bottom-0 left-0 w-4 bg-[#1C1C1C] border-r-4 border-[#1C1C1C]"></div>
                <div className="flex items-center justify-between pl-6">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-mono font-bold text-[#1C1C1C] uppercase tracking-wider mb-2">
                      Grade 8th to 10th <span className="text-[#D32F2F] mx-2">•</span> All Boards
                    </h2>
                    <p className="text-[#4A4A4A] font-serif text-lg group-hover:text-[#1C1C1C] transition-colors">Comprehensive foundation for high school success.</p>
                  </div>
                  <ChevronRight className="w-8 h-8 text-[#1C1C1C] group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            </motion.div>

            <motion.div whileHover={{ y: -8, rotate: 0, x: -4 }} transition={{ type: "spring", stiffness: 300 }}>
              <Link 
                to="/grade-11th-to-12th-all-boards"
                className="block bg-[#FDFBF7] p-8 md:p-10 border-4 border-[#1C1C1C] shadow-[8px_8px_0px_rgba(28,28,28,1)] hover:shadow-[12px_12px_0px_rgba(28,28,28,1)] -rotate-1 hover:bg-[#A7F3D0] transition-colors group relative"
              >
                <div className="absolute top-0 bottom-0 left-0 w-4 bg-[#1C1C1C] border-r-4 border-[#1C1C1C]"></div>
                <div className="flex items-center justify-between pl-6">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-mono font-bold text-[#1C1C1C] uppercase tracking-wider mb-2">
                      Grade 11th & 12th <span className="text-[#D32F2F] mx-2">•</span> All Boards
                    </h2>
                    <p className="text-[#4A4A4A] font-serif text-lg group-hover:text-[#1C1C1C] transition-colors">Specialized training for senior secondary and beyond.</p>
                  </div>
                  <ChevronRight className="w-8 h-8 text-[#1C1C1C] group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ y: -8, rotate: 0, x: -4 }} transition={{ type: "spring", stiffness: 300 }}>
              <Link 
                to="/competitive-exams"
                className="block bg-[#FDFBF7] p-8 md:p-10 border-4 border-[#1C1C1C] shadow-[8px_8px_0px_rgba(28,28,28,1)] hover:shadow-[12px_12px_0px_rgba(28,28,28,1)] rotate-2 hover:bg-[#FBCFE8] transition-colors group relative"
              >
                <div className="absolute top-0 bottom-0 left-0 w-4 bg-[#1C1C1C] border-r-4 border-[#1C1C1C]"></div>
                <div className="flex items-center justify-between pl-6">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-mono font-bold text-[#1C1C1C] uppercase tracking-wider mb-2">
                      Competitive Exams
                    </h2>
                    <p className="text-[#4A4A4A] font-serif text-lg group-hover:text-[#1C1C1C] transition-colors">Preparation for national level examinations.</p>
                  </div>
                  <ChevronRight className="w-8 h-8 text-[#1C1C1C] group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            </motion.div>

          </div>

          {/* Stats Section - Styled as pinned sticky notes */}
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto pt-10 border-t-4 border-[#1C1C1C]">
            
            <motion.div whileHover={{ y: -5, rotate: 0 }} className="bg-[#bfdbfe] border-4 border-[#1C1C1C] p-8 text-center shadow-[6px_6px_0px_rgba(28,28,28,1)] rotate-2 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-6 bg-white/60 border-2 border-dashed border-[#1C1C1C] -rotate-3 backdrop-blur-sm shadow-sm"></div>
              <h3 className="text-4xl font-mono font-black text-[#1C1C1C] mb-3 border-b-2 border-[#1C1C1C] pb-2 inline-block">100+</h3>
              <p className="text-sm font-mono font-bold uppercase tracking-wider text-[#1C1C1C] mt-2">Students Trained</p>
            </motion.div>
            
            <motion.div whileHover={{ y: -5, rotate: 0 }} className="bg-[#FEF08A] border-4 border-[#1C1C1C] p-8 text-center shadow-[6px_6px_0px_rgba(28,28,28,1)] -rotate-2 relative mt-4 lg:mt-0">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-6 bg-white/60 border-2 border-dashed border-[#1C1C1C] rotate-2 backdrop-blur-sm shadow-sm"></div>
              <h3 className="text-4xl font-mono font-black text-[#1C1C1C] mb-3 border-b-2 border-[#1C1C1C] pb-2 inline-block">21+</h3>
              <p className="text-sm font-mono font-bold uppercase tracking-wider text-[#1C1C1C] mt-2">Expert Trainers</p>
            </motion.div>
            
            <motion.div whileHover={{ y: -5, rotate: 0 }} className="bg-[#A7F3D0] border-4 border-[#1C1C1C] p-8 text-center shadow-[6px_6px_0px_rgba(28,28,28,1)] rotate-1 relative mt-2 lg:mt-0">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-6 bg-white/60 border-2 border-dashed border-[#1C1C1C] -rotate-1 backdrop-blur-sm shadow-sm"></div>
              <h3 className="text-4xl font-mono font-black text-[#1C1C1C] mb-3 border-b-2 border-[#1C1C1C] pb-2 inline-block">100%</h3>
              <p className="text-sm font-mono font-bold uppercase tracking-wider text-[#1C1C1C] mt-2">Y-o-Y Retention</p>
            </motion.div>
            
            <motion.div whileHover={{ y: -5, rotate: 0 }} className="bg-[#FBCFE8] border-4 border-[#1C1C1C] p-8 text-center shadow-[6px_6px_0px_rgba(28,28,28,1)] -rotate-3 relative mt-6 lg:mt-0">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-6 bg-white/60 border-2 border-dashed border-[#1C1C1C] rotate-4 backdrop-blur-sm shadow-sm"></div>
              <h3 className="text-4xl font-mono font-black text-[#1C1C1C] mb-3 border-b-2 border-[#1C1C1C] pb-2 inline-block">8.7</h3>
              <p className="text-sm font-mono font-bold uppercase tracking-wider text-[#1C1C1C] mt-2">Satisfaction</p>
            </motion.div>

          </div>

        </div>
      </div>
    </>
  );
}