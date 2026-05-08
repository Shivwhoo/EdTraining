import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PenTool, Compass, Lightbulb, CheckSquare } from 'lucide-react';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | EdTraining</title>
        <meta name="description" content="About EdTraining - bridging academic learning and real-world success." />
        <link rel="canonical" href="https://www.theedtraining.com/about" />
      </Helmet>

      {/* Removed bg-slate-50 to let the global dot-grid show through */}
      <div className="py-20 lg:py-32 min-h-screen overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="text-center mb-24 relative">
            <span className="font-mono font-bold text-[#4A4A4A] uppercase tracking-widest text-sm mb-4 block">
              The Story Of
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-black text-[#1C1C1C] mb-8 leading-tight inline-block relative">
              EdTraining
              <svg className="absolute w-full h-4 -bottom-2 left-0 text-[#FEF08A] -z-10" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0 10 Q 50 20 100 10" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </h1>
            <p className="text-2xl text-[#1C1C1C] max-w-3xl mx-auto font-serif leading-relaxed font-bold bg-[#FDFBF7] border-2 border-dashed border-[#1C1C1C] p-6 shadow-[6px_6px_0px_rgba(28,28,28,1)] rotate-1">
              We are tearing down the assembly-line classroom to build a flexible, personalized workshop for your mind.
            </p>
          </div>

          {/* The Manifesto (Main Content) */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="bg-[#FDFBF7] p-8 md:p-16 border-4 border-[#1C1C1C] shadow-[12px_12px_0px_rgba(28,28,28,1)] relative mb-32 max-w-4xl mx-auto -rotate-1"
          >
            {/* Faux Tape */}
            <div className="absolute -top-4 left-10 w-32 h-8 bg-white/60 border-2 border-dashed border-[#1C1C1C] rotate-3 backdrop-blur-sm shadow-sm z-10"></div>
            <div className="absolute -top-4 right-10 w-32 h-8 bg-white/60 border-2 border-dashed border-[#1C1C1C] -rotate-2 backdrop-blur-sm shadow-sm z-10"></div>

            <div className="flex items-center gap-4 mb-10 border-b-4 border-[#1C1C1C] pb-6">
              <div className="w-12 h-12 bg-[#1C1C1C] text-[#FDFBF7] flex items-center justify-center border-2 border-[#1C1C1C]">
                <PenTool className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-mono font-black text-[#1C1C1C] uppercase tracking-widest">
                Our Manifesto
              </h2>
            </div>

            <div className="space-y-8 text-xl text-[#1C1C1C] font-serif leading-loose relative">
              
              {/* Red Ink Annotation */}
              <div className="hidden md:block absolute -left-32 top-10 w-24 text-right">
                <span className="font-mono text-[#D32F2F] text-sm font-bold uppercase rotate-[-15deg] inline-block">
                  ← The core problem!
                </span>
              </div>

              <p>
                At EdTraining, we realized that education isn't just about cramming information into your head—<span className="bg-[#FEF08A] font-bold px-1">it's about who you become.</span> The traditional model expects every student to learn at the exact same pace, in the exact same way. We think that's broken.
              </p>
              
              <p>
                Our platform integrates rigorous academic programs with real-world, career-focused mentorship. We don't just want you to pass a test; we want you to understand how to apply that knowledge when it actually matters.
              </p>

              {/* Highlight Box inside text */}
              <div className="bg-[#F4F4F0] border-l-8 border-[#1C1C1C] p-6 my-10 font-mono text-lg">
                <span className="text-[#D32F2F] font-bold mb-2 block uppercase tracking-wider">The Subscription Freedom:</span>
                We built a flexible subscription model that allows you to pay <span className="underline decoration-wavy">only for what you need.</span> Need intensive help with calculus this month, but just a light review for physics? You control the dial.
              </div>

              <p>
                From Home Schooling programs providing alternative education pathways to intensive Competitive Exam Training (JEE, NEET, KCET, and Olympiads), EdTraining is your partner in holistic, lifelong academic growth.
              </p>
            </div>

            {/* Signature Area */}
            <div className="mt-16 pt-8 border-t-2 border-dashed border-[#1C1C1C] flex justify-end">
              <div className="text-center rotate-[-2deg]">
                <span className="font-serif italic text-3xl text-[#1C1C1C] block mb-2 font-bold">The EdTraining Team</span>
                <span className="font-mono text-sm uppercase tracking-widest text-[#4A4A4A]">Founders & Educators</span>
              </div>
            </div>
          </motion.div>

          {/* New Section: Core Pillars (Sticky Notes Grid) */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-mono font-black text-[#1C1C1C] uppercase tracking-widest inline-block bg-[#FDFBF7] border-4 border-[#1C1C1C] px-8 py-3 shadow-[6px_6px_0px_rgba(28,28,28,1)] rotate-1">
                The Blueprint
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
              
              <motion.div whileHover={{ y: -10, rotate: 0 }} transition={{ type: "spring", stiffness: 300 }} className="bg-[#bfdbfe] border-4 border-[#1C1C1C] p-8 shadow-[8px_8px_0px_rgba(28,28,28,1)] -rotate-3 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-10 bg-[#1C1C1C] rounded-full flex items-center justify-center shadow-sm z-10">
                  <div className="w-4 h-4 bg-gray-400 rounded-full"></div>{/* Thumbtack */}
                </div>
                <Compass className="w-10 h-10 text-[#1C1C1C] mb-6 mt-4" />
                <h3 className="text-xl font-mono font-bold text-[#1C1C1C] uppercase tracking-wider mb-4 border-b-2 border-[#1C1C1C] pb-2">Autonomy</h3>
                <p className="font-serif text-lg text-[#1C1C1C] leading-relaxed">
                  Your education, your schedule. Whether you are home-schooling or prepping for Olympiads, you set the pace.
                </p>
              </motion.div>

              <motion.div whileHover={{ y: -10, rotate: 0 }} transition={{ type: "spring", stiffness: 300 }} className="bg-[#FEF08A] border-4 border-[#1C1C1C] p-8 shadow-[8px_8px_0px_rgba(28,28,28,1)] rotate-2 relative mt-4 md:mt-0">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-10 bg-[#1C1C1C] rounded-full flex items-center justify-center shadow-sm z-10">
                  <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                </div>
                <Lightbulb className="w-10 h-10 text-[#1C1C1C] mb-6 mt-4" />
                <h3 className="text-xl font-mono font-bold text-[#1C1C1C] uppercase tracking-wider mb-4 border-b-2 border-[#1C1C1C] pb-2">Mastery</h3>
                <p className="font-serif text-lg text-[#1C1C1C] leading-relaxed">
                  We focus on deep conceptual understanding over rote memorization. Know the 'why', not just the 'how'.
                </p>
              </motion.div>

              <motion.div whileHover={{ y: -10, rotate: 0 }} transition={{ type: "spring", stiffness: 300 }} className="bg-[#A7F3D0] border-4 border-[#1C1C1C] p-8 shadow-[8px_8px_0px_rgba(28,28,28,1)] -rotate-1 relative mt-8 md:mt-0">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-10 bg-[#1C1C1C] rounded-full flex items-center justify-center shadow-sm z-10">
                  <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                </div>
                <CheckSquare className="w-10 h-10 text-[#1C1C1C] mb-6 mt-4" />
                <h3 className="text-xl font-mono font-bold text-[#1C1C1C] uppercase tracking-wider mb-4 border-b-2 border-[#1C1C1C] pb-2">Mentorship</h3>
                <p className="font-serif text-lg text-[#1C1C1C] leading-relaxed">
                  Learn from experts who don't just teach the syllabus, but guide you on how to apply it to your future career.
                </p>
              </motion.div>

            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center pt-16 border-t-4 border-dashed border-[#1C1C1C] relative">
             <div className="absolute left-1/2 -translate-x-1/2 -top-6 bg-[#FDFBF7] px-4 font-mono font-bold text-[#1C1C1C] uppercase tracking-widest">
               Ready to start?
             </div>
             <motion.div whileHover={{ y: -4, x: -4 }} whileTap={{ y: 2, x: 2 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className="inline-block mt-8">
              <Link 
                to="/courses" 
                className="bg-[#1C1C1C] text-[#FDFBF7] px-12 py-5 text-xl font-mono font-bold uppercase tracking-widest shadow-[8px_8px_0px_rgba(254,240,138,1)] hover:shadow-[12px_12px_0px_rgba(254,240,138,1)] transition-all inline-block border-4 border-[#1C1C1C]"
              >
                Enter the Workshop
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </>
  );
}