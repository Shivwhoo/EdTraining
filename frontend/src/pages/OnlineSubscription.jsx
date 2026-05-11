import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Target, TrendingUp, RefreshCw, CheckCircle2, MonitorPlay, Zap, BookOpen, X, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

export default function OnlineSubscription() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
  });

  // Load Razorpay Script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const steps = [
    {
      title: 'Choose Your Plan',
      description: 'Select a subscription tier based on your board, grade, or specific learning needs.',
      icon: Target,
      color: 'text-[#1C1C1C]',
      bg: 'bg-[#bfdbfe]',
    },
    {
      title: 'Learn at Your Pace',
      description: 'Access live sessions, recorded modules, and interactive materials whenever you want.',
      icon: MonitorPlay,
      color: 'text-[#1C1C1C]',
      bg: 'bg-[#FEF08A]',
    },
    {
      title: 'Track Your Progress',
      description: 'Get detailed insights into your strengths and areas needing improvement with guided tracking.',
      icon: TrendingUp,
      color: 'text-[#1C1C1C]',
      bg: 'bg-[#A7F3D0]',
    },
    {
      title: 'Upgrade Anytime',
      description: 'Need more subjects or intensive mentorship? Adjust your subscription on the fly.',
      icon: RefreshCw,
      color: 'text-[#1C1C1C]',
      bg: 'bg-[#FBCFE8]',
    },
  ];

  const tiers = [
    {
      name: 'Concept Assistance',
      badge: 'Most Flexible',
      description: 'Perfect for students who only need help with specific concepts or subjects on-demand.',
      features: [
        'Pay per module or concept',
        'Access to recorded micro-lessons',
        '1-on-1 doubt clearing sessions',
        'No long-term commitment',
      ],
      icon: Zap,
      amount: 4,
    },
    {
      name: 'CBSE Master Package',
      badge: 'Popular',
      description: 'Comprehensive coverage of the entire CBSE curriculum with structured mentorship.',
      features: [
        'Complete CBSE syllabus access',
        'Live interactive classes',
        'Weekly assignments & mock tests',
        'Personalized progress tracking',
      ],
      icon: BookOpen,
      popular: true,
      amount: 4,
    },
    {
      name: 'ICSE Master Package',
      badge: 'Rigorous',
      description: 'In-depth learning aligned perfectly with the rigorous ICSE board requirements.',
      features: [
        'Complete ICSE syllabus access',
        'Advanced problem-solving modules',
        'Dedicated mentorship support',
        'Extensive question banks',
      ],
      icon: CheckCircle2,
      amount: 4,
    },
  ];

  const handleSubscribeClick = (tier) => {
    setSelectedPlan(tier);
    setIsModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    if (!window.Razorpay) {
      toast.error("Razorpay SDK failed to load. Are you online?");
      return;
    }

    setIsLoading(true);
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'https://edtraining.onrender.com';
      
      const orderRes = await fetch(`${apiUrl}/api/payment/create-order`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          planName: selectedPlan.name,
          amount: selectedPlan.amount
        })
      });

      const orderData = await orderRes.json();
      
      if (!orderData.success) {
        throw new Error(orderData.errors ? orderData.errors.map(e => e.message).join(', ') : orderData.error);
      }

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: orderData.order.amount,
        currency: orderData.order.currency,
        name: "EdTraining",
        description: `Subscription: ${selectedPlan.name}`,
        order_id: orderData.order.id,
        handler: async function (response) {
          try {
            const verifyRes = await fetch(`${apiUrl}/api/payment/verify`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_signature: response.razorpay_signature,
              })
            });

            const verifyData = await verifyRes.json();
            
            if (verifyData.success) {
              toast.success("Payment Successful! Welcome to EdTraining. Please check your email for confirmation.");
              setIsModalOpen(false);
              setFormData({ fullName: '', email: '', phone: '' });
            } else {
              toast.error("Payment verification failed. Please contact support.");
            }
          } catch (err) {
            console.error(err);
            toast.error("Error verifying payment.");
          }
        },
        prefill: {
          name: formData.fullName,
          email: formData.email,
          contact: formData.phone
        },
        theme: {
          color: "#1C1C1C" 
        }
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.on('payment.failed', function (response) {
        toast.error("Payment failed: " + response.error.description);
      });
      paymentObject.open();

    } catch (error) {
      console.error(error);
      toast.error("Error: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Online Subscriptions | EdTraining</title>
        <meta name="description" content="Explore flexible, subscription-based learning packages at EdTraining. Choose, learn, track, and upgrade on your terms." />
        <link rel="canonical" href="https://www.theedtraining.com/online-subscription" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 overflow-hidden border-b-4 border-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="inline-block bg-[#1C1C1C] text-[#FDFBF7] font-mono font-bold uppercase tracking-widest px-4 py-2 mb-8 -rotate-2 shadow-[4px_4px_0px_rgba(254,240,138,1)]">
            REVOLUTIONIZING EDUCATION
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-black text-[#1C1C1C] mb-10 leading-tight">
            Education on Your Terms.<br className="hidden md:block" />
            <span className="bg-[#A7F3D0] inline-block px-4 py-1 mt-4 border-4 border-[#1C1C1C] shadow-[8px_8px_0px_rgba(28,28,28,1)] rotate-1 font-mono uppercase tracking-tight">
              Pay Only For What You Use.
            </span>
          </h1>
          
          <p className="mt-8 text-xl text-[#4A4A4A] max-w-3xl mx-auto mb-12 font-serif border-b-2 border-dashed border-[#1C1C1C] pb-8 leading-relaxed">
            Say goodbye to rigid traditional courses. Discover flexible, subscription-based learning packages designed around your specific academic goals and timeline.
          </p>
          
          <div className="flex justify-center">
            <motion.div whileHover={{ y: -4, x: -4 }} whileTap={{ y: 2, x: 2 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <a href="#explore-tiers" className="bg-[#1C1C1C] text-[#FDFBF7] px-8 py-5 text-xl font-mono font-bold uppercase tracking-wider shadow-[8px_8px_0px_rgba(167,243,208,1)] hover:shadow-[10px_10px_0px_rgba(167,243,208,1)] transition-shadow inline-block border-4 border-[#1C1C1C]">
                Explore Subscriptions
              </a>
            </motion.div>
          </div>

        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-[#F4F4F0] border-b-4 border-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-20 relative">
            <h2 className="text-4xl md:text-5xl font-mono font-black text-[#1C1C1C] uppercase tracking-widest inline-block border-b-4 border-[#1C1C1C] pb-2">
              How It Works
            </h2>
            <p className="mt-8 text-xl text-[#4A4A4A] max-w-2xl mx-auto font-serif">
              Your journey to academic excellence is just four simple steps away. Our platform adapts to you, not the other way around.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const rotation = index % 2 === 0 ? '-rotate-1' : 'rotate-2';
              
              return (
                <motion.div 
                  key={index} 
                  whileHover={{ y: -10, rotate: 0 }} 
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`bg-[#FDFBF7] p-8 border-4 border-[#1C1C1C] shadow-[8px_8px_0px_rgba(28,28,28,1)] relative ${rotation} flex flex-col`}
                >
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-10 bg-[#1C1C1C] rounded-full flex items-center justify-center shadow-sm z-10">
                    <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                  </div>
                  
                  <div className="absolute top-6 right-6 text-6xl font-mono font-black text-[#1C1C1C] opacity-10 select-none">
                    0{index + 1}
                  </div>
                  
                  <div className={`w-16 h-16 ${step.bg} border-4 border-[#1C1C1C] flex items-center justify-center mb-6 mt-4 shadow-[4px_4px_0px_rgba(28,28,28,1)]`}>
                    <Icon className={`w-8 h-8 ${step.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-mono font-bold text-[#1C1C1C] uppercase tracking-wider mb-4 border-b-2 border-[#1C1C1C] pb-2 relative z-10">
                    {step.title}
                  </h3>
                  
                  <p className="text-[#4A4A4A] font-serif leading-relaxed relative z-10 flex-grow">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Explore Subscription Tiers */}
      <section id="explore-tiers" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-5xl font-mono font-black text-[#1C1C1C] uppercase tracking-widest bg-[#FEF08A] inline-block px-8 py-3 border-4 border-[#1C1C1C] shadow-[8px_8px_0px_rgba(28,28,28,1)] rotate-1">
              Subscription Tiers
            </h2>
            <p className="mt-10 text-xl text-[#4A4A4A] max-w-2xl mx-auto font-serif border-2 border-dashed border-[#1C1C1C] p-6 bg-[#FDFBF7] -rotate-1">
              Whether you need intensive board prep or just occasional help with tough concepts, we have a tier designed for your workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
            {tiers.map((tier, index) => {
              const Icon = tier.icon;
              const isPopular = tier.popular;
              const baseClasses = "relative flex flex-col p-8 md:p-10 border-4 border-[#1C1C1C] bg-[#FDFBF7]";
              const hoverShadow = isPopular ? "hover:shadow-[16px_16px_0px_rgba(167,243,208,1)]" : "hover:shadow-[12px_12px_0px_rgba(28,28,28,1)]";
              const shadow = isPopular ? "shadow-[12px_12px_0px_rgba(167,243,208,1)]" : "shadow-[8px_8px_0px_rgba(28,28,28,1)]";
              const rotation = index === 0 ? '-rotate-2' : (index === 2 ? 'rotate-2' : 'scale-105 z-10 rotate-0');
              
              return (
                <motion.div 
                  key={index} 
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`${baseClasses} ${shadow} ${hoverShadow} ${rotation} transition-shadow duration-300`}
                >
                  {isPopular && (
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                      <span className="bg-[#D32F2F] text-[#FDFBF7] px-6 py-2 text-sm font-mono font-bold tracking-widest uppercase border-4 border-[#1C1C1C] shadow-[4px_4px_0px_rgba(28,28,28,1)] rotate-3 inline-block">
                        MOST POPULAR
                      </span>
                    </div>
                  )}
                  
                  <div className="flex justify-between items-start mb-6 mt-4">
                    <div>
                      <span className="inline-block px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider mb-4 bg-[#F4F4F0] border-2 border-[#1C1C1C] shadow-[2px_2px_0px_rgba(28,28,28,1)]">
                        {tier.badge}
                      </span>
                      <h3 className="text-2xl font-mono font-black text-[#1C1C1C] uppercase leading-tight">{tier.name}</h3>
                    </div>
                    <Icon className="w-10 h-10 text-[#1C1C1C]" />
                  </div>

                  <div className="mb-8 pb-8 border-b-4 border-dashed border-[#1C1C1C]">
                    <span className="text-5xl font-serif font-black text-[#1C1C1C]">₹{tier.amount}</span>
                    <span className="text-[#4A4A4A] font-mono font-bold uppercase ml-2">/month</span>
                  </div>
                  
                  <p className="text-[#1C1C1C] font-serif text-lg mb-8 leading-relaxed h-24">
                    {tier.description}
                  </p>
                  
                  <div className="space-y-0 mb-10 flex-grow">
                    {tier.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center border-b border-dashed border-[#d1d5db] py-4 last:border-0">
                        <CheckCircle2 className="w-6 h-6 text-[#1C1C1C] shrink-0 mr-4 fill-[#A7F3D0]" />
                        <span className="text-[#1C1C1C] font-serif font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <motion.button 
                    whileHover={{ y: -4, x: -4 }} 
                    whileTap={{ y: 2, x: 2 }} 
                    onClick={() => handleSubscribeClick(tier)}
                    className={`block w-full py-5 text-center font-mono font-bold uppercase tracking-widest border-4 border-[#1C1C1C] transition-all ${isPopular ? 'bg-[#1C1C1C] text-[#FDFBF7] shadow-[6px_6px_0px_rgba(167,243,208,1)]' : 'bg-[#FEF08A] text-[#1C1C1C] shadow-[6px_6px_0px_rgba(28,28,28,1)]'}`}
                  >
                    Subscribe Now
                  </motion.button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Payment Modal (Styled as an overlaid clipboard form) */}
      {isModalOpen && selectedPlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1C1C1C]/80 backdrop-blur-md">
          
          <motion.div 
            initial={{ scale: 0.9, y: 20, rotate: -2 }}
            animate={{ scale: 1, y: 0, rotate: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-[#FDFBF7] border-4 border-[#1C1C1C] w-full max-w-md shadow-[16px_16px_0px_rgba(254,240,138,1)] relative"
          >
            {/* Clipboard Clip */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-24 h-10 bg-[#4A4A4A] border-4 border-[#1C1C1C] rounded-t-xl shadow-md z-10"></div>
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-[#1C1C1C] z-20"></div>

            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 bg-[#D32F2F] text-white border-2 border-[#1C1C1C] p-1 shadow-[2px_2px_0px_rgba(28,28,28,1)] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_rgba(28,28,28,1)] transition-all z-30"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="p-8 pt-12">
              <h3 className="text-3xl font-mono font-black text-[#1C1C1C] mb-2 uppercase tracking-wider border-b-4 border-[#1C1C1C] pb-2 inline-block">Checkout</h3>
              
              <div className="bg-[#FEF08A] border-2 border-dashed border-[#1C1C1C] p-4 my-6 rotate-1">
                <p className="text-[#1C1C1C] font-serif text-lg">
                  Subscribing to: <br/>
                  <strong className="font-mono text-xl uppercase tracking-wider">{selectedPlan.name}</strong> <br/>
                  Total: <strong className="font-mono text-xl">₹{selectedPlan.amount}</strong>
                </p>
              </div>
              
              <form onSubmit={handlePayment} className="space-y-6">
                <div>
                  <label className="block text-sm font-mono font-bold uppercase tracking-wider text-[#1C1C1C] mb-2">Full Name</label>
                  <input 
                    type="text" 
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#F4F4F0] border-2 border-[#1C1C1C] focus:bg-[#A7F3D0] outline-none transition-colors font-serif text-lg text-[#1C1C1C]"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-mono font-bold uppercase tracking-wider text-[#1C1C1C] mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#F4F4F0] border-2 border-[#1C1C1C] focus:bg-[#A7F3D0] outline-none transition-colors font-serif text-lg text-[#1C1C1C]"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-mono font-bold uppercase tracking-wider text-[#1C1C1C] mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#F4F4F0] border-2 border-[#1C1C1C] focus:bg-[#A7F3D0] outline-none transition-colors font-serif text-lg text-[#1C1C1C]"
                    placeholder="+91 98765 43210"
                  />
                </div>
                
                <div className="pt-4">
                  <motion.button 
                    whileHover={!isLoading ? { y: -2, x: -2 } : {}}
                    whileTap={!isLoading ? { y: 2, x: 2 } : {}}
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-[#1C1C1C] text-[#FDFBF7] py-4 border-4 border-[#1C1C1C] font-mono font-bold text-lg uppercase tracking-widest transition-all shadow-[6px_6px_0px_rgba(28,28,28,1)] flex items-center justify-center disabled:opacity-50 disabled:shadow-none disabled:translate-y-1 disabled:translate-x-1"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin mr-2 text-[#FEF08A]" />
                        Processing...
                      </>
                    ) : (
                      `Pay ₹${selectedPlan.amount}`
                    )}
                  </motion.button>
                </div>
              </form>
              
              <div className="mt-6 border-t-2 border-dashed border-[#d1d5db] pt-4 text-center">
                <p className="text-xs font-mono font-bold text-[#4A4A4A] uppercase tracking-wider flex items-center justify-center">
                  <Zap className="w-4 h-4 mr-1 fill-[#FEF08A]" /> Secured by Razorpay
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-[#FEF08A] border-t-4 border-[#1C1C1C] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-mono font-black text-[#1C1C1C] uppercase tracking-widest mb-8">Not sure which plan?</h2>
          <p className="text-xl text-[#1C1C1C] font-serif mb-12 max-w-2xl mx-auto border-2 border-[#1C1C1C] p-6 bg-[#FDFBF7] rotate-1">
            Book a free counseling session. We'll help you map out the perfect subscription strategy for your academic goals.
          </p>
          <motion.div whileHover={{ y: -4, x: -4 }} whileTap={{ y: 2, x: 2 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className="inline-block">
            <Link 
              to="/contact" 
              className="bg-[#1C1C1C] text-[#FDFBF7] px-10 py-5 text-xl font-mono font-bold uppercase tracking-widest shadow-[8px_8px_0px_rgba(28,28,28,1)] hover:shadow-[10px_10px_0px_rgba(28,28,28,1)] transition-shadow inline-block border-4 border-[#1C1C1C] -rotate-1"
            >
              Talk to an Expert
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}