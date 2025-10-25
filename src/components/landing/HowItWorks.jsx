
import React from 'react';
import { motion } from 'framer-motion';
import FullPageVisualization from './FullPageVisualization';

const steps = [
  {
    number: '01',
    title: 'Create Product Profile',
    description: 'Register your luxury or craft product with detailed authenticity information, materials, and craftsmanship details.',
    alt: "Product profile creation interface"
  },
  {
    number: '02',
    title: 'Generate Unique QR Code',
    description: 'Receive a tamper-proof QR code that contains encrypted product history and verification data.',
    alt: "QR code generation process"
  },
  {
    number: '03',
    title: 'Attach to Product',
    description: 'Apply the QR code to your product using secure materials or integrate into packaging and documentation.',
    alt: "QR code attachment to product"
  },
  {
    number: '04',
    title: 'Customer Verification',
    description: 'Customers scan the QR code to instantly verify authenticity and access the complete product journey.',
    alt: "Customer verification process"
  },
];

const modernCommerceFeatures = [
  {
    title: 'Instant Setup',
    description: 'Ready in minutes'
  },
  {
    title: 'Eco-Friendly',
    description: 'Sustainable materials'
  },
  {
    title: 'Analytics',
    description: 'Track engagement'
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative">
      <FullPageVisualization />
    </section>
  );
}
