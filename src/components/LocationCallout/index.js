import styled from 'styled-components';

// Components
// import LinkExternal from '../LinkExternal/index';

// Styles
import media from '../../styles/media';
import mixins from '../../styles/mixins';
import theme from '../../styles/theme';

// Images
import sylvaniaStorefront from '../../assets/images/koala-berry-locations-sylvania.webp';

const { border, color, font } = theme;

const LocationCalloutStyle = styled.section``;

const LocationCalloutGrid = styled.div`
  ${mixins.grid}
  align-items: center;
`;

const LocationCalloutGridContent = styled.div`
  p {
    max-width: 80%;
  }
`;

const GridImage = styled.div`
  ${mixins.flexCenter}
  background-image: url(${sylvaniaStorefront});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media ${media.secondary} {
    padding-top: 70%;
  }
`;

const LocationAddress = styled.a`
  display: inline-block;
  text-decoration: underline;

  div {
    display: block;
    margin-bottom: 0.5em;
  }
`;

const LocationPhoneNumber = styled.a`
  display: inline-block;
  text-decoration: underline;

  div {
    display: block;
    margin-bottom: 0.5em;
  }
`;

const LocationMetaGrid = styled.div`
  ${mixins.grid}
  background-color: ${color.backgroundTert};
  border-radius: ${border.radius};
  overflow: hidden;

  .grid-container {
    padding: 3em;

    @media ${media.bigPhone} {
      padding: 2em;
    }
  }
`;

const LocationMetaContainer = styled.div`
  font-family: ${font.font};
  margin-bottom: 1.25em;
`;

const LocationCallout = () => (
  <LocationCalloutStyle>
    <div className="wrap">
      <LocationCalloutGrid>
        <LocationCalloutGridContent>
          <div className="title">Location</div>
          <h3>Regency Plaza</h3>
          <p>
            Koala Berry is located in Regency Plaza at Central and McCord in
            Sylvania Township.
          </p>
        </LocationCalloutGridContent>
        <LocationMetaGrid>
          <GridImage />
          <div className="grid-container">
            <div className="title">Visit</div>
            <LocationMetaContainer>
              <LocationAddress
                href="https://goo.gl/maps/iBKDHmP3eiPa2nfv5"
                target="_blank"
                title="View Koala Berry on Google Maps."
              >
                <div>6710 Central Ave</div>
                <div>Toledo, OH</div>
              </LocationAddress>
            </LocationMetaContainer>
            <div className="title">Hours</div>
            <LocationMetaContainer>
              <div>Open everyday Noon to 10pm</div>
            </LocationMetaContainer>
            <div className="title">Contact</div>
            <LocationMetaContainer>
              <LocationPhoneNumber
                href="tel:4197255558"
                title="Call Koala Berry."
              >
                (419) 725-5558
              </LocationPhoneNumber>
            </LocationMetaContainer>
          </div>
        </LocationMetaGrid>
      </LocationCalloutGrid>
    </div>
  </LocationCalloutStyle>
);

export default LocationCallout;
