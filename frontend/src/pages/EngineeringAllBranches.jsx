import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function EngineeringAllBranches() {
  return (
    <>
      <Helmet>
        <title>Engineering (All Branches) | EdTraining</title>
        <meta name="description" content="Support and coaching for all engineering branches." />
        <link rel="canonical" href="https://www.theedtraining.com/engineering-all-branches" />
      </Helmet>

      <div className="py-20 bg-slate-50 min-h-[70vh]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Engineering Support</h1>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Comprehensive tutoring and conceptual support across all major engineering branches.
          </p>
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">All Branches Covered</h2>
            <p className="text-slate-600 mb-8">
              From Computer Science and Electronics to Mechanical and Civil engineering. Our expert faculty can help you grasp complex technical concepts and excel in your degree.
            </p>
            <Link to="/booking-a-demo-class" className="inline-block bg-brand hover:bg-brand-dark text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-md">
              Request a Demo Class
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
