import styled from 'styled-components';
import media from '../../styles/media';
// import theme from '../../styles/theme';
import ButtonCta from '../navigation/ButtonCta';
// const { color, fonts } = theme;

const CalloutStyle = styled.section`
  .wrap {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media ${media.secondary} {
      display: block;
    }
  }
`;

const HeadingGroup = styled.div`
  p {
    display: inline-block;
    max-width: 30em;
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

  @media ${media.secondary} {
    height: 20em;
  }
`;

function YogurtsCallout() {
  return (
    <CalloutStyle>
      <div className="wrap">
        <HeadingGroup>
          <h3>Your very own unique, self-inspired dessert.</h3>
          <p>
            The benefits of yogurt have been talked about for years.
            Ours starts with real dairy, fresh milk, real fruit purees, natural
            flavors and lots of beneficial live yogurt cultures called probiotics.
          </p>
          <ButtonCta
            ctaText="View Our Flavors"
            ctaHref="/flavors"
          />
        </HeadingGroup>
        <CalloutImage />
      </div>
    </CalloutStyle>
  );
};

export default YogurtsCallout;
