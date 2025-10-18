import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Loader2, CheckCircle, AlertTriangle, Check } from 'lucide-react';

const pricingPlans = [
  {
    name: "Starter",
    price: "$0",
    description: "Best for individual artisans. Prove authenticity free.",
    features: ["Core platform access", "Digital passport creation", "QR code generation"],
    limit: "Up to 100 items/month",
    icon: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68dc91d01bc5a24ad7723bfb/6cb045697_freeplan2x.png",
    alt: "Free plan badge",
    cta: "Join Waitlist"
  },
  {
    name: "Growth",
    price: "$79/month",
    description: "For growing brands. Scale trust with unlimited tools.",
    features: ["Unlimited tracing", "Custom verification page", "Basic analytics"],
    icon: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68dc91d01bc5a24ad7723bfb/c2d650a7a_growthplan2x.png",
    alt: "Growth plan icon",
    cta: "Join Waitlist",
    highlight: true,
  },
  {
    name: "Scale",
    price: "$299+/month",
    description: "For co-ops. Advanced supply chain tools.",
    features: ["IoT sensor integration", "API access", "Team permissions", "Dedicated support"],
    icon: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68dc91d01bc5a24ad7723bfb/c3ad0fe59_scaleplan2x.png",
    alt: "Scale plan icon",
    cta: "Join Waitlist"
  }
];

const PricingCard = ({ plan, onCtaClick }) => (
  <div className={`border rounded-lg p-6 flex flex-col text-center items-center ${plan.highlight ? 'border-primary' : 'border-gray-200'}`} style={{backgroundColor: 'var(--color-surface)'}}>
    <img src={plan.icon} alt={plan.alt} className="w-[100px] h-[100px] mb-4" />
    <h3 className="text-2xl font-bold">{plan.name}</h3>
    <p className="text-4xl font-bold my-2">{plan.price}</p>
    <p className="text-sm text-gray-600 mb-4 h-10">{plan.description}</p>
    <ul className="space-y-2 text-left mb-6 flex-grow">
      {plan.features.map(feature => (
        <li key={feature} className="flex items-start">
          <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    {plan.limit && <p className="text-xs text-gray-500 mb-4">{plan.limit}</p>}
    <Button onClick={onCtaClick} className="w-full mt-auto" style={{ backgroundColor: plan.highlight ? 'var(--color-accent)' : 'var(--color-primary)', color: 'white' }}>
      {plan.cta}
    </Button>
  </div>
);


export default function CTASection() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

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
        link.href = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68dc91d01bc5a24ad7723bfb/06cf2fe9b_FreeGuide-BeatCounterfeitsasanSME.pdf';
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
            className="text-3xl md:text-5xl font-bold mb-12" style={{ color: 'var(--color-text)', fontSize: '32pt' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Affordable Plans to Protect Your Craft
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {pricingPlans.map(plan => (
              <PricingCard key={plan.name} plan={plan} onCtaClick={scrollToWaitlist} />
            ))}
          </div>

          <div className="text-center space-y-2 mb-16">
              <p className="font-bold">Rewards: Get 100 $TRACE on signup, 250 for your first trace, and more via referrals/data sharing.</p>
              <p className="text-sm text-gray-600">30-day money-back guarantee if unsatisfied.</p>
          </div>

          <div id="waitlist-form" className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center bg-white p-8 rounded-lg shadow-lg">
            <div className="text-center md:text-left w-full">
              <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--color-text)' }}>Sign Up Now & Get Your Free Guide</h3>
              <p className="mb-4">Get early access and a free PDF guide: <br/><span className="font-bold">"5 Ways to Beat Counterfeits as a Creator."</span></p>
              
              {status !== 'success' ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required className="bg-gray-50"/>
                  <Input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="bg-gray-50"/>
                  <Button type="submit" disabled={status === 'loading'} className="w-full text-white" style={{ backgroundColor: 'var(--color-accent)' }}>
                    {status === 'loading' ? <Loader2 className="w-5 h-5 animate-spin" /> : "Join Waitlist"}
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
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68dc91d01bc5a24ad7723bfb/bea54c74c_Gemini_Generated_Image_evl76xevl76xevl7.png"
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