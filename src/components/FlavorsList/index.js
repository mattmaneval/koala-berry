import styled from 'styled-components';

// Components
import MenuItem from '../MenuItem/index';
import OrderCallout from '../OrderCallout';

// Data
import { flavorsData } from '../../data/flavors-local';

// Styles

const FlavorsListStyle = styled.section`
  padding-top: 0;
`;

const FlavorsList = () => (
  <FlavorsListStyle className="align-center">
    <OrderCallout />
    <section className="no-padding-top no-padding-bottom">
      <div className="inner-wrap list">
        <h3>Rotating Flavors</h3>
        {Object.keys(flavorsData).map((key) => (
          <MenuItem data={flavorsData[key]} />
        ))}
      </div>
    </section>
  </FlavorsListStyle>
);

export default FlavorsList;
