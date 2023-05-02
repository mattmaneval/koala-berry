import MenuItem from '../MenuItem';
import { dryToppingsData } from '../../data/dry-toppings-local';

const DryToppingsList = () => (
  <section className="no-padding-top">
    <div className="inner-wrap list">
      <h3>Dry Toppings</h3>
      {Object.keys(dryToppingsData).map((key) => (
        <MenuItem data={dryToppingsData[key]} />
      ))}
    </div>
  </section>
);

export default DryToppingsList;
