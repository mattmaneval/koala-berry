import Head from 'next/head';
import { GlobalStyle } from '../styles';
import Header from '../components/Header';
import SubPageHero from '../components/SubPageHero/index';
import FlavorsList from '../components/FlavorsList';
// import Cards from '../components/Cards/index';

import Footer from '../components/Footer';

export default function Home() {
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
      <section>
        <div className="wrap">
          <p>A little or a lot… smothered in sauce or just a dib… prefer fresh fruit or is the sweet tooth calling…</p>
          <p>Koala Berry is self serve so you always get just what you desire.  Come on in, grab a cup and add the yogurt or ice cream of your choice… we have 18 flavors everyday… add your favorite toppings, over 50, including many fresh fruits and healthy choices... top it off with a nice selection of syrups too.</p>
        </div>
      </section>
      <FlavorsList />
      <Footer />
    </>
  );
}
