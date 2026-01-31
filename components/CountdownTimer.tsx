'use client';

import { useState, useEffect } from 'react';

export default function CountdownTimer() {
  // Set hackathon end time to 72 hours from a fixed start point
  // Using UTC to avoid timezone issues
  const hackathonEnd = new Date('2026-02-03T00:00:00Z').getTime();
  
  // Calculate initial time immediately to avoid empty boxes
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const distance = hackathonEnd - now;

    if (distance < 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000)
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Update immediately on mount
    setTimeLeft(calculateTimeLeft());

    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 blur-xl" />
        <div className="relative bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 min-w-[100px] md:min-w-[140px]">
          <div className="text-4xl md:text-6xl font-bold bg-gradient-to-br from-cyan-400 to-blue-500 bg-clip-text text-transparent tabular-nums">
            {mounted ? String(value).padStart(2, '0') : '--'}
          </div>
        </div>
      </div>
      <div className="mt-3 text-sm md:text-base text-slate-400 uppercase tracking-wider">
        {label}
      </div>
    </div>
  );

  return (
    <div className="mb-16">
      <h2 className="text-center text-xl md:text-2xl text-slate-300 mb-8 font-light">
        Hackathon Countdown
      </h2>
      <div className="flex justify-center gap-4 md:gap-6">
        <TimeUnit value={timeLeft.days} label="Days" />
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <TimeUnit value={timeLeft.minutes} label="Minutes" />
        <TimeUnit value={timeLeft.seconds} label="Seconds" />
      </div>
    </div>
  );
}
