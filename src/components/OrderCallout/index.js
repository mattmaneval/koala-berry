import styled from 'styled-components';

// Components
import LinkExternal from '../LinkExternal';

// Images
import chocolateBowl from '../../assets/images/koala-berry-chocolate-yogurt-bowl.png';

// Styles
import media from '../../styles/media';
import theme from '../../styles/theme';

const { color, border } = theme;

const OrderCalloutStyle = styled.section`
  padding-top: 0;

  .wrap {
    background-color: ${color.backgroundTert};
    border-radius: ${border.radius};
    padding: 6em 0 0 0;
  }

  p {
    display: inline-block;
    max-width: 22em;

    @media ${media.secondary} {
      max-width: 100%;
      margin-bottom: 1em;
    }
  }

  .image-container {
    max-width: 40%;
  }
`;

const HeadingGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media ${media.secondary} {
    padding: 0 1em;
  }

  h3 {
    max-width: 15em;
  }
`;

const CalloutImage = styled.div`
  background-image: url('${chocolateBowl}');
  background-size: contain;
  background-position-y: 3.5em;
  background-position-x: center;
  background-repeat: no-repeat;
  height: 22em;
`;

const OrderCallout = () => (
  <OrderCalloutStyle>
    <div className="wrap">
      <HeadingGroup>
        <h3>Rotating Yogurt & Ice Cream Flavors</h3>
        <p>
          A little or a lot… smothered in sauce or just a dib… prefer fresh
          fruit or is the sweet tooth calling…
        </p>
        <LinkExternal
          text="Call to order"
          href="tel:419-725-5558"
          title="Call to order Koala Berry."
          filled
        />
      </HeadingGroup>
      <CalloutImage />
    </div>
  </OrderCalloutStyle>
);

export default OrderCallout;
