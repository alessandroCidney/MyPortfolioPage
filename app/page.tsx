import { Metadata, Viewport } from "next";

import { DefaultHeader } from './components/pages/core/DefaultHeader';

import styles from './styles.module.scss'

import { HeroSection } from "./components/pages/sections/HeroSection";
import { GeneralSkillsSection } from "./components/pages/sections/GeneralSkillsSection";
import { AboutSection } from "./components/pages/sections/AboutSection";
import { ProjectsSection } from "./components/pages/sections/ProjectsSection";
import { ExperienceSection } from "./components/pages/sections/ExperienceSection";
import { HardSkillsSection } from "./components/pages/sections/HardSkillsSection";
import { DefaultFooter } from "./components/pages/core/DefaultFooter";

export const metadata: Metadata = {
 title: 'Portfólio - Alessandro Cídney',
}

export const viewport: Viewport = {
  colorScheme: 'light',
}

export default function Home() {
  return (
    <div>
      <DefaultHeader />

      <main className={styles.defaultMain}>
        <HeroSection />

        <GeneralSkillsSection />

        <AboutSection />

        <ProjectsSection />

        <ExperienceSection />

        <HardSkillsSection />
      </main>

      <DefaultFooter />
    </div>
  );
}
