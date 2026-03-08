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

export default function Home() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <div className="min-h-screen bg-white">
      <Navbar t={t} />
      <HeroSection t={t} />
      <BackgroundSection t={t} />
      <CommitteeSection t={t} />
      <AssessmentSection t={t} />
      <ObjectivesSection t={t} />
      <ProgrammeSection t={t} />
      <MissionSection t={t} />
      <ContactSection t={t} />
    </div>
  );
}
