import Head from 'next/head';
import { GlobalStyle } from '../styles';
import Header from '../components/Header';
import SubPageHero from '../components/SubPageHero/index';
import FruitsList from '../components/FruitsList';
import DryToppingsList from '../components/DryToppingsList';
import SyrupList from '../components/SyrupList';
import GiftCardsCallout from '../components/GiftCardsCallout/index';
import LocationCallout from '../components/LocationCallout/index';
import Map from '../components/Map/index';
import TextCallout from '../components/TextCallout/index';
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
        subHeading="We have a lot!"
        text="Koala Berry is proud to offer a mind blowing selection of Frozen Yogurt, Ice Cream, Fresh Fruit and Candy toppings including many old fashioned Ice Cream parlor syrups.  The flavor combinations are endless."
      />
      <FruitsList />
      <DryToppingsList />
      <SyrupList />
      <GiftCardsCallout />
      <LocationCallout />
      <Map />
      <Footer />
    </>
  );
}
