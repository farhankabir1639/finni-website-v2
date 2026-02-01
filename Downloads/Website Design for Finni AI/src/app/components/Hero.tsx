import { Button } from "@/app/components/ui/button";
import { Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Futuristic Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/50 via-slate-950 to-blue-950/50" />
      
      {/* Decorative gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full mix-blend-screen filter blur-3xl animate-blob" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-teal-500/20 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="inline-flex items-center gap-2 bg-cyan-500/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-cyan-500/20">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="text-sm font-medium text-cyan-200">AI-Powered Money Helper</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
          Your Money Helper<br />That Actually Makes Sense
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          See where your money goes, find money you didn't know you had,
          and save up for the stuff you actually want.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-lg px-8 py-6 text-lg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all"
          >
            Try It Free
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="rounded-lg px-8 py-6 text-lg bg-slate-900/80 backdrop-blur-sm border-cyan-500/30 text-cyan-100 hover:bg-slate-800 hover:border-cyan-500/50"
          >
            Watch Demo
          </Button>
        </div>
        
        <p className="text-sm text-gray-500">Works on your phone & computer • No credit card needed</p>
        
        {/* Phone Mockup */}
        <div className="mt-16 relative">
          <div className="mx-auto max-w-xs md:max-w-sm">
            <div className="relative bg-slate-900 rounded-[3rem] shadow-2xl shadow-cyan-500/20 p-4 border border-cyan-500/20">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-3xl" />
              
              {/* App Interface */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2rem] p-6 min-h-[600px] border border-cyan-500/10">
                {/* Header */}
                <div className="text-left mb-6">
                  <p className="text-sm text-gray-400 mb-1">Total Savings</p>
                  <h2 className="text-4xl font-bold text-white">$1,247.50</h2>
                  <p className="text-sm text-cyan-400 mt-1">↑ $127 this month</p>
                </div>
                
                {/* Found Subscriptions Card */}
                <div className="bg-slate-800/50 rounded-2xl p-4 mb-4 border border-cyan-500/10 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-white">Found Subscriptions</h3>
                    <span className="bg-cyan-500/20 text-cyan-400 text-xs px-2 py-1 rounded-full border border-cyan-500/30">3 new</span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 bg-slate-900/50 rounded-lg border border-cyan-500/10">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center text-white text-xs font-bold">N</div>
                        <div>
                          <p className="text-sm font-medium text-white">Netflix</p>
                          <p className="text-xs text-gray-400">Monthly</p>
                        </div>
                      </div>
                      <span className="font-semibold text-white">$15.99</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-2 bg-slate-900/50 rounded-lg border border-cyan-500/10">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white text-xs font-bold">G</div>
                        <div>
                          <p className="text-sm font-medium text-white">Gym</p>
                          <p className="text-xs text-gray-400">Monthly</p>
                        </div>
                      </div>
                      <span className="font-semibold text-white">$49.00</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-2 bg-slate-900/50 rounded-lg border border-cyan-500/10">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center text-white text-xs font-bold">S</div>
                        <div>
                          <p className="text-sm font-medium text-white">Spotify</p>
                          <p className="text-xs text-gray-400">Monthly</p>
                        </div>
                      </div>
                      <span className="font-semibold text-white">$9.99</span>
                    </div>
                  </div>
                </div>
                
                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-800/50 rounded-2xl p-4 border border-cyan-500/10 backdrop-blur-sm">
                    <p className="text-xs text-gray-400 mb-1">This Month</p>
                    <p className="text-2xl font-bold text-white">$432</p>
                    <p className="text-xs text-cyan-400">↑ 12%</p>
                  </div>
                  <div className="bg-slate-800/50 rounded-2xl p-4 border border-cyan-500/10 backdrop-blur-sm">
                    <p className="text-xs text-gray-400 mb-1">Goal Progress</p>
                    <p className="text-2xl font-bold text-white">68%</p>
                    <div className="w-full bg-slate-700 rounded-full h-1.5 mt-2">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-1.5 rounded-full" style={{ width: '68%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}