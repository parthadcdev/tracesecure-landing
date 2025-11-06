import React from 'react';
import { Button } from '@/components/ui/button';
import { createPageUrl } from '@/utils';
import { ShieldCheck, ScanLine, Globe, Star, Zap, Gem, CheckCircle, BarChart, DollarSign, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function BenefitsPage() {
  const scrollToWaitlist = () => {
    window.location.href = createPageUrl('Landing') + '#waitlist-form';
  };

  const dppMatters = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-accent mb-4" />,
      title: "Counterfeit Crisis Solved",
      text: "Global fakes cost artisans $100B+ yearly in luxury alone. DPP compliance turns your story into a tamper-proof shield."
    },
    {
      icon: <ScanLine className="w-8 h-8 text-accent mb-4" />,
      title: "No More Guesswork",
      text: "Customers demand proof - 60% won't buy without it. Show yours with a quick QR scan."
    },
    {
      icon: <Globe className="w-8 h-8 text-accent mb-4" />,
      title: "EU Market Access",
      text: "Comply now to sell freely across Europe, without fines or barriers."
    }
  ];

  const howItWorksFeatures = [
    {
      icon: <Clock className="w-6 h-6 mr-4 text-primary" />,
      title: "Quick Onboarding (5 Minutes)",
      text: "Sign up, snap photos of your materials and process, and let our wizard create your first digital passport. We use simple forms, like filling out a shipping label."
    },
    {
      icon: <Gem className="w-6 h-6 mr-4 text-primary" />,
      title: "Invisible Protection with Blockchain Badges",
      text: "Each item gets a unique NFT (think: a digital birth certificate) on our secure Polygon network. It's eco-friendly, low-cost, and proves provenance from artisan to owner - fully DPP-ready."
    },
    {
      icon: <Zap className="w-6 h-6 mr-4 text-primary" />,
      title: "Easy Anti-Counterfeit Tools",
      text: "QR Codes for Buyers, optional IoT Tracking for shipments, and Trace-to-Earn Rewards ($TRSR tokens)."
    }
  ];

  const mainBenefits = [
    {
      icon: <BarChart className="w-10 h-10 text-accent mb-4" />,
      title: "Slash Losses",
      text: "Block 70% of counterfeits with verifiable stories - reclaim your market share."
    },
    {
      icon: <Star className="w-10 h-10 text-accent mb-4" />,
      title: "Build Trust Fast",
      text: "80% of buyers pay more for transparent brands. Turn skeptics into superfans."
    },
    {
      icon: <DollarSign className="w-10 h-10 text-accent mb-4" />,
      title: "SME-Friendly Costs",
      text: "No big IT spend - our Polygon setup saves 25% on logistics vs. traditional tracking."
    },
    {
      icon: <Globe className="w-10 h-10 text-accent mb-4" />,
      title: "Global Reach",
      text: "Integrate with marketplaces for seamless sales, plus EU compliance for tariff-free trade."
    }
  ];

  return (
    <div className="py-24 md:py-32" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="container mx-auto px-6 max-w-5xl">

        {/* --- Hero Section --- */}
        <div className="text-center mb-20 md:mb-24">
          <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-text)' }}>
            Empower Your Craft
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto" style={{ color: 'var(--color-primary)' }}>
            Stop Counterfeits in Their Tracks - Effortlessly Trace Every Handmade Masterpiece with EU Digital Product Passport Compliance.
          </p>
          <p className="text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
            As an artisan, you've poured your heart into creating unique, high-quality goods. But counterfeits erode trust and steal sales. With the EU's Digital Product Passport (DPP) rolling out from 2026, transparency isn't just an opportunity - it's becoming a legal requirement for market access. This mandate requires a clear digital record of your product's lifecycle, and TraceSecure makes it simple to comply, stand out, and protect your legacy.
          </p>
        </div>

        {/* --- Why DPP Matters --- */}
        <div className="mb-20 md:mb-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why the EU Digital Product Passport Matters</h2>
          <p className="max-w-3xl mx-auto mb-12 text-lg">
            The DPP is a new EU rule to track products' journeys, ensuring they're sustainable and authentic. For luxury and handmade goods, it's a powerful tool to fight fakes head-on.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {dppMatters.map((item, index) => (
              <Card key={index} className="bg-white text-center shadow-lg border-t-4" style={{ borderColor: 'var(--color-accent)' }}>
                <CardHeader>
                  {item.icon}
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* --- How TraceSecure Helps --- */}
        <div className="mb-20 md:mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">How We Make DPP Compliance a Breeze</h2>
              <p className="text-lg mb-8">
                Imagine tagging your latest batch in minutes, then watching buyers trust your authenticity at a glance. Our platform is built for busy creators - no coding required.
              </p>
              <div className="space-y-6">
                {howItWorksFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    {feature.icon}
                    <div>
                      <h3 className="font-bold text-lg">{feature.title}</h3>
                      <p className="text-base">{feature.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-xl border-l-4" style={{ borderColor: 'var(--color-primary)' }}>
                <p className="font-serif text-xl italic mb-4">"It felt like magic - without the tech overwhelm."</p>
                <p className="font-bold">- Akira T., Owner</p>
                <p className="text-sm mt-2">A Japanese artisan cooperative used similar tech to verify silk scarves, slashing fakes by 50% and doubling EU exports.</p>
            </div>
          </div>
        </div>

        {/* --- Your Benefits --- */}
        <div className="mb-20 md:mb-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Your Benefits: Protect, Profit, and Shine</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {mainBenefits.map((benefit, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                {benefit.icon}
                <h3 className="font-bold text-lg mt-2">{benefit.title}</h3>
                <p className="text-sm">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* --- Final CTA --- */}
        <div className="text-center bg-white p-8 md:p-12 rounded-lg shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Secure Your Craft?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">Don't let fakes dim your spark. Join the waitlist today and create your first Digital Product Passport in minutes.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://app.tracesecure.co/auth?tab=signup"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg px-8 py-6 rounded-lg shadow-lg transition-transform hover:scale-105 text-center inline-block"
              style={{ backgroundColor: 'var(--color-accent)', color: 'white' }}
            >
              Start Free
            </a>
            <Button
              variant="outline"
              className="text-lg px-8 py-6 rounded-lg shadow-lg transition-transform hover:scale-105"
              style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }}
              onClick={() => alert('Booking functionality to be added.')}
            >
              Book a 15-min Chat
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}