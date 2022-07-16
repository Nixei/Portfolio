import React from 'react';
import { SectionFrame } from '../ScGlobalSectionComponents';
import { HeadersContainer, HomeSectionContainer } from './ScHomeSection';

const HomeSection = () => {
  return (
    <SectionFrame id='home'>
        <HomeSectionContainer>
          <HeadersContainer>
            <div id='headersRow'>
              <div id='headersColumn' className='title'>
                <h2>UI</h2>
                <h2>WEB DEVELOPER</h2>
              </div>
              <h1>
                BERRIN YAVA
              </h1>
            </div>
            <p className='desc'>
              A passionate developer who also loves UI Design and has experience on UI development as well as front-end development. Always looking for new opportunities.
            </p>
          </HeadersContainer>
        </HomeSectionContainer>
    </SectionFrame>
  )
}

export default HomeSection;