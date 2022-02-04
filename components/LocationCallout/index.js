import styled from 'styled-components';

// Styles
import theme from '../../styles/theme';

const { color, fonts } = theme;

const LocationCalloutStyle = styled.section`
  background: linear-gradient(45deg,${color.callout},${color.foregroundAlt});
  background-size: 400% 400%;
  animation: gradientbanner 7s ease infinite;

  .location-callout-heading {
    color: ${color.background};
    display: inline-block;
    font-family: ${fonts.fontBold};
    font-size: 2.45em;
    margin-bottom: 0.5em;
  }

  p {
    color: ${color.background};
    margin-bottom: 0;
  }
`;

const LocationCallout = () => (
  <LocationCalloutStyle>
    <div className="wrap">
      <div className="location-callout-heading">Location</div>
      <p>Koala Berry is located in Regency Plaza at Central and McCord in Sylvania Township.</p>
    </div>
  </LocationCalloutStyle>
);

export default LocationCallout;
