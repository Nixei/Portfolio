import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import EducationSection from '../../components/Sections/EducationSection/EducationSection';
import ExperienceSection from '../../components/Sections/ExperienceSection/ExperienceSection';
import HomeSection from '../../components/Sections/HomeSection/HomeSection';
import ProjectsSection from '../../components/Sections/ProjectsSection/ProjectsSection';
import SkillsSection from '../../components/Sections/SkillsSection/SkillsSection';

const MainPage = () => {
  return (
    <>
      <Navbar />
      <HomeSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
    </>
  );
};

export default MainPage;