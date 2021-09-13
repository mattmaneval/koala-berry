import styled from 'styled-components';
import media from '../../styles/media';
import theme from '../../styles/theme';

const { color, fonts } = theme;

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
  <section>
    <div className="wrap">
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
  </section>
);

export default Hero;
