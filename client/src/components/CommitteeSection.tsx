import { motion } from 'framer-motion';

const HEADSHOTS = [
  'https://d2xsxph8kpxj0f.cloudfront.net/310519663325274117/NKWQ6gJfFXw7eKcFKjSQJm/headshot1_3bcd09e0.jpg',
  'https://d2xsxph8kpxj0f.cloudfront.net/310519663325274117/NKWQ6gJfFXw7eKcFKjSQJm/headshot2_918c0989.jpg',
  'https://d2xsxph8kpxj0f.cloudfront.net/310519663325274117/NKWQ6gJfFXw7eKcFKjSQJm/headshot3_46d19141.jpg',
  'https://d2xsxph8kpxj0f.cloudfront.net/310519663325274117/NKWQ6gJfFXw7eKcFKjSQJm/headshot4_3e2440b4.jpg',
  'https://d2xsxph8kpxj0f.cloudfront.net/310519663325274117/NKWQ6gJfFXw7eKcFKjSQJm/headshot5_d221320a.webp',
];

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
                className="w-full rounded-2xl overflow-hidden mb-5 shadow-lg relative"
                style={{ aspectRatio: '1/1' }}
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
                className="font-bold text-gray-900 text-lg leading-snug mb-2"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                {member.name}
              </span>
              <span
                className="text-sm leading-tight px-4 py-1.5 rounded-full"
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
