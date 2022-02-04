import Head from 'next/head';
import styled from 'styled-components';
import { GlobalStyle } from '../styles';
import Header from '../components/Header';
import SubPageHero from '../components/SubPageHero/index';
import FlavorsList from '../components/FlavorsList';
import GiftCardsCallout from '../components/GiftCardsCallout/index';
import LocationCallout from '../components/LocationCallout/index';
import Map from '../components/Map/index';
import theme from '../styles/theme';
import Footer from '../components/Footer';

const { color } = theme;

const FlavorsText = styled.section`
  background-color: ${color.foregroundAlt};

  p {
    color: ${color.background};
  }
`;

export default function Flavors() {
  return (
    <>
      <Head>
        <title>Koala Berry | Flavors</title>
      </Head>
      <GlobalStyle />
      <Header absolute />
      <SubPageHero
        backgroundImage="/assets/images/flavors.jpeg"
        heading="flavors"
        subHeading="Self-serve means self-inspired"
        text="Koala Berry is self serve so you always get just what you desire.  Come on in, grab a cup and add the yogurt or ice cream of your choice… we have 18 flavors everyday… add your favorite toppings, over 50, including many fresh fruits and healthy choices... top it off with a nice selection of syrups too."
      />
      <FlavorsList />
      <GiftCardsCallout />
      <LocationCallout />
      <Map />
      <Footer />
    </>
  );
}
