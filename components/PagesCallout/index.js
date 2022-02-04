import styled from 'styled-components';

// Components
import FeaturedPage from './FeaturedPage';
import SecondaryPage from './SecondaryPage';

// Styles
import media from '../../styles/media';

const PagesCalloutStyles = styled.section`
  padding-bottom: 0;

  .callout-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1em;

    @media ${media.primary} {
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 2em;
      padding-bottom: 2em;
    }
  }
`;

const PagesCallout = () => (
  <PagesCalloutStyles className="no-padding-top">
    <div className="callout-grid">
      <FeaturedPage
        background="/assets/images/icecream-stick.png"
        title="flavors"
        subtitle="Self-serve means self-inspired."
      />
      <SecondaryPage
        background="/assets/images/toppings-bar.png"
        title="toppings"
        subtitle="We have alot!"
      />
      <SecondaryPage
        background="/assets/images/raspberry-yogurt.png"
        title="benefits"
        subtitle="Delicious taste, healthy lifestyle."
      />
      <FeaturedPage
        background="/assets/images/banner.png"
        title="about"
        subtitle="Learn more about Koala Berry."
      />
    </div>
  </PagesCalloutStyles>
);

export default PagesCallout;
