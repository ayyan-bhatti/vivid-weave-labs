import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import TradingCandlesBackground from './TradingCandlesBackground';
import { ArrowRight, TrendingUp } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Trading candles animated background */}
      <TradingCandlesBackground />

      {/* Dark overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50 z-[1]" />

      {/* Accent glows */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full opacity-20 z-[1]"
        style={{ background: 'radial-gradient(circle, hsl(142 71% 45% / 0.15), transparent 70%)' }}
      />
      <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] rounded-full opacity-15 z-[1]"
        style={{ background: 'radial-gradient(circle, hsl(45 93% 47% / 0.1), transparent 70%)' }}
      />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm mb-8"
        >
          <TrendingUp className="w-4 h-4 text-primary" />
          <span className="text-sm text-primary font-medium">Professional Trading Community</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]"
        >
          <span className="text-foreground">We Turn Markets</span>
          <br />
          <span className="text-foreground">Into </span>
          <span className="text-gradient">Opportunities</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed"
        >
          Capital Crew empowers traders with expert analysis, mentorship, and a global community across Forex, Crypto, and Stock markets.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="flex items-center justify-center gap-4 mt-10"
        >
          <a href="https://t.me/capitalcrewofficial" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 glow-primary-sm gap-2">
              Join Us <ArrowRight className="w-4 h-4" />
            </Button>
          </a>
          <Link to="/about">
            <Button size="lg" variant="outline" className="border-primary/30 text-foreground hover:bg-primary/5 hover:border-primary/50">
              View Portfolio
            </Button>
          </Link>
        </motion.div>

        {/* Floating stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-20 max-w-3xl mx-auto glass-card rounded-2xl p-6"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { value: '5+', label: 'Years Experience' },
              { value: '500+', label: 'Traders Helped' },
              { value: 'Global', label: 'Market Analysis' },
              { value: '24/7', label: 'Community Access' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1 + i * 0.08 }}
                className="text-center"
              >
                <div className="text-2xl sm:text-3xl font-heading font-bold text-gradient">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
