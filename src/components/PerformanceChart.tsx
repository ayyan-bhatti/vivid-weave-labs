import { motion } from 'framer-motion';

export default function PerformanceChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className="container mx-auto px-6 -mt-6 relative z-10"
    >
      <div className="glass-card rounded-2xl p-6 sm:p-8 text-center">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {['Forex', 'Crypto', 'Stocks', 'Commodities'].map((market, i) => (
            <motion.div
              key={market}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="flex items-center gap-2"
            >
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm font-medium text-foreground">{market}</span>
            </motion.div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground mt-4 max-w-xl mx-auto">
          Multi-market coverage with daily technical and fundamental analysis across all major asset classes.
        </p>
      </div>
    </motion.div>
  );
}
