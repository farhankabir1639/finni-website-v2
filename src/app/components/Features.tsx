import { Eye, Search, PiggyBank, Brain, Shield, Smartphone } from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "See Where Your Money Goes",
    description: "Track all your spending in one place. No more guessing where your money went!",
    color: "from-cyan-500 to-cyan-600"
  },
  {
    icon: Search,
    title: "Find Hidden Subscriptions",
    description: "Finni finds subscriptions you forgot about, so you can decide what to keep.",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: PiggyBank,
    title: "Save Money Automatically",
    description: "Set goals and watch Finni help you save a little bit every day.",
    color: "from-teal-500 to-teal-600"
  },
  {
    icon: Brain,
    title: "Smart AI Insights",
    description: "Get helpful tips from our AI that learns how you spend and save.",
    color: "from-cyan-500 to-blue-500"
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Your money info is protected with bank-level security. We never share your data.",
    color: "from-emerald-500 to-emerald-600"
  },
  {
    icon: Smartphone,
    title: "Works Everywhere",
    description: "Use Finni on your phone, tablet, or computer. Your data syncs automatically.",
    color: "from-blue-500 to-indigo-600"
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-slate-950 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Everything You Need to Be Smart with Money
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Finni makes managing money easy and fun. Here's what you can do:
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-slate-900/50 rounded-2xl p-8 backdrop-blur-sm border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 group"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-cyan-500/20`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}