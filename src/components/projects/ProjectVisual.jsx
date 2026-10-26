import React from 'react';
import { Calendar, Stethoscope, Clock, ShieldCheck, FileSpreadsheet, Activity, Code2, Sparkles, CheckCircle2 } from 'lucide-react';

export const ProjectVisual = ({ type }) => {
  if (type === 'appointment') {
    return (
      <div className="w-full h-52 sm:h-60 bg-gradient-to-br from-slate-900 via-sky-950/40 to-slate-900 rounded-xl p-4 border border-sky-500/20 relative overflow-hidden flex flex-col justify-between select-none">
        {/* Glow */}
        <div className="absolute -top-12 -right-12 w-36 h-36 bg-sky-500/20 rounded-full blur-2xl pointer-events-none" />

        {/* Mockup Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
          <div className="flex items-center gap-2">
            <div className="p-1 rounded-md bg-sky-500/20 text-sky-400">
              <Stethoscope className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold text-white tracking-wide">DocQuick Healthcare Portal</span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            API: 200 OK
          </span>
        </div>

        {/* Appointment Grid Mockup */}
        <div className="space-y-2 py-1">
          <div className="bg-slate-800/80 rounded-lg p-2.5 border border-slate-700/60 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-blue-600/30 text-cyan-300 flex items-center justify-center font-bold text-[11px]">
                Dr.
              </div>
              <div>
                <p className="font-semibold text-white text-[11px]">Dr. Harrison (Cardiology)</p>
                <p className="text-[10px] text-slate-400">Slot #104 • 10:30 AM</p>
              </div>
            </div>
            <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300">
              Confirmed
            </span>
          </div>

          <div className="bg-slate-800/60 rounded-lg p-2.5 border border-slate-700/40 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-purple-600/30 text-purple-300 flex items-center justify-center font-bold text-[11px]">
                Dr.
              </div>
              <div>
                <p className="font-semibold text-white text-[11px]">Dr. Emily Carter (Neurology)</p>
                <p className="text-[10px] text-slate-400">Slot #105 • 02:00 PM</p>
              </div>
            </div>
            <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300">
              Pending Approval
            </span>
          </div>
        </div>

        {/* Mockup Footer Info */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-[10px] text-slate-400 font-mono">
          <span>Role: JWT Authenticated</span>
          <span className="text-sky-400">ASP.NET Core + MySQL</span>
        </div>
      </div>
    );
  }

  if (type === 'reporting') {
    return (
      <div className="w-full h-52 sm:h-60 bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-900 rounded-xl p-4 border border-indigo-500/20 relative overflow-hidden flex flex-col justify-between select-none">
        {/* Glow */}
        <div className="absolute -top-12 -right-12 w-36 h-36 bg-purple-500/20 rounded-full blur-2xl pointer-events-none" />

        {/* Mockup Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
          <div className="flex items-center gap-2">
            <div className="p-1 rounded-md bg-purple-500/20 text-purple-400">
              <Activity className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold text-white tracking-wide">MedSense Clinical Diagnostic</span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-cyan-400 border border-cyan-500/20">
            SQL Stored Proc: 38ms
          </span>
        </div>

        {/* Report Diagnostic Table Mockup */}
        <div className="bg-slate-800/80 rounded-lg p-2.5 border border-slate-700/60 space-y-1.5 text-[11px]">
          <div className="grid grid-cols-3 text-slate-400 text-[10px] font-mono pb-1 border-b border-slate-700">
            <span>PARAMETER</span>
            <span className="text-center">RESULT</span>
            <span className="text-right">STATUS</span>
          </div>
          <div className="grid grid-cols-3 text-slate-200">
            <span className="font-medium text-[11px]">Serum Creatinine</span>
            <span className="text-center font-mono text-cyan-300">0.9 mg/dL</span>
            <span className="text-right text-emerald-400 font-medium">Normal</span>
          </div>
          <div className="grid grid-cols-3 text-slate-200">
            <span className="font-medium text-[11px]">Fasting Glucose</span>
            <span className="text-center font-mono text-amber-300">118 mg/dL</span>
            <span className="text-right text-amber-400 font-medium">Elevated</span>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-[10px] text-slate-400 font-mono">
          <span>Audit Status: Pathologist Verified</span>
          <span className="text-purple-400">SQL Server + Dapper</span>
        </div>
      </div>
    );
  }

  // Portfolio
  return (
    <div className="w-full h-52 sm:h-60 bg-gradient-to-br from-slate-900 via-blue-950/40 to-slate-900 rounded-xl p-4 border border-blue-500/20 relative overflow-hidden flex flex-col justify-between select-none">
      <div className="absolute -top-12 -right-12 w-36 h-36 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />

      <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
        <div className="flex items-center gap-2">
          <div className="p-1 rounded-md bg-blue-500/20 text-cyan-400">
            <Code2 className="w-4 h-4" />
          </div>
          <span className="text-xs font-bold text-white tracking-wide">Developer Portfolio Architecture</span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          React 19 + Tailwind
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2 text-xs">
        <div className="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700/60">
          <p className="text-[10px] text-slate-400 font-mono">ANIMATION ENGINE</p>
          <p className="font-bold text-white mt-1 text-[11px]">Framer Motion</p>
          <p className="text-[10px] text-cyan-400 mt-0.5">Smooth Transitions</p>
        </div>
        <div className="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700/60">
          <p className="text-[10px] text-slate-400 font-mono">COLOR THEME</p>
          <p className="font-bold text-white mt-1 text-[11px]">Dark / Light Synced</p>
          <p className="text-[10px] text-purple-400 mt-0.5">Persistent State</p>
        </div>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-[10px] text-slate-400 font-mono">
        <span>Vite Bundler</span>
        <span className="text-cyan-400">100% Component Reusability</span>
      </div>
    </div>
  );
};
