import MenuItem from '../MenuItem';
import { fruitData } from '../../data/fruit-local';
// import SectionHeading from '../SectionHeading/index';

const FruitList = () => (
  <section className="align-center sparkle-background">
    <div className="wrap">{/* <SectionHeading text="Fresh Fruit" /> */}</div>
    <div className="inner-wrap list">
      {Object.keys(fruitData).map((key) => (
        <MenuItem data={fruitData[key]} />
      ))}
    </div>
  </section>
);

export default FruitList;
