import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, Shield, X } from 'lucide-react';

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

  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-ts-text">
            Ready to Secure
            <br />
            <span className="text-ts-primary">
              Your Brand's Future?
            </span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-ts-text-muted">
            Join forward-thinking luxury and craft producers who are already protecting their products and delighting their customers with TraceSecure's beta program.
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

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="px-8 py-4 bg-gradient-to-r from-ts-primary to-ts-secondary text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all hover:scale-105">
            Join Beta Program
          </button>
          <button className="px-8 py-4 border-2 border-ts-primary text-ts-primary font-semibold rounded-xl hover:bg-ts-primary/10 transition-colors">
            Schedule Demo
          </button>
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

        {/* Limited Beta Spots */}
        <motion.div 
          className="text-center bg-gradient-to-r from-ts-primary/10 to-ts-accent/10 rounded-2xl p-8 border border-ts-primary/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-ts-text">
            Limited Beta Spots Available
          </h3>
          <p className="text-ts-text-muted mb-6">
            Join today to secure your early access pricing
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-ts-primary to-ts-secondary text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all hover:scale-105">
            Join Beta Program
          </button>
        </motion.div>
      </div>
    </section>
  );
}
