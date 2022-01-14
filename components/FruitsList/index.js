import MenuItem from '../MenuItem';
import { fruitsData } from '../../data/fruits-local';

const FruitsList = () => (
  <section>
    <div className="wrap">
      <h3>Fresh Fruit</h3>
      {Object.keys(fruitsData).map((key) => (
        <MenuItem data={fruitsData[key]} />
      ))}
    </div>
  </section>
);

export default FruitsList;
