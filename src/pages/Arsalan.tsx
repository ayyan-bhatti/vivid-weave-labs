import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function ArsalanPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-28 pb-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <div className="flex items-center gap-5 mb-8">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-heading font-bold text-primary">AR</span>
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">Arsalan</h1>
                <p className="text-primary font-medium">Founder & Lead Analyst</p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-heading font-semibold text-foreground mb-4">My Journey</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I started trading like most people — excited, underprepared, and full of unrealistic expectations. The early days were tough. I lost money, made emotional decisions, and learned the hard way that trading isn't about quick wins.
                  </p>
                  <p>
                    Over time, I developed discipline. I studied price action, risk management, and market psychology. Slowly, my approach became more structured. I started journaling every trade, analyzing my mistakes, and building systematic strategies.
                  </p>
                  <p>
                    Capital Crew was born from a simple idea: I wished I had a community like this when I started. A place where people share honest analysis, admit their losses, and help each other get better — without the fake guru nonsense.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-heading font-semibold text-foreground mb-4">My Vision</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I want Capital Crew to be the most transparent and educational trading community out there. Not the biggest — the most genuine. A place where people actually learn and grow, not where they're sold dreams.
                  </p>
                  <p>
                    My goal is to keep building high-quality educational content, share honest daily analysis, and create an environment where traders of all levels can develop real skills. Trading is a marathon, not a sprint — and I want this community to reflect that mindset.
                  </p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-2xl p-8 mt-10" style={{ boxShadow: 'var(--shadow-card)' }}>
                <h3 className="font-heading font-semibold text-foreground text-lg mb-6">Send Me a Message</h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="text-xs text-muted-foreground tracking-widest uppercase block mb-1.5">Name</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground tracking-widest uppercase block mb-1.5">Email</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground tracking-widest uppercase block mb-1.5">Message</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={4}
                      className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                      placeholder="Your message or question..."
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-6 text-base glow-green-sm">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
