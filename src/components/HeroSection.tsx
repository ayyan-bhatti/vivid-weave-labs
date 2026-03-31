import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Scene3D from './Scene3D';

const stats = [
  { value: '87%', label: 'Win Rate' },
  { value: '+34%', label: 'Avg Monthly Return' },
  { value: '2,400+', label: 'Active Members' },
  { value: '3 Yrs', label: 'Track Record' },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, hsl(38 75% 55% / 0.3), transparent 70%)' }}
      />
      
      <Scene3D />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-subtle bg-card/50 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse-gold" />
          <span className="text-sm text-muted-foreground">Now Accepting New Members</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="font-heading text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95]"
        >
          <span className="text-foreground">Capital</span>
          <br />
          <span className="text-gradient-gold">Crew</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed"
        >
          We help traders grow capital through smart strategies, disciplined execution, and real-time market intelligence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex items-center justify-center gap-4 mt-10"
        >
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 glow-gold-sm">
            Join Now →
          </Button>
          <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-card">
            View Results
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-20 max-w-3xl mx-auto"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-heading font-bold text-gradient-gold">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
