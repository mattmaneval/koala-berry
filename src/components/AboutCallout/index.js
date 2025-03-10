import React from 'react';
import styled from 'styled-components';

// Components
import AboutCalloutGridCard from './AboutCalloutCard';

// Styles
import media from '../../styles/media';
import theme from '../../styles/theme';

const { grid } = theme;

const AboutCalloutGridSection = styled.section`
  padding-top: 0;
`;

const AboutCalloutGridContainer = styled.div`
  display: grid;
  grid-gap: ${grid.gap};
  grid-template-columns: repeat(2, 1fr);
  position: relative;
  z-index: 1;

  @media ${media.secondary} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

function AboutCalloutGrid() {
  return (
    <AboutCalloutGridSection>
      <div className="inner-wrap">
        <AboutCalloutGridContainer>
          <AboutCalloutGridCard
            heading="About Our Yogurt"
            copy="The benefits of yogurt have been talked about for years. Ours starts with real dairy, fresh milk, real fruit purees, natural flavors and lots of beneficial live yogurt cultures called probiotics."
            image="https://koalaberry.s3.us-east-2.amazonaws.com/koala-berry-image-12.webp"
          />
          <AboutCalloutGridCard
            heading="Endless Toppings"
            copy="Super fresh fruit, premium fountain syrups and oodles of healthy and sweet toppings make Koala Berry a special treat for all. Mix and match over 50 toppings and 18 frozen yogurt or ice cream flavors. You have almost limitless combinations to enjoy."
            image="https://koalaberry.s3.us-east-2.amazonaws.com/koala-berry-image-10.webp"
          />
        </AboutCalloutGridContainer>
      </div>
    </AboutCalloutGridSection>
  );
}

export default AboutCalloutGrid;
