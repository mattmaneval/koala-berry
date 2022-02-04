import MenuItem from '../MenuItem';
import { flavorsData } from '../../data/flavors-local';
import SectionHeading from '../SectionHeading/index';

const FlavorsList = () => (
  <section className="align-center">
    <div className="wrap">
      <SectionHeading text="Flavors" />
    </div>
    <div className="wrap list">
      {Object.keys(flavorsData).map((key) => (
        <MenuItem data={flavorsData[key]} />
      ))}
    </div>
  </section>
);

export default FlavorsList;
