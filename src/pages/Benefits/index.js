import React from 'react';
import { Helmet } from 'react-helmet';

// Components
import Header from '../../components/Header/index';
import SubPageHero from '../../components/SubPageHero';
import YogurtCallout from '../../components/YogurtCallout/index';
import LocationCallout from '../../components/LocationCallout';
import Footer from '../../components/Footer/index';

// Data
// import FoodImagesData from '../../data/images/food-images';

function Benefits() {
  return (
    <>
      <Helmet>
        <title>Benefits | Koala Berry</title>
        <meta name="description" content="Premium Frozen Yogurt & Ice Cream." />
      </Helmet>
      <Header />
      <SubPageHero
        title="Benefits"
        h1Text="Delicious taste... Healthy Lifestyle"
        copy="The benefits of yogurt have been talked about for years. Ours starts with dairy fresh milk, real fruit purees, natural flavors and lots of beneficial live yogurt cultures called probiotics.  That’s what premuim Koala Berry yogurts are all about. Our yogurt is specially blended to ensure a smooth and creamy spoonful that brings delight in ever bite.  Continued care is taken at the store to be certain our products are as creamy and delicious as the day we opened for business way back in 2011."
      />
      <YogurtCallout />
      <LocationCallout />
      <Footer />
    </>
  );
}

export default Benefits;
