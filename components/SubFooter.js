import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Logo from './icons/Logo';
import media from '../styles/media';
import theme from '../styles/theme';

import mixins from '../styles/mixins';

const { color, fonts } = theme;

const SubFooterStyles = styled.footer`
  .copyright {
    font-size: 0.45em;
    letter-spacing: 0.1em;
    line-height: 1.5em;

    a {
      text-decoration: underline;
      color: ${color.foregroundDim};
      font-family: ${fonts.font};
      font-size: 1em;

      &:hover {
        color: ${color.foreground};
      }
    }
  }
`;


const year = new Date().getFullYear();

const SubFooter = () => (
  <SubFooterStyles>
    <div className="wrap">
      <div className="footer-bottom">
        <div className="copyright">
          Copyright &#169;
          {' '}
          {year}
          {' '}
          Koala Berry. All Rights Reserved. Site by
          {' '}
          <a rel="noreferrer" target="_blank" href="https://mattmaneval.com/">Matt Maneval</a>
        </div>
      </div>
    </div>
  </SubFooterStyles>
);

export default SubFooter;
