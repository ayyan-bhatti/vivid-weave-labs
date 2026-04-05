import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const team = [
  {
    name: 'Arsalan Haider',
    role: 'Founder & Mentor',
    initials: 'AH',
    bio: 'Passionate about forex and crypto markets with years of hands-on trading experience. Founded Capital Crew to build a transparent and educational trading community.',
    hasPage: true,
  },
  {
    name: 'Shiza Gull',
    role: 'SEO Specialist',
    initials: 'SG',
    bio: 'Drives the digital presence of Capital Crew through strategic SEO and content optimization, ensuring our community reaches traders who genuinely need guidance.',
    hasPage: false,
  },
  {
    name: 'Ayyan',
    role: 'Technical Analyst',
    initials: 'AY',
    bio: 'Specializes in technical chart analysis and price action strategies across multiple timeframes. Focuses on helping members read the markets with clarity.',
    hasPage: false,
  },
  {
    name: 'Huzaifah',
    role: 'Community Manager & Educator',
    initials: 'HZ',
    bio: 'Manages the day-to-day community operations and creates educational content to help beginners understand the fundamentals of trading.',
    hasPage: false,
  },
  {
    name: 'Basit Ali',
    role: 'Dealer',
    initials: 'BA',
    bio: 'Handles trade execution and deal management with precision. Ensures smooth operations and timely communication within the trading pipeline.',
    hasPage: false,
  },
  {
    name: 'Komal',
    role: 'Trader',
    initials: 'KM',
    bio: 'An active trader contributing live market insights and trade setups. Brings a disciplined approach to intraday and swing trading strategies.',
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

        {/* Row 1: Arsalan & Shiza side by side */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-6">
          {team.slice(0, 2).map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-8 text-center transition-all duration-300 hover:glow-primary-sm hover:border-primary/50 hover:-translate-y-2 hover:bg-card/80"
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
                  to="/mentor"
                  className="inline-block mt-4 text-sm text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  View Journey →
                </Link>
              )}
            </motion.div>
          ))}
        </div>

        {/* Row 2: Remaining members */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {team.slice(2).map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i + 2) * 0.1 }}
              className="bg-card border border-border rounded-2xl p-8 text-center transition-all duration-300 hover:glow-primary-sm hover:border-primary/50 hover:-translate-y-2 hover:bg-card/80"
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <span className="text-lg font-heading font-bold text-primary">{member.initials}</span>
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground">{member.name}</h3>
              <p className="text-sm text-primary mt-1">{member.role}</p>
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
