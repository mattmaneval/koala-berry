import Head from 'next/head';
import { GlobalStyle } from '../styles';
import Header from '../components/Header';
import SubPageHero from '../components/SubPageHero/index';
import FlavorsList from '../components/FlavorsList';
// import Cards from '../components/Cards/index';
import Cards from '../components/Cards/index';
import Map from '../components/Map/index';

import styled from 'styled-components';
// import ButtonCta from '../navigation/ButtonCta';
import media from '../styles/media';
import theme from '../styles/theme';

import Footer from '../components/Footer';

const { color, fonts } = theme;

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
        heading="Flavors"
        subHeading="Self serve mean self inspired."
      />
      <FlavorsText>
        <div className="mini-wrap">
          <p>A little or a lot… smothered in sauce or just a dib… prefer fresh fruit or is the sweet tooth calling…</p>
          <p>Koala Berry is self serve so you always get just what you desire.  Come on in, grab a cup and add the yogurt or ice cream of your choice… we have 18 flavors everyday… add your favorite toppings, over 50, including many fresh fruits and healthy choices... top it off with a nice selection of syrups too.</p>
        </div>
      </FlavorsText>
      <FlavorsList />
      <Cards />
      <Map />
      <Footer />
    </>
  );
}
