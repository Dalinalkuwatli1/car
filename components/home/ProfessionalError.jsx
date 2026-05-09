"use client";

import { useState } from "react";

const errors = [
  { id: 1, text: "Failed to load some vehicles" },
  { id: 2, text: "Search service unavailable" },
  { id: 3, text: "Unable to connect to server" },
  { id: 4, text: "Some images failed to load" },
  { id: 5, text: "Authentication required" },
];

export default function ProfessionalError() {
  const [isRetrying, setIsRetrying] = useState(false);

  const handleRetry = () => {
    setIsRetrying(true);
    setTimeout(() => setIsRetrying(false), 2000);
  };

  return (
    <section className="bg-obsidian-900 pt-10 pb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-error/10 backdrop-blur-xl border border-error/20 rounded-3xl p-8 relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-error/10 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-8">
            <div className="flex-1">
              <h2 className="text-2xl font-display font-bold text-white mb-2">We found some problems</h2>
              <p className="text-platinum-400 font-body text-sm mb-8">Please fix the following errors to continue</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {errors.map((error) => (
                  <div 
                    key={error.id} 
                    className="group flex items-center gap-4 bg-obsidian-950/50 hover:bg-obsidian-950/80 border border-white/5 hover:border-error/30 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(255,77,77,0.15)]"
                  >
                    <div className="w-10 h-10 shrink-0 rounded-full bg-error/10 flex items-center justify-center group-hover:bg-error/20 transition-colors duration-300">
                      <svg className="w-5 h-5 text-error" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white mb-0.5">{error.text}</h3>
                      <p className="text-xs text-platinum-500 line-clamp-1">Action required to proceed.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="shrink-0 flex items-start">
              <button
                onClick={handleRetry}
                disabled={isRetrying}
                className="flex items-center gap-2 px-6 py-3 bg-obsidian-950 hover:bg-black border border-error/30 hover:border-error/50 rounded-xl text-white text-sm font-semibold transition-all duration-300"
              >
                <svg 
                  className={`w-4 h-4 text-error ${isRetrying ? 'animate-spin' : 'group-hover:rotate-180 transition-transform duration-500'}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                {isRetrying ? 'Retrying...' : 'Retry All'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
