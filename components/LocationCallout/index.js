import styled from 'styled-components';

// Styles
import theme from '../../styles/theme';

const { color } = theme;

const LocationCalloutStyle = styled.section`
  background: linear-gradient(45deg,${color.callout},${color.foregroundAlt});
  background-size: 400% 400%;
  animation: gradientbanner 7s ease infinite;

  p {
    color: ${color.background};
  }
`;

const LocationCallout = () => (
  <LocationCalloutStyle>
    <div className="wrap">
      <div className="h1-alt">Location</div>
      <p>Koala Berry is located in Regency Plaza at Central and McCord in Sylvania Township.</p>
    </div>
  </LocationCalloutStyle>
);

export default LocationCallout;
