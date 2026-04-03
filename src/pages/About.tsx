import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function About() {
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
            <p className="text-xs text-primary tracking-widest uppercase font-semibold mb-3">About Us</p>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-8">
              Who We Are
            </h1>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Capital Crew is a trading education community built on the belief that real growth comes from genuine learning, not empty promises. We started as a small group of traders sharing ideas and analysis — and we've grown into a community of over 500 members who learn and grow together.
              </p>
              <p>
                Our approach is simple: education first, always. Every trade idea we share comes with full reasoning and risk parameters. We don't sell dreams of overnight wealth — we focus on helping our members develop real skills that compound over time.
              </p>
              <p>
                We cover forex, cryptocurrency, and major indices with daily technical and fundamental analysis. Our team shares insights, hosts live educational sessions, and maintains a supportive community where questions are encouraged and knowledge is freely shared.
              </p>

              <div className="bg-card border border-border rounded-2xl p-8 mt-10" style={{ boxShadow: 'var(--shadow-card)' }}>
                <h3 className="font-heading font-semibold text-foreground text-lg mb-4">Our Core Values</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { title: 'Transparency', desc: 'No fake screenshots or manipulated results.' },
                    { title: 'Education', desc: 'Teach reasoning, not just entries and exits.' },
                    { title: 'Risk Management', desc: 'Capital preservation always comes first.' },
                    { title: 'Community', desc: 'A supportive environment for all skill levels.' },
                  ].map((v) => (
                    <div key={v.title} className="p-4 rounded-xl bg-secondary/50">
                      <p className="text-sm font-semibold text-foreground">{v.title}</p>
                      <p className="text-sm text-muted-foreground mt-1">{v.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
