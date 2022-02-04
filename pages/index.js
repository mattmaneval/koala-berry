import Head from 'next/head';
import { GlobalStyle } from '../styles';
import Header from '../components/Header';
import Hero from '../components/Hero/index';
import TextCallout from '../components/TextCallout/index';
import AboutCallout from '../components/AboutCallout/index';
import GiftCardsCallout from '../components/GiftCardsCallout/index';
import PrivateEventsCallout from '../components/PrivateEventsCallout/index';
import PagesCallout from '../components/PagesCallout/index';
import LocationCallout from '../components/LocationCallout/index';
import Map from '../components/Map/index';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Koala Berry</title>
      </Head>
      <GlobalStyle />
      <Header />
      <Hero />
      <TextCallout
        heading="Your very own unique, self-inspired dessert."
        text="Grab a cup, pick a flavor or two, add toppings, weight & checkout. Enjoy!"
        link="Learn More"
        href="/flavors"
      />
      <AboutCallout
        heading="About Our Yogurt"
        text="The benefits of yogurt have been talked about for years. Ours starts with real dairy, fresh milk, real fruit purees, natural flavors and lots of beneficial live yogurt cultures called probiotics."
        link="Learn More"
        href="/about"
      />
      <TextCallout
        heading="Endless Toppings"
        text="Super fresh fruit, premium fountain syrups and oodles of healthy and sweet toppings make Koala Berry a special treat for all. Mix and match over 50 toppings and 18 frozen yogurt or ice cream flavors.  You have almost limitless combinations to enjoy."
        link="Learn More"
        href="/toppings"
      />
      <GiftCardsCallout />
      <PrivateEventsCallout />
      <PagesCallout />
      <LocationCallout />
      <Map />
      <Footer />
    </>
  );
}
