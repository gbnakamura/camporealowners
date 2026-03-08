import { motion } from 'framer-motion';
import { Mail, FileText } from 'lucide-react';

interface ContactProps {
  t: {
    contact: {
      label: string;
      title: string;
      subtitle: string;
      body: string;
      email: string;
      proxyBtn: string;
      proxyNote: string;
      questionNote: string;
    };
  };
  onOpenProxy: () => void;
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: 'easeOut' as const },
  }),
};

export default function ContactSection({ t, onOpenProxy }: ContactProps) {
  return (
    <section id="contact" className="py-28" style={{ background: 'var(--teal-light)' }}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="section-label block mb-4">{t.contact.label}</span>
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-5"
            style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}
          >
            {t.contact.title}
          </h2>
          <p
            className="text-gray-600 mb-3 leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {t.contact.subtitle}
          </p>
          <p
            className="text-gray-500 text-sm mb-12"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {t.contact.body}
          </p>

          {/* Two-card row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

            {/* Card 1 — Download Proxy Form */}
            <motion.div
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={cardVariants}
              className="bg-white rounded-3xl p-8 shadow-md flex flex-col items-center text-center"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: 'rgba(0,137,123,0.1)' }}
              >
                <FileText size={26} style={{ color: 'var(--teal)' }} />
              </div>
              <h3
                className="font-bold text-gray-900 text-lg mb-2"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                {t.contact.proxyBtn}
              </h3>
              <p
                className="text-sm text-gray-500 mb-7 leading-relaxed flex-1"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {t.contact.proxyNote}
              </p>
              <button
                onClick={onOpenProxy}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-white font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:shadow-lg hover:scale-105"
                style={{ background: 'var(--teal)', fontFamily: 'Space Grotesk, sans-serif' }}
              >
                <FileText size={15} />
                {t.contact.proxyBtn}
              </button>
            </motion.div>

            {/* Card 2 — Email for questions */}
            <motion.div
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={cardVariants}
              className="bg-white rounded-3xl p-8 shadow-md flex flex-col items-center text-center"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: 'rgba(0,137,123,0.1)' }}
              >
                <Mail size={26} style={{ color: 'var(--teal)' }} />
              </div>
              <h3
                className="font-bold text-gray-900 text-lg mb-2"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                {t.contact.questionNote}
              </h3>
              <p
                className="text-sm text-gray-500 mb-7 leading-relaxed flex-1"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {t.contact.email}
              </p>
              <a
                href={`mailto:${t.contact.email}`}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:scale-105 border-2"
                style={{
                  color: 'var(--teal)',
                  borderColor: 'var(--teal)',
                  fontFamily: 'Space Grotesk, sans-serif',
                  background: 'transparent',
                }}
              >
                <Mail size={15} />
                {t.contact.email}
              </a>
            </motion.div>

          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-20 border-t border-teal-100 pt-10">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold"
              style={{ background: 'var(--teal)' }}
            >
              CR
            </div>
            <span
              className="text-sm font-semibold text-gray-700"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Campo Real AGM 2026
            </span>
          </div>
          <p
            className="text-xs text-gray-400 text-center"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Alternative Administration Committee Proposal · camporealowners@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
}
