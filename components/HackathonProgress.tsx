'use client';

import { useState, useEffect } from 'react';

const milestones = [
  { hour: 0, title: 'Kickoff', status: 'complete', description: 'Project initialized' },
  { hour: 12, title: 'Core Features', status: 'complete', description: 'Auth & database setup' },
  { hour: 24, title: 'AI Integration', status: 'complete', description: 'Agent deployment system' },
  { hour: 36, title: 'UI/UX Polish', status: 'active', description: 'Dashboard & analytics' },
  { hour: 48, title: 'Testing', status: 'upcoming', description: 'QA & bug fixes' },
  { hour: 60, title: 'Deployment', status: 'upcoming', description: 'Production launch' },
  { hour: 72, title: 'Launch', status: 'upcoming', description: 'Beta access opens' }
];

export default function HackathonProgress() {
  const [currentHour, setCurrentHour] = useState(36); // Simulated progress
  const [progress, setProgress] = useState(50);

  useEffect(() => {
    // Simulate progress updates
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 0.5;
        return newProgress > 100 ? 100 : newProgress;
      });
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'complete': return 'bg-green-500 border-green-400';
      case 'active': return 'bg-blue-500 border-blue-400 animate-pulse';
      case 'upcoming': return 'bg-slate-700 border-slate-600';
      default: return 'bg-slate-700 border-slate-600';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'complete': return '✓';
      case 'active': return '⚡';
      case 'upcoming': return '○';
      default: return '○';
    }
  };

  return (
    <div className="mb-16 max-w-5xl mx-auto">
      <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl p-8 md:p-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Hackathon Progress
          </h2>
          <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            <span className="text-blue-400 font-medium text-sm">Hour {currentHour}/72</span>
          </div>
        </div>

        {/* Overall Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-slate-400">Overall Completion</span>
            <span className="text-sm font-medium text-cyan-400">{Math.round(progress)}%</span>
          </div>
          <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 transition-all duration-1000 relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-white/20 animate-shimmer" />
            </div>
          </div>
        </div>

        {/* Milestones */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 top-8 bottom-8 w-0.5 bg-slate-700" />

          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative flex items-start gap-4 group">
                {/* Status Dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className={`
                    w-8 h-8 rounded-full border-2 flex items-center justify-center
                    text-white text-sm font-bold transition-all duration-300
                    group-hover:scale-110
                    ${getStatusColor(milestone.status)}
                  `}>
                    {getStatusIcon(milestone.status)}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-6">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className={`
                      text-lg font-semibold
                      ${milestone.status === 'complete' ? 'text-green-400' : 
                        milestone.status === 'active' ? 'text-blue-400' : 
                        'text-slate-500'}
                    `}>
                      {milestone.title}
                    </h3>
                    <span className="text-xs text-slate-500">
                      Hour {milestone.hour}
                    </span>
                  </div>
                  <p className="text-sm text-slate-400">
                    {milestone.description}
                  </p>
                  
                  {milestone.status === 'active' && (
                    <div className="mt-2 flex items-center gap-2">
                      <div className="flex-1 h-1.5 bg-slate-700 rounded-full overflow-hidden max-w-xs">
                        <div className="h-full w-2/3 bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse" />
                      </div>
                      <span className="text-xs text-blue-400 font-medium">In Progress</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live Stats */}
        <div className="mt-8 pt-6 border-t border-slate-700 grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400">4/7</div>
            <div className="text-xs text-slate-500">Milestones</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">127</div>
            <div className="text-xs text-slate-500">Commits</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">36h</div>
            <div className="text-xs text-slate-500">Remaining</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
}
