import MenuItem from '../MenuItem';
import { dryToppingsData } from '../../data/dry-toppings-local';
import SectionHeading from '../SectionHeading/index';

const DryToppingsList = () => (
  <section className="align-center sparkle-background">
    <div className="wrap">
      <SectionHeading text="Dry Toppings" />
    </div>
    <div className="wrap list">
      {Object.keys(dryToppingsData).map((key) => (
        <MenuItem data={dryToppingsData[key]} />
      ))}
    </div>
  </section>
);

export default DryToppingsList;
