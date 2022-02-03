import MenuItem from '../MenuItem';
import { dryToppingsData } from '../../data/dry-toppings-local';

const DryToppingsList = () => (
  <section className="align-center sparkle-background">
    <div className="wrap">
      <h3>Dry Toppings</h3>
    </div>
    <div className="wrap list">
      {Object.keys(dryToppingsData).map((key) => (
        <MenuItem data={dryToppingsData[key]} />
      ))}
    </div>
  </section>
);

export default DryToppingsList;
