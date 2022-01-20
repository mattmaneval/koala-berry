import MenuItem from '../MenuItem';
import { fruitsData } from '../../data/fruits-local';

const FruitsList = () => (
  <section className="align-center sparkle-background">
    <div className="wrap">
      <h3>Fresh Fruit</h3>
    </div>
    <div className="wrap list">

      {Object.keys(fruitsData).map((key) => (
        <MenuItem data={fruitsData[key]} />
      ))}
    </div>
  </section>
);

export default FruitsList;
