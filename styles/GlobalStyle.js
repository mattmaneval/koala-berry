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
    font-size: min(13vw,7em);
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
    color: ${color.foreground};
    margin-bottom: 1em;
    font-size: 3.65em;
    font-family: ${fonts.title};
    text-transform: uppercase;

    @media ${media.secondary} {
      font-size: 2.3em;
      margin-bottom: 0.85em;
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
    color: ${color.foreground};
    line-height: 1.5;
    font-family: ${fonts.fontBold};
    font-size: 1.15em;
    margin-bottom: 1em;

    &:last-of-type {
      // margin-bottom: 0;
    }

    @media ${media.primary} {
      margin-bottom: 0.5rem;
      font-size: 0.85rem;
    }

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

  .mini-wrap {
    ${mixins.miniWrap}
  }

  .no {
    &-padding-top {
      padding-top: 0;
    }

    &-padding-bottom {
      padding-bottom: 0;
    }
  }

  .align-center {
    text-align: center;
  }

  .title {
    color: transparent;
    font-family: ${fonts.fontBold};
    font-size: 3em;
    line-height: 1.15;
    margin-bottom: 0.2em;
    -webkit-text-stroke: 1.3px ${color.background};
  }

  .h1-alt {
    color: ${color.background};
    font-family: ${fonts.fontBold};
    font-size: 2.5em;
    line-height: 1.5;
    // margin-bottom: 0.65em;

    @media ${media.secondary} {
      // font-size: 1.25em;
    }

    span {
      font-family: ${fonts.title};
      color: ${color.foregroundAlt};
    }
  }

  .list {
    column-count: 3;

    @media ${media.primary} {
      column-count: 2;
    }

    @media ${media.secondary} {
      column-count: 1;
    }
  }

  .sparkle-background {
    background-image: url('/assets/images/sparkles-white.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  .mark {
    background-color: ${color.foregroundAlt};
    display: inline-block;
    height: 0.4em;
    width: 2.5em;
    margin-bottom: 4em;

    @media ${media.secondary} {
      margin-bottom: 2em;
    }
  }

  @keyframes gradientbanner {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
  }
`;

export default GlobalStyle;
