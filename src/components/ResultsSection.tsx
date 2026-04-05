import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Activity, DollarSign } from 'lucide-react';

const results = [
  {
    pair: 'EUR/USD',
    type: 'Forex',
    direction: 'long',
    result: '+120 pips',
    date: 'Mar 2025',
    icon: TrendingUp,
  },
  {
    pair: 'BTC/USDT',
    type: 'Crypto',
    direction: 'long',
    result: '+8.4%',
    date: 'Feb 2025',
    icon: TrendingUp,
  },
  {
    pair: 'GBP/JPY',
    type: 'Forex',
    direction: 'short',
    result: '+85 pips',
    date: 'Jan 2025',
    icon: TrendingDown,
  },
  {
    pair: 'ETH/USDT',
    type: 'Crypto',
    direction: 'long',
    result: '+12.1%',
    date: 'Mar 2025',
    icon: TrendingUp,
  },
  {
    pair: 'AAPL',
    type: 'Stocks',
    direction: 'long',
    result: '+5.2%',
    date: 'Feb 2025',
    icon: Activity,
  },
  {
    pair: 'XAU/USD',
    type: 'Commodities',
    direction: 'long',
    result: '+200 pips',
    date: 'Jan 2025',
    icon: DollarSign,
  },
];

export default function ResultsSection() {
  return (
    <section id="results" className="py-24 relative">
      <div className="absolute inset-0 opacity-20"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, hsl(142 71% 45% / 0.06), transparent 60%)' }}
      />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs text-primary tracking-widest uppercase font-semibold mb-3">Track Record</p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">Recent Trade Highlights</h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            A snapshot of recent analyzed trades shared with our community. Past performance does not guarantee future results.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {results.map((r, i) => (
            <motion.div
              key={r.pair + r.date}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card rounded-2xl p-6 hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">{r.type}</span>
                <span className="text-xs text-muted-foreground">{r.date}</span>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <r.icon className={`w-5 h-5 ${r.direction === 'long' ? 'text-primary' : 'text-red-400'}`} />
                <h3 className="text-lg font-heading font-semibold text-foreground">{r.pair}</h3>
              </div>
              <div className="flex items-center justify-between">
                <span className={`text-xs uppercase tracking-wider ${r.direction === 'long' ? 'text-primary' : 'text-red-400'}`}>
                  {r.direction}
                </span>
                <span className="text-xl font-heading font-bold text-primary">{r.result}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs text-muted-foreground mt-8 max-w-md mx-auto"
        >
          These are educational trade analyses shared in our community. Results vary and trading involves risk.
        </motion.p>
      </div>
    </section>
  );
}
