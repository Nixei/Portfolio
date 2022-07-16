import React from 'react';
import { SectionContainer, SectionFrame, SectionTitleContainer } from '../ScGlobalSectionComponents';

const ProjectsSection = () => {
  return (
    <SectionFrame id='projects'>
        <SectionContainer>
          <SectionTitleContainer top="85px" left="108px">
              <h1 className='sectionTitle'>
                PROJECTS
              </h1>
            </SectionTitleContainer>
        </SectionContainer>
    </SectionFrame>
  )
}

export default ProjectsSection;