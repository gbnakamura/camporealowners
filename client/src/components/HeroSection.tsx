import { motion } from 'framer-motion';
import { ChevronDown, Mail } from 'lucide-react';

const HERO_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663325274117/NKWQ6gJfFXw7eKcFKjSQJm/campo1_588fc9dd.jpg';

interface HeroProps {
  t: {
    hero: {
      eyebrow: string;
      title: string;
      subtitle: string;
      cta: string;
      ctaSub: string;
    };
  };
}

export default function HeroSection({ t }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      style={{ minHeight: '100svh', display: 'flex', flexDirection: 'column' }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      />
      {/* Layered gradient: dark top for nav, lighter middle, dark bottom */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 40%, rgba(0,0,0,0.65) 100%)'
      }} />

      {/* Content — vertically centred, offset slightly upward */}
      <div
        className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4"
        style={{ flex: 1, paddingTop: '80px', paddingBottom: '80px' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-6"
        >
          <span
            className="inline-block text-xs font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full"
            style={{
              background: 'rgba(0,137,123,0.9)',
              color: 'white',
              fontFamily: 'Space Grotesk, sans-serif',
              backdropFilter: 'blur(4px)',
            }}
          >
            {t.hero.eyebrow}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          className="font-bold leading-tight mb-6 max-w-4xl"
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            letterSpacing: '-0.025em',
            fontSize: 'clamp(2.2rem, 5vw, 4rem)',
          }}
        >
          {t.hero.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="text-white/80 max-w-xl mx-auto mb-10 leading-relaxed"
          style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)' }}
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:shadow-xl hover:scale-105"
            style={{ background: 'var(--teal)', fontFamily: 'Space Grotesk, sans-serif' }}
          >
            <Mail size={16} />
            {t.hero.cta}
          </a>
          <a
            href="#background"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white border border-white/40 hover:bg-white/15 transition-all duration-200"
            style={{ fontFamily: 'Space Grotesk, sans-serif', backdropFilter: 'blur(4px)' }}
          >
            {t.hero.ctaSub}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/50 flex flex-col items-center gap-1.5"
      >
        <span
          className="text-[10px] tracking-[0.25em] uppercase"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
