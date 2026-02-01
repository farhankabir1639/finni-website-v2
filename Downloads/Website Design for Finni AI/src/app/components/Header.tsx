import { Button } from "@/app/components/ui/button";
import { Link, useLocation } from "react-router-dom";

export function Header() {
  const location = useLocation();
  
  return (
    <header className="w-full py-4 px-6 flex items-center justify-between bg-slate-950/80 backdrop-blur-sm sticky top-0 z-50 border-b border-cyan-500/20">
      <Link to="/" className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
          <span className="text-white font-bold text-xl">F</span>
        </div>
        <span className="font-bold text-xl text-white">Finni</span>
      </Link>
      
      <nav className="flex items-center gap-8">
        <Link 
          to="/blog" 
          className={`transition-colors ${
            location.pathname.startsWith('/blog')
              ? 'text-cyan-400'
              : 'text-gray-300 hover:text-cyan-400'
          }`}
        >
          Blog
        </Link>
        <a href="#signin" className="text-gray-300 hover:text-cyan-400 transition-colors">
          Sign In
        </a>
        <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-lg px-6">
          Try It Free
        </Button>
      </nav>
    </header>
  );
}