import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Loader2, CheckCircle, AlertTriangle, Check } from 'lucide-react';

const pricingPlans = [
  {
    name: "Starter",
    price: "Free",
    originalPrice: null,
    description: "Perfect for small craft producers and individual artisans",
    features: [
      "Up to 100 verified products",
      "Basic QR code generation", 
      "Product authenticity tracking",
      "Customer verification portal",
      "Email support",
      "Mobile-friendly dashboard"
    ],
    limit: "during beta",
    icon: "/images/free-plan-icon.png",
    alt: "Free plan badge",
    cta: "Start Free Beta"
  },
  {
    name: "Professional",
    price: "$49",
    originalPrice: "$99",
    description: "Ideal for growing luxury brands and established producers",
    features: [
      "Up to 10,000 verified products",
      "Advanced QR codes with branding",
      "Complete product journey tracking",
      "Customer engagement tools",
      "Analytics and insights",
      "Priority support",
      "EU DPP compliance tools",
      "Custom verification pages",
      "API access"
    ],
    icon: "/images/growth-plan-icon.png",
    alt: "Growth plan icon",
    cta: "Join Professional Beta",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    originalPrice: null,
    description: "For large-scale operations and multi-brand portfolios",
    features: [
      "Unlimited verified products",
      "White-label solutions",
      "Advanced blockchain integration",
      "Multi-brand management",
      "Custom integrations",
      "Dedicated account manager",
      "SLA guarantees",
      "Advanced compliance tools",
      "Custom reporting"
    ],
    icon: "/images/scale-plan-icon.png",
    alt: "Scale plan icon",
    cta: "Contact Sales"
  }
];

const PricingCard = ({ plan, onCtaClick }) => (
  <div className={`border-2 rounded-2xl p-8 flex flex-col text-center items-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${plan.highlight ? 'border-ts-accent shadow-2xl bg-gradient-to-br from-ts-accent/10 to-ts-secondary/10' : 'border-ts-primary/20 shadow-xl'}`} style={{backgroundColor: 'var(--color-card)'}}>
    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-ts-primary to-ts-secondary p-1 mb-6">
      <img src={plan.icon} alt={plan.alt} className="w-full h-full rounded-full object-cover" />
    </div>
    {plan.highlight && (
      <div className="bg-ts-accent text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
        Most Popular
      </div>
    )}
    <h3 className="text-2xl font-bold mb-2 text-ts-text">{plan.name}</h3>
    <div className="mb-2">
      {plan.originalPrice && (
        <span className="text-lg text-ts-text-muted line-through mr-2">{plan.originalPrice}</span>
      )}
      <span className="text-4xl font-bold text-ts-primary">{plan.price}</span>
      {plan.originalPrice && <span className="text-sm text-ts-text-muted">/month</span>}
    </div>
    <p className="text-sm mb-4 h-10 text-ts-text-muted">{plan.description}</p>
    <ul className="space-y-3 text-left mb-6 flex-grow">
      {plan.features.map(feature => (
        <li key={feature} className="flex items-start">
          <Check className="w-5 h-5 text-ts-secondary mr-3 flex-shrink-0 mt-0.5" />
          <span className="text-ts-text">{feature}</span>
        </li>
      ))}
    </ul>
    {plan.limit && <p className="text-xs mb-4 text-ts-text-muted">{plan.limit}</p>}
    <Button 
      onClick={onCtaClick} 
      className="w-full mt-auto font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all"
      style={{ 
        background: plan.highlight ? 'var(--gradient-accent)' : 'var(--gradient-primary)', 
        color: 'white' 
      }}
    >
      {plan.cta}
    </Button>
  </div>
);


