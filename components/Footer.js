import React from 'react';
import styled from 'styled-components';
import Logo from './icons/Logo';
import CallCta from './navigation/CallCta';
import media from '../styles/media';
import theme from '../styles/theme';

const { color, fonts } = theme;

const FooterStyles = styled.footer`
  padding: 6em 0;

  svg {
    fill: ${color.foregroundAlt};
    width: 12em;

    @media ${media.secondary} {
      width: 7em;
    }
  }

  .footer {
    &-hours,
    &-address,
    &-contact {
      font-family: ${fonts.fontAlt};
      span {
        line-height: 1.5em;
      }
    }

    &-hours,
    &-address  {
      margin: 0 3em 0 0;

      @media ${media.secondary} {
        margin: 0 3em 2em 0;
      }
    }

    &-hours {
      min-width: 13em;
    }

    &-hours-row {
      display: flex;
      justify-content: space-between;
    }

    &-address {
      span {
        display: block;
      }
    }

    &-contact {
      display: flex;
      font-size: 1.25em;
      margin-bottom: 4em;

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

const year = new Date().getFullYear();

const Footer = () => (
  <FooterStyles>
    <div className="wrap">
      <div className="h1-alt">Koala Berry</div>
      <div className="footer-contact">
        <div className="footer-hours">
          <div className="footer-hours-row">
            <span>Open Everyday Noon to 10 pm</span>
          </div>
          <div className="footer-hours-row">

          </div>
        </div>
        <div className="footer-address">
          <span>6710 Central Ave</span>
          <span>Toledo, OH</span>
        </div>
        <CallCta ctaText="419-237-3737" />
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
  </FooterStyles>
);

export default Footer;
