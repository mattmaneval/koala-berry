import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'next/link';
import PrimaryCta from './PrimaryCta';
import theme from '../../styles/theme';

const { color, fonts, space } = theme;

const MobileMenuStyle = styled.div`
  width: 100vw;
  background-color: ${color.background};
  background-image: url('/assets/images/sparkles-white.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  transform: ${({ menu }) => (menu ? 'translateX(0)' : 'translateX(100vw)')};
  opacity: ${({ menu }) => (menu ? '1' : '0')};
  transition: all 0.9s;
  padding-right: 2em;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  overflow-x: hidden;
  font-family: ${fonts.title};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  nav {
    display: inline-block;
    margin-bottom: ${space.halfSpace};

    a {
      box-sizing: border-box;
      display: block;
      font-size: 1.875em;
      line-height: 0;
      padding: 1em 0 1em 0;
      color: ${color.foreground};
      text-align: right;
    }
  }
`;

const MobileMenu = ({ menu }) => (
  <MobileMenuStyle menu={menu}>
    <nav>
      <Link href="/">
        <a>home</a>
      </Link>
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
    </nav>
    <PrimaryCta ctaText="contact" ctaHref="tel:419-725-5558" />
  </MobileMenuStyle>
);

MobileMenu.propTypes = {
  menu: PropTypes.bool.isRequired,
};

export default MobileMenu;
