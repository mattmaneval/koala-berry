import styled from 'styled-components';

// Components
import MenuItem from '../MenuItem/index';
import LinkExternal from '../LinkExternal/index';

// Data
import { flavorsData } from '../../data/flavors-local';

// Styles
// import media from '../../styles/media';
import theme from '../../styles/theme';

const { color, border } = theme;

const FlavorsListStyle = styled.section`
  padding-top: 0;

  .wrap {
    background-color: ${color.backgroundTert};
    border-radius: ${border.radius};
    padding: 6em 0;
  }
`;

const FlavorsList = () => (
  <FlavorsListStyle className="align-center">
    <div className="wrap">
      <h3>Rotating Yogurt & Ice Cream Flavors</h3>
      <p>
        A little or a lot… smothered in sauce or just a dib… prefer fresh fruit
        or is the sweet tooth calling…
      </p>
      <LinkExternal
        text="Call to order"
        href="tel:419-725-5558"
        title="Call to order Koala Berry."
        filled
      />
    </div>
    <section>
      <div className="inner-wrap list">
        {Object.keys(flavorsData).map((key) => (
          <MenuItem data={flavorsData[key]} />
        ))}
      </div>
    </section>
  </FlavorsListStyle>
);

export default FlavorsList;
