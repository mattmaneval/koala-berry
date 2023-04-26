import React from 'react';
import styled from 'styled-components';

// Components
import Cta from '../Cta/index';

// Images
import YogurtGroup from '../../assets/images/koala-berry-yogurt-group.webp';

// Styles
import media from '../../styles/media';
import theme from '../../styles/theme';

const { font, color } = theme;

const HeroStyle = styled.section`
  background-color: ${color.foregroundAlt};
  animation: gradientbanner 7s ease infinite;
  align-items: center;
  height: 100vh;
  min-height: 43em;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: center;

  @media ${media.secondary} {
    height: 80vh;
  }

  .inner-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const HeroImage = styled.div`
  background-image: url('${YogurtGroup}');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 0;
  margin-bottom: -7em;
  padding-top: 50%;
  width: 100%;

  @media ${media.secondary} {
    padding-top: 100%;
  }
`;

const H1Alt = styled.div`
  color: ${color.foregroundTert};
  display: inline-block;
  font-family: ${font.bold};
  font-size: 1.45em;
  line-height: 1.5;
  margin-bottom: 1em;

  @media ${media.secondary} {
    font-size: 1.25em;
  }

  span {
    color: ${color.background};
  }
`;

const Hero = () => (
  <HeroStyle>
    <div className="inner-wrap">
      <HeroImage />
      <h1>Frozen Yogurt</h1>
      <H1Alt>Premium Frozen Yogurt & Ice Cream</H1Alt>
      <Cta
        text="View Our Yogurt"
        title="View our yogurt flavors."
        filled
        href="/flavors"
      />
    </div>
  </HeroStyle>
);

export default Hero;
