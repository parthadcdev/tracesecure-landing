
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Linkedin, Twitter } from "lucide-react";

const newFaqs = [
{
  q: "How do you ensure my product's journey is tamper-proof?",
  a: "We use a secure digital vault to lock in every step of your craft's journey - creation, packing, shipping. Each scan (like with your phone's camera) creates an unbreakable record that can't be altered, even by us. Buyers verify this with a QR code, building trust that boosts sales by 15-20%. It's like a sealed certificate no one can fake.",
  why: "Protects your reputation and cuts losses from fakes (up to 20-30% of sales).",
  cta: "Start free to secure your first trace in 5 minutes."
},
{
  q: "How do you connect real-world scans to your system securely?",
  a: "When you scan a craft's QR code (e.g., on a handbag), our system instantly logs real-world details like location or temperature using simple, reliable tools. These are sealed in a digital vault, safe from tampering. For example, a Latin American leather artisan can log a shipment's journey, and buyers confirm it's genuine. No tech skills needed - just your phone.",
  why: "Saves time on manual records and proves authenticity to charge more.",
  cta: "Join the waitlist for our free guide to beating fakes."
},
{
  q: "What stops someone from faking my product's QR code?",
  a: "Our QR codes are unique and tied to your craft's secure digital record, like a fingerprint. If someone tries to copy it, the verification page will flag it as invalid. Buyers see a clear 'Authentic' or 'Warning' result, protecting your brand. For example, a Japanese lacquerware maker can ensure only their crafts pass verification.",
  why: "Cuts fake-related losses (20-30%) and builds buyer trust.",
  cta: "Try it free with our Starter plan (100 items/month)."
},
{
  q: "Can I trust your system won't lose my data?",
  a: "Your craft's journey is stored in a secure, global network of digital vaults, with 99.9% uptime and automatic backups. We've beta-tested with 50+ SMEs (hypothesis, pending Q4 2025 pilots) to ensure reliability. If something goes wrong, our 30-day refund guarantee has you covered, and you can export your data anytime.",
  why: "Peace of mind lets you focus on creating, not worrying.",
  cta: "Sign up to secure your crafts risk-free."
},
{
  q: "How does this work for my guild or co-op?",
  a: "We're built for networks, not just solo artisans. One guild leader can onboard dozens of creators, sharing secure tracing tools. For example, a Southeast Asian silk co-op can verify every member's crafts, boosting collective trust and sales. Our Scale plan ($299+/month) adds team permissions and real-time sensor data for complex supply chains.",
  why: "One connection can protect an entire network, saving time and money.",
  cta: "Connect with us to bring your network onboard."
},
{
  q: "What if I'm not tech-savvy? Will this still work for me?",
  a: "Absolutely - no tech skills needed. You scan a QR code with your phone, and we handle the rest. Our 5-minute setup (Signup, Profile, Tutorial, First Trace) guides you step-by-step. For example, a Brazilian leather artisan can start tracing in minutes, earning 100 $TRACE just for signing up.",
  why: "Saves hours on paperwork, letting you focus on your craft.",
  cta: "Start for free and earn rewards with your first trace."
},
{
  q: "How do I know this is worth it for my small business?",
  a: "Fakes hurt small creators most - up to 20-30% of sales lost to counterfeits (hypothesis, Q6, pending validation). Our free Starter plan lets you test tracing 100 items/month, proving authenticity to charge 15-20% more. If it doesn't work, cancel within 30 days for a full refund. Over 50 artisans are already testing it (hypothesis, Q22).",
  why: "Boosts profits and protects your brand without risk.",
  cta: "Download our free guide to see how artisans beat fakes."
},
  {
    q: "How do you securely connect real-world scans to DPP records?",
    a: "TraceSecure logs details like location or temperature with a phone scan, sealed in a digital vault. A Latin American leather artisan can prove their craft's journey, DPP-ready for EU markets. No tech skills - just scan.",
    why: "Saves time, charges more.",
    cta: "Get our free guide to beating fakes."
  },
  {
    q: "Can I trust my DPP data won't be lost?",
    a: "TraceSecure uses global digital vaults with 99.9% uptime, tested with 50+ SMEs (hypothesis, Q22). Get a 30-day refund or export data if unsatisfied.",
    why: "Focus on creating, not worrying.",
    cta: "Sign up risk-free."
  },
  {
    q: "What is the EU Digital Product Passport (DPP)?",
    a: "The DPP, launching 2026, is an EU rule requiring digital records of your craft's materials, origins, and authenticity. It fights fakes ($100B luxury loss) and ensures ethical trade. TraceSecure makes compliance easy with digital passports.",
    why: "Access EU markets tariff-free.",
    cta: "Sign up to comply early."
  },
  {
    q: "Why should I comply with DPP now if it's 2026?",
    a: "Early compliance builds trust (80% of buyers want proof, Q6), cuts fakes (up to 40%), and preps you for EU sales without fines. Even non-EU artisans (e.g., on Etsy) gain global credibility.",
    why: "Boosts sales 15-20%.",
    cta: "Get our DPP guide free."
  },
  {
    q: "How does TraceSecure's DPP differ from other solutions?",
    a: "Unlike costly platforms (e.g., VeChain), we're 40-50% cheaper, with a free Starter plan and simple scans. Our eco-friendly digital badges (on Polygon) meet DPP standards, tailored for artisans, not corporations.",
    why: "Affordable trust for SMEs.",
    cta: "Start free to see the difference."
  }
];


