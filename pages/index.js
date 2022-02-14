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
        <title>Premium Frozen Yogurt & Ice Cream</title>
        <meta name="title" content="Premium Frozen Yogurt & Ice Cream">
        <meta name="description" content="">
        <meta property="og:type" content="website">
        <meta property="og:url" content="https://koala-berry.netlify.app/">
        <meta property="og:title" content="Premium Frozen Yogurt & Ice Cream">
        <meta property="og:description" content="/meta-tag-image.png">
        <meta property="og:image" content="/meta-tag-image.png">
        <meta property="twitter:card" content="summary_large_image">
        <meta property="twitter:url" content="https://koala-berry.netlify.app/">
        <meta property="twitter:title" content="Premium Frozen Yogurt & Ice Cream">
        <meta property="twitter:description" content="/meta-tag-image.png">
        <meta property="twitter:image" content="/meta-tag-image.png">
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
