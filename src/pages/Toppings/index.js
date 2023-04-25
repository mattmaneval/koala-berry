import React from 'react';
import { Helmet } from 'react-helmet';

// Components
import Header from '../../components/Header/index';
import SubPageHero from '../../components/SubPageHero';
import DryToppingsList from '../../components/DryToppingsList';
import FruitList from '../../components/FruitList';
import SyrupList from '../../components/SyrupList';
import AboutCallout from '../../components/AboutCallout/index';
import LocationCallout from '../../components/LocationCallout';
import Footer from '../../components/Footer/index';

// Data
// import FoodImagesData from '../../data/images/food-images';

function Toppings() {
  return (
    <>
      <Helmet>
        <title>Toppings | Koala Berry</title>
        <meta name="description" content="Premium Frozen Yogurt & Ice Cream." />
      </Helmet>
      <Header dark />
      <SubPageHero
        title="Toppings"
        h1Text="We've got a lot!"
        copy="Koala Berry is proud to offer a mind blowing selection of Frozen Yogurt, Ice Cream, Fresh Fruit and Candy toppings including many old fashioned Ice Cream parlor syrups.  The flavor combinations are endless."
      />
      <DryToppingsList />
      <FruitList />
      <SyrupList />
      <AboutCallout />
      <LocationCallout />
      <Footer />
    </>
  );
}

export default Toppings;
