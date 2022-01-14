import MenuItem from '../MenuItem';
import { dryToppingsData } from '../../data/dry-toppings-local';

const DryToppingsList = () => (
  <section>
    <div className="wrap">
      <h3>Dry Toppings</h3>
      {Object.keys(dryToppingsData).map((key) => (
        <MenuItem data={dryToppingsData[key]} />
      ))}
    </div>
  </section>
);

export default DryToppingsList;
