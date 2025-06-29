import { MessageSquare, Users, Shield, Zap } from "lucide-react";

const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 p-12 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-accent/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating icons */}
      <div className="absolute top-10 right-20 animate-bounce delay-300">
        <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
          <MessageSquare className="w-6 h-6 text-primary" />
        </div>
      </div>
      <div className="absolute bottom-80 left-20 animate-bounce delay-700">
        <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
          <Users className="w-6 h-6 text-secondary" />
        </div>
      </div>
      <div className="absolute top-10 left-20 animate-bounce delay-1000">
        <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
          <Shield className="w-5 h-5 text-accent" />
        </div>
      </div>
      <div className="absolute bottom-80 right-20 animate-bounce delay-500">
        <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
          <Zap className="w-5 h-5 text-primary" />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-md items-center text-center">
        {/* Animated grid pattern */}
        <div className="grid grid-cols-4 gap-4 mb-12">
          {[...Array(16)].map((_, i) => {
            // Cycle through 3 hover colors for variety
            const hoverColors = [
              "hover:bg-primary/70",
              "hover:bg-secondary/70",
              "hover:bg-accent/70"
            ];
            return (
              <div
                key={i}
                className={`aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border border-white/20 shadow-lg transition-all duration-500 hover:scale-110 hover:shadow-xl ${
                  hoverColors[i % hoverColors.length]
                } ${
                  i % 3 === 0 ? "animate-pulse" : i % 4 === 0 ? "animate-pulse delay-300" : ""
                }`}
              />
            );
          })}
        </div>

        {/* Title with gradient text */}
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          {title}
        </h2>
        
        {/* Subtitle with better styling */}
        <p className="text-lg text-base-content/70 leading-relaxed mb-8">
          {subtitle}
        </p>

        {/* Feature highlights */}
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-3 text-sm text-base-content/60">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span>Real-time messaging</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-sm text-base-content/60">
            <div className="w-2 h-2 bg-secondary rounded-full"></div>
            <span>Secure & encrypted</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-sm text-base-content/60">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span>Cross-platform sync</span>
          </div>
        </div>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-primary/10 to-transparent"></div>
    </div>
  );
};

export default AuthImagePattern;