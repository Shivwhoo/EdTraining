import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

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
      const API_URL = import.meta.env.VITE_API_URL || 'https://edtraining.onrender.com';
      const res = await fetch(`${API_URL}/api/demo-booking`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus('success');
        toast.success('Demo class requested successfully!');
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
        <title>Booking a Demo Class | EdTraining</title>
        <meta name="description" content="Register for a Demo Class with EdTraining." />
        <link rel="canonical" href="https://www.theedtraining.com/booking-a-demo-class" />
      </Helmet>

      {/* Removed bg-slate-50 to let the global dot-grid show through */}
      <div className="py-20 lg:py-32 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-serif font-black text-[#1C1C1C] mb-8 leading-tight">
              Register for <br className="hidden md:block"/>
              <span className="bg-[#FEF08A] px-6 py-2 inline-block border-4 border-[#1C1C1C] shadow-[6px_6px_0px_rgba(28,28,28,1)] rotate-2 mt-4 font-mono uppercase tracking-tight">
                Demo Class
              </span>
            </h1>
            <p className="text-xl text-[#4A4A4A] max-w-2xl mx-auto font-serif border-b-2 border-dashed border-[#1C1C1C] pb-8 mt-8">
              Experience our teaching methodology firsthand. Fill out the form below to schedule your session.
            </p>
          </div>

          <motion.div 
            initial={{ rotate: 1 }}
            animate={{ rotate: -1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="bg-[#FDFBF7] p-8 md:p-12 border-4 border-[#1C1C1C] shadow-[12px_12px_0px_rgba(28,28,28,1)] relative mb-20"
          >
            {/* Faux Tape */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-white/60 border-2 border-dashed border-[#1C1C1C] rotate-1 backdrop-blur-sm shadow-sm z-10"></div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 relative z-0">
              
              <div className="grid md:grid-cols-2 gap-8 md:gap-6">
                <div>
                  <label className="block text-sm font-mono font-bold uppercase tracking-wider text-[#1C1C1C] mb-2">
                    Student Name <span className="text-[#4A4A4A] font-normal text-xs">(Optional)</span>
                  </label>
                  <input
                    {...register('studentName')}
                    className="w-full px-4 py-3 bg-[#F4F4F0] border-2 border-[#1C1C1C] focus:bg-[#FEF08A] focus:outline-none transition-colors font-serif text-lg text-[#1C1C1C]"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-mono font-bold uppercase tracking-wider text-[#1C1C1C] mb-2">
                    Parent/Guardian Name <span className="text-[#4A4A4A] font-normal text-xs">(Optional)</span>
                  </label>
                  <input
                    {...register('parentGuardianName')}
                    className="w-full px-4 py-3 bg-[#F4F4F0] border-2 border-[#1C1C1C] focus:bg-[#FEF08A] focus:outline-none transition-colors font-serif text-lg text-[#1C1C1C]"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 md:gap-6">
                <div>
                  <label className="block text-sm font-mono font-bold uppercase tracking-wider text-[#1C1C1C] mb-2">
                    Student Contact <span className="text-[#D32F2F] text-lg leading-none">*</span>
                  </label>
                  <input
                    {...register('studentContactNumber')}
                    className="w-full px-4 py-3 bg-[#F4F4F0] border-2 border-[#1C1C1C] focus:bg-[#FEF08A] focus:outline-none transition-colors font-serif text-lg text-[#1C1C1C]"
                  />
                  {errors.studentContactNumber && <p className="text-[#D32F2F] font-mono text-sm mt-2 font-bold uppercase">{errors.studentContactNumber.message}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-mono font-bold uppercase tracking-wider text-[#1C1C1C] mb-2">
                    Parent Contact <span className="text-[#4A4A4A] font-normal text-xs">(Optional)</span>
                  </label>
                  <input
                    {...register('parentContactNumber')}
                    className="w-full px-4 py-3 bg-[#F4F4F0] border-2 border-[#1C1C1C] focus:bg-[#FEF08A] focus:outline-none transition-colors font-serif text-lg text-[#1C1C1C]"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 md:gap-6">
                <div>
                  <label className="block text-sm font-mono font-bold uppercase tracking-wider text-[#1C1C1C] mb-2">
                    Email <span className="text-[#D32F2F] text-lg leading-none">*</span>
                  </label>
                  <input
                    type="email"
                    {...register('email')}
                    className="w-full px-4 py-3 bg-[#F4F4F0] border-2 border-[#1C1C1C] focus:bg-[#FEF08A] focus:outline-none transition-colors font-serif text-lg text-[#1C1C1C]"
                  />
                  {errors.email && <p className="text-[#D32F2F] font-mono text-sm mt-2 font-bold uppercase">{errors.email.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-mono font-bold uppercase tracking-wider text-[#1C1C1C] mb-2">
                    Subject Category <span className="text-[#D32F2F] text-lg leading-none">*</span>
                  </label>
                  <div className="relative">
                    <select
                      {...register('subjectCategory')}
                      className="w-full px-4 py-3 bg-[#F4F4F0] border-2 border-[#1C1C1C] focus:bg-[#FEF08A] focus:outline-none transition-colors font-serif text-lg text-[#1C1C1C] appearance-none cursor-pointer"
                    >
                      <option value="">Select a category</option>
                      <option value="Classes 8th to 10th (All Boards)">Classes 8th to 10th (All Boards)</option>
                      <option value="Classes 11th to 12th (All Boards)">Classes 11th to 12th (All Boards)</option>
                      <option value="Competitive Exams">Competitive Exams</option>
                      <option value="Career Guidance">Career Guidance</option>
                      <option value="Engineering (All Branches)">Engineering (All Branches)</option>
                      <option value="BBA, BCA, BCom, MCom, MCA">BBA, BCA, BCom, MCom, MCA</option>
                    </select>
                    {/* Custom Dropdown Arrow to fit the brutalist theme */}
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#1C1C1C] font-mono font-bold">
                      ▼
                    </div>
                  </div>
                  {errors.subjectCategory && <p className="text-[#D32F2F] font-mono text-sm mt-2 font-bold uppercase">{errors.subjectCategory.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-mono font-bold uppercase tracking-wider text-[#1C1C1C] mb-2">
                  Message <span className="text-[#D32F2F] text-lg leading-none">*</span>
                </label>
                <textarea
                  rows={5}
                  {...register('message')}
                  className="w-full px-4 py-3 bg-[#F4F4F0] border-2 border-[#1C1C1C] focus:bg-[#FEF08A] focus:outline-none transition-colors font-serif text-lg text-[#1C1C1C] resize-none"
                />
                {errors.message && <p className="text-[#D32F2F] font-mono text-sm mt-2 font-bold uppercase">{errors.message.message}</p>}
              </div>

              <div className="pt-6">
                <motion.button
                  whileHover={{ y: status === 'submitting' ? 0 : -4, x: status === 'submitting' ? 0 : -4 }}
                  whileTap={{ y: status === 'submitting' ? 0 : 2, x: status === 'submitting' ? 0 : 2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-[#1C1C1C] text-[#FDFBF7] font-mono font-bold text-xl uppercase tracking-widest py-5 px-4 border-4 border-[#1C1C1C] shadow-[8px_8px_0px_rgba(254,240,138,1)] hover:shadow-[10px_10px_0px_rgba(254,240,138,1)] transition-shadow disabled:opacity-50 disabled:shadow-[4px_4px_0px_rgba(254,240,138,1)] disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin mr-2 text-[#FEF08A]" />
                      Submitting...
                    </>
                  ) : 'Register Now'}
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Restyled Partners Section */}
          <div className="text-center pb-10 flex flex-col items-center">
            <span className="bg-[#FDFBF7] border-2 border-[#1C1C1C] text-[#1C1C1C] font-mono font-bold uppercase tracking-wider mb-8 text-sm inline-block px-4 py-1 -rotate-2 shadow-[2px_2px_0px_rgba(28,28,28,1)]">
              Our Partners
            </span>
            
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 bg-[#FDFBF7] border-2 border-dashed border-[#1C1C1C] p-6 shadow-[8px_8px_0px_rgba(28,28,28,1)] rotate-1 hover:rotate-0 transition-transform">
              <a href="https://theedmentor.com/" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
                <img src="/edMentor.avif" alt="EdMentor" className="h-8 md:h-10 w-auto mix-blend-multiply" />
              </a>
              <a href="https://theedcompass.com/" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
                <img src="/edCompass.avif" alt="EdCompass" className="h-8 md:h-10 w-auto mix-blend-multiply" />
              </a>
              <a href="https://meraminds.com/" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
                <img src="/meramind.avif" alt="MeraMinds" className="h-8 md:h-10 w-auto mix-blend-multiply" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}