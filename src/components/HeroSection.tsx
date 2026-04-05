import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Scene3D from './Scene3D';
import TradingCandlesBackground from './TradingCandlesBackground';

const stats = [
  { value: '500+', label: 'Community Members' },
  { value: '3+', label: 'Years Experience' },
  { value: 'Daily', label: 'Market Analysis' },
  { value: '24/7', label: 'Community Access' },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Trading candles animated background */}
      <TradingCandlesBackground />

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background z-[1]" />

      {/* Accent glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-15 z-[1]"
        style={{ background: 'radial-gradient(circle, hsl(239 84% 67% / 0.25), transparent 70%)' }}
      />

      <Scene3D />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-muted-foreground">Trading Education Community</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1]"
        >
          <span className="text-foreground">Learn. Trade.</span>
          <br />
          <span className="text-gradient">Grow Together.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed"
        >
          A community of traders sharing knowledge, market analysis, and strategies. We believe in learning together and growing through discipline and education.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="flex items-center justify-center gap-4 mt-10"
        >
          <a href="https://t.me/capitalcrewofficial" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 glow-primary-sm">
              Join the Community
            </Button>
          </a>
          <Link to="/about">
            <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-card">
              Learn More
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-20 max-w-3xl mx-auto"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.95 + i * 0.08 }}
              className="text-center"
            >
              <div className="text-2xl sm:text-3xl font-heading font-bold text-gradient">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
