'use client';

import { useState, useEffect } from 'react';
import CountdownTimer from '@/components/CountdownTimer';
import FeatureVault from '@/components/FeatureVault';
import WaitlistForm from '@/components/WaitlistForm';
import SocialProof from '@/components/SocialProof';
import HackathonProgress from '@/components/HackathonProgress';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Animated background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          {/* Logo / Brand */}
          <div className="text-center mb-12">
            <h1 className="text-6xl md:text-8xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                1aym
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-slate-300 font-light">
              Beta Access Coming Soon
            </p>
            <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full border border-slate-700">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-slate-400">72-Hour Hackathon In Progress</span>
            </div>
          </div>

          {/* Countdown Timer */}
          <CountdownTimer />

          {/* Hackathon Progress */}
          <HackathonProgress />

          {/* Feature Vault */}
          <FeatureVault />

          {/* Social Proof */}
          <SocialProof />

          {/* Waitlist Form */}
          <WaitlistForm />

          {/* Footer Trust Signals */}
          <div className="mt-16 flex flex-wrap justify-center gap-6 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              256-bit SSL Encrypted
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              GDPR Compliant
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              24-hour Response Time
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
