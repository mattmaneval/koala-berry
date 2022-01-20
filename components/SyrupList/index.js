import MenuItem from '../MenuItem';
import { syrupData } from '../../data/syrup-local';

const SyrupList = () => (
  <section className="align-center sparkle-background">
    <div className="wrap">
      <h3>Syrup</h3>
    </div>
    <div className="wrap list">
      {Object.keys(syrupData).map((key) => (
        <MenuItem data={syrupData[key]} />
      ))}
    </div>
  </section>
);

export default SyrupList;
