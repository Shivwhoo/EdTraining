import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Target, BookOpen, Award } from 'lucide-react';

export default function CompetitiveExams() {
  return (
    <>
      <Helmet>
        <title>Competitive Exams | EdTraining</title>
        <meta name="description" content="Preparation for all national level examinations including DHBBC, KCET, and Olympiad." />
        <link rel="canonical" href="https://www.theedtraining.com/competitive-exams" />
      </Helmet>

      <div className="py-20 bg-slate-50 min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Competitive Examinations</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive preparation for all national level examinations to secure your future.
            </p>
          </div>

          <div className="space-y-8 mb-16">
            {/* KCET Card (Fixed Order) */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8 items-start">
              <div className="w-16 h-16 bg-brand/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Target className="w-8 h-8 text-brand" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">KCET</h2>
                <p className="text-lg text-slate-700 mb-4 font-medium">Karnataka Common Entrance Test for 12th (2nd PUC)</p>
                <div className="inline-block bg-slate-100 text-slate-700 px-4 py-2 rounded-lg font-medium text-sm">
                  Weekly 2 classes + weekly tests
                </div>
              </div>
            </div>

            {/* DHBBC Card */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8 items-start">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">DHBBC</h2>
                <p className="text-lg text-slate-700 mb-4 font-medium">Dr. Homi Bhabha Balvaidnyanik Competition (classes 6th and 9th)</p>
                <div className="inline-block bg-slate-100 text-slate-700 px-4 py-2 rounded-lg font-medium text-sm">
                  Weekly 1 class + weekly tests
                </div>
              </div>
            </div>

            {/* Olympiad Card */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8 items-start">
              <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Award className="w-8 h-8 text-orange-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Olympiad Examination</h2>
                <p className="text-lg text-slate-700 mb-4 font-medium">IMO and NSO for classes 8th and 12th</p>
                <div className="inline-block bg-slate-100 text-slate-700 px-4 py-2 rounded-lg font-medium text-sm">
                  Weekly 2 classes + monthly tests
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link to="/booking-a-demo-class" className="inline-block bg-brand hover:bg-brand-dark text-white px-10 py-4 rounded-full text-lg font-bold transition-all shadow-lg hover:shadow-xl">
              Book a demo class now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
