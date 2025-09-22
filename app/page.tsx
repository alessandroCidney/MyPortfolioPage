import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import { DefaultButton } from "./components/commons/DefaultButton";
import { DefaultHeader } from './components/pages/DefaultHeader';

import styles from './styles.module.scss'

import { HeroSection } from "./components/pages/HeroSection";
import { GeneralSkillsSection } from "./components/pages/GeneralSkillsSection";
import { AboutSection } from "./components/pages/AboutSection";
import { ProjectsSection } from "./components/pages/ProjectsSection";

export default function Home() {
  return (
    <div>
      <DefaultHeader />

      <main className={styles.defaultMain}>
        <HeroSection />

        <GeneralSkillsSection />

        <AboutSection />

        <ProjectsSection />
      </main>
    </div>
  );
}
