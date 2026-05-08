import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { BookOpen, Home as HomeIcon, Award, Target, Repeat, UserCheck, Heart, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home | EdTraining</title>
        <meta name="description" content="At EdTraining, education isn't just about what you learn — it's about who you become." />
        <link rel="canonical" href="https://www.theedtraining.com/" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-black text-[#1C1C1C] tracking-tight mb-10 leading-[1.1]">
            Education isn't just about <br className="hidden md:block"/>
            what you learn — <br className="hidden md:block"/>
            <span className="relative inline-block mt-4 md:mt-6">
              <span className="absolute inset-0 bg-[#FEF08A] -rotate-2 border-2 border-[#1C1C1C] shadow-[6px_6px_0px_rgba(28,28,28,1)]"></span>
              <span className="relative z-10 px-6 py-2 block font-mono uppercase tracking-tighter">it's about who you become.</span>
            </span>
          </h1>
          
          <p className="mt-8 text-lg md:text-xl text-[#4A4A4A] max-w-2xl mx-auto font-serif leading-relaxed font-medium border-b-2 border-dashed border-[#1C1C1C] pb-8">
            Bridging academic learning and real-world success through personalized guidance and flexible online programs.
          </p>
          
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
            <motion.div whileHover={{ y: -4, x: -4 }} whileTap={{ y: 2, x: 2 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <Link to="/booking-a-demo-class" className="bg-[#1C1C1C] text-[#FDFBF7] px-8 py-4 text-lg font-mono font-bold uppercase tracking-wider shadow-[6px_6px_0px_rgba(254,240,138,1)] hover:shadow-[8px_8px_0px_rgba(254,240,138,1)] transition-shadow inline-block border-2 border-[#1C1C1C]">
                Book a Demo
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ y: -4, x: -4 }} whileTap={{ y: 2, x: 2 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <Link to="/courses" className="bg-[#FDFBF7] text-[#1C1C1C] px-8 py-4 text-lg font-mono font-bold uppercase tracking-wider shadow-[6px_6px_0px_rgba(28,28,28,1)] hover:shadow-[8px_8px_0px_rgba(28,28,28,1)] transition-shadow inline-block border-2 border-[#1C1C1C]">
                Explore Courses
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Platform Model */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ rotate: -1 }}
            whileHover={{ rotate: 0, scale: 1.01 }}
            className="bg-[#FDFBF7] border-4 border-[#1C1C1C] p-8 md:p-12 text-center shadow-[12px_12px_0px_rgba(28,28,28,1)] relative"
          >
            {/* Faux Tape */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-white/50 border-2 border-dashed border-[#1C1C1C] rotate-2 backdrop-blur-sm"></div>
            
            <h2 className="text-2xl md:text-3xl font-mono font-bold text-[#1C1C1C] mb-6 uppercase tracking-wider inline-block border-b-4 border-[#A7F3D0] pb-2">Our Platform Model</h2>
            <p className="text-xl md:text-2xl text-[#1C1C1C] font-serif leading-relaxed">
              Academic programs <span className="font-bold">+</span> Career-focused mentorship <span className="font-bold">+</span> Flexible subscription model <br/>
              <span className="bg-[#FEF08A] px-2 mt-2 inline-block font-mono text-sm uppercase tracking-widest border-2 border-[#1C1C1C] rotate-1">(pay only for what you need)</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="py-24 border-t-4 border-b-4 border-[#1C1C1C] bg-[#F4F4F0] mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-mono font-black text-[#1C1C1C] uppercase tracking-widest bg-[#1C1C1C] text-[#FDFBF7] inline-block px-6 py-2 -rotate-1 shadow-[6px_6px_0px_rgba(254,240,138,1)]">OUR VALUES</h2>
            <p className="mt-8 text-lg text-[#4A4A4A] max-w-3xl mx-auto font-serif leading-relaxed border-2 border-dashed border-[#1C1C1C] p-6 bg-[#FDFBF7] rotate-1">
              Self-paced and alternative education positioning, individual attention, flexible schedules, guided tracking, concept-based teaching, live + recorded sessions, and expert educators.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <motion.div whileHover={{ y: -8, rotate: 0 }} transition={{ type: "spring", stiffness: 300 }} className="bg-[#FDFBF7] p-8 border-2 border-[#1C1C1C] shadow-[6px_6px_0px_rgba(28,28,28,1)] -rotate-2 flex flex-col h-full">
              <div className="w-14 h-14 bg-[#FEF08A] border-2 border-[#1C1C1C] flex items-center justify-center mb-6 shadow-[2px_2px_0px_rgba(28,28,28,1)]">
                <BookOpen className="w-7 h-7 text-[#1C1C1C]" />
              </div>
              <h3 className="text-xl font-mono font-bold text-[#1C1C1C] mb-3 uppercase leading-tight">Regular Academic Courses</h3>
              <p className="text-[#4A4A4A] font-serif mt-auto">(Class 8th to 12th) Comprehensive curriculum covering core subjects with individual attention.</p>
            </motion.div>
            
            {/* Card 2 */}
            <motion.div whileHover={{ y: -8, rotate: 0 }} transition={{ type: "spring", stiffness: 300 }} className="bg-[#FDFBF7] p-8 border-2 border-[#1C1C1C] shadow-[6px_6px_0px_rgba(28,28,28,1)] rotate-2 flex flex-col h-full">
              <div className="w-14 h-14 bg-[#A7F3D0] border-2 border-[#1C1C1C] flex items-center justify-center mb-6 shadow-[2px_2px_0px_rgba(28,28,28,1)]">
                <HomeIcon className="w-7 h-7 text-[#1C1C1C]" />
              </div>
              <h3 className="text-xl font-mono font-bold text-[#1C1C1C] mb-3 uppercase leading-tight">Home Schooling</h3>
              <p className="text-[#4A4A4A] font-serif mt-auto">Flexible schedules and self-paced learning designed for alternative education positioning.</p>
            </motion.div>

            {/* Card 3 */}
            <motion.div whileHover={{ y: -8, rotate: 0 }} transition={{ type: "spring", stiffness: 300 }} className="bg-[#FDFBF7] p-8 border-2 border-[#1C1C1C] shadow-[6px_6px_0px_rgba(28,28,28,1)] -rotate-1 flex flex-col h-full">
              <div className="w-14 h-14 bg-[#FBCFE8] border-2 border-[#1C1C1C] flex items-center justify-center mb-6 shadow-[2px_2px_0px_rgba(28,28,28,1)]">
                <Award className="w-7 h-7 text-[#1C1C1C]" />
              </div>
              <h3 className="text-xl font-mono font-bold text-[#1C1C1C] mb-3 uppercase leading-tight">Competitive Exam Training</h3>
              <p className="text-[#4A4A4A] font-serif mt-auto">Exam prep references including Olympiad, NTSE, KCET, JEE, and NEET with guided tracking.</p>
            </motion.div>

            {/* Card 4 */}
            <motion.div whileHover={{ y: -8, rotate: 0 }} transition={{ type: "spring", stiffness: 300 }} className="bg-[#FDFBF7] p-8 border-2 border-[#1C1C1C] shadow-[6px_6px_0px_rgba(28,28,28,1)] rotate-1 flex flex-col h-full">
              <div className="w-14 h-14 bg-[#bfdbfe] border-2 border-[#1C1C1C] flex items-center justify-center mb-6 shadow-[2px_2px_0px_rgba(28,28,28,1)]">
                <Cpu className="w-7 h-7 text-[#1C1C1C]" />
              </div>
              <h3 className="text-xl font-mono font-bold text-[#1C1C1C] mb-3 uppercase leading-tight">Engineering</h3>
              <p className="text-[#4A4A4A] font-serif mt-auto">(All Branches) Comprehensive guidance and conceptual support across all major branches.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Learning Model */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-mono font-bold mb-12 text-[#1C1C1C] uppercase tracking-wider inline-block border-b-4 border-dashed border-[#1C1C1C] pb-2">Our Learning Model Includes</h2>
          <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-24">
            
            <div className="flex flex-col items-center group">
              <div className="bg-[#FDFBF7] border-4 border-[#1C1C1C] p-6 rounded-full mb-6 shadow-[6px_6px_0px_rgba(28,28,28,1)] group-hover:-translate-y-2 transition-transform">
                <Repeat className="w-10 h-10 text-[#1C1C1C]" />
              </div>
              <h3 className="text-2xl font-bold font-serif text-[#1C1C1C] bg-[#FEF08A] px-4 py-1 border-2 border-[#1C1C1C] -rotate-1">Subscription-Based</h3>
              <p className="text-[#1C1C1C] font-mono font-bold uppercase mt-2">Doubt Clearing</p>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="bg-[#FDFBF7] border-4 border-[#1C1C1C] p-6 rounded-full mb-6 shadow-[6px_6px_0px_rgba(28,28,28,1)] group-hover:-translate-y-2 transition-transform">
                <Target className="w-10 h-10 text-[#1C1C1C]" />
              </div>
              <h3 className="text-2xl font-bold font-serif text-[#1C1C1C] bg-[#A7F3D0] px-4 py-1 border-2 border-[#1C1C1C] rotate-1">Learn on demand</h3>
              <p className="text-[#1C1C1C] font-mono font-bold uppercase mt-2 underline decoration-wavy decoration-2">Pay only for what you use.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Why Our Approach Works */}
      <section className="py-20 bg-[#F4F4F0] border-y-4 border-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-mono font-black text-center text-[#1C1C1C] uppercase tracking-widest mb-16">Why Our Approach Works</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center flex flex-col items-center">
              <div className="w-20 h-20 bg-[#FDFBF7] border-4 border-[#1C1C1C] shadow-[4px_4px_0px_rgba(28,28,28,1)] flex items-center justify-center mb-6 rotate-3">
                <Target className="w-8 h-8 text-[#1C1C1C]" />
              </div>
              <h3 className="text-lg font-mono font-bold uppercase tracking-wider text-[#1C1C1C]">Personalized Paths</h3>
            </div>
            
            <div className="text-center flex flex-col items-center">
              <div className="w-20 h-20 bg-[#FDFBF7] border-4 border-[#1C1C1C] shadow-[4px_4px_0px_rgba(28,28,28,1)] flex items-center justify-center mb-6 -rotate-2">
                <Repeat className="w-8 h-8 text-[#1C1C1C]" />
              </div>
              <h3 className="text-lg font-mono font-bold uppercase tracking-wider text-[#1C1C1C]">Subscription Flexibility</h3>
            </div>
            
            <div className="text-center flex flex-col items-center">
              <div className="w-20 h-20 bg-[#FDFBF7] border-4 border-[#1C1C1C] shadow-[4px_4px_0px_rgba(28,28,28,1)] flex items-center justify-center mb-6 rotate-1">
                <UserCheck className="w-8 h-8 text-[#1C1C1C]" />
              </div>
              <h3 className="text-lg font-mono font-bold uppercase tracking-wider text-[#1C1C1C]">Expert Mentorship</h3>
            </div>
            
            <div className="text-center flex flex-col items-center">
              <div className="w-20 h-20 bg-[#FDFBF7] border-4 border-[#1C1C1C] shadow-[4px_4px_0px_rgba(28,28,28,1)] flex items-center justify-center mb-6 -rotate-3">
                <Heart className="w-8 h-8 text-[#1C1C1C]" />
              </div>
              <h3 className="text-lg font-mono font-bold uppercase tracking-wider text-[#1C1C1C]">Holistic Growth</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Our Partners */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <span className="bg-[#1C1C1C] text-[#FDFBF7] font-mono font-bold uppercase tracking-widest px-4 py-1 mb-8 inline-block shadow-[4px_4px_0px_rgba(167,243,208,1)]">
            Our Partners
          </span>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-80 hover:opacity-100 transition-opacity bg-[#FDFBF7] border-2 border-dashed border-[#1C1C1C] p-6 shadow-[8px_8px_0px_rgba(28,28,28,1)]">
            <a href="https://theedmentor.com/" target="_blank" rel="noopener noreferrer" className="hover:-translate-y-1 transition-transform">
              <img src="/edMentor.avif" alt="EdMentor" className="h-10 md:h-12 w-auto mix-blend-multiply" />
            </a>
            <a href="https://theedcompass.com/" target="_blank" rel="noopener noreferrer" className="hover:-translate-y-1 transition-transform">
              <img src="/edCompass.avif" alt="EdCompass" className="h-10 md:h-12 w-auto mix-blend-multiply" />
            </a>
            <a href="https://meraminds.com/" target="_blank" rel="noopener noreferrer" className="hover:-translate-y-1 transition-transform">
              <img src="/meramind.avif" alt="MeraMinds" className="h-10 md:h-12 w-auto mix-blend-multiply" />
            </a>
          </div>
        </div>
      </section>

      {/* Compass Links (Styled as torn ticket stubs) */}
      <section className="py-12 text-center flex justify-center gap-6 flex-wrap px-4">
          <a href="https://theedmentor.com/" target='_blank' rel="noreferrer" className="inline-block">
            <div className="bg-[#FEF08A] border-2 border-[#1C1C1C] px-6 py-3 font-mono font-bold uppercase tracking-wider text-[#1C1C1C] shadow-[4px_4px_0px_rgba(28,28,28,1)] hover:shadow-[6px_6px_0px_rgba(28,28,28,1)] hover:-translate-y-1 transition-all rotate-2">
              Compass Starter
            </div>  
          </a>
          <a href="https://theedmentor.com/login" target='_blank' rel="noreferrer" className="inline-block">
            <div className="bg-[#A7F3D0] border-2 border-[#1C1C1C] px-6 py-3 font-mono font-bold uppercase tracking-wider text-[#1C1C1C] shadow-[4px_4px_0px_rgba(28,28,28,1)] hover:shadow-[6px_6px_0px_rgba(28,28,28,1)] hover:-translate-y-1 transition-all -rotate-1">
              Compass Starter Enroll Now
            </div>  
          </a>
      </section>
    </>
  );
}