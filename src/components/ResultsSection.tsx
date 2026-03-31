import { motion } from 'framer-motion';
import { Target, TrendingUp, Shield, Zap } from 'lucide-react';

const metrics = [
  { icon: Target, label: 'Win Rate (12-Month Avg)', value: '87.3%' },
  { icon: TrendingUp, label: 'Average Monthly Return', value: '+34.2%' },
  { icon: Shield, label: 'Max Drawdown (Controlled)', value: '≤ 8%' },
  { icon: Zap, label: 'Total Signals (This Year)', value: '1,240+' },
];

const details = [
  { label: 'Starting Capital', value: '$93,000' },
  { label: 'Best Month', value: '+52.1%' },
  { label: 'Total Trades', value: '1,240' },
  { label: 'Profitable Months', value: '11/12' },
  { label: 'Avg Risk:Reward', value: '1:2.8' },
];

export default function ResultsSection() {
  return (
    <section id="results" className="py-28 relative">
      <div className="absolute inset-0 opacity-30"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, hsl(38 75% 55% / 0.08), transparent 60%)' }}
      />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs text-primary tracking-widest uppercase font-semibold mb-3">Track Record</p>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground">Our Performance</h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            Real numbers. Verified results. No manipulation, no cherry-picking.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 text-center"
            >
              <m.icon className="w-6 h-6 text-primary mx-auto mb-3" />
              <p className="text-[11px] text-muted-foreground tracking-widest uppercase mb-2">{m.label}</p>
              <p className="text-3xl font-heading font-bold text-foreground">{m.value}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-2xl p-8 max-w-2xl mx-auto"
          style={{ boxShadow: 'var(--shadow-card)' }}
        >
          <div className="text-center mb-6">
            <p className="text-xs text-muted-foreground tracking-widest uppercase">Cumulative P&L — 2024</p>
            <p className="text-4xl font-heading font-bold text-gradient-gold mt-2">$124,840</p>
            <p className="text-sm text-primary mt-1">↑ +34.2% YTD Growth</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {details.map((d) => (
              <div key={d.label} className="text-center py-3 rounded-xl bg-secondary/50">
                <p className="text-xs text-muted-foreground">{d.label}</p>
                <p className="text-lg font-heading font-semibold text-foreground mt-0.5">{d.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
