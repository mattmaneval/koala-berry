import styled from 'styled-components';
import media from '../../styles/media';
// import theme from '../../styles/theme';
// import ButtonCta from '../navigation/ButtonCta';
// const { color, fonts } = theme;

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
    margin-bottom: 4em;

    @media ${media.secondary} {
      display: block;
    }
  }

  p {
    display: inline-block;
    max-width: 22em;

    @media ${media.secondary} {
      text-align: center;
      max-width: 100%;
    }
  }

`;

const HeadingGroup = styled.div`
  h3 {
    margin-bottom: 0;
    text-align: right;

    @media ${media.secondary} {
      text-align: center;
      margin-bottom: 2em;
    }
  }

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
          <h3>Your very own unique,<br />self-inspired dessert.</h3>
        </HeadingGroup>
        <CalloutImage />
      </div>
      <div class="mini-wrap">
        <p>
          The benefits of yogurt have been talked about for years.
          Ours starts with real dairy, fresh milk, real fruit purees, natural
          flavors and lots of beneficial live yogurt cultures called probiotics.
        </p>
      </div>
    </CalloutStyle>
  );
};

export default YogurtsCallout;
