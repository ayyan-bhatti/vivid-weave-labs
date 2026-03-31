import { motion } from 'framer-motion';
import { Zap, GraduationCap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const perks = [
  { icon: Zap, title: 'Instant Access', desc: 'Get immediate access to signals and the community' },
  { icon: GraduationCap, title: 'Personal Onboarding', desc: '1-on-1 setup call with a Capital Crew analyst' },
  { icon: Shield, title: '7-Day Money Back', desc: 'Try it risk-free with a full refund guarantee' },
];

export default function JoinSection() {
  const [form, setForm] = useState({ name: '', email: '', whatsapp: '', experience: '', interest: '' });

  return (
    <section id="join" className="py-28 relative">
      <div className="absolute inset-0 opacity-25"
        style={{ background: 'radial-gradient(ellipse at 30% 50%, hsl(38 75% 55% / 0.1), transparent 50%)' }}
      />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs text-primary tracking-widest uppercase font-semibold mb-3">Get Started</p>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground">Join Capital Crew</h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            Ready to take your trading to the next level? Fill out the form and our team will reach out within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {perks.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 items-start"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <p.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground">{p.title}</h4>
                  <p className="text-sm text-muted-foreground mt-0.5">{p.desc}</p>
                </div>
              </motion.div>
            ))}
            <div className="pt-4">
              <p className="text-2xl font-heading font-bold text-foreground">Building Wealth.</p>
              <p className="text-2xl font-heading font-bold text-gradient-gold">Trading Smarter.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-card border border-border rounded-2xl p-8" style={{ boxShadow: 'var(--shadow-card)' }}>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-6">Apply for Membership</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="text-xs text-muted-foreground tracking-widest uppercase block mb-1.5">Full Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground tracking-widest uppercase block mb-1.5">Email Address</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground tracking-widest uppercase block mb-1.5">WhatsApp Number</label>
                  <input
                    type="tel"
                    value={form.whatsapp}
                    onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                    className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="+1 234 567 890"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground tracking-widest uppercase block mb-1.5">Trading Experience</label>
                  <select
                    value={form.experience}
                    onChange={(e) => setForm({ ...form, experience: e.target.value })}
                    className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option value="">Select experience</option>
                    <option>Complete Beginner</option>
                    <option>Less than 1 Year</option>
                    <option>1–3 Years</option>
                    <option>3+ Years (Experienced)</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-muted-foreground tracking-widest uppercase block mb-1.5">Interested In</label>
                  <select
                    value={form.interest}
                    onChange={(e) => setForm({ ...form, interest: e.target.value })}
                    className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option value="">Select interest</option>
                    <option>Signals & Trade Ideas</option>
                    <option>Mentorship Program</option>
                    <option>Portfolio Management</option>
                    <option>Full Membership (All Access)</option>
                  </select>
                </div>
                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-6 text-base glow-gold-sm mt-2">
                  Apply Now — It's Free →
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
