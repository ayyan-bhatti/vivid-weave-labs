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
      <div className="bg-card rounded-2xl border border-border p-6 sm:p-8 text-center" style={{ boxShadow: 'var(--shadow-card)' }}>
        <p className="text-xs text-muted-foreground tracking-widest uppercase mb-2">What We Focus On</p>
        <p className="text-lg font-heading font-semibold text-foreground mb-4">Education · Analysis · Risk Management · Community</p>
        <p className="text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          We share daily market analysis, educational breakdowns, and trade ideas with full reasoning. Our focus is on helping you develop the skills to make your own informed trading decisions.
        </p>
      </div>
    </motion.div>
  );
}
