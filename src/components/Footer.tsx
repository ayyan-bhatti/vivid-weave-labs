import { Link } from 'react-router-dom';
import { Send, Mail } from 'lucide-react';
import Disclaimer from './Disclaimer';
import logo from '@/assets/logo.png';

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.48V13a8.28 8.28 0 005.58 2.17v-3.48a4.85 4.85 0 01-3.77-1.77V6.69h3.77z"/>
  </svg>
);

const socials = [
  { icon: Send, href: 'https://t.me/capitalcrewofficial', label: 'Telegram' },
  { icon: InstagramIcon, href: 'https://www.instagram.com/capitalcrew.official?igsh=bzg1cGViMGs4ZGxo', label: 'Instagram' },
  { icon: TikTokIcon, href: 'https://www.tiktok.com/@capitalcrewofficial3?_r=1&_t=ZN-95G0DDgky1O', label: 'TikTok' },
];

export default function Footer() {
  return (
    <>
      <Disclaimer />
      <footer className="border-t border-border py-10">
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={logo} alt="Capital Crew" className="w-8 h-8 rounded-lg object-cover" />
                <span className="font-heading font-semibold text-foreground">Capital Crew</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                A professional trading community focused on education, transparency, and disciplined market analysis.
              </p>
              <a href="mailto:capitalcrewofficial03@gmail.com" className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-3.5 h-3.5" /> capitalcrewofficial03@gmail.com
              </a>
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
              <div className="flex items-center gap-3 mb-4">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300 hover:scale-110"
                    aria-label={s.label}
                  >
                    {typeof s.icon === 'function' && s.icon.toString().includes('svg') ? (
                      <s.icon />
                    ) : (
                      <s.icon className="w-5 h-5" />
                    )}
                  </a>
                ))}
              </div>
              <Link to="/arsalan" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Arsalan's Journey
              </Link>
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
