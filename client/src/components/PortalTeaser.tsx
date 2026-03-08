/**
 * PortalTeaser — Campo Real AGM 2026
 * Design: Teal/dark theme, browser-frame mockup showing the future resident portal.
 * Sits just above the Contact section to excite owners about the upcoming platform.
 */

import { motion } from 'framer-motion';
import {
  Calendar,
  Hotel,
  FileText,
  Shield,
  MessageSquare,
  User,
  Map,
  Bell,
  Home,
  ChevronRight,
  Lock,
} from 'lucide-react';

const ICON_MAP: Record<string, React.ElementType> = {
  calendar: Calendar,
  hotel: Hotel,
  'file-text': FileText,
  shield: Shield,
  'message-square': MessageSquare,
  user: User,
  map: Map,
};

const SECTION_COLORS = [
  { bg: '#e8f5e9', icon: '#2e7d32' },
  { bg: '#e3f2fd', icon: '#1565c0' },
  { bg: '#fce4ec', icon: '#c62828' },
  { bg: '#fff3e0', icon: '#e65100' },
  { bg: '#f3e5f5', icon: '#6a1b9a' },
  { bg: '#e0f7fa', icon: '#00838f' },
  { bg: '#f9fbe7', icon: '#558b2f' },
];

interface Section {
  icon: string;
  title: string;
  desc: string;
}

interface PortalTeaserProps {
  t: {
    portal: {
      label: string;
      title: string;
      subtitle: string;
      badge: string;
      sections: Section[];
    };
  };
}

export default function PortalTeaser({ t }: PortalTeaserProps) {
  const { portal } = t;

  return (
    <section
      id="portal"
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0d2b2b 0%, #0a3d3d 50%, #0d2b2b 100%)' }}
    >
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span
            className="inline-block text-xs font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-5"
            style={{
              background: 'rgba(0,200,170,0.15)',
              color: '#4dd9c0',
              fontFamily: 'Space Grotesk, sans-serif',
              border: '1px solid rgba(0,200,170,0.25)',
            }}
          >
            {portal.label}
          </span>
          <h2
            className="font-bold text-white mb-5"
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              letterSpacing: '-0.025em',
            }}
          >
            {portal.title}
          </h2>
          <p
            className="max-w-2xl mx-auto leading-relaxed"
            style={{
              fontFamily: 'Inter, sans-serif',
              color: 'rgba(255,255,255,0.65)',
              fontSize: '1.05rem',
            }}
          >
            {portal.subtitle}
          </p>
        </motion.div>

        {/* Browser frame mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-4xl mx-auto"
          style={{
            borderRadius: '14px',
            overflow: 'hidden',
            boxShadow: '0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.08)',
          }}
        >
          {/* Browser chrome bar */}
          <div
            className="flex items-center gap-3 px-4 py-3"
            style={{ background: '#1e1e1e' }}
          >
            {/* Traffic lights */}
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
              <div className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
              <div className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
            </div>
            {/* Address bar */}
            <div
              className="flex-1 flex items-center gap-2 px-3 py-1 rounded-md"
              style={{ background: '#2a2a2a', maxWidth: '320px', margin: '0 auto' }}
            >
              <Lock size={10} style={{ color: '#6b7280' }} />
              <span
                className="text-xs"
                style={{ color: '#9ca3af', fontFamily: 'Inter, sans-serif' }}
              >
                camporeal.owners.portal
              </span>
            </div>
            {/* Badge */}
            <span
              className="ml-auto text-[10px] font-semibold px-2.5 py-1 rounded-full"
              style={{
                background: 'rgba(0,200,170,0.2)',
                color: '#4dd9c0',
                fontFamily: 'Space Grotesk, sans-serif',
                border: '1px solid rgba(0,200,170,0.3)',
              }}
            >
              {portal.badge}
            </span>
          </div>

          {/* Portal UI inside the frame */}
          <div style={{ background: '#f8fafc' }}>
            {/* Portal top nav */}
            <div
              className="flex items-center justify-between px-6 py-3 border-b"
              style={{ background: 'white', borderColor: '#e5e7eb' }}
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center"
                  style={{ background: '#00897B' }}
                >
                  <span
                    className="text-white font-bold text-xs"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    CR
                  </span>
                </div>
                <span
                  className="font-semibold text-sm"
                  style={{ color: '#111827', fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  Campo Real Owners
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ background: '#f3f4f6' }}
                >
                  <Bell size={12} style={{ color: '#6b7280' }} />
                </div>
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ background: '#00897B' }}
                >
                  <User size={12} style={{ color: 'white' }} />
                </div>
              </div>
            </div>

            {/* Portal sidebar + content */}
            <div className="flex" style={{ minHeight: '320px' }}>
              {/* Sidebar */}
              <div
                className="hidden sm:flex flex-col py-4 px-3 gap-1"
                style={{ width: '180px', background: 'white', borderRight: '1px solid #e5e7eb' }}
              >
                <div
                  className="flex items-center gap-2 px-3 py-2 rounded-lg mb-1"
                  style={{ background: 'rgba(0,137,123,0.08)' }}
                >
                  <Home size={13} style={{ color: '#00897B' }} />
                  <span
                    className="text-xs font-semibold"
                    style={{ color: '#00897B', fontFamily: 'Inter, sans-serif' }}
                  >
                    Dashboard
                  </span>
                </div>
                {portal.sections.map((s, i) => {
                  const Icon = ICON_MAP[s.icon] || FileText;
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg cursor-default"
                      style={{ color: '#6b7280' }}
                    >
                      <Icon size={13} />
                      <span
                        className="text-xs"
                        style={{ fontFamily: 'Inter, sans-serif', color: '#6b7280' }}
                      >
                        {s.title}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Main content grid */}
              <div className="flex-1 p-5">
                <p
                  className="text-xs font-semibold mb-4 uppercase tracking-wider"
                  style={{ color: '#9ca3af', fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  All Sections
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {portal.sections.map((s, i) => {
                    const Icon = ICON_MAP[s.icon] || FileText;
                    const colors = SECTION_COLORS[i % SECTION_COLORS.length];
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.92 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: 0.15 + i * 0.06 }}
                        className="flex flex-col gap-2 p-3 rounded-xl cursor-default"
                        style={{
                          background: 'white',
                          border: '1px solid #e5e7eb',
                          boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
                        }}
                      >
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center"
                          style={{ background: colors.bg }}
                        >
                          <Icon size={15} style={{ color: colors.icon }} />
                        </div>
                        <div>
                          <p
                            className="text-xs font-semibold leading-tight mb-0.5"
                            style={{ color: '#111827', fontFamily: 'Space Grotesk, sans-serif' }}
                          >
                            {s.title}
                          </p>
                          <p
                            className="text-[10px] leading-relaxed hidden sm:block"
                            style={{ color: '#9ca3af', fontFamily: 'Inter, sans-serif' }}
                          >
                            {s.desc}
                          </p>
                        </div>
                        <div className="mt-auto flex items-center gap-1">
                          <span
                            className="text-[10px] font-medium"
                            style={{ color: '#00897B', fontFamily: 'Inter, sans-serif' }}
                          >
                            Coming soon
                          </span>
                          <ChevronRight size={9} style={{ color: '#00897B' }} />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
