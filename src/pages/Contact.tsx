import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { MessageCircle, Mail } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

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
            <p className="text-xs text-primary tracking-widest uppercase font-semibold mb-3">Contact</p>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-4">Get In Touch</h1>
            <p className="text-muted-foreground mb-10">
              Have questions about our community? Want to learn more before joining? Reach out — we'd love to hear from you.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              <a
                href="https://wa.me/your-channel-link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-card border border-border rounded-xl p-5 hover:border-primary/20 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">WhatsApp Channel</p>
                  <p className="text-xs text-muted-foreground">Join our community</p>
                </div>
              </a>
              <a
                href="mailto:contact@capitalcrew.com"
                className="flex items-center gap-4 bg-card border border-border rounded-xl p-5 hover:border-primary/20 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Email Us</p>
                  <p className="text-xs text-muted-foreground">contact@capitalcrew.com</p>
                </div>
              </a>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8" style={{ boxShadow: 'var(--shadow-card)' }}>
              <h3 className="font-heading font-semibold text-foreground text-lg mb-6">Send a Message</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
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
                </div>
                <div>
                  <label className="text-xs text-muted-foreground tracking-widest uppercase block mb-1.5">Subject</label>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground tracking-widest uppercase block mb-1.5">Message</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={5}
                    className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-6 text-base glow-green-sm">
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
