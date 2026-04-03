import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const team = [
  {
    name: 'Arsalan',
    role: 'Founder & Lead Analyst',
    initials: 'AR',
    bio: 'Passionate about forex and crypto markets with years of hands-on trading experience. Founded Capital Crew to build a transparent and educational trading community.',
    hasPage: true,
  },
  {
    name: 'Hamza',
    role: 'Technical Analyst',
    initials: 'HZ',
    bio: 'Specializes in technical chart analysis and price action strategies across multiple timeframes. Focuses on helping members read the markets with clarity.',
    hasPage: false,
  },
  {
    name: 'Ali',
    role: 'Community Manager & Educator',
    initials: 'AL',
    bio: 'Manages the day-to-day community operations and creates educational content to help beginners understand the fundamentals of trading.',
    hasPage: false,
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs text-primary tracking-widest uppercase font-semibold mb-3">Our Team</p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">Meet the Crew</h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            Real people, real traders, working together to build something meaningful.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-8 text-center"
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <span className="text-lg font-heading font-bold text-primary">{member.initials}</span>
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground">{member.name}</h3>
              <p className="text-sm text-primary mt-1">{member.role}</p>
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{member.bio}</p>
              {member.hasPage && (
                <Link
                  to="/arsalan"
                  className="inline-block mt-4 text-sm text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  View Journey →
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
