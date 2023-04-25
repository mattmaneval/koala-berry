import styled from 'styled-components';

// Components

// Styles
import media from '../../styles/media';
import mixins from '../../styles/mixins';
import theme from '../../styles/theme';

// Images
import sylvaniaStorefront from '../../assets/images/koala-berry-locations-sylvania.webp';

const { border, color, font } = theme;

const GilfCardCalloutStyle = styled.section``;

const GilfCardCalloutGrid = styled.div`
  ${mixins.grid}
  align-items: center;
`;

const GilfCardCalloutGridContent = styled.div`
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

const GilfCardCallout = () => (
  <GilfCardCalloutStyle>
    <div className="wrap">
      <GilfCardCalloutGrid>
        <GilfCardCalloutGridContent>
          <div className="title">Location</div>
          <h3>Koala Berry Gift Cards</h3>
          <p>
            The perfect gift! Call or Stop in today and order a Koala Berry Gift
            Card!
          </p>
        </GilfCardCalloutGridContent>
        <LocationMetaGrid>
          <GridImage />
          <div className="grid-container">
            <div className="title">Visit</div>
            <LocationMetaContainer>
              <LocationAddress>
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
              <LocationPhoneNumber>(419) 725-5558</LocationPhoneNumber>
            </LocationMetaContainer>
          </div>
        </LocationMetaGrid>
      </GilfCardCalloutGrid>
    </div>
  </GilfCardCalloutStyle>
);

export default GilfCardCallout;
