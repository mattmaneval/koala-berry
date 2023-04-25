import styled from 'styled-components';

// Components
// import PrimaryCta from '../navigation/PrimaryCta';

// Images
import chocolateBowl from '../../assets/images/koala-berry-chocolate-yogurt-bowl.png';

// Styles
import media from '../../styles/media';
import theme from '../../styles/theme';

const { color, border } = theme;

const TextCalloutStyle = styled.section`
  padding-top: 0;

  .wrap {
    background-color: ${color.backgroundTert};
    border-radius: ${border.radius};
    padding: 6em 0 0 0;
  }

  p {
    display: inline-block;
    max-width: 22em;

    @media ${media.secondary} {
      max-width: 100%;
      margin-bottom: 1em;
    }
  }

  .image-container {
    max-width: 40%;
  }
`;

const HeadingGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media ${media.secondary} {
    padding: 0 1em;
  }

  h3 {
    max-width: 15em;
  }
`;

const CalloutImage = styled.div`
  background-image: url('${chocolateBowl}');
  background-size: contain;
  background-position-y: 3.5em;
  background-position-x: center;
  background-repeat: no-repeat;
  height: 22em;
`;

const TextCallout = () => (
  <TextCalloutStyle>
    <div className="wrap">
      <HeadingGroup>
        <h3>Your very own unique, self-inspired dessert.</h3>
        <p>
          Grab a cup, pick a flavor or two, add toppings, weight & checkout.
          Enjoy!
        </p>
        {/* <PrimaryCta
          ctaText={link}
          ctaHref={href}
        /> */}
      </HeadingGroup>
      <CalloutImage />
    </div>
  </TextCalloutStyle>
);

export default TextCallout;
