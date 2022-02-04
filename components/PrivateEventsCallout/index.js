import styled from 'styled-components';

// Components
import PrimaryCta from '../navigation/PrimaryCta';

// Styles
import media from '../../styles/media';
import theme from '../../styles/theme';

const { color, fonts } = theme;

const PrivateEventsCalloutStyle = styled.section`
  background-image: url('/assets/images/sparkles-white.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 15em 0;

  @media ${media.secondary} {
    padding: 4em 0;
  }
`;

const HeadingGroup = styled.div`


  h3 {
    max-width: 15em;
    color: ${({ light }) => (light ? color.background : color.foreground)};
  }

  p {
    color: ${({ light }) => (light ? color.background : color.foreground)};
    margin-bottom: 2em;
  }
`;

const PrivateEventsCallout = ({ heading, text, link, href, light}) => (
  <PrivateEventsCalloutStyle>
    <div className="inner-wrap">
      <HeadingGroup light={light}>
        <h2>Private Events at Koala Berry</h2>
        <p>Koala Berry is available for private gatherings. Our comfortable bistro atmosphere is perfect for gatherings up to 50 people. Whether you are an employer, club, school or family, Koala Berry is a perfect place to enjoy something a bit different. We will customize the gathering to suit you desires perfectly.</p>
        <PrimaryCta
          ctaText="schedule now"
          ctaHref="tel:419-725-5558"
        />

      </HeadingGroup>
    </div>
  </PrivateEventsCalloutStyle>
);

export default PrivateEventsCallout;
