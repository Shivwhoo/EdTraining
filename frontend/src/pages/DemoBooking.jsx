import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';

const schema = z.object({
  studentName: z.string().optional(),
  parentGuardianName: z.string().optional(),
  studentContactNumber: z.string().min(10, 'Valid contact number is required'),
  parentContactNumber: z.string().optional(),
  email: z.string().email('Invalid email address'),
  subjectCategory: z.enum([
    "Classes 8th to 10th (All Boards)",
    "Classes 11th to 12th (All Boards)",
    "Competitive Exams",
    "Career Guidance",
    "Engineering (All Branches)",
    "BBA, BCA, BCom, MCom, MCA"
  ], { required_error: 'Please select a category' }),
  message: z.string().min(1, 'Message is required'),
});

export default function DemoBooking() {
  const [status, setStatus] = useState('');
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(schema)
  });

  const onSubmit = async (data) => {
    setStatus('submitting');
    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const res = await fetch(`${API_URL}/api/demo-booking`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus('success');
        reset();
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <>
      <Helmet>
        <title>Booking a Demo Class | EdTraining</title>
        <meta name="description" content="Register for a Demo Class with EdTraining." />
        <link rel="canonical" href="https://www.theedtraining.com/booking-a-demo-class" />
      </Helmet>

      <div className="py-20 bg-slate-50 min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Register for Demo Class</h1>
            <p className="text-lg text-slate-600">
              Experience our teaching methodology firsthand. Fill out the form below to schedule your demo class.
            </p>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm mb-16">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Student Name (Optional)</label>
                  <input
                    {...register('studentName')}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Parent/Guardian Name (Optional)</label>
                  <input
                    {...register('parentGuardianName')}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Student Contact Number *</label>
                  <input
                    {...register('studentContactNumber')}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all"
                  />
                  {errors.studentContactNumber && <p className="text-red-500 text-sm mt-1">{errors.studentContactNumber.message}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Parent Contact Number (Optional)</label>
                  <input
                    {...register('parentContactNumber')}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
                  <input
                    type="email"
                    {...register('email')}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Subject Category *</label>
                  <select
                    {...register('subjectCategory')}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all bg-white"
                  >
                    <option value="">Select a category</option>
                    <option value="Classes 8th to 10th (All Boards)">Classes 8th to 10th (All Boards)</option>
                    <option value="Classes 11th to 12th (All Boards)">Classes 11th to 12th (All Boards)</option>
                    <option value="Competitive Exams">Competitive Exams</option>
                    <option value="Career Guidance">Career Guidance</option>
                    <option value="Engineering (All Branches)">Engineering (All Branches)</option>
                    <option value="BBA, BCA, BCom, MCom, MCA">BBA, BCA, BCom, MCom, MCA</option>
                  </select>
                  {errors.subjectCategory && <p className="text-red-500 text-sm mt-1">{errors.subjectCategory.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Message *</label>
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
                className="w-full bg-brand hover:bg-brand-dark text-white font-bold py-4 rounded-xl transition-all shadow-md hover:shadow-lg disabled:opacity-50 text-lg"
              >
                {status === 'submitting' ? 'Submitting...' : 'Register Now'}
              </button>
              
              {status === 'success' && <p className="text-green-600 text-center font-medium">Demo class requested successfully!</p>}
              {status === 'error' && <p className="text-red-600 text-center font-medium">Something went wrong. Please try again.</p>}
            </form>
          </div>

          <div className="text-center pb-10">
            <p className="text-slate-400 font-medium uppercase tracking-wider mb-4 text-sm">Our Partners</p>
            <div className="flex justify-center gap-8 opacity-50 grayscale">
              <div className="h-8 w-24 bg-slate-300 rounded"></div>
              <div className="h-8 w-24 bg-slate-300 rounded"></div>
              <div className="h-8 w-24 bg-slate-300 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
