import styled from 'styled-components';
import media from '../../styles/media';
import theme from '../../styles/theme';
// import ButtonCta from '../navigation/ButtonCta';
const { color, fonts } = theme;

const ToppingsCalloutStyle = styled.section`
  background-color: ${color.foregroundAlt};

  .wrap {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media ${media.secondary} {
      display: block;
    }
  }
`;

const HeadingGroup = styled.div`

  h3, p {
    color: ${color.background};
  }
  p {
    display: inline-block;
    max-width: 30em;
  }

  @media ${media.secondary} {
    margin-bottom: 2em;
  }
`;

const ToppingsCalloutImage = styled.div`
  background-image: url('/assets/images/chocolate-bowl.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  @media ${media.secondary} {
    height: 20em;
  }
`;

function YogurtsToppingsCallout() {
  return (
    <ToppingsCalloutStyle>
      <div className="wrap">
      <ToppingsCalloutImage />
        <HeadingGroup>
          <h3>Endless Toppings</h3>
          <p>Super fresh fruit, premium fountain syrups and oodles of healthy and sweet toppings make Koala Berry a special treat for all.</p>
          <p>Mix and match over 50 toppings and 18 frozen yogurt or ice cream flavors.  You have almost limitless combinations to enjoy.</p>
        
        </HeadingGroup>
      </div>
    </ToppingsCalloutStyle>
  );
};

export default YogurtsToppingsCallout;
