import { motion } from 'framer-motion';
import { ShieldCheck, BookOpen, Eye, Handshake } from 'lucide-react';

const advantages = [
  {
    icon: BookOpen,
    title: 'Education-First Approach',
    description: 'We teach you how to think, not just what to trade. Every idea comes with full reasoning.',
  },
  {
    icon: ShieldCheck,
    title: 'Risk Management Focus',
    description: 'Capital preservation is our priority. We emphasize proper position sizing and stop-loss discipline.',
  },
  {
    icon: Eye,
    title: 'Full Transparency',
    description: 'No fake results, no cherry-picked wins. We share both our successes and lessons learned.',
  },
  {
    icon: Handshake,
    title: 'Supportive Community',
    description: 'Join 500+ traders learning together. Ask questions, share ideas, and grow at your own pace.',
  },
];

export default function AdvantagesSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs text-primary tracking-widest uppercase font-semibold mb-3">Why Capital Crew</p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">What Makes Us Different</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            We're not here to sell you dreams. We're here to help you build real trading skills.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center p-6"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
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
