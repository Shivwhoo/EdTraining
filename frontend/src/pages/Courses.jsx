import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function Courses() {
  return (
    <>
      <Helmet>
        <title>Courses | EdTraining</title>
        <meta name="description" content="Explore our personalized online training courses." />
        <link rel="canonical" href="https://www.theedtraining.com/courses" />
      </Helmet>

      <div className="bg-slate-50 min-h-[60vh] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Our Courses</h1>
            <p className="text-lg text-slate-600">
              Discover personalized online training designed to fit your unique learning needs.
              Reach out to us at <a href="mailto:help@theedtraining.com" className="text-brand hover:underline font-medium">help@theedtraining.com</a>.
            </p>
          </div>

          <div className="grid gap-6">
            <Link 
              to="/grade-8th-to-10th-all-boards"
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md border border-slate-100 transition-all flex items-center justify-between group"
            >
              <div>
                <h2 className="text-2xl font-bold text-slate-800 group-hover:text-brand transition-colors">Grade 8th to 10th – All Boards</h2>
                <p className="text-slate-500 mt-2">Comprehensive foundation for high school success.</p>
              </div>
              <ChevronRight className="w-6 h-6 text-slate-400 group-hover:text-brand transition-colors" />
            </Link>

            <Link 
              to="/grade-11th-to-12th-all-boards"
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md border border-slate-100 transition-all flex items-center justify-between group"
            >
              <div>
                <h2 className="text-2xl font-bold text-slate-800 group-hover:text-brand transition-colors">Grade 11th & 12th – All Boards</h2>
                <p className="text-slate-500 mt-2">Specialized training for senior secondary and beyond.</p>
              </div>
              <ChevronRight className="w-6 h-6 text-slate-400 group-hover:text-brand transition-colors" />
            </Link>
            
            <Link 
              to="/competitive-exams"
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md border border-slate-100 transition-all flex items-center justify-between group"
            >
              <div>
                <h2 className="text-2xl font-bold text-slate-800 group-hover:text-brand transition-colors">Competitive Exams</h2>
                <p className="text-slate-500 mt-2">Preparation for national level examinations.</p>
              </div>
              <ChevronRight className="w-6 h-6 text-slate-400 group-hover:text-brand transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
