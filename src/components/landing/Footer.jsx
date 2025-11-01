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
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
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
              
              {/* Newsletter Signup */}
              <div className="mb-6">
                <h4 className="font-bold text-ts-text mb-3">Stay Updated on Beta Progress</h4>
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-1 px-4 py-2 rounded-lg border-2 border-ts-border bg-white text-ts-text placeholder-ts-text-muted focus:outline-none focus:border-ts-accent-blue transition-colors"
                  />
                  <button className="px-4 py-2 bg-ts-accent-blue text-white rounded-lg shadow-md hover:shadow-lg transition-all">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="font-bold text-ts-text mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-ts-text-muted hover:text-ts-primary transition-colors">Features</a></li>
                <li><a href="#" className="text-ts-text-muted hover:text-ts-primary transition-colors">How It Works</a></li>
                <li><a href="#" className="text-ts-text-muted hover:text-ts-primary transition-colors">Pricing</a></li>
                <li><a href="#" className="text-ts-text-muted hover:text-ts-primary transition-colors">Security</a></li>
              </ul>
            </div>

            {/* Compliance Links */}
            <div>
              <h4 className="font-bold text-ts-text mb-4">Compliance</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-ts-text-muted hover:text-ts-primary transition-colors">EU DPP</a></li>
                <li><a href="#" className="text-ts-text-muted hover:text-ts-primary transition-colors">GDPR</a></li>
                <li><a href="#" className="text-ts-text-muted hover:text-ts-primary transition-colors">Data Privacy</a></li>
                <li><a href="#" className="text-ts-text-muted hover:text-ts-primary transition-colors">Sustainability</a></li>
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="font-bold text-ts-text mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-ts-text-muted hover:text-ts-primary transition-colors">Documentation</a></li>
                <li><a href="#" className="text-ts-text-muted hover:text-ts-primary transition-colors">API Reference</a></li>
                <li><a href="#" className="text-ts-text-muted hover:text-ts-primary transition-colors">Help Center</a></li>
                <li><a href="#" className="text-ts-text-muted hover:text-ts-primary transition-colors">Contact Support</a></li>
              </ul>
            </div>
          </div>

          {/* Company Links */}
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-bold text-ts-text mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link to={createPageUrl('About')} className="text-ts-text-muted hover:text-ts-primary transition-colors">About Us</Link></li>
                <li><a href="#" className="text-ts-text-muted hover:text-ts-primary transition-colors">Careers</a></li>
                <li><a href="#" className="text-ts-text-muted hover:text-ts-primary transition-colors">Partners</a></li>
                <li><a href="#" className="text-ts-text-muted hover:text-ts-primary transition-colors">Press Kit</a></li>
              </ul>
            </div>
          </div>

          {/* Certifications */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-sm text-ts-text-muted px-3 py-2 bg-ts-surface rounded-lg border-2 border-ts-border">
              <div className="w-2 h-2 bg-ts-success rounded-full"></div>
              EU DPP Compliant
            </div>
            <div className="flex items-center gap-2 text-sm text-ts-text-muted px-3 py-2 bg-ts-surface rounded-lg border-2 border-ts-border">
              <div className="w-2 h-2 bg-ts-success rounded-full"></div>
              GDPR Compliant
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
                <a href="#" className="text-ts-text-muted hover:text-ts-accent-blue transition-colors">Privacy Policy</a>
                <a href="#" className="text-ts-text-muted hover:text-ts-accent-blue transition-colors">Terms of Service</a>
                <a href="#" className="text-ts-text-muted hover:text-ts-accent-blue transition-colors">Cookie Policy</a>
                <a href="#" className="text-ts-text-muted hover:text-ts-accent-blue transition-colors">Data Processing</a>
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