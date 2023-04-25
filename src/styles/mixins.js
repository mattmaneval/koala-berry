import { css } from 'styled-components';
import media from './media';
import theme from './theme';

const { color, responsive, grid } = theme;

const mixins = {
  // Wrap
  wrap: css`
    display: block;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    max-width: 88rem;
    width: ${responsive.wrap};

    @media ${media.secondary} {
      width: ${responsive.wrapMobile};
    }
  `,

  // Inner Wrap
  innerWrap: css`
    display: block;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    max-width: 70rem;
    width: ${responsive.wrap};

    @media ${media.secondary} {
      width: ${responsive.wrapMobile};
    }
  `,

  // Inner Wrap
  miniWrap: css`
    display: block;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    max-width: 52rem;
    width: ${responsive.wrap};

    @media ${media.secondary} {
      width: ${responsive.wrapMobile};
    }
  `,

  // Grid
  grid: css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${grid.gap};

    @media ${media.secondary} {
      grid-template-columns: repeat(1, 1fr);
      grid-gap: ${grid.gapMobile};
    }
  `,

  // Flex
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  // Section
  section: css`
    padding: 6em 0;
    display: inline-block;
    position: relative;
    clear: both;
    float: none;
    width: 100%;

    @media ${media.secondary} {
      /* padding: 3em 0; */
    }
  `,

  // Box Shadow
  boxShadow: css`
    box-shadow: 1em 1em 4em -2em ${color.foreground};
  `,

  // Animate
  animate: css`
    transition: 0.2s all ease-in-out;
  `,
};

export default mixins;
