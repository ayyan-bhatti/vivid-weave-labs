import { motion } from 'framer-motion';
import { BarChart3, BookOpen, Clock, Users } from 'lucide-react';

const metrics = [
  { icon: Users, label: 'Active Community Members', value: '500+' },
  { icon: BarChart3, label: 'Daily Market Analyses Shared', value: '1,000+' },
  { icon: BookOpen, label: 'Educational Sessions Held', value: '200+' },
  { icon: Clock, label: 'Years of Combined Experience', value: '3+' },
];

export default function ResultsSection() {
  return (
    <section id="results" className="py-24 relative">
      <div className="absolute inset-0 opacity-20"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, hsl(239 84% 67% / 0.06), transparent 60%)' }}
      />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs text-primary tracking-widest uppercase font-semibold mb-3">Our Impact</p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">Community Growth</h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            Real numbers reflecting our commitment to building a genuine trading education community.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/20 transition-all duration-300"
            >
              <m.icon className="w-6 h-6 text-primary mx-auto mb-3" />
              <p className="text-[11px] text-muted-foreground tracking-widest uppercase mb-2">{m.label}</p>
              <p className="text-3xl font-heading font-bold text-foreground">{m.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
