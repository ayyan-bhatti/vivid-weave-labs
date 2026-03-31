import { motion } from 'framer-motion';
import { Radio, GraduationCap, Briefcase, BarChart3 } from 'lucide-react';

const services = [
  {
    icon: Radio,
    title: 'Signals & Trade Ideas',
    description: 'Receive precise, actionable trade signals with entry, stop-loss, and take-profit levels across forex, crypto, and indices — in real time.',
  },
  {
    icon: GraduationCap,
    title: 'Mentorship & Education',
    description: '1-on-1 coaching sessions, live webinars, and structured courses designed to take you from novice to consistent, profitable trader.',
  },
  {
    icon: Briefcase,
    title: 'Portfolio Management',
    description: 'Let our professionals manage your trading portfolio using proven risk-adjusted strategies with full transparency and regular reporting.',
  },
  {
    icon: BarChart3,
    title: 'Market Analysis',
    description: 'Daily and weekly in-depth technical and fundamental analysis reports — keeping you ahead of major market moves and economic events.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs text-primary tracking-widest uppercase font-semibold mb-3">What We Offer</p>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground">Our Services</h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            Everything you need to trade smarter, grow faster, and protect your capital.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-500"
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{s.description}</p>
              <a href="#join" className="inline-flex items-center gap-1 mt-5 text-sm text-primary font-medium hover:text-gold-light transition-colors">
                Learn More →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
