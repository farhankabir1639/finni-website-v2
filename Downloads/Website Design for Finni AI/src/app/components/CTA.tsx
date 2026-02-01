import { Button } from "@/app/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 px-6 bg-slate-950 relative overflow-hidden">
      {/* Futuristic grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/50 via-slate-950 to-blue-950/50" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Ready to Get Smart with Your Money?
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Join thousands of people who are already saving more and stressing less about money.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-lg px-8 py-6 text-lg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all group"
          >
            Start Free Today
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-cyan-500/30 text-cyan-100 hover:bg-cyan-500/10 hover:border-cyan-500/50 rounded-lg px-8 py-6 text-lg bg-slate-900/50 backdrop-blur-sm"
          >
            Schedule a Demo
          </Button>
        </div>
        
        <p className="text-sm text-gray-500 mt-6">
          No credit card required • Free forever plan available
        </p>
        
        {/* Trust indicators */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-gray-400 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/30">
              <span className="text-white text-xs">✓</span>
            </div>
            Bank-level security
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/30">
              <span className="text-white text-xs">✓</span>
            </div>
            10,000+ happy users
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/30">
              <span className="text-white text-xs">✓</span>
            </div>
            Rated 4.9/5 stars
          </div>
        </div>
      </div>
    </section>
  );
}