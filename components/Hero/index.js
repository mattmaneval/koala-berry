import styled from 'styled-components';
import media from '../../styles/media';
import theme from '../../styles/theme';

const { color, fonts } = theme;

const HeroStyle = styled.section`
  /* background-image: url('/assets/images/banner.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center; */
  align-items: center;
  background-color: ${color.foregroundAlt};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media ${media.secondary} {
    height: 80vh;
  }

  .inner-wrap {
    text-align: center;
  }

   h1 {
     color: ${color.background};
   }
`;

const HeroImage = styled.div`
  background-image: url('/assets/images/group.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 0;
  padding-top: 55%;
  width: 100%;
`;

const H1Alt = styled.div`
  color: ${color.callout};
  display: inline-block;
  font-family: ${fonts.fontBold};
  font-size: 1.65em;
  line-height: 1.5;
  max-width: 20em;

  @media ${media.secondary} {
    font-size: 1.25em;
  }

  span {
    font-family: ${fonts.title};
    color: ${color.background};
  }
`;

const Hero = () => (
  <HeroStyle>
    <div className="inner-wrap">
      <HeroImage />
      <h1>Frozen Yogurt</h1>
      <H1Alt>
        {' '}
        Grab a cup, pick a flavor, add toppings, weigh it, checkout, and
        {' '}
        <span>ENJOY!</span>
      </H1Alt>
    </div>
  </HeroStyle>
);

export default Hero;
