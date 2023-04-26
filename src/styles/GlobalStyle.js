import { createGlobalStyle } from 'styled-components';
import Resets from './resets';
import Fonts from './fonts';
import mixins from './mixins';
import media from './media';
import theme from './theme';

const { base, space, color, font } = theme;

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
    font-family: ${font.font};
    overflow-x: hidden;
  }

  body {
    position: relative;
    color: ${color.foreground};
    font-family: ${font.fontMedium};
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
    font-family: ${font.title};
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
    font-family: ${font.title};
    font-size: 3.65em;
    margin-bottom: 1.25rem;
    text-transform: uppercase;

    @media ${media.secondary} {
      font-size: 2.25em;
    }
  }

  h3 {
    margin-bottom: 0.35em;
    font-size: 2.85em;
    font-family: ${font.bold};

    @media ${media.secondary} {
      font-size: 2.3em;
      margin-bottom: 0.85em;
    }
  }

  h4 {
    margin-bottom: 0.35em;
    font-size: 2.15em;
    font-family: ${font.bold};

    @media ${media.secondary} {
      font-size: 2.3em;
      margin-bottom: 0.85em;
    }
  }

  h5 {
    display: block;
    color: ${color.foreground};
    font-family: ${font.fontBold};
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
    font-family: ${font.font};
    font-size: 1.15em;
    margin-bottom: 1em;

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
    font-size: 1em;

    &:hover {
      color: ${color.callout};
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
    font-family: ${font.bold};
    font-size: 0.85em;
    line-height: 1;
    margin-bottom: 0.45em;
    text-transform: uppercase;

    &.alt {
      color: transparent;
      -webkit-text-stroke: 1.3px ${color.foreground};
    }
  }

  .small-title {
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: ${color.background};
    font-family: ${font.fontBold};
    font-size: 1em;
    margin-bottom: 1em;
  }

  .h1-alt {
    color: ${color.foregroundTert};
    display: inline-block;
    font-family: ${font.fontBold};
    font-size: 1.45em;
    line-height: 1.5;
    margin-bottom: 1em;

    @media ${media.secondary} {
      font-size: 1.25em;
    }

    span {
      color: ${color.background};
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
  
  .hide {
		display: none;
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

  .keen-slider {
		overflow: visible !important;
	}
`;

export default GlobalStyle;
