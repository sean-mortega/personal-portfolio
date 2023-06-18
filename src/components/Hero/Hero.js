import React from 'react';

import { Section, SectionText, SectionTitle, SectionTitleHead } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi I'm <SectionTitleHead>Sean Mortega</SectionTitleHead>
        Frontend Developer
      </SectionTitle>
      <SectionText main center>
        Frontend developer with 6+ years of relevant experience in building enterprise and high quality web applications.
      </SectionText>
      <Button onClick={()=> { window.locations = 'https://google.com'}}>Learn More</Button>
    </LeftSection>
  </Section>

);

export default Hero;