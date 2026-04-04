import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function JoinSection() {
  return (
    <section id="join" className="py-24 relative">
      <div className="absolute inset-0 opacity-20"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, hsl(239 84% 67% / 0.08), transparent 60%)' }}
      />
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs text-primary tracking-widest uppercase font-semibold mb-3">Get Started</p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">Ready to Learn & Grow?</h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            Join our community of traders who believe in education, discipline, and transparent analysis. No hype — just real learning.
          </p>
          <div className="flex items-center justify-center gap-4 mt-8">
            <a href="https://t.me/capitalcrewofficial" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 glow-primary-sm">
                Join Capital Crew
              </Button>
            </a>
            <Link to="/team">
              <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-card">
                Meet the Team
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
