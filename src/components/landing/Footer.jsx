import React from "react";
import { Linkedin, Twitter, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function Footer() {
  return (
    <footer className="py-16 md:py-24" style={{backgroundColor: 'var(--color-background)'}}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img 
                  src="/images/logo-symbol.png" 
                  alt="TraceSecure Logo Symbol" 
                  className="h-10"
                />
                <div className="text-ts-text">
                  <span className="block font-bold text-xl" style={{fontFamily: 'var(--font-brand)'}}>TraceSecure</span>
                  <span className="block text-xs text-ts-text-muted" style={{fontFamily: 'var(--font-brand)'}}>Secure Trace, Trusted Trade</span>
                </div>
              </div>
              <p className="text-ts-text-muted mb-6 max-w-md">
                Secure QR code-based digital history for luxury and craft producers. Prove authenticity, stop counterfeits, and connect directly with customers.
              </p>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-bold text-ts-text mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link to={createPageUrl('About')} className="text-ts-text-muted hover:text-ts-primary transition-colors">About Us</Link></li>
              </ul>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="font-bold text-ts-text mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-ts-text-muted hover:text-ts-primary transition-colors">Features</a></li>
                <li><a href="#" className="text-ts-text-muted hover:text-ts-primary transition-colors">How It Works</a></li>
                <li><a href="#" className="text-ts-text-muted hover:text-ts-primary transition-colors">Pricing</a></li>
              </ul>
            </div>
          </div>

          {/* Powered by Polygon */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <span className="text-sm text-ts-text-muted">Powered by</span>
            <img 
              src="/images/polygon-logo.png" 
              alt="Polygon" 
              className="h-6"
            />
          </div>

          {/* Bottom Footer */}
          <div className="border-t-2 pt-8 border-ts-border">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
              <div className="text-sm text-ts-text-muted">
                © 2024 TraceSecure. All rights reserved.
              </div>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <Link to={createPageUrl('PrivacyPolicy')} className="text-ts-text-muted hover:text-ts-accent-blue transition-colors">Privacy Policy</Link>
                <Link to={createPageUrl('TermsOfService')} className="text-ts-text-muted hover:text-ts-accent-blue transition-colors">Terms of Service</Link>
                <Link to={createPageUrl('CookiePolicy')} className="text-ts-text-muted hover:text-ts-accent-blue transition-colors">Cookie Policy</Link>
                <Link to={createPageUrl('DataProcessing')} className="text-ts-text-muted hover:text-ts-accent-blue transition-colors">Data Processing</Link>
              </div>
            </div>
            
            {/* Beta Program Notice */}
            <div className="mt-6 p-4 bg-ts-surface rounded-lg border-2 border-ts-border">
              <p className="text-sm text-ts-text-muted text-center">
                <strong className="text-ts-text">Beta Program:</strong> TraceSecure is currently in beta. Features and pricing may change before public release. Join our beta program to lock in early access pricing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}