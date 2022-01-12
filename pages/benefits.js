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
        <title>Koala Berry | Benefits</title>
      </Head>
      <GlobalStyle />
      <Header absolute />
      <SubPageHero
        backgroundImage="/assets/images/waffle.jpeg"
        heading="Benefits"
        subHeading="Self serve mean self inspired."
      />
      <Footer />
    </>
  );
}
