import { motion } from 'framer-motion';
import { BarChart3, GraduationCap, Users, Compass } from 'lucide-react';

const services = [
  {
    icon: BarChart3,
    title: 'Daily Market Analysis',
    description: 'In-depth technical and fundamental analysis shared daily — covering forex pairs, crypto, and major indices with clear reasoning.',
  },
  {
    icon: GraduationCap,
    title: 'Trading Education',
    description: 'Structured learning resources, live sessions, and mentorship designed to build your skills from fundamentals to advanced strategies.',
  },
  {
    icon: Users,
    title: 'Community & Support',
    description: 'A private community of like-minded traders sharing ideas, asking questions, and growing together in a supportive environment.',
  },
  {
    icon: Compass,
    title: 'Mentorship',
    description: 'Personalized guidance from experienced traders to help you develop discipline, refine your strategy, and navigate the markets with confidence.',
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
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">Our Services</h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            Everything you need to learn trading properly and grow as a disciplined trader.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/20 transition-all duration-400"
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors duration-300">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
