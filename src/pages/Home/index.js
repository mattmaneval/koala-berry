import React from 'react';
import { Helmet } from 'react-helmet';

// Components
import Header from '../../components/Header/index';
import Hero from '../../components/Hero/index';
import AboutCallout from '../../components/AboutCallout';
import ImageSlider from '../../components/ImageSlider';
import YogurtCallout from '../../components/YogurtCallout/index';
// import GilfCardCallout from '../../components/GiftCardCallout';
import LocationCallout from '../../components/LocationCallout';
import Footer from '../../components/Footer/index';

// Data
import GenericImagesData from '../../data/images/generic-images';

function Home() {
  return (
    <>
      <Helmet>
        <title>Koala Berry | Premium Frozen Yogurt & Ice Cream.</title>
        <meta name="description" content="Premium Frozen Yogurt & Ice Cream." />
      </Helmet>
      <Header />
      <Hero />
      <LocationCallout />
      <YogurtCallout />
      <AboutCallout />

      <ImageSlider imageData={GenericImagesData} />
      {/* <GilfCardCallout /> */}

      <Footer />
    </>
  );
}

export default Home;
