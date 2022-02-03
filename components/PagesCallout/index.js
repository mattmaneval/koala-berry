// import styled from 'styled-components';
// import media from '../../styles/media';
// import mixins from '../../styles/mixins';
// import theme from '../../styles/theme';
//
// const { color, fonts } = theme;
//
// const PagesCalloutStyle = styled.div`
//   background-image: url('/assets/images/sparkles-white.png');
//   background-size: cover;
//   background-repeat: no-repeat;
//   background-position: center;
//   padding: 0;
//
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   grid-gap: 1em;
//   margin: 0 1em;
//
//   @media ${media.secondary} {
//     /* display: block; */
//     grid-template-columns: repeat(1, 1fr);
//   }
//
// `;
//
// const Page = styled.div`
//   ${mixins.animate};
//   color: ${color.background};
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   padding: 10em 0;
//
//   cursor: pointer;
//
//   @media ${media.secondary} {
//     /* padding: 1.25em; */
//   }
//
//   &:first-of-type {
//     grid-area: 1/1/2/3;
//     background-image: url('/assets/images/icecream-stick.jpeg');
//     background-size: cover;
//     background-repeat: no-repeat;
//     background-position: center;
//     /* padding-top: 30%; */
//
//     &:hover  {
//       transform: scale(1.2);
//       filter: blur(5px) brightness(50%);
//
//       @media ${media.primary} {
//         transform: none;
//         filter: none;
//       }
//     }
//
//
//     @media ${media.secondary} {
//       grid-area: auto;
//     }
//   }
//
//   &:nth-of-type(2) {
//     background-image: url('/assets/images/toppings-bar.jpeg');
//     background-size: cover;
//     background-repeat: no-repeat;
//     background-position: center;
//     /* padding-top: 30%; */
//     @media ${media.secondary} {
//       grid-area: auto;
//     }
//   }
//
//   &:nth-of-type(3) {
//     background-image: url('/assets/images/raspberry-yogurt.jpeg');
//     background-size: cover;
//     background-repeat: no-repeat;
//     background-position: center;
//     /* padding-top: 30%; */
//     @media ${media.secondary} {
//       grid-area: auto;
//     }
//   }
//
//   &:last-of-type {
//     grid-area: 3/1/4/3;
//     background-image: url('/assets/images/banner.png');
//     background-size: cover;
//     background-repeat: no-repeat;
//     background-position: center;
//     /* padding-top: 30%; */
//     @media ${media.secondary} {
//       grid-area: auto;
//     }
//   }
//
//   .page {
//     &-title {
//       font-family: ${fonts.title};
//       display: inline-block;
//       font-size: 3.5em;
//       position: relative;
//       text-transform: uppercase;
//       margin-bottom: 0.25em;
//       z-index: 1;
//
//       @media ${media.secondary} {
//         /* font-size: 2.6em; */
//         font-size: 1.65em;
//       }
//     }
//
//     &-subtitle {
//       color: ${color.foregroundAlt};
//       display: flex;
//       align-items: flex-end;
//       font-family: ${fonts.fontBold};
//       justify-content: space-between;
//       width: 100%;
//
//       span {
//         font-size: 1em;
//       }
//
//       svg {
//         height: 2em;
//         width: 2em;
//         color: ${color.callout};
//       }
//     }
//   }
//
//   &:hover {
//
//
//     .page-title {
//       &:before {
//         content: "";
//         position: absolute;
//         height: 0.5em;
//         width: 100%;
//         background-color: ${color.callout};
//         display: inline-block;
//         bottom: 0;
//         left: 0;
//         z-index: -1;
//       }
//     }
//
//     svg {
//       color: ${color.background};
//     }
//   }
// `;
//
// const PagesCallout = () => (
//   <PagesCalloutStyle>
//       <Page>
//         <div className="page-top">
//           <div className="page-title">flavors</div>
//           <div className="page-subtitle">
//             <span>Self serve means self inspired.</span>
//
//           </div>
//         </div>
//       </Page>
//       <Page>
//         <div className="page-top">
//           <div className="page-title">toppings</div>
//           <div className="page-subtitle">
//             <span>We have a lot!</span>
//
//           </div>
//         </div>
//       </Page>
//       <Page>
//         <div className="page-top">
//           <div className="page-title">benefits</div>
//           <div className="page-subtitle">
//             <span>Delicious taste, healthy lifestyle.</span>
//
//           </div>
//         </div>
//       </Page>
//       <Page>
//         <div className="page-top">
//           <div className="page-title">about</div>
//           <div className="page-subtitle">
//             <span>About Koala Berry.</span>
//
//           </div>
//         </div>
//       </Page>
//   </PagesCalloutStyle>
// );
//
// export default PagesCallout;

import styled from 'styled-components';

// Components
import FeaturedPage from './FeaturedPage';
import SecondaryPage from './SecondaryPage';
// import ProjectSecondary from './ProjectSecondary';
// import BackgroundVideo from '../BackgroundVideo/index';
// import PrimaryCta from '../navigation/PrimaryCta';

// Styles
import media from '../../styles/media';
import mixins from '../../styles/mixins';
import theme from '../../styles/theme';


const { color, fonts, space } = theme;

const PagesCalloutStyles = styled.section`
  ${mixins.wrap}
  @media ${media.primary} {
    width: 100%;
  }

  .callout-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1em;

    @media ${media.primary} {
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 2em;
    }
  }
`;

const PagesCallout = () => (
  <PagesCalloutStyles>
    <div className="callout-grid">
      <FeaturedPage
        background="/assets/images/icecream-stick.png"
        title="flavors"
        subtitle="Self-serve means self-inspired."
      />
      <SecondaryPage
        background="/assets/images/toppings-bar.png"
        title="toppings"
        subtitle="We have alot!"
      />
      <SecondaryPage
        background="/assets/images/raspberry-yogurt.png"
        title="benefits"
        subtitle="Delicious taste, healthy lifestyle."
      />
      <FeaturedPage
        background="/assets/images/banner.png"
        title="about"
        subtitle="Learn more about Koala Berry."
      />
    </div>
  </PagesCalloutStyles>
);

export default PagesCallout;
