import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText main center>
        Frontend developer with 6+ years of relevant experience in building enterprise and high quality web applications.
      </SectionText>
      <Button onClick={()=> { window.locations = 'https://google.com'}}>Learn More</Button>
    </LeftSection>
  </Section>

);

export default Hero;