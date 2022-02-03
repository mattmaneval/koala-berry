import styled from 'styled-components';
import media from '../../styles/media';
import theme from '../../styles/theme';
// import ButtonCta from '../navigation/ButtonCta';
import SecondaryCta from '../navigation/SecondaryCta';
const { color } = theme;

const CalloutStyle = styled.section`
  background-image: url('/assets/images/sparkles-white.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  .wrap {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5em;
    align-items: center;
    align-content: center;
    /* margin-bottom: 4em; */

    @media ${media.secondary} {
      display: block;
    }
  }



  p {
    display: inline-block;
    max-width: 22em;
    color: black;

    @media ${media.secondary} {
      max-width: 100%;
    }
  }

`;

const HeadingGroup = styled.div`


  @media ${media.secondary} {
    margin-bottom: 2em;
  }
`;

const CalloutImage = styled.div`
  background-image: url('/assets/images/waffle-bowl.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;

  @media ${media.secondary} {
    height: 16em;
  }
`;

function YogurtsCallout() {
  return (
    <CalloutStyle>
      <div className="wrap">
        <HeadingGroup>
          <div className="mark"/>
          <h3>Your very own unique,<br />self-inspired dessert.</h3>
          <p>
            The benefits of yogurt have been talked about for years.
            Ours starts with real dairy, fresh milk, real fruit purees, natural
            flavors and lots of beneficial live yogurt cultures called probiotics.
          </p>
          <SecondaryCta
            ctaText="Learn more"
            block
          />
        </HeadingGroup>
        <CalloutImage />
      </div>
    </CalloutStyle>
  );
};

export default YogurtsCallout;
