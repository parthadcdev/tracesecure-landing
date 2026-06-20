
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { getWineIndustryUrl, isExternalUrl, isWineHostname } from "@/utils/host";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { name: "How It Works", anchor: "how-it-works" },
  { name: "Why It Matters", anchor: "why-matters" },
  { name: "Why TraceSecure", anchor: "why-different" },
  { name: "Features", anchor: "features" },
  { name: "Pricing", anchor: "pricing" },
  { name: "DPP Compliance", anchor: "dpp-compliance" },
  { name: "FAQ", anchor: "faq" },
];

const companyMenuItems = [
  { name: "Platform", page: "Platform" },
  { name: "About Us", page: "About" },
];

const industriesMenuItems = [
  { name: "Wine & Beverage", getHref: getWineIndustryUrl },
  { name: "Supplements", href: "/industries/supplements" },
  { name: "Specialty Food", href: "/industries/specialty-food" },
];

function isWineLandingPath(pathname) {
  return pathname.toLowerCase().startsWith("/industries/wine");
}

function getLandingBasePath(pathname) {
  if (isWineHostname() || isWineLandingPath(pathname)) {
    return isWineHostname() ? "/" : "/industries/wine";
  }
  return "/";
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCompanyMenuOpen, setIsCompanyMenuOpen] = useState(false);
  const [isIndustriesMenuOpen, setIsIndustriesMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const companyMenuRef = useRef(null);
  const industriesMenuRef = useRef(null);

  const landingBasePath = getLandingBasePath(location.pathname);
  const isLandingPage =
    location.pathname === "/" ||
    location.pathname === createPageUrl("Landing") ||
    isWineLandingPath(location.pathname);

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (companyMenuRef.current && !companyMenuRef.current.contains(event.target)) {
        setIsCompanyMenuOpen(false);
      }
      if (industriesMenuRef.current && !industriesMenuRef.current.contains(event.target)) {
        setIsIndustriesMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  const scrollToElement = (element) => {
    if (element) {
      const headerHeight = 80; // h-20 = 80px
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight - 16; // 16px extra spacing
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleNavClick = (item) => {
    setIsMenuOpen(false);

    if (item.getHref) {
      const href = item.getHref();
      if (isExternalUrl(href)) {
        window.location.href = href;
      } else {
        navigate(href);
        window.scrollTo(0, 0);
      }
      return;
    }

    if (item.href) {
      if (isExternalUrl(item.href)) {
        window.location.href = item.href;
      } else {
        navigate(item.href);
        window.scrollTo(0, 0);
      }
      return;
    }

    if (item.page) {
      navigate(createPageUrl(item.page));
      window.scrollTo(0, 0);
    } else if (item.anchor) {
      if (isLandingPage) {
        const element = document.getElementById(item.anchor);
        if (element) {
          scrollToElement(element);
        } else {
          console.warn(`Element with id "${item.anchor}" not found`);
        }
      } else {
        navigate(landingBasePath);
        setTimeout(() => {
          const element = document.getElementById(item.anchor);
          if (element) {
            scrollToElement(element);
          } else {
            console.warn(`Element with id "${item.anchor}" not found`);
            setTimeout(() => {
              const retryElement = document.getElementById(item.anchor);
              if (retryElement) {
                scrollToElement(retryElement);
              }
            }, 500);
          }
        }, 200);
      }
    }
  };

  const handleHomeClick = () => {
    setIsMenuOpen(false);
    navigate("/");
    window.scrollTo(0, 0);
  };

  const scrollTo = (id) => {
    setIsMenuOpen(false); // Close menu on scroll
    if (isLandingPage) {
        const element = document.getElementById(id);
        if (element) {
          scrollToElement(element);
        } else {
          console.warn(`Element with id "${id}" not found`);
        }
    } else {
        navigate(landingBasePath);
        setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
              scrollToElement(element);
            } else {
              console.warn(`Element with id "${id}" not found`);
              // Try again after a longer delay for lazy-loaded components
              setTimeout(() => {
                const retryElement = document.getElementById(id);
                if (retryElement) {
                  scrollToElement(retryElement);
                }
              }, 500);
            }
        }, 200);
    }
  };

  // The 'displayScrolled' variable is no longer used for dynamic styling
  // of the header's background/shadow and text colors as per the outline.
  // It's kept here as the outline only specified changes to the className props.
  const displayScrolled = !isLandingPage || scrolled;

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-ts-surface shadow-md border-b-2 border-ts-border`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="container mx-auto px-6 h-20 flex justify-between items-center">
          <div 
            className="flex items-center gap-3 cursor-pointer"
            onClick={handleHomeClick}
          >
            <img 
              src="/images/logo-symbol.png" 
              alt="TraceSecure Logo Symbol" 
              className="h-10"
            />
            <div className={`flex flex-col text-ts-text`}>
              <span className="font-bold text-xl" style={{fontFamily: 'var(--font-brand)'}}>TraceSecure</span>
              <span className="text-xs text-ts-text-muted" style={{fontFamily: 'var(--font-brand)'}}>Secure Trace, Trusted Trade</span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button 
                key={item.name} 
                onClick={() => handleNavClick(item)}
                className={`text-sm font-medium transition-colors duration-300 hover:text-ts-primary text-ts-text-muted`}
              >
                {item.name}
              </button>
            ))}
            
            {/* Industries Dropdown */}
            <div className="relative" ref={industriesMenuRef}>
              <button
                onClick={() => setIsIndustriesMenuOpen(!isIndustriesMenuOpen)}
                className="text-sm font-medium transition-colors duration-300 hover:text-ts-primary text-ts-text-muted flex items-center gap-1"
              >
                Industries
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isIndustriesMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isIndustriesMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 bg-ts-surface border-2 border-ts-border rounded-lg shadow-lg overflow-hidden min-w-[160px] z-50"
                  >
                    {industriesMenuItems.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => {
                          handleNavClick(item);
                          setIsIndustriesMenuOpen(false);
                        }}
                        className="w-full text-left px-4 py-3 text-sm text-ts-text-muted hover:text-ts-primary hover:bg-ts-card transition-colors"
                      >
                        {item.name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Company Dropdown */}
            <div className="relative" ref={companyMenuRef}>
              <button
                onClick={() => setIsCompanyMenuOpen(!isCompanyMenuOpen)}
                className="text-sm font-medium transition-colors duration-300 hover:text-ts-primary text-ts-text-muted flex items-center gap-1"
              >
                Company
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isCompanyMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isCompanyMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 bg-ts-surface border-2 border-ts-border rounded-lg shadow-lg overflow-hidden min-w-[160px] z-50"
                  >
                    {companyMenuItems.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => {
                          handleNavClick(item);
                          setIsCompanyMenuOpen(false);
                        }}
                        className="w-full text-left px-4 py-3 text-sm text-ts-text-muted hover:text-ts-primary hover:bg-ts-card transition-colors"
                      >
                        {item.name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>
          
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="https://app.tracesecure.co/auth"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-ts-text-muted hover:text-ts-primary transition-colors duration-300"
            >
              Sign In
            </a>
            <a
              href="https://app.tracesecure.co/auth?tab=signup"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all bg-ts-accent-blue hover:bg-ts-primary"
            >
              Start free
            </a>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(true)}>
              <Menu className="h-6 w-6 text-ts-text" />
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
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-ts-surface shadow-lg"
            >
              <div className="p-6 flex justify-between items-center border-b">
                 <div 
                    className="flex items-center gap-3 cursor-pointer"
                    onClick={handleHomeClick}
                  >
                    <img src="/images/logo-symbol.png" alt="TraceSecure Logo Symbol" className="h-10" />
                    <div className="flex flex-col text-ts-text">
                      <span className="font-bold text-xl" style={{fontFamily: 'var(--font-brand)'}}>TraceSecure</span>
                      <span className="text-xs text-ts-text-muted" style={{fontFamily: 'var(--font-brand)'}}>Secure Trace, Trusted Trade</span>
                    </div>
                  </div>
                <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                  <X className="h-6 w-6 text-ts-text" />
                </Button>
              </div>
              <div className="p-6 flex flex-col gap-6">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item)}
                    className="text-xl font-medium text-ts-text text-left hover:text-ts-primary transition-colors"
                  >
                    {item.name}
                  </button>
                ))}
                
                {/* Industries Menu in Mobile */}
                <div className="flex flex-col gap-2">
                  <div className="text-lg font-semibold text-ts-text mb-2">Industries</div>
                  {industriesMenuItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleNavClick(item)}
                      className="text-lg font-medium text-ts-text-muted text-left hover:text-ts-primary transition-colors pl-4"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>

                <div className="flex flex-col gap-2">
                  <div className="text-lg font-semibold text-ts-text mb-2">Company</div>
                  {companyMenuItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleNavClick(item)}
                      className="text-lg font-medium text-ts-text-muted text-left hover:text-ts-primary transition-colors pl-4"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
                
                <a
                  href="https://app.tracesecure.co/auth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center text-ts-text-muted hover:text-ts-primary text-lg py-4 font-medium border-2 border-ts-border rounded-lg hover:bg-ts-card transition-colors"
                >
                  Sign In
                </a>
                <a
                  href="https://app.tracesecure.co/auth?tab=signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center text-white text-lg py-6 mt-4 font-semibold rounded-lg shadow-md bg-ts-accent-blue hover:bg-ts-primary transition-all"
                >
                  Start free
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
