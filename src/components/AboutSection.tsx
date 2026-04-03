import { motion } from 'framer-motion';

const highlights = [
  { value: '3+', label: 'Years Combined Experience' },
  { value: '500+', label: 'Community Members' },
  { value: 'Daily', label: 'Market Insights' },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs text-primary tracking-widest uppercase font-semibold mb-3">About Us</p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground leading-tight">
              Building a Community of
              <br />
              <span className="text-gradient-green">Informed Traders</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-lg">
              Capital Crew is a trading education community founded on the principle that consistent growth comes from disciplined learning, honest analysis, and shared knowledge. We don't promise overnight riches — we focus on education, strategy, and risk management.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-lg">
              Our team shares daily market analysis, educational content, and trading ideas across forex and crypto markets. Every insight is backed by reasoning — no blind signals, no hype.
            </p>
            <div className="flex gap-10 mt-10">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <div className="text-2xl font-heading font-bold text-gradient-green">{h.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{h.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-2xl border border-border p-8"
            style={{ boxShadow: 'var(--shadow-card)' }}
          >
            <h3 className="font-heading font-semibold text-foreground mb-6">What We Stand For</h3>
            <div className="space-y-5">
              {[
                { title: 'Education First', desc: 'Every trade idea comes with reasoning so you learn, not just follow.' },
                { title: 'Risk Management', desc: 'We emphasize capital preservation. Never risk more than you can afford.' },
                { title: 'Transparency', desc: 'No fake screenshots. No manipulated results. Just honest analysis.' },
                { title: 'Community', desc: 'A supportive environment where traders help each other grow.' },
              ].map((item, i) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary font-bold text-sm">{i + 1}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{item.title}</p>
                    <p className="text-sm text-muted-foreground mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
