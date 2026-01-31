'use client';

import { useState, useEffect } from 'react';

const features = [
  {
    icon: '🤖',
    title: 'AI-Augmented Operations',
    description: 'Full AI workforce deployment in 30 days',
    status: 'Building'
  },
  {
    icon: '🧠',
    title: '3-Layer Memory System',
    description: 'Agents that never forget, always improve',
    status: 'Testing'
  },
  {
    icon: '⚡',
    title: 'Goal-Based Inference',
    description: 'Autonomous decision-making, zero micromanagement',
    status: 'Shipping'
  },
  {
    icon: '🔐',
    title: 'Enterprise Security',
    description: '256-bit encryption, GDPR compliant, code escrow',
    status: 'Ready'
  },
  {
    icon: '📊',
    title: 'Real-Time Analytics',
    description: 'Track every agent action, measure ROI daily',
    status: 'Building'
  },
  {
    icon: '🚀',
    title: 'Instant Scalability',
    description: 'Add agents in minutes, not months',
    status: 'Ready'
  }
];

export default function FeatureVault() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Ready': return 'text-green-400 border-green-400/30 bg-green-400/10';
      case 'Shipping': return 'text-blue-400 border-blue-400/30 bg-blue-400/10';
      case 'Testing': return 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10';
      case 'Building': return 'text-purple-400 border-purple-400/30 bg-purple-400/10';
      default: return 'text-slate-400 border-slate-400/30 bg-slate-400/10';
    }
  };

  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          What We're Building
        </h2>
        <p className="text-slate-400 text-lg">
          Move cursor to interact
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {features.map((feature, index) => {
          const isActive = index === activeIndex;
          const isHovered = index === hoveredIndex;
          
          return (
            <div
              key={index}
              className={`
                relative group cursor-pointer transition-all duration-500
                ${isActive || isHovered ? 'scale-105' : 'scale-100'}
              `}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Glow effect */}
              <div 
                className={`
                  absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 
                  rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500
                  ${isActive ? 'opacity-50' : ''}
                `}
              />
              
              {/* Card */}
              <div className="relative bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 h-full">
                {/* Icon */}
                <div className={`
                  text-5xl mb-4 transition-transform duration-500
                  ${isActive || isHovered ? 'scale-110 rotate-12' : 'scale-100 rotate-0'}
                `}>
                  {feature.icon}
                </div>

                {/* Status Badge */}
                <div className={`
                  inline-flex items-center gap-2 px-3 py-1 rounded-full 
                  border text-xs font-medium mb-3
                  ${getStatusColor(feature.status)}
                `}>
                  <div className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                  {feature.status}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Progress bar for active feature */}
                {isActive && (
                  <div className="mt-4 h-1 bg-slate-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 animate-progress"
                      style={{ animation: 'progress 3s linear' }}
                    />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
}
