import Head from 'next/head';
import { GlobalStyle } from '../styles';
import Header from '../components/Header';
import Hero from '../components/Hero/index';
import PagesCallout from '../components/PagesCallout/index';
import YogurtsCallout from '../components/YogurtsCallout/index';
import ToppingsCallout from '../components/ToppingsCallout/index';
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
      <div className="logo-background">
      <YogurtsCallout />
      <ToppingsCallout />
      </div>
      <PagesCallout />
      <Footer />
    </>
  );
}
