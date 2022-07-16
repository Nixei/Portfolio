import React from 'react'
import { SectionContainer, SectionFrame, SectionTitleContainer } from '../ScGlobalSectionComponents'
import { SkillDescriptionContainer, SkillIconContainer, SkillsContainer, SkillsWrapper } from './ScSkillsSection';

const SkillsSection = () => {
  return (
    <SectionFrame id='skills'>
        <SectionContainer>
          <SectionTitleContainer top="85px" left="108px">
            <h1 className='sectionTitle'>
              SKILLS
            </h1>
          </SectionTitleContainer>
          <SkillsWrapper>
            <SkillsContainer justifyContent="flex-start">
              <div>
                <SkillIconContainer className='skillIconContainer' />
                <SkillDescriptionContainer className='skillDescContainer'>
                  <p className='skillDesc'>
                    <span>
                      React
                    </span>
                    &nbsp;- I have used React Js and styled components in many personal projects as well as professional ones which I worked on during my internships.
                  </p>
                </SkillDescriptionContainer>
              </div>
              <div>
                <SkillIconContainer className='skillIconContainer'/>
                <SkillDescriptionContainer className='skillDescContainer'>
                  <p className='skillDesc'>
                      <span>
                        Javascript
                      </span>
                      &nbsp;- What is web development without Javascript, right? I have been using Js since the beginning of my development journey in almost all of my web projects.
                    </p>
                </SkillDescriptionContainer>
              </div>
              <div>
                <SkillIconContainer className='skillIconContainer' />
                <SkillDescriptionContainer className='skillDescContainer'>
                  <p className='skillDesc'>
                    <span>
                      HTML-CSS
                    </span>
                    &nbsp;- A UI developers best friends. I worked with HTML, CSS in various projects along with SCSS and HTML5. My passion for development and design started with HTML, CSS.
                  </p>
                </SkillDescriptionContainer>
              </div>
            </SkillsContainer>
            <SkillsContainer justifyContent="flex-end">
              <div>
                <SkillDescriptionContainer className='skillDescContainer'>
                  <p className='skillDesc'>
                    <span>
                      Github-Git
                    </span>
                    &nbsp;- I use Github and Git to collaborate with co-workers, friends while working on a project as well as to save and share my projects with the internet.
                  </p>
                </SkillDescriptionContainer>
                <SkillIconContainer className='skillIconContainer' />
              </div>
              <div>
                <SkillDescriptionContainer className='skillDescContainer'>
                  <p className='skillDesc'>
                    <span>
                      Figma
                    </span>
                    &nbsp;- Most of my designs ( including this portfolio's 😉 ) are made using Figma. I have been using Figma for my designs ever since I started designing.
                  </p>
                </SkillDescriptionContainer>
                <SkillIconContainer className='skillIconContainer' />
              </div>
              <div>
                <SkillDescriptionContainer className='skillDescContainer'>

                </SkillDescriptionContainer>
                <SkillIconContainer className='skillIconContainer' />
              </div>
            </SkillsContainer>
          </SkillsWrapper>
        </SectionContainer>
    </SectionFrame>
  )
}

export default SkillsSection;