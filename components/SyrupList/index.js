import MenuItem from '../MenuItem';
import { syrupData } from '../../data/syrup-local';

const SyrupList = () => (
  <section>
    <div className="wrap">
      <h3>Syrup</h3>
      {Object.keys(syrupData).map((key) => (
        <MenuItem data={syrupData[key]} />
      ))}
    </div>
  </section>
);

export default SyrupList;
