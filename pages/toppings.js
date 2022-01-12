import Head from 'next/head';
import { GlobalStyle } from '../styles';
import Header from '../components/Header';
import SubPageHero from '../components/SubPageHero/index';
// import Cards from '../components/Cards/index';

import Footer from '../components/Footer';

export default function Home() {
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
      <Footer />
    </>
  );
}
