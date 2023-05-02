import MenuItem from '../MenuItem';
import { fruitData } from '../../data/fruit-local';

const FruitList = () => (
  <section className="no-padding-top">
    <div className="inner-wrap list">
      <h3>Fresh Fruit</h3>
      {Object.keys(fruitData).map((key) => (
        <MenuItem data={fruitData[key]} />
      ))}
    </div>
  </section>
);

export default FruitList;
