import styled from 'styled-components';

// Components
import ImageContainer from '../ImageContainer/index';
import PrimaryCta from '../navigation/PrimaryCta';

// Styles
import theme from '../../styles/theme';

const { color } = theme;

const GiftCardsCalloutStyle = styled.section`
  background: linear-gradient(to bottom, ${color.callout} 0%, ${color.foregroundAlt} 100%);
  text-align: center;

  p {
    color: ${color.background};
  }
`;

const GiftCardsCalloutTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const GiftCardsCallout = ({ heading, text, link, href}) => (
  <GiftCardsCalloutStyle>
    <div className="mini-wrap">
      <GiftCardsCalloutTextContainer>
        <div className="title alt">Koala Berry Gift Cards</div>
        <p>The perfect gift! Call or Stop in today and order a Koala Berry Gift Card!</p>
        <ImageContainer image="/assets/images/gift-card.png" />
        <PrimaryCta
          ctaText="order now"
          ctaHref="tel:419-725-5558"
        />
      </GiftCardsCalloutTextContainer>
    </div>
  </GiftCardsCalloutStyle>
);

export default GiftCardsCallout;
