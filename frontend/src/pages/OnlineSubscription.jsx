import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Target, TrendingUp, RefreshCw, CheckCircle2, MonitorPlay, Zap, BookOpen, X, Loader2 } from 'lucide-react';

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
      color: 'text-blue-500',
      bg: 'bg-blue-50',
    },
    {
      title: 'Learn at Your Pace',
      description: 'Access live sessions, recorded modules, and interactive materials whenever you want.',
      icon: MonitorPlay,
      color: 'text-brand',
      bg: 'bg-brand/10',
    },
    {
      title: 'Track Your Progress',
      description: 'Get detailed insights into your strengths and areas needing improvement with guided tracking.',
      icon: TrendingUp,
      color: 'text-green-500',
      bg: 'bg-green-50',
    },
    {
      title: 'Upgrade Anytime',
      description: 'Need more subjects or intensive mentorship? Adjust your subscription on the fly.',
      icon: RefreshCw,
      color: 'text-purple-500',
      bg: 'bg-purple-50',
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
      amount: 499,
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
      amount: 499,
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
      amount: 499,
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
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    setIsLoading(true);
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      
      // 1. Create order on backend
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

      // 2. Open Razorpay Checkout
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: orderData.order.amount,
        currency: orderData.order.currency,
        name: "EdTraining",
        description: `Subscription: ${selectedPlan.name}`,
        order_id: orderData.order.id,
        handler: async function (response) {
          // 3. Verify Payment
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
              alert("Payment Successful! Welcome to EdTraining. Please check your email for confirmation.");
              setIsModalOpen(false);
              setFormData({ fullName: '', email: '', phone: '' });
            } else {
              alert("Payment verification failed. Please contact support.");
            }
          } catch (err) {
            console.error(err);
            alert("Error verifying payment.");
          }
        },
        prefill: {
          name: formData.fullName,
          email: formData.email,
          contact: formData.phone
        },
        theme: {
          color: "#2563EB" // Brand color
        }
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.on('payment.failed', function (response) {
        alert("Payment failed: " + response.error.description);
      });
      paymentObject.open();

    } catch (error) {
      console.error(error);
      alert("Error: " + error.message);
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
      <section className="bg-slate-900 text-white py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-brand/20 text-brand-light text-sm font-semibold tracking-wider mb-6">
            REVOLUTIONIZING EDUCATION
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Education on Your Terms.<br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-blue-400">Pay Only For What You Use.</span>
          </h1>
          <p className="mt-4 text-xl text-slate-300 max-w-3xl mx-auto mb-10">
            Say goodbye to rigid traditional courses. Discover flexible, subscription-based learning packages designed around your specific academic goals and timeline.
          </p>
          <div className="flex justify-center">
            <a href="#explore-tiers" className="bg-brand hover:bg-brand-dark text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]">
              Explore Subscriptions
            </a>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">How It Works</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Your journey to academic excellence is just four simple steps away. Our platform adapts to you, not the other way around.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:-translate-y-1 transition-transform duration-300 relative">
                  <div className={`w-14 h-14 ${step.bg} rounded-xl flex items-center justify-center mb-6`}>
                    <Icon className={`w-7 h-7 ${step.color}`} />
                  </div>
                  <div className="absolute top-8 right-8 text-6xl font-black text-slate-50 opacity-50 select-none">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-10">{step.title}</h3>
                  <p className="text-slate-600 relative z-10">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Explore Subscription Tiers */}
      <section id="explore-tiers" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Explore Subscription Tiers</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Whether you need intensive board prep or just occasional help with tough concepts, we have a tier for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tiers.map((tier, index) => {
              const Icon = tier.icon;
              return (
                <div key={index} className={`relative flex flex-col p-8 rounded-3xl border ${tier.popular ? 'border-brand shadow-xl shadow-brand/10 scale-105 z-10 bg-white' : 'border-slate-200 shadow-sm bg-slate-50'}`}>
                  {tier.popular && (
                    <div className="absolute -top-4 left-0 right-0 flex justify-center">
                      <span className="bg-brand text-white px-4 py-1 text-sm font-bold tracking-wider uppercase rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex justify-between items-start mb-6 mt-2">
                    <div>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${tier.popular ? 'bg-blue-50 text-brand' : 'bg-slate-200 text-slate-700'}`}>
                        {tier.badge}
                      </span>
                      <h3 className="text-2xl font-bold text-slate-900">{tier.name}</h3>
                    </div>
                    <Icon className={`w-8 h-8 ${tier.popular ? 'text-brand' : 'text-slate-400'}`} />
                  </div>

                  <div className="mb-6">
                    <span className="text-4xl font-black text-slate-900">₹{tier.amount}</span>
                    <span className="text-slate-500 font-medium">/month</span>
                  </div>
                  
                  <p className="text-slate-600 mb-8 flex-grow">
                    {tier.description}
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    {tier.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mr-3 mt-0.5" />
                        <span className="text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button 
                    onClick={() => handleSubscribeClick(tier)}
                    className={`block w-full py-4 rounded-xl text-center font-bold transition-all ${tier.popular ? 'bg-brand text-white hover:bg-brand-dark shadow-md' : 'bg-white border-2 border-slate-200 text-slate-700 hover:border-brand hover:text-brand'}`}
                  >
                    Subscribe Now
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Payment Modal */}
      {isModalOpen && selectedPlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden relative animate-in fade-in zoom-in duration-200">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Checkout</h3>
              <p className="text-slate-600 mb-6">You're subscribing to the <strong className="text-brand">{selectedPlan.name}</strong> plan for <strong>₹{selectedPlan.amount}</strong>.</p>
              
              <form onSubmit={handlePayment} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>
                
                <button 
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-brand hover:bg-brand-dark text-white py-4 rounded-xl font-bold text-lg transition-all shadow-md flex items-center justify-center disabled:opacity-70"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin mr-2" />
                      Processing...
                    </>
                  ) : (
                    `Proceed to Pay ₹${selectedPlan.amount}`
                  )}
                </button>
              </form>
              
              <p className="text-center text-xs text-slate-500 mt-6 flex items-center justify-center">
                Secure payments powered by Razorpay
              </p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-brand text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Not sure which plan fits you best?</h2>
          <p className="text-xl text-brand-light mb-10">
            Book a free counseling session with our academic experts. We'll help you map out the perfect subscription strategy for your goals.
          </p>
          <Link to="/contact" className="inline-block bg-white text-brand px-10 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all">
            Talk to an Expert
          </Link>
        </div>
      </section>
    </>
  );
}
