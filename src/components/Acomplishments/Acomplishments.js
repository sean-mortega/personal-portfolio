import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 6, text: 'Years of exp in web dev.'},
  { number: 0, text: 'Co-developed iGaming sports betting platforms.', },
  { number: 0, text: 'Contributed to the development of backoffice systems.', },
  { number: 0, text: 'Created promotional landing pages for various projects.', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Highlights</SectionTitle>
    <Boxes>
      {
        data.map((card, index)=>(
          <Box key={index}>
            {
              card.number>0
              ? <BoxNum> { card.number }</BoxNum>
              : false
            }
            <BoxText> { card.text }</BoxText>
          </Box>
        ))
      }
    </Boxes>
  </Section>
);

export default Acomplishments;
