import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Linkedin, Twitter, Instagram, Loader2, CheckCircle, AlertTriangle } from "lucide-react";
import { createPageUrl } from "@/utils";
import { getWineIndustryUrl, isExternalUrl } from "@/utils/host";
import { HUBSPOT_PORTAL_ID, HUBSPOT_NEWSLETTER_FORM_ID, isNewsletterFormConfigured, SOCIAL_LINKS } from "@/config/forms";
import { openCookiePreferences } from "@/lib/cookieConsent";

const productLinks = [
  { name: "How It Works", href: "/#how-it-works" },
  { name: "Features", href: "/#features" },
  { name: "Pricing", href: "/#pricing" },
  { name: "DPP & EUDR Compliance", href: "/#dpp-compliance" },
  { name: "Sign In", external: "https://app.tracesecure.co/auth" },
  { name: "Start Free", external: "https://app.tracesecure.co/auth?tab=signup" },
];

const industryLinks = [
  { name: "Beverage", getHref: getWineIndustryUrl },
  { name: "Supplements", href: "/industries/supplements" },
  { name: "Specialty Food", href: "/industries/specialty-food" },
  { name: "All Industries", href: "/" },
];

const companyLinks = [
  { name: "About", page: "About" },
  { name: "Platform", page: "Platform" },
  { name: "Contact", external: "mailto:contact@tracesecure.co" },
];

const trustLegalLinks = [
  { name: "Privacy Policy", page: "PrivacyPolicy" },
  { name: "Terms of Service", page: "TermsOfService" },
  { name: "Security", page: "Security" },
  { name: "Cookie Preferences", action: "cookie-preferences" },
  { name: "GDPR", page: "Gdpr" },
];

const socialLinks = [
  { name: "LinkedIn", href: SOCIAL_LINKS.linkedin, icon: Linkedin },
  { name: "X/Twitter", href: SOCIAL_LINKS.twitter, icon: Twitter },
  { name: "Instagram", href: SOCIAL_LINKS.instagram, icon: Instagram },
];

function FooterLink({ item }) {
  if (item.action === "cookie-preferences") {
    return (
      <button
        type="button"
        onClick={openCookiePreferences}
        className="text-ts-secondary/80 hover:text-white transition-colors text-left"
      >
        {item.name}
      </button>
    );
  }

  if (item.external) {
    const isMailto = item.external.startsWith("mailto:");
    return (
      <a
        href={item.external}
        {...(!isMailto && { target: "_blank", rel: "noopener noreferrer" })}
        className="text-ts-secondary/80 hover:text-white transition-colors"
      >
        {item.name}
      </a>
    );
  }

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

function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  if (!isNewsletterFormConfigured()) {
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const hubspotApiUrl = `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_NEWSLETTER_FORM_ID}`;
    const payload = {
      fields: [{ name: "email", value: email }],
      context: { pageUri: window.location.href, pageName: document.title },
    };

    try {
      const response = await fetch(hubspotApiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus("success");
        setMessage("You're subscribed. Watch your inbox for updates.");
        setEmail("");
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Submission failed. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setMessage(error.message || "An unexpected error occurred.");
    }
  };

  if (status === "success") {
    return (
      <div className="flex items-center gap-2 text-sm text-ts-accent">
        <CheckCircle className="w-4 h-4 shrink-0" />
        <span>{message}</span>
      </div>
    );
  }

  return (
    <div>
      <p className="text-sm font-semibold text-white mb-2">Get product updates</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          type="email"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full rounded-lg border border-ts-secondary/30 bg-ts-primary/50 px-3 py-2 text-sm text-white placeholder:text-ts-secondary/50 focus:border-ts-accent focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-lg bg-ts-accent-blue px-3 py-2 text-sm font-semibold text-white hover:bg-ts-accent-blue/90 transition-colors disabled:opacity-60"
        >
          {status === "loading" ? <Loader2 className="w-4 h-4 animate-spin mx-auto" /> : "Subscribe"}
        </button>
        {status === "error" && (
          <p className="text-xs text-red-300 flex items-center gap-1">
            <AlertTriangle className="w-3 h-3 shrink-0" />
            {message}
          </p>
        )}
      </form>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="mt-auto border-t-4 border-ts-accent bg-ts-primary text-white">
      <div className="container mx-auto px-6 py-16 md:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/logo-symbol.png" alt="TraceSecure Logo" className="h-10 brightness-0 invert" />
              <div>
                <span className="block font-bold text-xl" style={{ fontFamily: "var(--font-brand)" }}>
                  TraceSecure
                </span>
                <span className="block text-xs text-ts-secondary/80" style={{ fontFamily: "var(--font-brand)" }}>
                  Secure Trace, Trusted Trade
                </span>
              </div>
            </div>
            <p className="text-ts-secondary/90 mb-4 text-sm leading-relaxed">
              Turn every product into a customer you can reach.
            </p>
            <div className="flex items-center gap-3 mb-6">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="text-ts-secondary/80 hover:text-ts-accent transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <NewsletterSignup />
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
            <ul className="space-y-2 text-sm">
              {companyLinks.map((item) => (
                <li key={item.name}>
                  <FooterLink item={item} />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Trust & Legal</h4>
            <ul className="space-y-2 text-sm">
              {trustLegalLinks.map((item) => (
                <li key={item.name}>
                  <FooterLink item={item} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-8 pt-4 border-t border-ts-secondary/30">
          <span className="inline-flex items-center gap-2 rounded-full border border-ts-secondary/30 px-3 py-1 text-xs text-ts-secondary/90">
            <img src="/images/polygon-logo.png" alt="Polygon" className="h-4 brightness-0 invert opacity-80" />
            Gasless on Polygon
          </span>
          <span className="inline-flex items-center rounded-full border border-ts-secondary/30 px-3 py-1 text-xs text-ts-secondary/90">
            GDPR-aligned
          </span>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left text-sm text-ts-secondary/80 border-t border-ts-secondary/30 pt-6">
          <div>
            © 2026 TraceSecure. All rights reserved. · Built in Virginia, USA ·{" "}
            <a href="mailto:contact@tracesecure.co" className="hover:text-white transition-colors">
              contact@tracesecure.co
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
