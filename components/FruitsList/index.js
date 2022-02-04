import MenuItem from '../MenuItem';
import { fruitsData } from '../../data/fruits-local';
import SectionHeading from '../SectionHeading/index';

const FruitsList = () => (
  <section className="align-center sparkle-background">
    <div className="wrap">
      <SectionHeading text="Fresh Fruit" />
    </div>
    <div className="wrap list">

      {Object.keys(fruitsData).map((key) => (
        <MenuItem data={fruitsData[key]} />
      ))}
    </div>
  </section>
);

export default FruitsList;
