import { css } from 'styled-components';

// Knewave
import knewaveRegularWoff from '../assets/fonts/knewave-webfont.woff';
import knewaveRegularWoff2 from '../assets/fonts/knewave-webfont.woff2';

// Poppins
import poppinsBlackWoff from '../assets/fonts/poppins-black-webfont.woff';
import poppinsBlackWoff2 from '../assets/fonts/poppins-black-webfont.woff2';
import poppinsBoldWoff from '../assets/fonts/poppins-bold-webfont.woff';
import poppinsBoldWoff2 from '../assets/fonts/poppins-bold-webfont.woff2';
import poppinsMediumWoff from '../assets/fonts/poppins-medium-webfont.woff';
import poppinsMediumWoff2 from '../assets/fonts/poppins-medium-webfont.woff2';
import poppinsRegularWoff from '../assets/fonts/poppins-regular-webfont.woff';
import poppinsRegularWoff2 from '../assets/fonts/poppins-regular-webfont.woff2';

const Fonts = css`
  @font-face {
    font-family: 'knewaveregular';
    src: url('${knewaveRegularWoff}') format('woff2'),
      url('${knewaveRegularWoff2}') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'poppinsblack';
    src: url('${poppinsBlackWoff2}') format('woff2'),
      url('${poppinsBlackWoff}') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'poppinsbold';
    src: url('${poppinsBoldWoff2}') format('woff2'),
      url('${poppinsBoldWoff}') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'poppinsmedium';
    src: url('${poppinsMediumWoff2}') format('woff2'),
      url('${poppinsMediumWoff}') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'poppinsregular';
    src: url('${poppinsRegularWoff2}') format('woff2'),
      url('${poppinsRegularWoff}') format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;

export default Fonts;
