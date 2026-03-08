import { motion } from 'framer-motion';
import { Target, TrendingUp, Building2, Eye, BarChart3 } from 'lucide-react';

const ICONS = [Target, TrendingUp, Building2, Eye, BarChart3];

interface ObjectivesProps {
  t: {
    objectives: {
      label: string;
      title: string;
      items: { title: string; body: string }[];
    };
  };
}

export default function ObjectivesSection({ t }: ObjectivesProps) {
  return (
    <section id="objectives" className="py-28" style={{ background: 'var(--teal-light)' }}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label block mb-4">{t.objectives.label}</span>
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900"
            style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}
          >
            {t.objectives.title}
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {t.objectives.items.map((item, i) => {
            const Icon = ICONS[i] || Target;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover-lift"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: 'rgba(0,137,123,0.1)' }}
                >
                  <Icon size={20} style={{ color: 'var(--teal)' }} />
                </div>
                <h3
                  className="font-bold text-gray-900 mb-3 text-base leading-snug"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm text-gray-600 leading-relaxed"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {item.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
