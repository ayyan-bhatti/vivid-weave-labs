import { motion, useState } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useState as useStateReact } from 'react';

const testimonials = [
  {
    name: 'Ahmed K.',
    role: 'Forex Trader',
    initials: 'AK',
    text: 'Capital Crew transformed my trading approach. The daily analysis with clear reasoning helped me understand the "why" behind every trade. I went from random entries to structured setups.',
    rating: 5,
  },
  {
    name: 'Zain R.',
    role: 'Crypto Enthusiast',
    initials: 'ZR',
    text: 'As a complete beginner, the mentorship program was invaluable. Arsalan and the team took time to explain concepts I struggled with. The community is genuinely supportive.',
    rating: 5,
  },
  {
    name: 'Fatima S.',
    role: 'Stock Market Investor',
    initials: 'FS',
    text: 'The transparency sets Capital Crew apart. They share both wins and losses with full analysis. No cherry-picked results, no fake screenshots. Just honest education.',
    rating: 5,
  },
  {
    name: 'Omar H.',
    role: 'Swing Trader',
    initials: 'OH',
    text: 'The risk management framework alone was worth joining. I used to over-leverage every trade. Now I have a disciplined system that protects my capital while still capturing solid moves.',
    rating: 5,
  },
  {
    name: 'Sarah M.',
    role: 'Part-time Trader',
    initials: 'SM',
    text: 'Balancing trading with a full-time job was hard until I found Capital Crew. The evening analysis sessions and weekend breakdowns fit perfectly into my schedule.',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useStateReact(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="reviews" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs text-primary tracking-widest uppercase font-semibold mb-3">Client Reviews</p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">Trusted by Traders Worldwide</h2>
          <p className="mt-4 text-muted-foreground">Hear from members who have grown with Capital Crew.</p>
        </motion.div>

        {/* Slider */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4 }}
            className="glass-card rounded-2xl p-8 sm:p-10 text-center"
          >
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(testimonials[current].rating)].map((_, j) => (
                <Star key={j} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-lg text-foreground/90 leading-relaxed mb-8 italic">
              "{testimonials[current].text}"
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                {testimonials[current].initials}
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">{testimonials[current].name}</p>
                <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
              </div>
            </div>
          </motion.div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'bg-primary w-6' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
