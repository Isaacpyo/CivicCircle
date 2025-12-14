import React from 'react';
import { Shield, Smartphone, MessageCircle, Users } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-violet-600 to-indigo-900 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-md border border-white/20">
            <Shield size={16} className="text-violet-300" />
            <span className="text-sm font-medium">AI-Moderated Safe Space</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Community, protected by intelligence.</h1>
          <p className="text-xl text-violet-100 max-w-lg">
            The first social platform where AI filters toxicity in real-time, letting you focus on meaningful connections.
          </p>
          <div className="flex gap-4 pt-4">
            <button className="bg-white text-violet-900 px-8 py-4 rounded-xl font-bold hover:bg-violet-50 transition flex items-center gap-3">
              <Smartphone size={20} /> Download for iOS
            </button>
            <button className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition">
              View Web App
            </button>
          </div>
        </div>
        
        {/* Phone Mockup UI */}
        <div className="relative w-80 h-[600px] bg-slate-900 rounded-[3rem] border-8 border-slate-800 shadow-2xl overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-slate-800 rounded-b-xl z-20"></div>
          <div className="h-full bg-slate-50 text-slate-900 p-4 pt-12 overflow-hidden">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-xl text-violet-700">CivicCircle</h3>
              <Users size={20} className="text-slate-400" />
            </div>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                  <div className="flex gap-3 items-center mb-2">
                    <div className="w-8 h-8 bg-violet-100 rounded-full"></div>
                    <div className="text-xs font-bold">User_{i}02</div>
                  </div>
                  <div className="h-2 w-3/4 bg-slate-100 rounded mb-2"></div>
                  <div className="h-2 w-1/2 bg-slate-100 rounded"></div>
                  {i === 2 && (
                    <div className="mt-2 flex gap-2 text-[10px] text-green-600 bg-green-50 p-1 rounded w-fit">
                      <Shield size={12} /> Verified Constructive
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
