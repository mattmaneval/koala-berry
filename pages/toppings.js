import Head from 'next/head';
import { GlobalStyle } from '../styles';
import Header from '../components/Header';
import SubPageHero from '../components/SubPageHero/index';
// import Cards from '../components/Cards/index';
import FruitsList from '../components/FruitsList';
import DryToppingsList from '../components/DryToppingsList';
import SyrupList from '../components/SyrupList';
import Map from '../components/Map/index';

import Footer from '../components/Footer';

export default function Toppings() {
  return (
    <>
      <Head>
        <title>Koala Berry | Toppings</title>
      </Head>
      <GlobalStyle />
      <Header absolute />
      <SubPageHero
        backgroundImage="/assets/images/toppings.jpeg"
        heading="Toppings"
        subHeading="Self serve mean self inspired."
      />
      <section className="sparkle-background">
        <div className="mini-wrap">
          <p>Koala Berry is proud to offer a mind blowing selection of Frozen Yogurt, Ice Cream, Fresh Fruit and Candy toppings including many old fashioned Ice Cream parlor syrups.  The flavor combinations are endless.</p>
        </div>
      </section>

        <FruitsList />
        <DryToppingsList />
        <SyrupList />
        <Map />
      <Footer />
    </>
  );
}
