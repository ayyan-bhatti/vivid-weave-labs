import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs text-primary tracking-widest uppercase font-semibold mb-3 text-center">What We Focus On</p>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground text-center">
              Education · Analysis · Risk Management · Community
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto">
              We share daily market analysis, educational breakdowns, and trade ideas with full reasoning. Our focus is on helping you develop the skills to make your own informed trading decisions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
