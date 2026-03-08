import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface ProgrammeProps {
  t: {
    programme: {
      label: string;
      title: string;
      subtitle: string;
      pillars: { num: string; title: string; body: string }[];
    };
  };
}

export default function ProgrammeSection({ t }: ProgrammeProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="programme" className="py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label block mb-4">{t.programme.label}</span>
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-3"
            style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}
          >
            {t.programme.title}
          </h2>
          <p
            className="text-gray-500 text-base"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {t.programme.subtitle}
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {t.programme.pillars.map((pillar, i) => (
            <motion.div
              key={pillar.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm"
            >
              <button
                className="w-full flex items-center gap-5 px-7 py-5 text-left hover:bg-gray-50 transition-colors duration-150"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span
                  className="text-3xl font-black shrink-0 leading-none"
                  style={{
                    color: 'var(--teal)',
                    fontFamily: 'Space Grotesk, sans-serif',
                    opacity: 0.3,
                    minWidth: '3rem',
                  }}
                >
                  {pillar.num}
                </span>
                <span
                  className="font-semibold text-gray-900 flex-1 text-sm md:text-base leading-snug"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {pillar.title}
                </span>
                <motion.div
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="shrink-0 text-gray-400"
                >
                  <ChevronDown size={18} />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div
                      className="mx-7 mb-6 text-sm text-gray-600 leading-relaxed pl-5"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        borderLeft: '3px solid var(--teal)',
                        paddingTop: '1rem',
                        paddingBottom: '0.5rem',
                      }}
                    >
                      {pillar.body}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
