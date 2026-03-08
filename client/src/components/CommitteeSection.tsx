import { motion } from 'framer-motion';

const PLACEHOLDER_AVATAR = 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y&s=400';
const HEADSHOTS = Array(5).fill(PLACEHOLDER_AVATAR);

interface CommitteeProps {
  t: {
    committee: {
      label: string;
      title: string;
      subtitle: string;
      support: string;
      members: { name: string; role: string }[];
    };
  };
}

export default function CommitteeSection({ t }: CommitteeProps) {
  return (
    <section id="committee" className="py-28" style={{ background: 'var(--teal-light)' }}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label block mb-4">{t.committee.label}</span>
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-5"
            style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}
          >
            {t.committee.title}
          </h2>
          <p
            className="text-gray-600 max-w-xl mx-auto text-base leading-relaxed mb-6"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {t.committee.subtitle}
          </p>
          <span
            className="inline-block px-5 py-2 rounded-full text-sm font-semibold text-white"
            style={{ background: 'var(--teal)', fontFamily: 'Space Grotesk, sans-serif' }}
          >
            {t.committee.support}
          </span>
        </motion.div>

        {/* Member cards — 3 columns max, large cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {t.committee.members.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              {/* Photo */}
              <div
                className="w-full rounded-2xl overflow-hidden mb-4 shadow-md relative"
                style={{ aspectRatio: '1/1', maxWidth: '160px', margin: '0 auto 1rem' }}
              >
                <img
                  src={HEADSHOTS[i]}
                  alt={`${member.name} placeholder`}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient at bottom for name overlay feel */}
                <div
                  className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to top, rgba(0,0,0,0.35), transparent)',
                  }}
                />
                {/* Teal overlay on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  style={{ background: 'var(--teal)' }}
                />
              </div>

              {/* Name & role */}
              <span
                className="font-bold text-gray-900 text-sm leading-snug mb-1.5"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                {member.name}
              </span>
              <span
                className="text-xs leading-tight px-3 py-1 rounded-full"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  color: 'var(--teal-dark)',
                  background: 'rgba(0,137,123,0.12)',
                }}
              >
                {member.role}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
