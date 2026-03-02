import { Download, Link as LinkIcon, Sparkles, Trophy } from "lucide-react";

const steps = [
  {
    icon: Download,
    step: "Step 1",
    title: "Download Finni",
    description: "Get the app on your phone or sign up on your computer. It takes less than 2 minutes!",
    color: "from-cyan-500 to-cyan-600"
  },
  {
    icon: LinkIcon,
    step: "Step 2",
    title: "Connect Your Accounts",
    description: "Safely link your bank account or credit card. We use the same security as your bank.",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Sparkles,
    step: "Step 3",
    title: "Let AI Do the Work",
    description: "Finni automatically tracks your spending and finds ways you can save money.",
    color: "from-teal-500 to-teal-600"
  },
  {
    icon: Trophy,
    step: "Step 4",
    title: "Reach Your Goals",
    description: "Watch your savings grow and celebrate when you reach your money goals!",
    color: "from-emerald-500 to-emerald-600"
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-slate-900 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            How Finni Works
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Getting started is super easy. Just follow these simple steps:
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index}
                className="relative bg-slate-950/50 rounded-2xl p-8 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300"
              >
                {/* Step Number Badge */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/30">
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>
                
                <div className={`w-14 h-14 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/20`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                
                <p className="text-sm font-semibold text-cyan-400 mb-2">{step.step}</p>
                <h3 className="text-2xl font-bold mb-3 text-white">
                  {step.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}