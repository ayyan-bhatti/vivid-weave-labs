import { Link } from 'react-router-dom';
import Disclaimer from './Disclaimer';

export default function Footer() {
  return (
    <>
      <Disclaimer />
      <footer className="border-t border-border py-10">
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center font-heading font-bold text-xs text-primary-foreground">
                  CC
                </div>
                <span className="font-heading font-semibold text-foreground">Capital Crew</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A trading education community focused on transparency, learning, and disciplined growth.
              </p>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-foreground text-sm mb-4">Pages</h4>
              <div className="space-y-2">
                {[
                  { label: 'Home', to: '/' },
                  { label: 'About', to: '/about' },
                  { label: 'Team', to: '/team' },
                  { label: 'Contact', to: '/contact' },
                ].map((link) => (
                  <Link key={link.label} to={link.to} className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-foreground text-sm mb-4">Community</h4>
              <div className="space-y-2">
                <a href="https://wa.me/your-channel-link" target="_blank" rel="noopener noreferrer" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                  WhatsApp Channel
                </a>
                <Link to="/arsalan" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Arsalan's Journey
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-6 text-center">
            <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Capital Crew. All rights reserved. For educational purposes only.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
