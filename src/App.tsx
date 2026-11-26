import {useState} from 'react';
import {Navbar} from './components/Navbar';
import {HeroSection} from './components/HeroSection';
import {AboutSection} from './components/AboutSection';
import {CurriculumSection} from './components/CurriculumSection';
import {RoadmapSection} from './components/RoadmapSection';
import {ApproachSection} from './components/ApproachSection';
import {AudienceSection} from './components/AudienceSection';
import {OpportunitiesSection} from './components/OpportunitiesSection';
import {ComingSoonBanner} from './components/ComingSoonBanner';
import {Footer} from './components/Footer';

export default function App() {
  const [selectedPhase, setSelectedPhase] = useState<string>('all');

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <CurriculumSection onSelectPhase={setSelectedPhase} />
        <RoadmapSection
          selectedPhase={selectedPhase}
          onSelectPhase={setSelectedPhase}
        />
        <ApproachSection />
        <AudienceSection />
        <OpportunitiesSection />
        <ComingSoonBanner />
      </main>
      <Footer />
    </div>
  );
}
