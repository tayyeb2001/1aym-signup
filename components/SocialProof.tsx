'use client';

import { useState, useEffect } from 'react';

export default function SocialProof() {
  const [stats, setStats] = useState({
    signups: 847,
    viewing: 12,
    deployments: 17
  });

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setStats(prev => ({
        signups: prev.signups + Math.floor(Math.random() * 3),
        viewing: 8 + Math.floor(Math.random() * 8), // 8-15 range
        deployments: prev.deployments
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const StatCard = ({ 
    value, 
    label, 
    trend, 
    icon 
  }: { 
    value: number | string; 
    label: string; 
    trend?: string;
    icon: string;
  }) => (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative bg-slate-800/70 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 text-center hover:border-slate-600 transition-all duration-300">
        <div className="text-3xl mb-3">{icon}</div>
        <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
          {typeof value === 'number' ? value.toLocaleString() : value}
        </div>
        <div className="text-slate-400 text-sm md:text-base">
          {label}
        </div>
        {trend && (
          <div className="mt-3 inline-flex items-center gap-1 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full">
            <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
            </svg>
            <span className="text-xs text-green-400 font-medium">{trend}</span>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="mb-16">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard 
            value={stats.signups}
            label="Beta Signups"
            trend="+12% today"
            icon="🚀"
          />
          <StatCard 
            value={stats.deployments + '+'}
            label="Agents Live"
            icon="🤖"
          />
          <StatCard 
            value={stats.viewing}
            label="Viewing Now"
            icon="👀"
          />
        </div>

        {/* Recent Activity Feed */}
        <div className="mt-8 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-slate-400">Recent Activity</span>
          </div>
          <div className="space-y-3">
            <RecentSignup name="Sarah M." company="Tech Startup" time="2 min ago" />
            <RecentSignup name="James K." company="E-commerce" time="5 min ago" />
            <RecentSignup name="Alex P." company="Marketing Agency" time="8 min ago" />
          </div>
        </div>
      </div>
    </div>
  );
}

function RecentSignup({ name, company, time }: { name: string; company: string; time: string }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center text-white font-medium">
          {name[0]}
        </div>
        <div>
          <span className="text-white font-medium">{name}</span>
          <span className="text-slate-500 ml-2">from {company}</span>
        </div>
      </div>
      <span className="text-slate-500 text-xs">{time}</span>
    </div>
  );
}
