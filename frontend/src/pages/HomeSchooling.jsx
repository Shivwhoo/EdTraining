import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { toast } from 'sonner';

const schema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  contactNumber: z.string().min(10, 'Valid contact number is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(1, 'Message is required'),
});

export default function HomeSchooling() {
  const [status, setStatus] = useState('');
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(schema)
  });

  const onSubmit = async (data) => {
    setStatus('submitting');
    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const res = await fetch(`${API_URL}/api/homeschool-consult`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus('success');
        toast.success('Request submitted successfully!');
        reset();
      } else {
        setStatus('error');
        toast.error('Something went wrong. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <>
      <Helmet>
        <title>Home Schooling | EdTraining</title>
        <meta name="description" content="Blend of traditional and modern online learning with our Home Schooling program." />
        <link rel="canonical" href="https://www.theedtraining.com/home-schooling" />
      </Helmet>

      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Content */}
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Home Schooling</h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                A perfect blend of traditional and modern online learning. We provide live classes, regular assignments, comprehensive assessments, and dedicated mentorship, giving you complete flexibility.
              </p>

              <div className="bg-brand-light border-l-4 border-brand p-6 mb-10 rounded-r-xl">
                <p className="text-xl font-bold text-slate-900">"Every Student have different learning speed!"</p>
              </div>

              <div className="space-y-8 mb-10">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-3">
                    <span className="bg-brand text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                    Individual meeting
                  </h2>
                  <p className="text-slate-600 pl-11">Personalized consultation to understand the student's unique learning needs and goals.</p>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-3">
                    <span className="bg-brand text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                    Signing the contract
                  </h2>
                  <p className="text-slate-600 pl-11">Formalizing the customized learning path and schedule.</p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-4">Who is this for?</h3>
              <ul className="list-disc list-inside text-slate-600 space-y-2 mb-8 ml-2">
                <li>Individualized learning preference</li>
                <li>Independent board prep</li>
                <li>Flexibility for sports/arts professionals</li>
                <li>Alternative family education</li>
              </ul>

              <div className="bg-slate-50 p-6 rounded-xl italic text-slate-700 text-center font-medium">
                Fostering "creative, courageous, respectful student development"
              </div>
              
              <div className="mt-8">
                <Link to="/contact" className="text-brand hover:text-brand-dark font-semibold text-lg flex items-center gap-2">
                  Connect with us now &rarr;
                </Link>
              </div>
            </div>

            {/* Right Form */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm sticky top-24">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Register for consultation now</h2>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                  <input
                    {...register('fullName')}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all"
                  />
                  {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Contact Number</label>
                  <input
                    {...register('contactNumber')}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all"
                  />
                  {errors.contactNumber && <p className="text-red-500 text-sm mt-1">{errors.contactNumber.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input
                    type="email"
                    {...register('email')}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                  <textarea
                    rows={4}
                    {...register('message')}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all"
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-brand hover:bg-brand-dark text-white font-bold py-3 px-4 rounded-xl transition-all shadow-md hover:shadow-lg disabled:opacity-50"
                >
                  {status === 'submitting' ? 'Submitting...' : 'Submit Request'}
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
