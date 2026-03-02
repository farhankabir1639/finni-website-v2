import { Link, useLocation } from "react-router-dom";

export function Header() {
  const location = useLocation();
  
  return (
    <header className="w-full py-4 px-6 flex items-center justify-between bg-slate-950/80 backdrop-blur-sm sticky top-0 z-50 border-b border-cyan-500/20">
      <Link to="/" className="flex items-center gap-2">
        <img
          src="/Finni_PNG.png"
          alt="Finni"
          className="h-9 w-auto object-contain"
        />
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
      </nav>
    </header>
  );
}