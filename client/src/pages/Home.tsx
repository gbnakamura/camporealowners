import { useState } from 'react';
import { useLang } from '@/contexts/LanguageContext';
import { content } from '@/lib/content';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import BackgroundSection from '@/components/BackgroundSection';
import CommitteeSection from '@/components/CommitteeSection';
import AssessmentSection from '@/components/AssessmentSection';
import ObjectivesSection from '@/components/ObjectivesSection';
import ProgrammeSection from '@/components/ProgrammeSection';
import MissionSection from '@/components/MissionSection';
import ContactSection from '@/components/ContactSection';
import PortalTeaser from '@/components/PortalTeaser';
import ProxyModal from '@/components/ProxyModal';

export default function Home() {
  const { lang } = useLang();
  const t = content[lang];
  const [proxyOpen, setProxyOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar t={t} onOpenProxy={() => setProxyOpen(true)} />
      <HeroSection t={t} onOpenProxy={() => setProxyOpen(true)} />
      <BackgroundSection t={t} />
      <CommitteeSection t={t} />
      <AssessmentSection t={t} />
      <ObjectivesSection t={t} />
      <ProgrammeSection t={t} />
      <MissionSection t={t} />
      <PortalTeaser t={t} />
      <ContactSection t={t} onOpenProxy={() => setProxyOpen(true)} />
      <ProxyModal open={proxyOpen} onClose={() => setProxyOpen(false)} lang={lang} />
    </div>
  );
}
