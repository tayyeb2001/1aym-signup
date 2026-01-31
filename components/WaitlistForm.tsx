'use client';

import { useState } from 'react';

export default function WaitlistForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const steps = [
    {
      id: 'name',
      question: "What's your name?",
      placeholder: 'John Smith',
      type: 'text'
    },
    {
      id: 'email',
      question: "What's your email address?",
      placeholder: 'john@company.com',
      type: 'email'
    },
    {
      id: 'company',
      question: 'Which company do you work for?',
      placeholder: 'Acme Inc.',
      type: 'text'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      return;
    }

    // Final submission
    setLoading(true);
    
    // Simulate API call - replace with your actual endpoint
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit(e as any);
    }
  };

  const currentField = steps[currentStep];
  const progress = ((currentStep + 1) / steps.length) * 100;

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto mb-16">
        <div className="bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-3xl p-12 text-center">
          <div className="text-6xl mb-6">🎉</div>
          <h3 className="text-3xl font-bold text-white mb-4">
            You're on the list!
          </h3>
          <p className="text-slate-400 text-lg mb-6">
            Thanks for joining, <span className="text-cyan-400">{formData.name}</span>!
          </p>
          <p className="text-slate-500">
            We'll send beta access details to <span className="text-white">{formData.email}</span> within 24 hours.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-green-400 font-medium">Confirmed</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto mb-16" id="contact">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-2 text-right text-sm text-slate-500">
          {currentStep + 1} of {steps.length}
        </div>
      </div>

      {/* Form */}
      <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl p-8 md:p-12">
        <form onSubmit={handleSubmit}>
          <div className="min-h-[200px]">
            {/* Question */}
            <label className="block text-2xl md:text-3xl font-light text-white mb-6">
              {currentField.question}
              <span className="text-cyan-400 ml-2">*</span>
            </label>

            {/* Input */}
            <input
              type={currentField.type}
              value={formData[currentField.id as keyof typeof formData]}
              onChange={(e) => setFormData({ ...formData, [currentField.id]: e.target.value })}
              onKeyPress={handleKeyPress}
              placeholder={currentField.placeholder}
              required
              autoFocus
              className="
                w-full bg-transparent border-b-2 border-slate-600 
                text-white text-xl md:text-2xl py-4 px-2
                focus:outline-none focus:border-cyan-500
                transition-colors duration-300
                placeholder-slate-600
              "
            />

            {/* Helper Text */}
            <p className="mt-4 text-slate-500 text-sm flex items-center gap-2">
              <kbd className="px-2 py-1 bg-slate-700 rounded text-xs">Enter ↵</kbd>
              to continue
            </p>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              type="button"
              onClick={() => currentStep > 0 && setCurrentStep(currentStep - 1)}
              className={`
                flex items-center gap-2 px-6 py-3 rounded-xl
                transition-all duration-300
                ${currentStep > 0 
                  ? 'text-slate-400 hover:text-white hover:bg-slate-700' 
                  : 'text-slate-600 cursor-not-allowed'
                }
              `}
              disabled={currentStep === 0}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </button>

            <button
              type="submit"
              disabled={loading || !formData[currentField.id as keyof typeof formData]}
              className="
                group flex items-center gap-2 px-8 py-4 
                bg-gradient-to-r from-cyan-500 to-purple-600
                hover:from-cyan-400 hover:to-purple-500
                text-white font-medium rounded-xl
                transition-all duration-300
                disabled:opacity-50 disabled:cursor-not-allowed
                shadow-lg shadow-cyan-500/25
              "
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Submitting...
                </>
              ) : currentStep === steps.length - 1 ? (
                <>
                  Join Waitlist
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </>
              ) : (
                <>
                  Continue
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
