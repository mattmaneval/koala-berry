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
    padding: 6em 0;
    display: inline-block;
    position: relative;
    clear: both;
    float: none;
    width: 100%;

    @media ${media.secondary} {
      padding: 4em 0;
    }
  }

  h1 {
    color: ${color.foregroundAlt};
    display: inline-block;
    font-family: ${fonts.title};
    font-size: min(13vw,5em);
    line-height: 1.1em;
    margin-bottom: 0.3em;
    text-transform: uppercase;

    @media ${media.primary} {
      font-size: 4.5em;
    }

    @media ${media.secondary} {
      font-size: 3.5em;
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
    color: ${color.foregroundTert};
    margin-bottom: ${space.halfSpace};
    font-size: 4.25em;
    font-family: ${fonts.title};
    text-transform: uppercase;

    @media ${media.secondary} {
      font-size: 2em;
    }
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
    font-size: min(1em,.75rem);
    letter-spacing: 0.15em;
    margin-bottom: ${space.space};
    // text-transform: uppercase;

    @media ${media.secondary} {
      font-size: 0.85em;
    }
  }

  p {
    color: ${color.callout};
    line-height: 1.5;
    font-family: ${fonts.fontBold};
    font-size: 1.45em;
    margin-bottom: 1em;

    a {
      ${mixins.animate};
      color: ${color.foreground};
      text-decoration: underline;
      cursor: pointer;

      &:hover {
        color: ${color.backgroundTert};
      }
    }

    @media ${media.secondary} {
      font-size: 1em;
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

  .inner-wrap {
    ${mixins.innerWrap}
  }

  .h1-alt {
    color: ${color.callout};
    font-family: ${fonts.fontBold};
    font-size: 2.5em;
    line-height: 1.5;

    @media ${media.secondary} {
      font-size: 1.25em;
    }

    span {
      font-family: ${fonts.title};
      color: ${color.foregroundAlt};
    }
  }
`;

export default GlobalStyle;
