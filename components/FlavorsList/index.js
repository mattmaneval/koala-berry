import MenuItem from '../MenuItem';
import { flavorsData } from '../../data/flavors-local';

const FlavorsList = () => (
  <section>
    <div className="wrap">
      <h3>Yogurt, Ice Cream, & Sorbets</h3>
      {Object.keys(flavorsData).map((key) => (
        <MenuItem data={flavorsData[key]} />
      ))}
    </div>
  </section>
);

export default FlavorsList;
