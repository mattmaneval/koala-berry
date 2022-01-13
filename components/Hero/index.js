import styled from 'styled-components';
import media from '../../styles/media';
import theme from '../../styles/theme';

const { color, fonts } = theme;

const HeroStyle = styled.section`
  .wrap {
    /* display: grid;
    grid-template-columns: repeat(2, 1fr); */
  }

  background-image: url('/assets/images/banner.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  &:before {
     background: linear-gradient(to top, black 5%, transparent);
     bottom: 0;
     content: "";
     height: 100%;
     left: 0;
     position: absolute;
     width: 100%;
   }

   h1 {
     color: ${color.background};
   }
`;

const HeroImage = styled.div`
  background-image: url('/assets/images/group.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  /* height: 0;
  padding-top: 100%;
  width: 100%; */
`;

const H1Alt = styled.div`
  color: ${color.callout};
  display: inline-block;
  font-family: ${fonts.fontBold};
  font-size: 2.5em;
  line-height: 1.5;

  @media ${media.secondary} {
    font-size: 1.25em;
  }

  span {
    font-family: ${fonts.title};
    color: ${color.foregroundAlt};
  }
`;

const Hero = () => (
  <HeroStyle>
    <div className="inner-wrap">
      <div>
      <h1>
        <span>Frozen</span>
        <br />
        <span>Yogurt</span>
      </h1>
      <H1Alt>
        {' '}
        Grab a cup, pick a flavor, add toppings, weigh it, checkout, and
        {' '}
        <span>ENJOY!</span>
      </H1Alt>
      </div>
    </div>
  </HeroStyle>
);

export default Hero;
