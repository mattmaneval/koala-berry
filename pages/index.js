import Head from 'next/head';
import { GlobalStyle } from '../styles';
import Header from '../components/Header';
import Hero from '../components/Hero/index';
import Cards from '../components/Cards/index';
import YogurtsCallout from '../components/YogurtsCallout/index';
// import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Koala Berry</title>
      </Head>
      <GlobalStyle />
      <Header />
      <Hero />
      <Cards />
      <YogurtsCallout />
    </>
  );
}
