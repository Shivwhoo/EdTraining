import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Target, TrendingUp, RefreshCw, CheckCircle2, MonitorPlay, Zap, BookOpen } from 'lucide-react';

export default function OnlineSubscription() {
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
    },
  ];

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
                  
                  <Link 
                    to="/booking-a-demo-class" 
                    className={`block w-full py-4 rounded-xl text-center font-bold transition-all ${tier.popular ? 'bg-brand text-white hover:bg-brand-dark shadow-md' : 'bg-white border-2 border-slate-200 text-slate-700 hover:border-brand hover:text-brand'}`}
                  >
                    Start Free Trial
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

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
