import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Logo from './icons/Logo';
import media from '../styles/media';
import theme from '../styles/theme';

import mixins from '../styles/mixins';

const { color, fonts } = theme;

const FooterStyles = styled.footer`
  background-image: url('/assets/images/sparkles-white.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 6em 0;

  .wrap {
    align-items: flex-start;
    display: flex;
    justify-content: space-between;

    @media ${media.secondary} {
      flex-direction: column-reverse;
    }
  }

  svg {
    fill: ${color.foregroundAlt};
    width: 10em;
    margin-bottom: 2em;

    @media ${media.secondary} {
      width: 7em;
      margin-bottom: 2em;
    }
  }

  .footer {
    &-hours,
    &-address,
    &-contact {
      color: ${color.foregroundAlt};
      font-family: ${fonts.fontBold};
      span {
        line-height: 1.5em;
      }
    }

    &-hours,
    &-address  {
      margin-bottom: 1.65em;
    }

    &-hours {
      min-width: 13em;
    }



    &-address {
      span {
        display: block;
      }
    }

    &-contact {
      font-size: 1.25em;
      margin-bottom: 2em;

      @media ${media.secondary} {
        flex-direction: column;
      }
    }

    &-bottom {
      align-items: center;
      display: flex;
      font-size: 1.3em;
    }
  }

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

const MenuStyle = styled.nav`
  font-family: ${fonts.fontBold};
  margin-bottom: 2em;

  a {
    ${mixins.animate}
    box-sizing: border-box;
    display: block;
    line-height: 0;
    padding: 1em 0;
    border-bottom-width: calc(100% - 2em);
    color: ${color.callout};

    &:hover {
      border-color: currentColor;
      color: ${color.callout};
    }
  }
`;

const year = new Date().getFullYear();

const Footer = () => (
  <FooterStyles>
    <div className="wrap">
      <div>
        <Logo />
        <MenuStyle>
          <Link href="/flavors">
            <a>flavors</a>
          </Link>
          <Link href="/toppings">
            <a>toppings</a>
          </Link>
          <Link href="/benefits">
            <a>benefits</a>
          </Link>
          <Link href="/about">
            <a>about</a>
          </Link>
        </MenuStyle>
        <div className="footer-contact">

          <div className="footer-address">
            <span>6710 Central Ave</span>
            <span>Toledo, OH</span>
          </div>
          <div className="footer-hours">
            <div className="footer-hours-row">
              <span>Open Everyday Noon to 10 pm</span>
            </div>
          </div>
        </div>

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

    </div>
  </FooterStyles>
);

export default Footer;
