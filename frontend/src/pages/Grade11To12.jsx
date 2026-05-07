import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

export default function Grade11To12() {
  return (
    <>
      <Helmet>
        <title>Grade 11th & 12th - All Boards | EdTraining</title>
        <meta name="description" content="Academic courses for 11th and 12th Grade covering all major boards with specialized subjects." />
        <link rel="canonical" href="https://www.theedtraining.com/grade-11th-to-12th-all-boards" />
      </Helmet>

      <div className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">11th to 12th Grade - All Boards</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Specialized senior secondary education preparing students for board excellence and future careers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-slate-50 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-4">Boards Covered</h2>
              <ul className="space-y-4">
                {['CBSE', 'ICSE', 'Karnataka', 'Maharashtra'].map((board) => (
                  <li key={board} className="flex items-center text-lg text-slate-700">
                    <CheckCircle2 className="w-6 h-6 text-brand mr-3 flex-shrink-0" />
                    {board}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-4">Subjects</h2>
              <ul className="space-y-4">
                <li className="flex items-center text-lg text-slate-700">
                  <CheckCircle2 className="w-6 h-6 text-brand mr-3 flex-shrink-0" />
                  Physics
                </li>
                <li className="flex items-center text-lg text-slate-700">
                  <CheckCircle2 className="w-6 h-6 text-brand mr-3 flex-shrink-0" />
                  Chemistry
                </li>
                <li className="flex items-center text-lg text-slate-700">
                  <CheckCircle2 className="w-6 h-6 text-brand mr-3 flex-shrink-0" />
                  Mathematics / Biology
                </li>
                <li className="flex items-center text-lg text-slate-700">
                  <CheckCircle2 className="w-6 h-6 text-brand mr-3 flex-shrink-0" />
                  Optional Subjects
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-brand/5 border border-brand/10 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Delivery Pattern</h2>
            <div className="text-lg text-slate-700 space-y-4 font-medium">
              <p>All the chapters and streams -</p>
              <p className="text-brand-dark bg-white inline-block px-6 py-3 rounded-xl shadow-sm border border-brand/20">
                Weekly 2 Classes - Monthly Tests - Completion of syllabus and Exam Preparations
              </p>
            </div>
            
            <div className="mt-10">
              <Link to="/booking-a-demo-class" className="inline-block bg-brand hover:bg-brand-dark text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-lg hover:shadow-xl">
                Book a demo class now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
