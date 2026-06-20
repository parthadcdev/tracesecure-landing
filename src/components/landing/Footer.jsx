import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { getWineIndustryUrl, isExternalUrl } from "@/utils/host";

const productLinks = [
  { name: "How It Works", href: "/#how-it-works" },
  { name: "Why It Matters", href: "/#why-matters" },
  { name: "Features", href: "/#features" },
  { name: "Pricing", href: "/#pricing" },
  { name: "FAQ", href: "/#faq" },
];

const industryLinks = [
  { name: "Wine & Beverage", getHref: getWineIndustryUrl },
  { name: "Supplements", href: "/industries/supplements" },
  { name: "Specialty Food", href: "/industries/specialty-food" },
];

const companyLinks = [
  { name: "About Us", page: "About" },
  { name: "Platform", page: "Platform" },
];

const legalLinks = [
  { name: "Privacy Policy", page: "PrivacyPolicy" },
  { name: "Terms of Service", page: "TermsOfService" },
  { name: "Cookie Policy", page: "CookiePolicy" },
  { name: "Data Processing", page: "DataProcessing" },
];

function FooterLink({ item }) {
  if (item.getHref) {
    const href = item.getHref();
    if (isExternalUrl(href)) {
      return (
        <a href={href} className="text-ts-secondary/80 hover:text-white transition-colors">
          {item.name}
        </a>
      );
    }
    return (
      <Link to={href} className="text-ts-secondary/80 hover:text-white transition-colors">
        {item.name}
      </Link>
    );
  }

  if (item.href) {
    return (
      <Link to={item.href} className="text-ts-secondary/80 hover:text-white transition-colors">
        {item.name}
      </Link>
    );
  }

  return (
    <Link
      to={createPageUrl(item.page)}
      className="text-ts-secondary/80 hover:text-white transition-colors"
    >
      {item.name}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="mt-auto border-t-4 border-ts-accent bg-ts-primary text-white">
      <div className="container mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src="/images/logo-symbol.png" alt="TraceSecure Logo" className="h-10 brightness-0 invert" />
              <div>
                <span className="block font-bold text-xl" style={{ fontFamily: 'var(--font-brand)' }}>
                  TraceSecure
                </span>
                <span className="block text-xs text-ts-secondary/80" style={{ fontFamily: 'var(--font-brand)' }}>
                  Secure Trace, Trusted Trade
                </span>
              </div>
            </div>
            <p className="text-ts-secondary/90 mb-6 max-w-md text-sm leading-relaxed">
              Digital product passports for brands that sell through retail and marketplaces. Prove authenticity,
              capture buyer emails, and build direct customer relationships — no app or crypto wallet required.
            </p>
            <p className="text-sm text-ts-secondary/80">
              <span className="font-semibold text-white">Contact:</span>{' '}
              <a href="mailto:privacy@tracesecure.co" className="hover:text-ts-accent transition-colors">
                privacy@tracesecure.co
              </a>
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Product</h4>
            <ul className="space-y-2 text-sm">
              {productLinks.map((item) => (
                <li key={item.name}>
                  <FooterLink item={item} />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Industries</h4>
            <ul className="space-y-2 text-sm">
              {industryLinks.map((item) => (
                <li key={item.name}>
                  <FooterLink item={item} />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm mb-6">
              {companyLinks.map((item) => (
                <li key={item.name}>
                  <FooterLink item={item} />
                </li>
              ))}
            </ul>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2 text-sm">
              {legalLinks.map((item) => (
                <li key={item.name}>
                  <FooterLink item={item} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mb-8 pt-4 border-t border-ts-secondary/30">
          <span className="text-sm text-ts-secondary/80">Powered by</span>
          <img src="/images/polygon-logo.png" alt="Polygon" className="h-5 brightness-0 invert opacity-80" />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left text-sm text-ts-secondary/80">
          <div>© {new Date().getFullYear()} TraceSecure. All rights reserved. Ashburn, VA.</div>
          <div className="flex flex-wrap justify-center gap-4">
            {legalLinks.map((item) => (
              <Link
                key={item.name}
                to={createPageUrl(item.page)}
                className="hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
