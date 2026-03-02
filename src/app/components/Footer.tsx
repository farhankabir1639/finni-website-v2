import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-400 py-12 px-6 border-t border-cyan-500/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
          <a href="/#features" className="text-sm hover:text-cyan-400 transition-colors">
            Features
          </a>
          <a href="/#how-it-works" className="text-sm hover:text-cyan-400 transition-colors">
            How It Works
          </a>
          <Link to="/privacy-policy" className="text-sm hover:text-cyan-400 transition-colors">
            Privacy Policy
          </Link>
          <a href="#" className="text-sm hover:text-cyan-400 transition-colors">
            Terms of Service
          </a>
        </div>
        
        <div className="border-t border-cyan-500/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © 2026 Finni AI. All rights reserved.
          </p>
          
          <div className="flex items-center gap-1 text-sm text-gray-500">
            Made with <Heart className="w-4 h-4 text-cyan-500 fill-cyan-500 mx-1" /> for everyone
          </div>
        </div>
      </div>
    </footer>
  );
}