import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Send, Mail, MessageCircle } from 'lucide-react';

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

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

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              <a
                href="https://t.me/capitalcrewofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-xl p-5 hover:border-primary/30 hover:scale-[1.02] transition-all duration-300 text-center"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: '#0088cc20' }}>
                  <Send className="w-5 h-5" style={{ color: '#0088cc' }} />
                </div>
                <p className="text-sm font-semibold text-foreground">Telegram</p>
                <p className="text-xs text-muted-foreground">Join our channel</p>
              </a>
              <a
                href="https://wa.me/message/capitalcrew"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-xl p-5 hover:border-primary/30 hover:scale-[1.02] transition-all duration-300 text-center"
              >
                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center mx-auto mb-3">
                  <MessageCircle className="w-5 h-5 text-green-500" />
                </div>
                <p className="text-sm font-semibold text-foreground">WhatsApp</p>
                <p className="text-xs text-muted-foreground">Message us</p>
              </a>
              <a
                href="https://www.instagram.com/capitalcrew.official?igsh=MWlnbmZ0MDcyYjlnNQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-xl p-5 hover:border-primary/30 hover:scale-[1.02] transition-all duration-300 text-center"
              >
                <div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center mx-auto mb-3">
                  <InstagramIcon className="w-5 h-5 text-pink-500" />
                </div>
                <p className="text-sm font-semibold text-foreground">Instagram</p>
                <p className="text-xs text-muted-foreground">Follow us</p>
              </a>
              <a
                href="mailto:capitalcrewofficial03@gmail.com"
                className="glass-card rounded-xl p-5 hover:border-primary/30 hover:scale-[1.02] transition-all duration-300 text-center"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <p className="text-sm font-semibold text-foreground">Email</p>
                <p className="text-xs text-muted-foreground">capitalcrewofficial03</p>
              </a>
            </div>

            <div className="glass-card rounded-2xl p-8">
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
                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-6 text-base glow-primary-sm">
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
