import { motion } from 'framer-motion';
import { AlertTriangle, TrendingDown, Users, Shield } from 'lucide-react';

const ICONS = [TrendingDown, AlertTriangle, Users, Shield];
const COLORS = ['#EF4444', '#F97316', '#3B82F6', '#8B5CF6'];

interface AssessmentProps {
  t: {
    assessment: {
      label: string;
      title: string;
      items: { num: string; title: string; points: string[] }[];
      disclaimer: string;
    };
  };
}

export default function AssessmentSection({ t }: AssessmentProps) {
  return (
    <section id="assessment" className="py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label block mb-4">{t.assessment.label}</span>
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900"
            style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}
          >
            {t.assessment.title}
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {t.assessment.items.map((concern, i) => {
            const Icon = ICONS[i] || AlertTriangle;
            const color = COLORS[i] || '#00897B';
            return (
              <motion.div
                key={concern.num}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover-lift"
              >
                {/* Number + icon row */}
                <div className="flex items-start justify-between mb-5">
                  <span
                    className="text-5xl font-black leading-none"
                    style={{
                      fontFamily: 'Space Grotesk, sans-serif',
                      color,
                      opacity: 0.18,
                    }}
                  >
                    {concern.num}
                  </span>
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${color}18` }}
                  >
                    <Icon size={18} style={{ color }} />
                  </div>
                </div>

                <h3
                  className="font-bold text-gray-900 mb-4 text-base leading-snug"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {concern.title}
                </h3>

                <ul className="flex flex-col gap-2">
                  {concern.points.map((pt, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2.5 text-sm text-gray-600 leading-relaxed"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: color }}
                      />
                      {pt}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p
            className="text-sm text-gray-500 italic leading-relaxed px-6 py-4 rounded-xl"
            style={{
              fontFamily: 'Inter, sans-serif',
              background: 'rgba(0,137,123,0.05)',
              borderLeft: '3px solid var(--teal)',
              textAlign: 'left',
            }}
          >
            {t.assessment.disclaimer}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
