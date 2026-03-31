import { motion } from 'framer-motion';
import { Users, ShieldCheck, Search, Handshake } from 'lucide-react';

const advantages = [
  {
    icon: Users,
    title: 'Professional Team',
    description: '12 expert traders with backgrounds in institutional finance, prop firms, and algorithmic trading.',
  },
  {
    icon: ShieldCheck,
    title: 'Risk Management',
    description: 'Every trade is governed by strict risk rules — never more than 2% per trade, always protecting your downside.',
  },
  {
    icon: Search,
    title: 'Transparent Results',
    description: 'All our trades are logged, verified, and shared publicly. No hidden losses. Pure accountability.',
  },
  {
    icon: Handshake,
    title: 'Community Support',
    description: 'Join a private community of 2,400+ traders. Share ideas, get help, and grow together in real time.',
  },
];

export default function AdvantagesSection() {
  return (
    <section className="py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs text-primary tracking-widest uppercase font-semibold mb-3">Why Capital Crew</p>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground">The Advantage</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            We don't just trade — we engineer wealth-building systems backed by data, discipline, and decades of combined experience.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <a.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{a.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{a.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
