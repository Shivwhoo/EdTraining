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
  phoneNumber: z.string().min(10, 'Valid phone number is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(1, 'Message is required'),
});

export default function Contact() {
  const [status, setStatus] = useState('');
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(schema)
  });

  const onSubmit = async (data) => {
    setStatus('submitting');
    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus('success');
        toast.success('Message sent successfully!');
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
        <title>Contact | EdTraining</title>
        <meta name="description" content="Connect with us now for registration and open-day questions." />
        <link rel="canonical" href="https://www.theedtraining.com/contact" />
      </Helmet>

      {/* Removed bg-slate-50 to let the global dot grid show through */}
      <div className="py-20 lg:py-32 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-serif font-black text-[#1C1C1C] mb-8 leading-tight">
              Connect with <br className="hidden md:block"/>
              <span className="bg-[#A7F3D0] px-6 py-2 inline-block border-4 border-[#1C1C1C] shadow-[6px_6px_0px_rgba(28,28,28,1)] -rotate-2 mt-4 font-mono uppercase tracking-tight">
                us now
              </span>
            </h1>
            <p className="text-xl text-[#4A4A4A] max-w-2xl mx-auto font-serif border-b-2 border-dashed border-[#1C1C1C] pb-8 mt-8 leading-relaxed">
              Have questions about registration or our upcoming open-day? We're here to help. Reach out to us through the form below.
            </p>
          </div>

          <motion.div 
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="bg-[#FDFBF7] p-8 md:p-12 border-4 border-[#1C1C1C] shadow-[12px_12px_0px_rgba(28,28,28,1)] relative mb-24 rotate-1"
          >
            {/* Faux Tape */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-white/60 border-2 border-dashed border-[#1C1C1C] rotate-2 backdrop-blur-sm shadow-sm z-10"></div>
            
            <h2 className="text-2xl font-mono font-bold text-[#1C1C1C] mb-8 uppercase tracking-widest border-b-4 border-[#1C1C1C] pb-4 inline-block">
              Contact us
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 relative z-0">
              <div className="grid md:grid-cols-2 gap-8 md:gap-6">
                <div>
                  <label className="block text-sm font-mono font-bold uppercase tracking-wider text-[#1C1C1C] mb-2">
                    Full Name <span className="text-[#D32F2F] text-lg leading-none">*</span>
                  </label>
                  <input
                    {...register('fullName')}
                    className="w-full px-4 py-3 bg-[#F4F4F0] border-2 border-[#1C1C1C] focus:bg-[#FEF08A] focus:outline-none transition-colors font-serif text-lg text-[#1C1C1C]"
                  />
                  {errors.fullName && <p className="text-[#D32F2F] font-mono text-sm mt-2 font-bold uppercase">{errors.fullName.message}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-mono font-bold uppercase tracking-wider text-[#1C1C1C] mb-2">
                    Phone Number <span className="text-[#D32F2F] text-lg leading-none">*</span>
                  </label>
                  <input
                    {...register('phoneNumber')}
                    className="w-full px-4 py-3 bg-[#F4F4F0] border-2 border-[#1C1C1C] focus:bg-[#FEF08A] focus:outline-none transition-colors font-serif text-lg text-[#1C1C1C]"
                  />
                  {errors.phoneNumber && <p className="text-[#D32F2F] font-mono text-sm mt-2 font-bold uppercase">{errors.phoneNumber.message}</p>}
                </div>
              </div>

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
                  Message <span className="text-[#D32F2F] text-lg leading-none">*</span>
                </label>
                <textarea
                  rows={5}
                  {...register('message')}
                  className="w-full px-4 py-3 bg-[#F4F4F0] border-2 border-[#1C1C1C] focus:bg-[#FEF08A] focus:outline-none transition-colors font-serif text-lg text-[#1C1C1C] resize-none"
                />
                {errors.message && <p className="text-[#D32F2F] font-mono text-sm mt-2 font-bold uppercase">{errors.message.message}</p>}
              </div>

              <div className="pt-4 flex justify-start">
                <motion.button
                  whileHover={{ y: status === 'submitting' ? 0 : -4, x: status === 'submitting' ? 0 : -4 }}
                  whileTap={{ y: status === 'submitting' ? 0 : 2, x: status === 'submitting' ? 0 : 2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full md:w-auto bg-[#1C1C1C] text-[#FDFBF7] font-mono font-bold text-xl uppercase tracking-widest py-4 px-12 border-4 border-[#1C1C1C] shadow-[8px_8px_0px_rgba(167,243,208,1)] hover:shadow-[10px_10px_0px_rgba(167,243,208,1)] transition-shadow disabled:opacity-50 disabled:shadow-[4px_4px_0px_rgba(167,243,208,1)] disabled:cursor-not-allowed inline-block"
                >
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </motion.button>
              </div>
            </form>
          </motion.div>

          <div className="text-center pt-8 border-t-4 border-[#1C1C1C]">
            <p className="text-xl text-[#4A4A4A] font-serif mb-8">Ready to jump straight in?</p>
            <motion.div whileHover={{ y: -4, x: -4 }} whileTap={{ y: 2, x: 2 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className="inline-block">
              <Link 
                to="/booking-a-demo-class" 
                className="bg-[#FBCFE8] text-[#1C1C1C] px-10 py-5 text-lg font-mono font-bold uppercase tracking-wider shadow-[8px_8px_0px_rgba(28,28,28,1)] hover:shadow-[10px_10px_0px_rgba(28,28,28,1)] transition-shadow inline-block border-4 border-[#1C1C1C] -rotate-1"
              >
                Book A demo Class
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </>
  );
}