export default function CTASection() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');
  const viewport = { once: true, amount: 0.2 };

  const scrollToWaitlist = () => {
    document.getElementById("waitlist-form")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    const portalId = '243989543';
    const formId = 'be0e0acc-6317-4da9-b98f-62483aa4e332';
    const hubspotApiUrl = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;

    const payload = {
      fields: [
        { name: 'email', value: email },
        { name: 'firstname', value: name.split(' ')[0] || '' },
        { name: 'lastname', value: name.split(' ').slice(1).join(' ') || '' }
      ],
      context: { pageUri: window.location.href, pageName: document.title }
    };

    try {
      const response = await fetch(hubspotApiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setStatus('success');
        setMessage("Success! Your free guide is downloading now.");
        const link = document.createElement('a');
        link.href = '/downloads/free-guide-beat-counterfeits.pdf';
        link.setAttribute('download', 'TraceSecure-5-Ways-to-Beat-Counterfeits.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setName('');
        setEmail('');
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Submission failed. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setMessage(error.message || 'An unexpected error occurred.');
    }
  };

  return (
    <section id="pricing" className="py-24 md:py-32" style={{backgroundColor: 'var(--color-background)'}}>
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-12 text-ts-text" style={{ fontSize: '32pt' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6 }}
          >
            Simple Pricing for Beta Members
          </motion.h2>
          
          <div className="text-center mb-12">
            <p className="text-lg text-ts-text-muted mb-8">
              Join our beta program and get exclusive pricing with all the features you need to secure your products.
            </p>
            
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <h3 className="font-bold text-ts-text mb-2">Early Bird Pricing</h3>
                <p className="text-sm text-ts-text-muted">50% off for the first year when you join our beta program</p>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-ts-text mb-2">Direct Access</h3>
                <p className="text-sm text-ts-text-muted">Work directly with our team to shape product features</p>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-ts-text mb-2">Locked-in Rates</h3>
                <p className="text-sm text-ts-text-muted">Keep your beta pricing even after public launch</p>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-ts-text mb-2">Free Training</h3>
                <p className="text-sm text-ts-text-muted">Comprehensive onboarding and training included</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {pricingPlans.map(plan => (
              <PricingCard key={plan.name} plan={plan} onCtaClick={scrollToWaitlist} />
            ))}
          </div>

          <div className="text-center space-y-2 mb-16">
              <h3 className="text-2xl font-bold text-ts-text mb-4">Questions about pricing?</h3>
              <p className="text-ts-text-muted mb-6">Our beta program includes personalized onboarding and direct access to our product team.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 bg-ts-primary text-white font-semibold rounded-xl hover:bg-ts-primary/90 transition-colors">
                  Contact Sales
                </button>
                <button className="px-6 py-3 border-2 border-ts-primary text-ts-primary font-semibold rounded-xl hover:bg-ts-primary/10 transition-colors">
                  Schedule Demo
                </button>
              </div>
          </div>

          <div id="waitlist-form" className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center bg-ts-card p-8 rounded-2xl shadow-2xl border border-ts-primary/20">
            <div className="text-center md:text-left w-full">
              <h3 className="text-2xl font-bold mb-3 text-ts-text">Sign Up Now & Get Your Free Guide</h3>
              <p className="mb-4 text-ts-text-muted">Get early access and a free PDF guide: <br/><span className="font-bold text-ts-text">"5 Ways to Beat Counterfeits as a Creator."</span></p>
              
              {status !== 'success' ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required className="bg-gray-50 border-2 border-gray-200 rounded-xl py-3 px-4 focus:border-ts-primary transition-colors"/>
                  <Input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="bg-gray-50 border-2 border-gray-200 rounded-xl py-3 px-4 focus:border-ts-primary transition-colors"/>
                  <Button type="submit" disabled={status === 'loading'} className="w-full text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all" style={{ background: 'var(--gradient-primary)' }}>
                    {status === 'loading' ? <Loader2 className="w-5 h-5 animate-spin" /> : "Join Beta"}
                  </Button>
                  {status === 'error' && <p className="text-red-600 text-sm flex items-center gap-2"><AlertTriangle className="w-4 h-4" />{message}</p>}
                </form>
              ) : (
                <div className="flex flex-col items-center justify-center text-center p-4 bg-green-50 rounded-lg h-full">
                  <CheckCircle className="w-12 h-12 text-green-600 mb-4" />
                  <p className="text-green-800 font-semibold">{message}</p>
                </div>
              )}
            </div>
            <div className="flex items-center justify-center w-full">
              <img 
                src="/images/trace-rewards-menu.png"
                alt="$TRACE earnings UI"
                className="rounded-lg shadow-md w-full max-w-[400px] h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}