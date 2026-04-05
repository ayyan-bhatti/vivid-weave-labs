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
                <span className="text-2xl font-heading font-bold text-primary">AH</span>
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">Arsalan Haider</h1>
                <p className="text-primary font-medium mb-3">Founder & Mentor</p>
                <div className="flex gap-4">
                  <a href="https://t.me/capitalcrewofficial" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/mr_arslan_haider?igsh=MWJ1OTJ3ZDBnMmIxag==" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-pink-500 transition-colors">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-heading font-semibold text-foreground mb-4">My Journey</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>I started trading like most people — excited, underprepared, and full of unrealistic expectations. The early days were tough. I lost money, made emotional decisions, and learned the hard way that trading isn't about quick wins.</p>
                  <p>Over time, I developed discipline. I studied price action, risk management, and market psychology. Slowly, my approach became more structured. I started journaling every trade, analyzing my mistakes, and building systematic strategies.</p>
                  <p>Capital Crew was born from a simple idea: I wished I had a mentor and a community like this when I started. A place where people share honest analysis, admit their losses, and help each other improve — without the fake guru nonsense.</p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-heading font-semibold text-foreground mb-4">My Vision</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>I want Capital Crew to be the most transparent and educational trading community out there. Not the biggest — the most genuine.</p>
                  <p>My goal is to mentor the next generation of disciplined traders, share honest daily analysis, and create an environment where traders of all levels can develop real skills. Trading is a marathon, not a sprint.</p>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-8 mt-10">
                <h3 className="font-heading font-semibold text-foreground text-lg mb-6">Send Me a Message</h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="text-xs text-muted-foreground tracking-widest uppercase block mb-1.5">Name</label>
                    <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground tracking-widest uppercase block mb-1.5">Email</label>
                    <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" placeholder="you@example.com" />
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground tracking-widest uppercase block mb-1.5">Message</label>
                    <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={4} className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none" placeholder="Your message or question..." />
                  </div>
                  <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-6 text-base glow-primary-sm">Send Message</Button>
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
