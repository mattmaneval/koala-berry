import MenuItem from '../MenuItem';
import { syrupData } from '../../data/syrup-local';
// import SectionHeading from '../SectionHeading/index';

const SyrupList = () => (
  <section className="align-center sparkle-background">
    <div className="wrap">{/* <SectionHeading text="Syrups" /> */}</div>
    <div className="inner-wrap list">
      {Object.keys(syrupData).map((key) => (
        <MenuItem data={syrupData[key]} />
      ))}
    </div>
  </section>
);

export default SyrupList;
