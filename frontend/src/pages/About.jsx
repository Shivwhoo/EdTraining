import { Helmet } from 'react-helmet-async';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | EdTraining</title>
        <meta name="description" content="About EdTraining - bridging academic learning and real-world success." />
        <link rel="canonical" href="https://www.theedtraining.com/about" />
      </Helmet>

      <div className="py-20 bg-slate-50 min-h-[70vh]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">About EdTraining</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We are dedicated to bridging academic learning and real-world success through personalized guidance and flexible online programs.
            </p>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm text-lg text-slate-700 leading-relaxed space-y-6">
            <p>
              At EdTraining, education isn't just about what you learn — it's about who you become. Our mission is to empower students with the knowledge and skills necessary to thrive in an ever-changing world.
            </p>
            <p>
              Our platform model integrates regular academic programs with career-focused mentorship. We offer a flexible subscription model that allows you to pay only for what you need, ensuring education is accessible and customized to individual pacing.
            </p>
            <p>
              From Home Schooling programs providing alternative education pathways to intensive Competitive Exam Training for JEE, NEET, KCET, and Olympiads, EdTraining is your partner in holistic academic growth.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
