import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Globe, BarChart3, Users, Clock } from 'lucide-react';

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const startTime = Date.now();
    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.floor(eased * target);
      setCount(start);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const counters = [
  { icon: Clock, value: 5, suffix: '+', label: 'Years Experience', description: 'Navigating global markets' },
  { icon: Users, value: 500, suffix: '+', label: 'Traders Helped', description: 'Growing community worldwide' },
  { icon: BarChart3, value: 1000, suffix: '+', label: 'Trades Analyzed', description: 'Detailed market breakdowns' },
  { icon: Globe, value: 3, suffix: '', label: 'Markets Covered', description: 'Forex · Crypto · Stocks' },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Subtle bg accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, hsl(142 71% 45% / 0.15), transparent 70%)' }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs text-primary tracking-widest uppercase font-semibold mb-3">About Capital Crew</p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground leading-tight">
              A Trading Firm Built on
              <br />
              <span className="text-gradient">Discipline & Transparency</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-lg">
              Capital Crew is a professional trading education community with over 5 years of combined market experience. We specialize in Forex, Cryptocurrency, and Stock market analysis — providing our members with daily insights backed by solid reasoning.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-lg">
              Unlike signal-selling schemes, we focus on teaching you to become a self-sufficient trader. Our approach combines technical analysis, risk management, and market psychology to build long-term trading skills.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {counters.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="glass-card rounded-2xl p-6 text-center hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/15 transition-colors">
                  <c.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-heading font-bold text-foreground">
                  <AnimatedCounter target={c.value} suffix={c.suffix} />
                </div>
                <p className="text-sm font-medium text-foreground mt-1">{c.label}</p>
                <p className="text-xs text-muted-foreground mt-1">{c.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
