import heroIllustration from "@/assets/hero-illustration-light.png";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden flex items-center">
      {/* Gold glow accents */}
      <div className="glow-dot w-[500px] h-[500px] top-[-10%] left-[10%] animate-pulse-glow" />
      <div className="glow-dot w-[400px] h-[400px] bottom-[5%] right-[20%] animate-pulse-glow" style={{ animationDelay: "2s" }} />
      <div className="glow-dot w-[200px] h-[200px] top-[40%] left-[50%] animate-pulse-glow" style={{ animationDelay: "1s" }} />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Text content */}
          <div className="max-w-xl">
            <div className="opacity-0 animate-fade-up">
              <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 text-primary text-sm font-medium tracking-wide mb-8">
                Next-Gen Platform
              </span>
            </div>

            <h1 className="opacity-0 animate-fade-up-delay font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
              Build the future
              <span className="block text-gradient-gold mt-1">with precision.</span>
            </h1>

            <p className="opacity-0 animate-fade-up-delay-2 text-muted-foreground text-lg sm:text-xl leading-relaxed mb-10 max-w-md">
              Harness intelligent tools and seamless workflows to ship products that stand apart.
            </p>

            <div className="opacity-0 animate-fade-up-delay-2 flex flex-wrap gap-4">
              <Button variant="hero" size="lg">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="ghost-hero" size="lg">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right: Floating illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative animate-float">
              <div className="absolute inset-0 rounded-3xl glow-gold" />
              <img
                src={heroIllustration}
                alt="Futuristic dashboard interface with holographic data panels"
                loading="lazy"
                width={1024}
                height={1024}
                className="relative w-full max-w-lg lg:max-w-xl drop-shadow-[0_28px_60px_rgba(27,45,70,0.28)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
