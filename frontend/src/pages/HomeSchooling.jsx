import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

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
      const API_URL = import.meta.env.VITE_API_URL || 'https://edtraining.onrender.com';
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

      <div className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            <div>
              <h1 className="text-4xl md:text-6xl font-serif font-black text-[#1C1C1C] mb-8 leading-tight">
                Home <br/> Schooling
              </h1>
              <p className="text-xl text-[#4A4A4A] font-serif mb-10 leading-relaxed border-b-2 border-dashed border-[#1C1C1C] pb-8">
                A perfect blend of traditional and modern online learning. We provide live classes, regular assignments, comprehensive assessments, and dedicated mentorship, giving you complete flexibility.
              </p>

              <div className="bg-[#FEF08A] border-4 border-[#1C1C1C] p-6 mb-12 shadow-[6px_6px_0px_rgba(28,28,28,1)] -rotate-1 relative">
                <div className="absolute -top-3 left-6 w-12 h-6 bg-white/50 border-2 border-dashed border-[#1C1C1C] rotate-3 backdrop-blur-sm shadow-sm"></div>
                <p className="text-xl font-mono font-bold text-[#1C1C1C] uppercase tracking-wide leading-relaxed">
                  "Every Student has a different learning speed!"
                </p>
              </div>

              <div className="space-y-8 mb-12 border-l-4 border-dashed border-[#d1d5db] ml-4 pl-8 relative">
                <div className="relative">
                  <span className="absolute -left-[54px] top-0 bg-[#1C1C1C] text-[#FDFBF7] font-mono font-bold w-10 h-10 flex items-center justify-center border-2 border-[#1C1C1C] shadow-[2px_2px_0px_rgba(28,28,28,1)] rotate-3">
                    1
                  </span>
                  <h2 className="text-xl font-mono font-bold text-[#1C1C1C] mb-2 uppercase tracking-wider">
                    Individual meeting
                  </h2>
                  <p className="text-[#4A4A4A] font-serif text-lg">Personalized consultation to understand the student's unique learning needs and goals.</p>
                </div>
                
                <div className="relative">
                  <span className="absolute -left-[54px] top-0 bg-[#1C1C1C] text-[#FDFBF7] font-mono font-bold w-10 h-10 flex items-center justify-center border-2 border-[#1C1C1C] shadow-[2px_2px_0px_rgba(28,28,28,1)] -rotate-2">
                    2
                  </span>
                  <h2 className="text-xl font-mono font-bold text-[#1C1C1C] mb-2 uppercase tracking-wider">
                    Signing the contract
                  </h2>
                  <p className="text-[#4A4A4A] font-serif text-lg">Formalizing the customized learning path and schedule.</p>
                </div>
              </div>

              <h3 className="text-2xl font-mono font-bold text-[#1C1C1C] mb-6 uppercase tracking-wider inline-block border-b-4 border-[#FBCFE8] pb-1">
                Who is this for?
              </h3>
              <ul className="space-y-4 mb-10 font-serif text-lg text-[#1C1C1C]">
                <li className="flex items-start">
                  <span className="text-[#D32F2F] font-bold mr-3 mt-1 text-xl leading-none">×</span>
                  Individualized learning preference
                </li>
                <li className="flex items-start">
                  <span className="text-[#D32F2F] font-bold mr-3 mt-1 text-xl leading-none">×</span>
                  Independent board prep
                </li>
                <li className="flex items-start">
                  <span className="text-[#D32F2F] font-bold mr-3 mt-1 text-xl leading-none">×</span>
                  Flexibility for sports/arts professionals
                </li>
                <li className="flex items-start">
                  <span className="text-[#D32F2F] font-bold mr-3 mt-1 text-xl leading-none">×</span>
                  Alternative family education
                </li>
              </ul>

              <div className="bg-[#FDFBF7] border-2 border-dashed border-[#1C1C1C] p-6 text-center shadow-[4px_4px_0px_rgba(28,28,28,1)] rotate-1 mb-10">
                <span className="font-serif italic text-lg text-[#4A4A4A]">
                  Fostering "creative, courageous, respectful student development"
                </span>
              </div>
              
              <div>
                <Link to="/contact" className="font-mono font-bold uppercase tracking-wider text-[#1C1C1C] bg-[#A7F3D0] border-2 border-[#1C1C1C] px-6 py-3 shadow-[4px_4px_0px_rgba(28,28,28,1)] hover:shadow-[6px_6px_0px_rgba(28,28,28,1)] hover:-translate-y-1 transition-all inline-flex items-center gap-2">
                  Connect with us now <span className="text-[#D32F2F] text-xl leading-none">→</span>
                </Link>
              </div>
            </div>

            <div className="bg-[#FDFBF7] p-8 md:p-10 border-4 border-[#1C1C1C] shadow-[12px_12px_0px_rgba(28,28,28,1)] sticky top-28 rotate-1">
              <h2 className="text-2xl md:text-3xl font-mono font-black text-[#1C1C1C] mb-8 uppercase tracking-widest border-b-4 border-[#1C1C1C] pb-4">
                Consultation Form
              </h2>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-mono font-bold uppercase tracking-wider text-[#1C1C1C] mb-2">Full Name</label>
                  <input
                    {...register('fullName')}
                    className="w-full px-4 py-3 bg-[#F4F4F0] border-2 border-[#1C1C1C] focus:bg-[#FEF08A] focus:outline-none transition-colors font-serif text-lg text-[#1C1C1C]"
                  />
                  {errors.fullName && <p className="text-[#D32F2F] font-mono text-sm mt-2 font-bold uppercase">{errors.fullName.message}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-mono font-bold uppercase tracking-wider text-[#1C1C1C] mb-2">Contact Number</label>
                  <input
                    {...register('contactNumber')}
                    className="w-full px-4 py-3 bg-[#F4F4F0] border-2 border-[#1C1C1C] focus:bg-[#FEF08A] focus:outline-none transition-colors font-serif text-lg text-[#1C1C1C]"
                  />
                  {errors.contactNumber && <p className="text-[#D32F2F] font-mono text-sm mt-2 font-bold uppercase">{errors.contactNumber.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-mono font-bold uppercase tracking-wider text-[#1C1C1C] mb-2">Email</label>
                  <input
                    type="email"
                    {...register('email')}
                    className="w-full px-4 py-3 bg-[#F4F4F0] border-2 border-[#1C1C1C] focus:bg-[#FEF08A] focus:outline-none transition-colors font-serif text-lg text-[#1C1C1C]"
                  />
                  {errors.email && <p className="text-[#D32F2F] font-mono text-sm mt-2 font-bold uppercase">{errors.email.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-mono font-bold uppercase tracking-wider text-[#1C1C1C] mb-2">Message</label>
                  <textarea
                    rows={4}
                    {...register('message')}
                    className="w-full px-4 py-3 bg-[#F4F4F0] border-2 border-[#1C1C1C] focus:bg-[#FEF08A] focus:outline-none transition-colors font-serif text-lg text-[#1C1C1C] resize-none"
                  />
                  {errors.message && <p className="text-[#D32F2F] font-mono text-sm mt-2 font-bold uppercase">{errors.message.message}</p>}
                </div>

                <motion.button
                  whileHover={{ y: status === 'submitting' ? 0 : -4, x: status === 'submitting' ? 0 : -4 }}
                  whileTap={{ y: status === 'submitting' ? 0 : 2, x: status === 'submitting' ? 0 : 2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-[#1C1C1C] text-[#FDFBF7] font-mono font-bold text-lg uppercase tracking-widest py-4 px-4 border-4 border-[#1C1C1C] shadow-[8px_8px_0px_rgba(254,240,138,1)] hover:shadow-[10px_10px_0px_rgba(254,240,138,1)] transition-shadow disabled:opacity-50 disabled:shadow-[4px_4px_0px_rgba(254,240,138,1)] disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? 'Submitting...' : 'Submit Request'}
                </motion.button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}