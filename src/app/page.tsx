'use client';

import React, { useState, useEffect } from 'react';
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
import BackgroundNetwork from '@/components/ui/BackgroundNetwork';
import TrainEasterEgg from '@/components/ui/TrainEasterEgg';
import CommandPalette from '@/components/ui/CommandPalette';
import SectionLabel from '@/components/ui/SectionLabel';
import { projects } from '@/lib/data/projects';

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isTraining, setIsTraining] = useState<boolean>(false);
  const [trainTriggerSignal, setTrainTriggerSignal] = useState<number>(0);

  const vidbrain = projects.find((p) => p.id === 'vidbrain')!;
  const motionAnalysis = projects.find((p) => p.id === 'motion-analysis')!;
  const aura = projects.find((p) => p.id === 'aura')!;
  const fieldEncryptor = projects.find((p) => p.id === 'field-encryptor')!;
  const audioExtractor = projects.find((p) => p.id === 'audio-extractor')!;

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ['hero', 'experience', 'work', 'systems', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCommandTrain = () => {
    setTrainTriggerSignal((prev) => prev + 1);
  };

  return (
    <main className="min-h-screen bg-[#0a0a0b] text-[#f0ece5] relative selection:bg-[#3ecf8e] selection:text-[#0a0a0b]">
      {/* Living Canvas Network Background */}
      <BackgroundNetwork activeSection={activeSection} isTraining={isTraining} />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="relative z-10">
        <Hero />
      </section>

      {/* Proof / Metrics Strip */}
      <section id="proof" className="relative z-10">
        <MetricStrip />
      </section>

      {/* Experience & Credentials */}
      <section id="experience-wrapper" className="relative z-10">
        <ExperienceTimeline />
      </section>

      {/* Featured Systems (Work) */}
      <section id="work" className="relative z-10 space-y-0">
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
      <section className="relative z-10">
        <EngineeringProcess />
      </section>

      {/* Technical Ecosystem (Systems) */}
      <section id="systems-wrapper" className="relative z-10">
        <TechnicalEcosystem />
      </section>

      {/* About */}
      <section className="relative z-10">
        <About />
      </section>

      {/* Contact / CTA */}
      <section id="contact-wrapper" className="relative z-10">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />

      {/* Interactive Enhancements */}
      <TrainEasterEgg
        key={trainTriggerSignal}
        onTrainingStateChange={(training) => setIsTraining(training)}
      />
      <CommandPalette onTriggerTrain={handleCommandTrain} />
    </main>
  );
}
