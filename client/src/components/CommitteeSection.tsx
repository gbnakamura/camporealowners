import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const PLACEHOLDER_AVATAR = 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y&s=400';
const HEADSHOTS: Record<string, string> = {
  'Andrew Gamble': '/headshots/andrew.jpeg',
  'Diogo Vaz Martins': '/headshots/diogo.jpeg',
  'André Vilas Boas': PLACEHOLDER_AVATAR,
  'Clive J. Poorter': '/headshots/clive.jpeg',
  'Casimiro Gonçalves': '/headshots/casimiro.jpeg',
};

const HEADSHOT_POSITIONS: Record<string, string> = {
  'Casimiro Gonçalves': 'center 22%',
};

interface CommitteeProps {
  t: {
    committee: {
      label: string;
      title: string;
      subtitle: string;
      support: string;
      bioCta: string;
      members: { name: string; role: string; bio: string[] }[];
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

        {/* Member cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-7 max-w-6xl mx-auto">
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
                  src={HEADSHOTS[member.name] ?? PLACEHOLDER_AVATAR}
                  alt={member.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  style={{ objectPosition: HEADSHOT_POSITIONS[member.name] ?? 'center top' }}
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
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="default"
                    size="sm"
                    className="mt-4 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold text-white transition-all duration-200 hover:scale-105 hover:opacity-90 hover:shadow-lg"
                    style={{
                      background: 'var(--teal)',
                      fontFamily: 'Space Grotesk, sans-serif',
                    }}
                  >
                    <FileText size={14} />
                    {t.committee.bioCta}
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-h-[min(760px,calc(100vh-2rem))] overflow-y-auto sm:max-w-3xl">
                  <DialogHeader className="pr-8">
                    <DialogTitle
                      className="text-2xl text-gray-900"
                      style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                    >
                      {member.name}
                    </DialogTitle>
                    <span
                      className="text-sm font-medium"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        color: 'var(--teal-dark)',
                      }}
                    >
                      {member.role}
                    </span>
                  </DialogHeader>
                  <div
                    className="space-y-4 text-sm leading-relaxed text-gray-700"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {member.bio.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
