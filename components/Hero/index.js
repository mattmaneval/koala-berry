import styled from 'styled-components';
import PrimaryCta from '../navigation/PrimaryCta';
import media from '../../styles/media';
import theme from '../../styles/theme';

const { color, fonts } = theme;

const HeroStyle = styled.section`
  background: linear-gradient(45deg,${color.callout},${color.foregroundAlt});
  background-size: 400% 400%;
  animation: gradientbanner 7s ease infinite;
  align-items: center;
  height: 100vh;
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
  font-family: ${fonts.fontBold};
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
      <PrimaryCta ctaText="View Our Yogurt" />
    </div>
  </HeroStyle>
);

export default Hero;
