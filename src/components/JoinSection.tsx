import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Send } from 'lucide-react';

export default function JoinSection() {
  return (
    <section id="join" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, hsl(142 71% 45% / 0.06), transparent 60%)' }}
      />
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs text-primary tracking-widest uppercase font-semibold mb-3">Start Your Journey</p>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-foreground leading-tight">
            Ready to Trade with
            <br />
            <span className="text-gradient">Confidence?</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-lg mx-auto">
            Join 500+ traders in our community. Get daily analysis, mentorship, and the tools you need to navigate global markets.
          </p>
          <div className="flex items-center justify-center gap-4 mt-10">
            <a href="https://t.me/capitalcrewofficial" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 glow-primary-sm gap-2">
                <Send className="w-4 h-4" /> Join on Telegram
              </Button>
            </a>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-primary/30 text-foreground hover:bg-primary/5 gap-2">
                Contact Us <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
