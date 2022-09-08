import React from 'react';
import { Helmet } from 'react-helmet';

// Components
// import Header from '../../components/Header/index';
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
      {/* <Header/> */}
      <div>Koala Berry</div>
      <Footer />
    </>
  );
}

export default About;
