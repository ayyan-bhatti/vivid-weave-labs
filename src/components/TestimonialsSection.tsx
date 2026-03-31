import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'James M.',
    role: 'Forex Trader, London',
    initials: 'JM',
    text: 'Capital Crew completely transformed my approach to trading. Their signals are precise and the mentorship helped me understand the \'why\' behind every trade. I\'m now consistently profitable for the first time in 3 years.',
  },
  {
    name: 'Sarah A.',
    role: 'Crypto Investor, Dubai',
    initials: 'SA',
    text: 'I was skeptical at first, but the verified track record won me over. In just 4 months with Capital Crew, my portfolio grew by 40%. The risk management alone is worth the subscription.',
  },
  {
    name: 'Ryan T.',
    role: 'Indices Trader, NYC',
    initials: 'RT',
    text: 'The daily market analysis and live trading rooms are incredible. You can see the thought process behind every call. It\'s like having a hedge fund team in your pocket.',
  },
];

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="py-28 relative">
      <div className="absolute inset-0 opacity-20"
        style={{ background: 'radial-gradient(ellipse at 50% 100%, hsl(38 75% 55% / 0.1), transparent 60%)' }}
      />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs text-primary tracking-widest uppercase font-semibold mb-3">Testimonials</p>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground">What Our Members Say</h2>
          <p className="mt-4 text-muted-foreground">Real traders. Real results. Real experiences.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
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
                <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center text-xs font-semibold text-primary">
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
