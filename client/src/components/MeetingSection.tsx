import { motion } from 'framer-motion';
import { CalendarDays, Clock, MapPin } from 'lucide-react';

interface MeetingProps {
  t: {
    hero: {
      meetingDetails: string[];
      meetingDisclaimer: string;
    };
  };
}

export default function MeetingSection({ t }: MeetingProps) {
  const [title, condominiums, dateTime, venue] = t.hero.meetingDetails;

  return (
    <section className="bg-white pt-12 pb-4">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-lg border border-teal-100 bg-teal-50/70 px-6 py-7 shadow-sm md:px-9 md:py-8"
        >
          <div
            className="absolute left-0 top-0 h-full w-1.5"
            style={{ background: 'var(--teal)' }}
          />
          <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
              <span className="section-label block mb-3">AGM Notice</span>
              <h2
                className="text-2xl font-bold text-gray-900 md:text-3xl"
                style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}
              >
                {title}
              </h2>
              <p
                className="mt-3 text-base font-medium text-gray-700"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {condominiums}
              </p>
            </div>

            <div className="grid gap-3">
              <div className="flex items-start gap-3 rounded-md bg-white/85 p-4 shadow-sm">
                <CalendarDays className="mt-0.5 h-5 w-5 shrink-0" style={{ color: 'var(--teal)' }} />
                <div>
                  <p
                    className="text-xs font-bold uppercase text-gray-400"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    Date
                  </p>
                  <p className="text-sm font-semibold text-gray-800" style={{ fontFamily: 'Inter, sans-serif' }}>
                    18th of June 2026
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-md bg-white/85 p-4 shadow-sm">
                <Clock className="mt-0.5 h-5 w-5 shrink-0" style={{ color: 'var(--teal)' }} />
                <div>
                  <p
                    className="text-xs font-bold uppercase text-gray-400"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    Time
                  </p>
                  <p className="text-sm font-semibold text-gray-800" style={{ fontFamily: 'Inter, sans-serif' }}>
                    3.00pm
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-md bg-white/85 p-4 shadow-sm">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0" style={{ color: 'var(--teal)' }} />
                <div>
                  <p
                    className="text-xs font-bold uppercase text-gray-400"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    Venue
                  </p>
                  <p className="text-sm font-semibold leading-relaxed text-gray-800" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {venue}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 border-t border-teal-100 pt-5">
            <p
              className="max-w-3xl text-sm font-medium leading-relaxed text-gray-700"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {t.hero.meetingDisclaimer}
            </p>
          </div>
          <p className="sr-only">{dateTime}</p>
        </motion.div>
      </div>
    </section>
  );
}
