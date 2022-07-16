import React from 'react';
import { SectionContainer, SectionFrame, SectionTitleContainer } from '../ScGlobalSectionComponents';

const  EducationSection = () => {
  return (
    <SectionFrame id='education'>
        <SectionContainer>
          <SectionTitleContainer top="85px" right="54px">
              <h1 className='sectionTitle'>
                EDUCA
              </h1>
              <h1 className='sectionTitle'>
                TION
              </h1>
            </SectionTitleContainer>
        </SectionContainer>
    </SectionFrame>
  )
}

export default EducationSection;