import { motion } from 'framer-motion';

interface BackgroundProps {
  t: {
    background: {
      label: string;
      title: string;
      paragraphs: string[];
    };
  };
}

export default function BackgroundSection({ t }: BackgroundProps) {
  return (
    <section id="background" className="py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-10"
          >
            <span className="section-label block mb-4">{t.background.label}</span>
            <h2
              className="text-4xl md:text-5xl font-bold text-gray-900"
              style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}
            >
              {t.background.title}
            </h2>
          </motion.div>

          {/* Divider */}
          <div className="w-12 h-1 rounded-full mb-10" style={{ background: 'var(--teal)' }} />

          {/* Paragraphs */}
          <div className="flex flex-col gap-5">
            {t.background.paragraphs.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: 'easeOut' }}
                className="text-gray-600 leading-relaxed text-base"
                style={{ fontFamily: 'Inter, sans-serif' }}
                dangerouslySetInnerHTML={{ __html: para }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
