import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { BookOpen, Home as HomeIcon, Award, Target, Repeat, UserCheck, Heart, Cpu } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home | EdTraining</title>
        <meta name="description" content="At EdTraining, education isn't just about what you learn — it's about who you become." />
        <link rel="canonical" href="https://www.theedtraining.com/" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-brand-light py-20 lg:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
            At EdTraining, education isn't just about what you learn — <br className="hidden md:block"/>
            <span className="text-brand">it's about who you become.</span>
          </h1>
          <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
            Bridging academic learning and real-world success through personalized guidance and flexible online programs.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link to="/booking-a-demo-class" className="bg-brand hover:bg-brand-dark text-white px-8 py-3 rounded-full text-lg font-semibold transition-all shadow-lg hover:shadow-xl">
              Book a Demo
            </Link>
            <Link to="/courses" className="bg-white hover:bg-slate-50 text-brand px-8 py-3 rounded-full text-lg font-semibold transition-all shadow-md hover:shadow-lg border border-brand/20">
              Explore Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Platform Model */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-3xl p-8 md:p-12 text-center border border-slate-100 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Our Platform Model</h2>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto font-medium">
              Academic programs + Career-focused mentorship + Flexible subscription model (pay only for what you need).
            </p>
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">OUR VALUES</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
              Self-paced and alternative education positioning, individual attention, flexible schedules, guided tracking, concept-based teaching, live + recorded sessions, and expert educators.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-brand/10 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="w-7 h-7 text-brand" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Regular Academic Courses (Class 8th to 12th)</h3>
              <p className="text-slate-600">
                Comprehensive curriculum covering core subjects with individual attention and concept-based teaching.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-brand/10 rounded-xl flex items-center justify-center mb-6">
                <HomeIcon className="w-7 h-7 text-brand" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Home Schooling Programs</h3>
              <p className="text-slate-600">
                Flexible schedules and self-paced learning designed for alternative education positioning.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-brand/10 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-brand" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Competitive Exam Training</h3>
              <p className="text-slate-600">
                Competitive exam prep references including Olympiad, NTSE, KCET, JEE, and NEET with guided tracking.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-brand/10 rounded-xl flex items-center justify-center mb-6">
                <Cpu className="w-7 h-7 text-brand" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Engineering (All Branches)</h3>
              <p className="text-slate-600">
                Comprehensive guidance and conceptual support across all major engineering branches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Model */}
      <section className="py-20 bg-brand text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Our Learning Model Includes</h2>
          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
            <div className="flex flex-col items-center">
              <div className="bg-white/10 p-6 rounded-full mb-4">
                <Repeat className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold">Subscription-Based Doubt Clearing</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white/10 p-6 rounded-full mb-4">
                <Target className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold">Learn on demand</h3>
              <p className="text-brand-light mt-2 opacity-90">pay only for what you use.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Approach Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16">Why Our Approach Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-4">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Personalized Learning Paths</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-4">
                <Repeat className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Subscription Flexibility</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-4">
                <UserCheck className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Expert Mentorship</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-4">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Holistic Growth</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Our Partners */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-400 font-medium uppercase tracking-wider mb-8 text-sm">Our Partners</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-80 grayscale hover:grayscale-0 transition-all duration-300">
            <a href="https://theedmentor.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform">
              <img src="/edMentor.avif" alt="EdMentor" className="h-10 md:h-12 w-auto mix-blend-multiply" />
            </a>
            <a href="https://theedcompass.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform">
              <img src="/edCompass.avif" alt="EdCompass" className="h-10 md:h-12 w-auto mix-blend-multiply" />
            </a>
            <a href="https://meraminds.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform">
              <img src="/meramind.avif" alt="MeraMinds" className="h-10 md:h-12 w-auto mix-blend-multiply" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-8 bg-slate-100 text-center">
        <p className="text-slate-500 text-sm">Advertisement placeholder text</p>
      </section>
    </>
  );
}
