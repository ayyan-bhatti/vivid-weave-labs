import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Ahmed K.',
    role: 'Community Member',
    initials: 'AK',
    text: 'Capital Crew helped me understand risk management properly. The daily analysis gives real reasoning behind every idea — not just "buy here, sell there." I\'ve learned more in 3 months than a year of trying alone.',
  },
  {
    name: 'Zain R.',
    role: 'Beginner Trader',
    initials: 'ZR',
    text: 'As someone completely new to trading, this community was exactly what I needed. The educational content is clear, no unnecessary hype, and the team is always available to answer questions.',
  },
  {
    name: 'Fatima S.',
    role: 'Forex Enthusiast',
    initials: 'FS',
    text: 'What I appreciate most is the transparency. They show the reasoning behind every setup and aren\'t afraid to admit when something doesn\'t work out. That honesty builds real trust.',
  },
];

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs text-primary tracking-widest uppercase font-semibold mb-3">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">What Members Say</h2>
          <p className="mt-4 text-muted-foreground">Real feedback from real community members.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-8 flex flex-col"
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">"{t.text}"</p>
              <div className="flex items-center gap-3 mt-6 pt-6 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-xs font-semibold text-primary">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
