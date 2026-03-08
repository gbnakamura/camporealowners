import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface MissionProps {
  t: {
    mission: {
      label: string;
      quote: string;
      disclaimer: string;
    };
  };
}

export default function MissionSection({ t }: MissionProps) {
  return (
    <section
      id="mission"
      className="py-28 relative overflow-hidden"
      style={{ background: '#0F2027' }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'var(--teal)', transform: 'translate(40%, -40%)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-8 blur-3xl pointer-events-none"
        style={{ background: 'var(--teal)', transform: 'translate(-40%, 40%)' }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span
            className="section-label block mb-8"
            style={{ color: 'var(--teal)' }}
          >
            {t.mission.label}
          </span>

          <Quote
            size={40}
            className="mx-auto mb-8 opacity-25"
            style={{ color: 'var(--teal)' }}
          />

          <p
            className="text-white/90 text-xl md:text-2xl leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif', fontStyle: 'italic', fontWeight: 300 }}
            dangerouslySetInnerHTML={{ __html: t.mission.quote }}
          />

          <div
            className="mt-14 pt-10 border-t text-sm text-white/40 leading-relaxed"
            style={{
              borderColor: 'rgba(255,255,255,0.08)',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            {t.mission.disclaimer}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
