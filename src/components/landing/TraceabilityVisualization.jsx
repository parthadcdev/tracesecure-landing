
import React from 'react';
import { motion } from 'framer-motion';

export default function TraceabilityVisualization() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated flowing lines representing blockchain thread */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="threadGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: 'var(--color-primary)', stopOpacity: 0.8 }} />
            <stop offset="50%" style={{ stopColor: 'var(--color-accent)', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: 'var(--color-primary)', stopOpacity: 0.8 }} />
          </linearGradient>
          
          <filter id="glow">
            <feGaussianBlur stdDeviation="0.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Path from Artisan (10%, 40%) to Certificate (50%, 85%) - More curved */}
        <motion.path
          d="M 10 40 Q 20 70, 50 85"
          stroke="url(#threadGradient)"
          strokeWidth="0.4"
          fill="none"
          strokeDasharray="2 1"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.5 }}
        />
        
        {/* Path from Certificate (50%, 85%) to Buyer (90%, 40%) - More curved */}
        <motion.path
          d="M 50 85 Q 80 70, 90 40"
          stroke="url(#threadGradient)"
          strokeWidth="0.4"
          fill="none"
          strokeDasharray="2 1"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.5, delay: 2 }}
        />
        
        {/* Secondary parallel path for visual depth - More curved */}
        <motion.path
          d="M 10 42 Q 25 75, 50 87"
          stroke="url(#threadGradient)"
          strokeWidth="0.3"
          fill="none"
          strokeDasharray="1.5 0.8"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.7 }}
          transition={{ duration: 2.2, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.5, delay: 0.3 }}
        />
        
        <motion.path
          d="M 50 87 Q 75 75, 90 42"
          stroke="url(#threadGradient)"
          strokeWidth="0.3"
          fill="none"
          strokeDasharray="1.5 0.8"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.7 }}
          transition={{ duration: 2.2, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.5, delay: 2.3 }}
        />
      </svg>

      {/* Artisan (Left) */}
      <motion.div 
        className="absolute left-[10%] top-[40%] -translate-y-1/2"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="relative">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] opacity-40 blur-2xl absolute inset-0" />
          <div className="relative w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40 flex items-center justify-center">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <p className="text-white text-sm mt-3 text-center font-sans font-medium">Artisan</p>
        </div>
      </motion.div>

      {/* Certificate/NFT (Center - moved 7mm left) */}
      <motion.div 
        className="absolute left-[47%] bottom-[15%] -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <motion.div
          animate={{ 
            boxShadow: [
              '0 0 30px rgba(90, 140, 90, 0.6)',
              '0 0 60px rgba(90, 140, 90, 0.9)',
              '0 0 30px rgba(90, 140, 90, 0.6)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          <div className="w-28 h-28 rounded-lg bg-gradient-to-br from-[var(--color-accent)]/40 to-[var(--color-primary)]/40 backdrop-blur-sm border-2 border-white/40 flex items-center justify-center">
            <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
        </motion.div>
        <p className="text-white text-sm mt-3 text-center font-sans font-medium">Certificate</p>
      </motion.div>

      {/* Consumer (Right) */}
      <motion.div 
        className="absolute right-[10%] top-[40%] -translate-y-1/2"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <div className="relative">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-primary)] opacity-40 blur-2xl absolute inset-0" />
          <div className="relative w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40 flex items-center justify-center">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <p className="text-white text-sm mt-3 text-center font-sans font-medium">Buyer</p>
        </div>
      </motion.div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-white/50"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}
