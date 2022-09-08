import React from 'react';
import { Helmet } from 'react-helmet';

// Components
import Header from '../../components/Header/index';
import Hero from '../../components/Hero/index';
import Footer from '../../components/Footer/index';

// Data
// import FoodImagesData from '../../data/images/food-images';

function Home() {
  return (
    <>
      <Helmet>
        <title>Koala Berry | Premium Frozen Yogurt & Ice Cream.</title>
        <meta name="description" content="Premium Frozen Yogurt & Ice Cream." />
      </Helmet>
      <Header />
      <Hero />
      <Footer />
    </>
  );
}

export default Home;
