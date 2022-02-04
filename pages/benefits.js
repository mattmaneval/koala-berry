import Head from 'next/head';
import { GlobalStyle } from '../styles';
import Header from '../components/Header';
import SubPageHero from '../components/SubPageHero/index';
import Map from '../components/Map/index';
import TextCallout from '../components/TextCallout/index';
import LocationCallout from '../components/LocationCallout/index';
import Footer from '../components/Footer';

export default function Benefits() {
  return (
    <>
      <Head>
        <title>Koala Berry | Benefits</title>
      </Head>
      <GlobalStyle />
      <Header absolute />
      <SubPageHero
        backgroundImage="/assets/images/waffle.jpeg"
        heading="Benefits"
        subHeading="Delicious taste, healthy lifestyle"
        text="The benefits of yogurt have been talked about for years. Ours starts with dairy fresh milk, real fruit purees, natural flavors and lots of beneficial live yogurt cultures called probiotics.  That’s what premuim Koala Berry yogurts are all about. Our yogurt is specially blended to ensure a smooth and creamy spoonful that brings delight in ever bite.  Continued care is taken at the store to be certain our products are as creamy and delicious as the day we opened for business way back in 2011."
      />
      <section className="sparkle-background">
        <div className="inner-wrap">
          <p>The benefits of yogurt have been talked about for years. Ours starts with dairy fresh milk, real fruit purees, natural flavors and lots of beneficial live yogurt cultures called probiotics.  That’s what premuim Koala Berry yogurts are all about. Our yogurt is specially blended to ensure a smooth and creamy spoonful that brings delight in ever bite.  Continued care is taken at the store to be certain our products are as creamy and delicious as the day we opened for business way back in 2011.</p>
          <h3></h3>
          <p>Low fat, nonfat, sweetened or no sugar added, whatever your preference, Koala Berry yogurts are a delicious treat and a great source of calcium and protein.  It is low in cholesterol and sodium too.  Koala Berry promotes healthy immune and digestive systems.</p>
          <p>Our frozen yogurts are "Certified Live and Active Cultures".  We use the following Live Active Cultures: L. Bulgaricus, L. Acidophilus, S. Thermophilus and B. Lactis.</p>
          <p>Truth be told, Koala Berry didn't open as a health food store.  It was opened as a fun lively place where you could enjoy a delicious self-inspired dessert, sized just right for you. Our focus is on great taste, smooth texture and a delightful experience for our customers.  Today's consumers are savvy.  If a buying choice can do double duty, all the better. Wholesome dairy, fresh fruits, wholegrain toppings, and watchful eye on calories, fats and sugars can be a good thing.  Not to mention the benefits of Certified Live and Active Cultures in our yogurt.</p>
          <p>So much has been said and written about the health benefits of yogurt.  One of the best and most trusted sources of good information on the health benefits of yogurt is at WebMD.</p>
          <p>Another great source of information about the health benefits of yogurt is Dr. Memmet Oz and the RealAge website.  We encourage you to visit these websites to learn more.</p>
          <h3>You'll visit Koala Berry for the taste and enjoyment of our product, but hey, if it's healthy too that is all the better, don't you think?</h3>
        </div>
      </section>
      <LocationCallout />
      <Map />
      <Footer />
    </>
  );
}
