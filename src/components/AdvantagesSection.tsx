import { motion } from 'framer-motion';
import { ShieldCheck, BookOpen, Eye, TrendingUp } from 'lucide-react';

const advantages = [
  {
    icon: BookOpen,
    title: 'Education-First Philosophy',
    description: 'We teach you the reasoning behind every trade so you can develop independent analysis skills.',
  },
  {
    icon: ShieldCheck,
    title: 'Capital Protection',
    description: 'Strict risk management protocols with proper position sizing and disciplined stop-loss strategies.',
  },
  {
    icon: Eye,
    title: 'Complete Transparency',
    description: 'No fake results or cherry-picked screenshots. We share honest analysis — wins, losses, and lessons.',
  },
  {
    icon: TrendingUp,
    title: 'Multi-Market Coverage',
    description: 'Comprehensive analysis across Forex, Crypto, and Stock markets to diversify your trading opportunities.',
  },
];

export default function AdvantagesSection() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent, hsl(var(--card) / 0.3), transparent)' }} />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs text-primary tracking-widest uppercase font-semibold mb-3">Why Capital Crew</p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">The Capital Crew Advantage</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Built by traders, for traders. Here's what sets our approach apart from the rest.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/15 group-hover:scale-110 transition-all duration-300">
                <a.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-base font-heading font-semibold text-foreground mb-2">{a.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{a.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
