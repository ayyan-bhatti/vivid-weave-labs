import { motion } from 'framer-motion';
import { TrendingUp, Bitcoin, BarChart3, LineChart, ShieldCheck, Compass } from 'lucide-react';

const services = [
  {
    icon: TrendingUp,
    title: 'Forex Trading',
    description: 'In-depth analysis of major, minor, and exotic currency pairs with precise entry and exit strategies.',
    accent: 'from-primary/20 to-primary/5',
  },
  {
    icon: Bitcoin,
    title: 'Crypto Trading',
    description: 'Navigate the volatile crypto market with disciplined strategies across Bitcoin, Ethereum, and altcoins.',
    accent: 'from-accent/20 to-accent/5',
  },
  {
    icon: BarChart3,
    title: 'Stock Market Trading',
    description: 'Equity analysis covering blue-chip stocks, growth opportunities, and sector-based investment strategies.',
    accent: 'from-primary/20 to-primary/5',
  },
  {
    icon: LineChart,
    title: 'Signals & Analysis',
    description: 'Daily technical and fundamental analysis with clear reasoning behind every market call and trade idea.',
    accent: 'from-accent/20 to-accent/5',
  },
  {
    icon: ShieldCheck,
    title: 'Risk Management',
    description: 'Capital preservation strategies, position sizing frameworks, and stop-loss discipline for consistent growth.',
    accent: 'from-primary/20 to-primary/5',
  },
  {
    icon: Compass,
    title: 'Mentorship Program',
    description: 'One-on-one and group mentorship sessions to accelerate your trading journey with personalized guidance.',
    accent: 'from-accent/20 to-accent/5',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs text-primary tracking-widest uppercase font-semibold mb-3">What We Offer</p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">Professional Trading Services</h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            Comprehensive solutions for traders at every level — from beginners to advanced market participants.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group glass-card rounded-2xl p-8 hover:border-primary/30 transition-all duration-400 relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${s.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{s.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
