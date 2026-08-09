import Navbar from '@/components/navigation/Navbar';
import Hero from '@/components/hero/Hero';
import MetricStrip from '@/components/proof/MetricStrip';
import ProjectShowcase from '@/components/projects/ProjectShowcase';
import VidBrainPipeline from '@/components/projects/VidBrainPipeline';
import MotionVisualization from '@/components/projects/MotionVisualization';
import AuraPipeline from '@/components/projects/AuraPipeline';
import FieldEncryptorPipeline from '@/components/projects/FieldEncryptorPipeline';
import AudioExtractorPipeline from '@/components/projects/AudioExtractorPipeline';
import EngineeringProcess from '@/components/philosophy/EngineeringProcess';
import TechnicalEcosystem from '@/components/skills/TechnicalEcosystem';
import ExperienceTimeline from '@/components/experience/ExperienceTimeline';
import About from '@/components/about/About';
import Contact from '@/components/contact/Contact';
import Footer from '@/components/Footer';
import { projects } from '@/lib/data/projects';

export default function Home() {
  const vidbrain = projects.find((p) => p.id === 'vidbrain')!;
  const motionAnalysis = projects.find((p) => p.id === 'motion-analysis')!;
  const aura = projects.find((p) => p.id === 'aura')!;
  const fieldEncryptor = projects.find((p) => p.id === 'field-encryptor')!;
  const audioExtractor = projects.find((p) => p.id === 'audio-extractor')!;

  return (
    <main className="min-h-screen bg-[#0a0a0b] text-[#f0ece5] relative selection:bg-[#3ecf8e] selection:text-[#0a0a0b]">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>

      {/* Proof / Metrics Strip */}
      <section id="proof">
        <MetricStrip />
      </section>

      {/* Experience & Credentials */}
      <ExperienceTimeline />

      {/* Featured Systems (Work) */}
      <section id="work" className="space-y-0">
        {/* Project 01: VidBrain */}
        <ProjectShowcase
          number={vidbrain.number}
          title={vidbrain.title}
          subtitle={vidbrain.subtitle}
          description={vidbrain.description}
          technologies={vidbrain.technologies}
          metrics={vidbrain.metrics}
          github={vidbrain.github}
        >
          <VidBrainPipeline />
        </ProjectShowcase>

        {/* Project 02: 3D Motion Analysis */}
        <ProjectShowcase
          number={motionAnalysis.number}
          title={motionAnalysis.title}
          subtitle={motionAnalysis.subtitle}
          description={motionAnalysis.description}
          technologies={motionAnalysis.technologies}
          metrics={motionAnalysis.metrics}
          github={motionAnalysis.github}
          reverse
        >
          <MotionVisualization />
        </ProjectShowcase>

        {/* Project 03: Adaptive Unified Response Assistant */}
        <ProjectShowcase
          number={aura.number}
          title={aura.title}
          subtitle={aura.subtitle}
          description={aura.description}
          technologies={aura.technologies}
          metrics={aura.metrics}
          github={aura.github}
        >
          <AuraPipeline />
        </ProjectShowcase>

        {/* Project 04: Field Encryptor */}
        <ProjectShowcase
          number={fieldEncryptor.number}
          title={fieldEncryptor.title}
          subtitle={fieldEncryptor.subtitle}
          description={fieldEncryptor.description}
          technologies={fieldEncryptor.technologies}
          metrics={fieldEncryptor.metrics}
          github={fieldEncryptor.github}
          reverse
        >
          <FieldEncryptorPipeline />
        </ProjectShowcase>

        {/* Project 05: Audio Subtitle Extractor */}
        <ProjectShowcase
          number={audioExtractor.number}
          title={audioExtractor.title}
          subtitle={audioExtractor.subtitle}
          description={audioExtractor.description}
          technologies={audioExtractor.technologies}
          metrics={audioExtractor.metrics}
          github={audioExtractor.github}
        >
          <AudioExtractorPipeline />
        </ProjectShowcase>
      </section>

      {/* Engineering Philosophy */}
      <EngineeringProcess />

      {/* Technical Ecosystem (Systems) */}
      <TechnicalEcosystem />

      {/* About */}
      <About />

      {/* Contact / CTA */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
