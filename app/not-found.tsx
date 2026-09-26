import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 text-center">
      <div className="w-12 h-12 rounded-sm bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center font-extrabold text-slate-950 text-lg mb-4">
        MP
      </div>
      <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white mb-2">
        404 — PAGE NOT FOUND
      </h1>
      <p className="text-slate-400 font-mono text-sm max-w-md mb-8">
        The requested architectural page or asset could not be located.
      </p>
      <Link
        href="/"
        className="btn-aqua px-6 py-3 rounded text-xs font-mono uppercase tracking-widest inline-flex items-center gap-2"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Master Pools Digital Browser</span>
      </Link>
    </div>
  );
}
