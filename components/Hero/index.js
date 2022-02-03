import styled from 'styled-components';
// import ButtonCta from '../navigation/ButtonCta';
import media from '../../styles/media';
import theme from '../../styles/theme';

const { color, fonts } = theme;

const HeroStyle = styled.section`
  align-items: center;
  background-color: ${color.foregroundAlt};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  background-image: url('/assets/images/sparkles-white.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media ${media.secondary} {
    height: 80vh;
  }

  .inner-wrap {
    text-align: center;
  }

   h1 {
     color: ${color.background};
   }

   a {
     display: inline-block;
   }
`;

const HeroImage = styled.div`
  background-image: url('/assets/images/group.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 0;
  margin-bottom: -7em;
  padding-top: 65%;
  width: 100%;

  @media ${media.secondary} {
    padding-top: 100%;
  }
`;

const H1Alt = styled.div`
  color: ${color.callout};
  display: inline-block;
  font-family: ${fonts.fontBold};
  font-size: 1.45em;
  line-height: 1.5;
  margin-bottom: 1em;
  /* max-width: 20em; */

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
      <H1Alt>
        Grab a cup, pick a flavor, add toppings, weigh it, checkout, and
        {' '}
        <span>enjoy!</span>
      </H1Alt>
    </div>
  </HeroStyle>
);

export default Hero;
