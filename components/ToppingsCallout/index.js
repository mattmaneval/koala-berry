import styled from 'styled-components';

// Components
import SecondaryCta from '../navigation/SecondaryCta';

// Styles
import media from '../../styles/media';

const ToppingsCalloutStyle = styled.section`
  background-image: url('/assets/images/sparkles-white.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

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

const ToppingsCalloutImage = styled.div`
  background-image: url('/assets/images/waffle-bowl.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  @media ${media.secondary} {
    height: 16em;
    margin-bottom: 4em;
  }
`;

function YogurtsToppingsCallout() {
  return (
    <ToppingsCalloutStyle className="no-padding-top">
      <div className="wrap">
        <ToppingsCalloutImage />
        <HeadingGroup>
          <div className="mark" />
          <h3>Endless Toppings</h3>
          <p>
            Super fresh fruit, premium fountain syrups and oodles of healthy
            and sweet toppings make Koala Berry a special treat for all.
            Mix and match over 50 toppings and 18 frozen yogurt or ice cream
            flavors.  You have almost limitless combinations to enjoy.
          </p>
          <SecondaryCta
            ctaText="Learn more"
            block
          />
        </HeadingGroup>
      </div>
    </ToppingsCalloutStyle>
  );
}

export default YogurtsToppingsCallout;
