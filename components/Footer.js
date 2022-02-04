import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

// Components
import PrimaryCta from './navigation/PrimaryCta';
import Logo from './icons/Logo';
import SubFooter from './SubFooter';

// Styles
import media from '../styles/media';
import theme from '../styles/theme';

import mixins from '../styles/mixins';

const { color, fonts } = theme;

const FooterStyles = styled.footer`
  padding: 6em 0;

  .wrap {
    align-items: flex-start;
    display: flex;
    justify-content: space-between;

    @media ${media.secondary} {
      flex-direction: column;
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

      a {
        margin-bottom: 1em;
        display: block;
        font-size: 1em;
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
          <a href="tel:419-725-5558">419-725-5558</a>
          <div className="footer-hours">
            <div className="footer-hours-row">
              <span>Open Everyday Noon to 10 pm</span>
            </div>
          </div>
        </div>
        </div>

        <div>

        <PrimaryCta
          ctaText="contact"
          ctaHref="tel:419-725-5558"
        />
        </div>



    </div>
    <SubFooter />
  </FooterStyles>
);

export default Footer;
