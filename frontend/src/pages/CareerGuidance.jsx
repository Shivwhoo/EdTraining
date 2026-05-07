import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function CareerGuidance() {
  return (
    <>
      <Helmet>
        <title>Career Guidance | EdTraining</title>
        <meta name="description" content="Expert career guidance for students." />
        <link rel="canonical" href="https://www.theedtraining.com/career-guidance" />
      </Helmet>

      <div className="py-20 bg-slate-50 min-h-[70vh]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Career Guidance</h1>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Navigate your future with confidence. Our expert mentors provide personalized career counseling to help you discover the right path.
          </p>
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Discover Your Potential</h2>
            <p className="text-slate-600 mb-8">
              Whether you are deciding on a college major, exploring different industries, or planning your long-term career trajectory, we're here to guide you every step of the way.
            </p>
            <Link to="/booking-a-demo-class" className="inline-block bg-brand hover:bg-brand-dark text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-md">
              Book a Counseling Session
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
