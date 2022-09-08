import styled from 'styled-components';

// Styles
import media from '../../styles/media';
import mixins from '../../styles/mixins';
import theme from '../../styles/theme';

// Images
import sylvaniaStorefront from '../../assets/images/koala-berry-locations-sylvania.webp';

const { border, color, font } = theme;

const LocationCalloutStyle = styled.section`
  background: linear-gradient(45deg, ${color.callout}, ${color.foregroundAlt});
  background-size: 400% 400%;
  animation: gradientbanner 7s ease infinite;

  .location-callout-heading {
    display: inline-block;
    font-family: ${font.bold};
    font-size: 2.45em;
    margin-bottom: 0.5em;
  }
`;

const LocationCalloutGrid = styled.div`
  ${mixins.wrap}
  ${mixins.grid}
  background-color: ${color.backgroundTert};
  border-radius: ${border.radius};
  overflow: hidden;
`;

const LocationCalloutGridContent = styled.div`
  padding: 6em;

  @media ${media.primary} {
    padding: 3em;
  }

  @media ${media.secondary} {
    padding: 2.65em;
  }

  @media ${media.smallPhone} {
    padding: 2em;
  }
`;

const GridImage = styled.div`
  ${mixins.flexCenter}
  background-image: url(${sylvaniaStorefront});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media ${media.secondary} {
    padding: 6em 0;
  }
`;

const LocationAddress = styled.a`
  display: inline-block;
  font-family: ${font.font};
  font-size: 0.9em;
  margin-bottom: 0.85em;
  text-decoration: underline;

  div {
    display: block;
    margin-bottom: 0.5em;
  }
`;

const LocationCallout = () => (
  <LocationCalloutStyle>
    <div className="wrap">
      <LocationCalloutGrid>
        <LocationCalloutGridContent>
          <div className="location-callout-heading">location</div>
          <p>
            Koala Berry is located in Regency Plaza at Central and McCord in
            Sylvania Township.
          </p>
          <LocationAddress>
            <div>6710 Central Ave</div>
            <div>Toledo, OH</div>
          </LocationAddress>
          <div>Open everyday Noon to 10pm</div>
        </LocationCalloutGridContent>
        <GridImage />
      </LocationCalloutGrid>
    </div>
  </LocationCalloutStyle>
);

export default LocationCallout;
