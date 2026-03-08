/**
 * ProxyModal — Campo Real AGM 2026
 * Design: Clean teal/white modal, Space Grotesk headings, Inter body.
 * Shows 4 proxy form options (EN/PT × Individual/Firm) as clickable cards.
 * PDFs open in a new tab via CDN URLs.
 */

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Building2, ExternalLink } from 'lucide-react';

const PROXY_URLS = {
  enIndividual: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663325274117/NKWQ6gJfFXw7eKcFKjSQJm/proxy-en-individual_c809a07f.pdf',
  enFirm:       'https://d2xsxph8kpxj0f.cloudfront.net/310519663325274117/NKWQ6gJfFXw7eKcFKjSQJm/proxy-en-firm_7536976e.pdf',
  ptIndividual: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663325274117/NKWQ6gJfFXw7eKcFKjSQJm/proxy-pt-individual_17955521.pdf',
  ptFirm:       'https://d2xsxph8kpxj0f.cloudfront.net/310519663325274117/NKWQ6gJfFXw7eKcFKjSQJm/proxy-pt-firm_f87cee85.pdf',
};

interface ProxyModalProps {
  open: boolean;
  onClose: () => void;
  lang: 'en' | 'pt';
}

const labels = {
  en: {
    title: 'Download Proxy Form',
    subtitle: 'Select the form that applies to you. It will open in a new tab — print, sign and return.',
    enSection: 'English Forms',
    ptSection: 'Portuguese Forms / Formulários em Português',
    individual: 'Individual Owner',
    individualDesc: 'For owners who hold the property in their personal name',
    firm: 'Company / Firm Owner',
    firmDesc: 'For owners who hold the property through a company or legal entity',
    open: 'Open PDF',
  },
  pt: {
    title: 'Descarregar Procuração',
    subtitle: 'Selecione o formulário adequado à sua situação. Abrirá num novo separador — imprima, assine e devolva.',
    enSection: 'Formulários em Inglês / English Forms',
    ptSection: 'Formulários em Português',
    individual: 'Proprietário Individual',
    individualDesc: 'Para proprietários que detêm o imóvel em nome próprio',
    firm: 'Empresa / Sociedade',
    firmDesc: 'Para proprietários que detêm o imóvel através de uma empresa ou entidade jurídica',
    open: 'Abrir PDF',
  },
};

interface FormCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  label: string;
  url: string;
  badge: string;
  badgeColor: string;
}

function FormCard({ icon, title, desc, label, url, badge, badgeColor }: FormCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-3 p-5 rounded-2xl border border-gray-100 bg-white hover:border-teal-200 hover:shadow-md transition-all duration-200 cursor-pointer"
    >
      <div className="flex items-start justify-between gap-3">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: 'rgba(0,137,123,0.1)' }}
        >
          {icon}
        </div>
        <span
          className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full"
          style={{ background: badgeColor, color: 'white', fontFamily: 'Space Grotesk, sans-serif' }}
        >
          {badge}
        </span>
      </div>
      <div>
        <p
          className="font-semibold text-gray-900 text-sm mb-1"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          {title}
        </p>
        <p
          className="text-xs text-gray-500 leading-relaxed"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {desc}
        </p>
      </div>
      <div
        className="flex items-center gap-1.5 text-xs font-semibold mt-auto"
        style={{ color: 'var(--teal)', fontFamily: 'Space Grotesk, sans-serif' }}
      >
        <ExternalLink size={12} />
        {label}
      </div>
    </a>
  );
}

export default function ProxyModal({ open, onClose, lang }: ProxyModalProps) {
  const t = labels[lang];

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            key="panel"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="flex items-start justify-between p-6 pb-4">
                <div>
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                    style={{ background: 'rgba(0,137,123,0.1)' }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                      <line x1="16" y1="13" x2="8" y2="13"/>
                      <line x1="16" y1="17" x2="8" y2="17"/>
                      <polyline points="10 9 9 9 8 9"/>
                    </svg>
                  </div>
                  <h2
                    className="text-xl font-bold text-gray-900 leading-tight"
                    style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}
                  >
                    {t.title}
                  </h2>
                  <p
                    className="text-sm text-gray-500 mt-1 leading-relaxed"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {t.subtitle}
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="ml-4 shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Divider */}
              <div className="mx-6 border-t border-gray-100" />

              {/* Form cards */}
              <div className="p-6 flex flex-col gap-5">
                {/* English section */}
                <div>
                  <p
                    className="text-[11px] font-bold tracking-[0.15em] uppercase text-gray-400 mb-3"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    {t.enSection}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <FormCard
                      icon={<User size={18} style={{ color: 'var(--teal)' }} />}
                      title={t.individual}
                      desc={t.individualDesc}
                      label={t.open}
                      url={PROXY_URLS.enIndividual}
                      badge="EN"
                      badgeColor="var(--teal)"
                    />
                    <FormCard
                      icon={<Building2 size={18} style={{ color: 'var(--teal)' }} />}
                      title={t.firm}
                      desc={t.firmDesc}
                      label={t.open}
                      url={PROXY_URLS.enFirm}
                      badge="EN"
                      badgeColor="var(--teal)"
                    />
                  </div>
                </div>

                {/* Portuguese section */}
                <div>
                  <p
                    className="text-[11px] font-bold tracking-[0.15em] uppercase text-gray-400 mb-3"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    {t.ptSection}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <FormCard
                      icon={<User size={18} style={{ color: '#b45309' }} />}
                      title={t.individual}
                      desc={t.individualDesc}
                      label={t.open}
                      url={PROXY_URLS.ptIndividual}
                      badge="PT"
                      badgeColor="#b45309"
                    />
                    <FormCard
                      icon={<Building2 size={18} style={{ color: '#b45309' }} />}
                      title={t.firm}
                      desc={t.firmDesc}
                      label={t.open}
                      url={PROXY_URLS.ptFirm}
                      badge="PT"
                      badgeColor="#b45309"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
