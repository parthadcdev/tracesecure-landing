import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, Shield, X, AlertTriangle, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    quote: "TraceSecure transformed how our customers trust our luxury handbags. Verification rates increased by 340%.",
    author: "Sarah Chen",
    title: "Founder, Artisan Leather Co.",
    avatar: "/images/sarah-chen-avatar.png"
  },
  {
    quote: "EU DPP compliance was a nightmare until TraceSecure. Now it's automatic and our sustainability story is powerful.",
    author: "Marcus Weber",
    title: "CEO, Alpine Craft Distillery",
    avatar: "/images/marcus-weber-avatar.png"
  }
];

const benefits = [
  {
    icon: CheckCircle,
    text: "Early access pricing locked for 1 year"
  },
  {
    icon: CheckCircle,
    text: "Direct line to our product team"
  },
  {
    icon: CheckCircle,
    text: "Free onboarding and training"
  },
  {
    icon: CheckCircle,
    text: "Shape the future of product authenticity"
  }
];

const guarantees = [
  {
    icon: Shield,
    text: "Bank-level security"
  },
  {
    icon: Clock,
    text: "Setup in 24 hours"
  },
  {
    icon: CheckCircle,
    text: "EU DPP ready"
  },
  {
    icon: X,
    text: "Cancel anytime"
  }
];

export default function FinalCTASection() {
  const viewport = { once: true, amount: 0.2 };
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [vineyard, setVineyard] = useState('');
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

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
        { name: 'lastname', value: name.split(' ').slice(1).join(' ') || '' },
        { name: 'company', value: vineyard }
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
        setMessage('Thanks! You’re in. We’ll reach out to confirm your pilot spot.');
        setName('');
        setEmail('');
        setVineyard('');
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
    <section id="final-cta" className="py-24 md:py-32" style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-ts-text">
            Ready to Turn Your Bottles Into Customers?
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-ts-text-muted">
            Start our risk-free, 6-month free pilot for wineries. The first 200 members get our full Growth tier, completely free.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-3 bg-ts-card rounded-xl p-4 shadow-lg border border-ts-primary/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.6 }}
            >
              <benefit.icon className="w-5 h-5 text-ts-success flex-shrink-0" />
              <span className="text-sm font-medium text-ts-text">{benefit.text}</span>
            </motion.div>
          ))}
        </div>

        {/* Pilot Signup Form */}
        <div className="max-w-3xl mx-auto mb-16">
          <form onSubmit={handleSubmit} className="bg-ts-card rounded-2xl p-6 shadow-xl border border-ts-primary/20">
            <div className="grid md:grid-cols-3 gap-4">
              <Input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required className="bg-ts-surface border-2 border-ts-border rounded-lg py-3 px-4 focus:border-ts-accent-blue transition-colors" />
              <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="bg-ts-surface border-2 border-ts-border rounded-lg py-3 px-4 focus:border-ts-accent-blue transition-colors" />
              <Input type="text" placeholder="Vineyard Name" value={vineyard} onChange={(e) => setVineyard(e.target.value)} required className="bg-ts-surface border-2 border-ts-border rounded-lg py-3 px-4 focus:border-ts-accent-blue transition-colors" />
            </div>
            <div className="mt-4">
              <Button type="submit" disabled={status === 'loading'} className="w-full text-lg font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition-all bg-ts-accent-blue hover:bg-ts-primary">
                {status === 'loading' ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Claim My Free Pilot Spot'}
              </Button>
            </div>
            {status === 'error' && (
              <p className="mt-3 text-ts-error text-sm flex items-center gap-2"><AlertTriangle className="w-4 h-4" />{message}</p>
            )}
            {status === 'success' && (
              <div className="mt-3 flex items-center gap-2 text-ts-success"><CheckCircle className="w-5 h-5" />{message}</div>
            )}
          </form>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-ts-card rounded-2xl p-8 shadow-xl border border-ts-primary/20"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.6 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-ts-primary to-ts-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-ts-text-muted italic mb-4">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-bold text-ts-text">{testimonial.author}</p>
                    <p className="text-sm text-ts-text-muted">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guarantees */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-3 bg-ts-card rounded-xl p-4 shadow-lg border border-ts-primary/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.6 }}
            >
              <guarantee.icon className="w-5 h-5 text-ts-primary flex-shrink-0" />
              <span className="text-sm font-medium text-ts-text">{guarantee.text}</span>
            </motion.div>
          ))}
        </div>

        {/* Limited Pilot Spots */}
        <motion.div 
          className="text-center bg-gradient-to-r from-ts-primary/10 to-ts-accent/10 rounded-2xl p-8 border border-ts-primary/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-ts-text">
            Limited Free Pilot Spots Available (200)
          </h3>
          <p className="text-ts-text-muted mb-6">
            Wineries only. Join today to secure your free 6-month Growth tier.
          </p>
          <button onClick={() => {
            const el = document.getElementById('final-cta');
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }} className="px-8 py-4 bg-gradient-to-r from-ts-primary to-ts-secondary text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all hover:scale-105">
            Claim My Free Pilot Spot
          </button>
        </motion.div>
      </div>
    </section>
  );
}
