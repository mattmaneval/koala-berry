import Head from 'next/head';
import { GlobalStyle } from '../styles';
import Header from '../components/Header';
import SubPageHero from '../components/SubPageHero/index';
import LocationCallout from '../components/LocationCallout/index';
import Map from '../components/Map/index';
import SectionHeading from '../components/SectionHeading/index';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Head>
        <title>Koala Berry | About</title>
      </Head>
      <GlobalStyle />
      <Header absolute />
      <SubPageHero
        backgroundImage="/assets/images/neon.jpeg"
        heading="About"
        subHeading="Self serve mean self inspired."
      />
      <section>
        <div className="mini-wrap">
          <p>What tells you more about a company than their Mission Statement.  It gives you a peek into the minds of the owners and management.  At Koala Berry our hearts and minds are consumed with thoughts of you... our customer. At Koala Berry it is all about you... your selection of our yogurt and ice cream... your choice of toppings... your enjoyment of the Koala Berry experience, every time you visit.  That is what we'd like you to know about us!</p>
          <SectionHeading text="Mission Statement" />
          <p>The Koala Berry LLC goal is to provide our customers with the opportunity to create their own delicious and wholesome confection in a portion sized perfectly for them.  Our self serve concept caters to the creativity, taste preferences and nutritional desires of every customer.  Our atmosphere is inviting and impeccably clean, encouraging patrons to visit often and enjoy their unique, self-inspired dessert.</p>
        </div>
      </section>
      <LocationCallout />
      <Map />
      <Footer />
    </>
  );
}
