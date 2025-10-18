
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Benefits", page: "Benefits" },
  { name: "How It Works", anchor: "how-it-works" },
  { name: "Pricing", anchor: "pricing" },
  { name: "FAQ", anchor: "faq" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isLandingPage = location.pathname === createPageUrl('Landing') || location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    // Immediately set state on mount and location change
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]); // Rerun effect when page changes

  useEffect(() => {
    // Prevent scrolling when mobile menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);
  
  const handleNavClick = (item) => {
    setIsMenuOpen(false); // Close menu on navigation
    if (item.page) {
      navigate(createPageUrl(item.page));
      // Manually scroll to top after navigation
      window.scrollTo(0, 0);
    } else if (item.anchor) {
      if (isLandingPage) {
        document.getElementById(item.anchor)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        navigate(createPageUrl('Landing'));
        // Scroll after navigation
        setTimeout(() => {
          document.getElementById(item.anchor)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
    }
  };

  const scrollTo = (id) => {
    setIsMenuOpen(false); // Close menu on scroll
    if (isLandingPage) {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
        navigate(createPageUrl('Landing'));
        setTimeout(() => {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
    }
  };

  // The 'displayScrolled' variable is no longer used for dynamic styling
  // of the header's background/shadow and text colors as per the outline.
  // It's kept here as the outline only specified changes to the className props.
  const displayScrolled = !isLandingPage || scrolled;

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white/80 shadow-md backdrop-blur-lg`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="container mx-auto px-6 h-20 flex justify-between items-center">
          <div 
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => handleNavClick({ page: 'Landing' })}
          >
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68dc91d01bc5a24ad7723bfb/e0f01dda0_symbol-only-nobg.png" 
              alt="TraceSecure Logo Symbol" 
              className="h-10"
            />
            <div className={`flex flex-col text-gray-800`}>
              <span className="font-bold text-xl" style={{fontFamily: 'var(--font-brand)'}}>TraceSecure</span>
              <span className="text-xs" style={{fontFamily: 'var(--font-brand)'}}>Secure Trace, Trusted Trade</span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button 
                key={item.name} 
                onClick={() => handleNavClick(item)}
                className={`text-sm font-medium transition-colors duration-300 hover:text-primary text-gray-700`}
              >
                {item.name}
              </button>
            ))}
          </nav>
          
          <div className="hidden md:flex">
            <Button 
              onClick={() => scrollTo('waitlist-form')}
              className="text-white"
              style={{ backgroundColor: 'var(--color-accent)', fontFamily: 'var(--font-sans)' }}
            >
              Join Waitlist
            </Button>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(true)}>
              <Menu className="h-6 w-6 text-gray-800" />
            </Button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/50"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-lg"
            >
              <div className="p-6 flex justify-between items-center border-b">
                 <div 
                    className="flex items-center gap-3 cursor-pointer"
                    onClick={() => handleNavClick({ page: 'Landing' })}
                  >
                    <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68dc91d01bc5a24ad7723bfb/e0f01dda0_symbol-only-nobg.png" alt="TraceSecure Logo Symbol" className="h-10" />
                    <div className="flex flex-col text-gray-800">
                      <span className="font-bold text-xl" style={{fontFamily: 'var(--font-brand)'}}>TraceSecure</span>
                      <span className="text-xs" style={{fontFamily: 'var(--font-brand)'}}>Secure Trace, Trusted Trade</span>
                    </div>
                  </div>
                <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                  <X className="h-6 w-6 text-gray-700" />
                </Button>
              </div>
              <div className="p-6 flex flex-col gap-6">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item)}
                    className="text-xl font-medium text-gray-800 text-left hover:text-primary transition-colors"
                  >
                    {item.name}
                  </button>
                ))}
                <Button 
                  onClick={() => scrollTo('waitlist-form')}
                  className="w-full text-white text-lg py-6 mt-4"
                  style={{ backgroundColor: 'var(--color-accent)', fontFamily: 'var(--font-sans)' }}
                >
                  Join Waitlist
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
