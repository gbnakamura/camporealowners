import { useState, useEffect } from 'react';
import { useLang } from '@/contexts/LanguageContext';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  t: {
    nav: {
      background: string;
      committee: string;
      assessment: string;
      objectives: string;
      programme: string;
      contact: string;
      cta: string;
    };
  };
}

export default function Navbar({ t }: NavbarProps) {
  const { lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#background', label: t.nav.background },
    { href: '#committee', label: t.nav.committee },
    { href: '#assessment', label: t.nav.assessment },
    { href: '#objectives', label: t.nav.objectives },
    { href: '#programme', label: t.nav.programme },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold"
              style={{ background: 'var(--teal)' }}
            >
              CR
            </div>
            <span
              className={`font-semibold text-sm transition-colors duration-300 ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Campo Real AGM 2026
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors duration-200 hover:opacity-100 ${
                  scrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/80 hover:text-white'
                }`}
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Right side: lang toggle + CTA */}
          <div className="flex items-center gap-3">
            {/* Language toggle */}
            <div className={`lang-pill ${scrolled ? '' : 'bg-white/20'}`}>
              <button
                className={lang === 'en' ? 'active' : ''}
                style={lang !== 'en' && !scrolled ? { color: 'rgba(255,255,255,0.8)' } : {}}
                onClick={() => setLang('en')}
              >
                EN
              </button>
              <button
                className={lang === 'pt' ? 'active' : ''}
                style={lang !== 'pt' && !scrolled ? { color: 'rgba(255,255,255,0.8)' } : {}}
                onClick={() => setLang('pt')}
              >
                PT
              </button>
            </div>

            {/* CTA button */}
            <a
              href="#contact"
              className="hidden lg:inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:shadow-md"
              style={{ background: 'var(--teal)', fontFamily: 'Space Grotesk, sans-serif' }}
            >
              {t.nav.cta}
            </a>

            {/* Mobile menu toggle */}
            <button
              className={`lg:hidden p-1 ${scrolled ? 'text-gray-700' : 'text-white'}`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-gray-700 py-2 border-b border-gray-50"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-semibold text-white"
              style={{ background: 'var(--teal)', fontFamily: 'Space Grotesk, sans-serif' }}
              onClick={() => setMenuOpen(false)}
            >
              {t.nav.cta}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
