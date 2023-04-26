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

function About() {
  return (
    <>
      <Helmet>
        <title>About | Koala Berry</title>
        <meta name="description" content="Premium Frozen Yogurt & Ice Cream." />
      </Helmet>
      <Header />
      <SubPageHero
        title="About"
        h1Text="Self serve means self inspired"
        copy="Koala Berry's goal is to provide our customers with the opportunity to create their own delicious and wholesome confection in a portion sized perfectly for them.  Our self serve concept caters to the creativity, taste preferences and nutritional desires of every customer.  Our atmosphere is inviting and impeccably clean, encouraging patrons to visit often and enjoy their unique, self-inspired dessert."
      />
      <YogurtCallout />
      <LocationCallout />
      <Footer />
    </>
  );
}

export default About;