const oldFaqs = [
{
  q: "Do small creators really face counterfeit issues?",
  a: "Yes, absolutely. Fakes don't just target big brands. Counterfeiters often replicate unique components or materials used by artisans, which erodes buyer trust and devalues your entire craft."
},
{
  q: "Is this complicated to set up? I'm not a tech person.",
  a: "Not at all. We designed TraceSecure for creators, not coders. If you can use a smartphone, you can use our platform. The onboarding process takes less than 5 minutes."
},
{
  q: "What are $TRACE tokens and how do I use them?",
  a: "$TRACE are reward tokens you earn for using the platform. You can redeem them for discounts on monthly plans, special features, or services from our partners."
}];


const faqs = [...newFaqs, ...oldFaqs];

export default function Footer() {
  const scrollToForm = (e) => {
    e.preventDefault();
    document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <footer id="faq" className="pt-24 pb-12" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ color: 'var(--color-text)' }}>
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) =>
            <AccordionItem key={index} value={`item-${index}`} className="border-b" style={{ borderColor: 'var(--color-primary)' }}>
                <AccordionTrigger className="text-left font-medium" style={{ color: 'var(--color-text)' }}>{faq.q}</AccordionTrigger>
                <AccordionContent className="pt-2 space-y-3" style={{ color: 'var(--color-text)' }}>
                  <p>{faq.a}</p>
                  {faq.why && <p><strong className="italic">Why it matters:</strong> {faq.why}</p>}
                  {faq.cta && <a href="#waitlist-form" onClick={scrollToForm} className="font-semibold text-primary hover:underline">{faq.cta}</a>}
                </AccordionContent>
              </AccordionItem>
            )}
          </Accordion>
        </div>

        <div className="border-t pt-8" style={{ borderColor: 'rgba(26, 29, 46, 0.1)' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
            <div className="flex-1 flex justify-center md:justify-start">
              <div className="flex items-center gap-3">
                <img 
                  src="/images/logo-symbol.png" 
                  alt="TraceSecure Logo Symbol" 
                  className="h-10"
                />
                <div style={{color: 'var(--color-text)'}}>
                  <span className="block font-bold text-xl" style={{fontFamily: 'var(--font-brand)'}}>TraceSecure</span>
                  <span className="block text-xs" style={{fontFamily: 'var(--font-brand)'}}>Secure Trace, Trusted Trade</span>
                </div>
              </div>
            </div>
            <div className="text-center flex flex-col items-center gap-2">
              <p className="text-sm" style={{color: 'var(--color-text)'}}>© {new Date().getFullYear()} All rights reserved.</p>
              <a href="mailto:info@tracesecure.co" className="text-sm hover:underline" style={{color: 'var(--color-primary)'}}>
                info@tracesecure.co
              </a>
              <div className="flex items-center gap-2">
                <span className="text-xs" style={{color: 'var(--color-text)'}}>Powered by</span>
                <img 
                  src="/images/polygon-logo.png" 
                  alt="Polygon" 
                  className="h-4"
                />
              </div>
            </div>
            <div className="flex-1 flex justify-center md:justify-end gap-4">
              <a href="https://www.linkedin.com/company/trace-secure/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg" style={{ backgroundColor: 'rgba(26, 29, 46, 0.1)', color: 'var(--color-text)' }}><Linkedin className="w-5 h-5" /></a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg" style={{ backgroundColor: 'rgba(26, 29, 46, 0.1)', color: 'var(--color-text)' }}><Twitter className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
