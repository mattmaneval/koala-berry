import React from 'react';
import { Helmet } from 'react-helmet';

// Components
import Header from '../../components/Header/index';
import SubPageHero from '../../components/SubPageHero';
import FlavorsList from '../../components/FlavorsList';
import AboutCallout from '../../components/AboutCallout';
import LocationCallout from '../../components/LocationCallout';
import Footer from '../../components/Footer/index';

function Flavors() {
  return (
    <>
      <Helmet>
        <title>Flavors | Koala Berry</title>
        <meta name="description" content="Premium Frozen Yogurt & Ice Cream." />
      </Helmet>
      <Header dark />
      <SubPageHero
        title="Flavors"
        h1Text="A little or a lot... "
        copy="Koala Berry is self serve so you always get just what you desire.  Come on in, grab a cup and add the yogurt or ice cream of your choice… we have 18 flavors everyday… add your favorite toppings, over 50, including many fresh fruits and healthy choices... top it off with a nice selection of syrups too.."
      />
      <FlavorsList />
      <AboutCallout />
      <LocationCallout />
      <Footer />
    </>
  );
}

export default Flavors;
