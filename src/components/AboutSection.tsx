import { motion } from 'framer-motion';

const highlights = [
  { value: '5+', label: 'Years Experience' },
  { value: '$2M+', label: 'Capital Managed' },
  { value: '12', label: 'Expert Traders' },
];

const markets = [
  { symbol: 'EUR/USD', price: '1.08432', change: '+0.34%', positive: true },
  { symbol: 'BTC/USD', price: '$67,210', change: '+2.14%', positive: true },
  { symbol: 'GBP/USD', price: '1.26540', change: '-0.12%', positive: false },
  { symbol: 'GOLD', price: '$2,318', change: '+0.67%', positive: true },
  { symbol: 'NAS100', price: '17,842', change: '+1.02%', positive: true },
  { symbol: 'ETH/USD', price: '$3,480', change: '-0.89%', positive: false },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-28 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs text-primary tracking-widest uppercase font-semibold mb-3">About Us</p>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground leading-tight">
              We Trade. <br />
              <span className="text-gradient-gold">You Profit.</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-lg">
              Capital Crew is a team of professional traders and analysts dedicated to helping individuals grow their capital through disciplined trading strategies, precise market insights, and robust risk management frameworks.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-lg">
              From seasoned forex professionals to crypto market specialists, our crew brings together expertise across multiple asset classes — delivering consistent, transparent, and verifiable results.
            </p>
            <div className="flex gap-10 mt-10">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <div className="text-3xl font-heading font-bold text-gradient-gold">{h.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{h.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-card rounded-2xl border border-border overflow-hidden"
            style={{ boxShadow: 'var(--shadow-card)' }}
          >
            <div className="flex items-center gap-2 px-6 py-4 border-b border-border">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-gold" />
              <span className="text-xs text-muted-foreground tracking-widest uppercase">Live Markets</span>
              <span className="ml-auto text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-semibold">LIVE</span>
            </div>
            <div className="divide-y divide-border">
              {markets.map((m) => (
                <div key={m.symbol} className="flex items-center justify-between px-6 py-3.5 hover:bg-secondary/30 transition-colors">
                  <span className="text-sm font-medium text-foreground">{m.symbol}</span>
                  <span className="text-sm text-muted-foreground">{m.price}</span>
                  <span className={`text-sm font-medium ${m.positive ? 'text-primary' : 'text-destructive'}`}>
                    {m.change}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
