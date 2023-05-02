import MenuItem from '../MenuItem';
import { syrupData } from '../../data/syrup-local';

const SyrupList = () => (
  <section className="no-padding-top">
    <div className="inner-wrap list">
      <h3>Syrup</h3>
      {Object.keys(syrupData).map((key) => (
        <MenuItem data={syrupData[key]} />
      ))}
    </div>
  </section>
);

export default SyrupList;
