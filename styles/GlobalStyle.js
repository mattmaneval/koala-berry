import { createGlobalStyle } from 'styled-components';
import Resets from './resets';
import Fonts from './fonts';
import mixins from './mixins';
import media from './media';
import theme from './theme';

const { base, space, color, fonts } = theme;

const GlobalStyle = createGlobalStyle`
  ${Resets};
  ${Fonts};
  ${mixins};
  ${media};

  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  html,
  body {
    background-color: ${color.background};
    font-family: ${fonts.font};
    overflow-x: hidden;
  }

  body {
    position: relative;
    color: ${color.foreground};
    font-family: ${fonts.fontMedium};
    font-size: ${base.fontBase};
  }

  section {
    padding: 3em 0;
    display: inline-block;
    position: relative;
    clear: both;
    float: none;
    width: 100%;

    @media ${media.secondary} {
      padding: 2em 0;
    }
  }

  h1 {
    color: ${color.foregroundAlt};
    display: inline-block;
    font-family: ${fonts.title};
    font-size: 10em;
    line-height: 0;
    margin-bottom: -1.2em;
    text-transform: uppercase;

    @media ${media.primary} {
      font-size: 7em;
    }

    @media ${media.secondary} {
      font-size: 3em;
    }
  }

  h2 {
    display: inline-block;
    color: ${color.foreground};
    font-family: ${fonts.title};
    font-size: 3.65em;
    margin-bottom: 1.25rem;
    text-transform: uppercase;

    @media ${media.secondary} {
      font-size: 2.25em;
    }
  }

  h3 {
    color: ${color.foregroundAlt};
    margin-bottom: ${space.halfSpace};
    font-size: 4.25em;
    font-family: ${fonts.title};
    text-transform: uppercase;
  }

  h4 {
    color: ${color.foreground};
    font-size: 2em;
    font-family: ${fonts.title};
    margin-bottom: 2em;
    // text-transform: uppercase;

    @media ${media.secondary} {
      // font-size: 3=2em;
    }

    @media ${media.smallPhone} {
      // font-size: 2.5em;
    }
  }

  h5 {
    display: block;
    color: ${color.foreground};
    font-family: ${fonts.fontBold};
    font-size: 1.15em;
    letter-spacing: 0.15em;
    margin-bottom: ${space.space};
    text-transform: uppercase;

    @media ${media.secondary} {
      font-size: 2.25em;
    }
  }

  p {
    color: ${color.foreground};
    line-height: 110%;
    font-size: 1.25em;

    a {
      ${mixins.animate};
      color: ${color.foreground};
      text-decoration: underline;
      cursor: pointer;

      &:hover {
        color: ${color.backgroundTert};
      }
    }
  }

  a {
    ${mixins.animate};
    color: ${color.foreground};
    text-decoration: none;
    cursor: pointer;
    font-size: 1.25em;

    &:hover {
      color: ${color.backgroundTert};
    }
  }

  .wrap {
    ${mixins.wrap}
  }

  .swiper {
    overflow: visible !important;
  }

  .swiper-slide {
    width: 25em !important;
    height: 25em !important;

    @media ${media.secondary} {
      width: 15em !important;
      height: 15em !important;
    }
  }
`;

export default GlobalStyle;
