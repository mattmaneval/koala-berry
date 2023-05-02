import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
// import LinkInternal from '../LinkInternal/index';
import LinkExternal from '../LinkExternal/index';

// Styles
import mixins from '../../styles/mixins';
import theme from '../../styles/theme';
import media from '../../styles/media';

const { color, font } = theme;

const MobileMenuStyles = styled.div`
  width: 100%;
  backdrop-filter: blur(20px);
  opacity: ${({ menu }) => (menu ? '1' : '0')};
  display: ${({ menu }) => (menu ? 'block' : 'none')};
  transition: all 0.9s;
  padding: 12em 0;
  position: absolute;
  z-index: 2;
  overflow-x: hidden;
  text-align: center;
  top: 0;

  nav {
    margin-bottom: 1em;
  }

  a {
    display: block;
    width: 100%;
  }

  .cta {
    margin-bottom: 1em;
  }
`;

const StyledLink = styled(Link)`
	${mixins.animate}
	break-inside: avoid;
	color: ${color.foreground};
	font-family: ${font.bold};
	font-size: 1.15em;
	letter-spacing: 0.125em;
	padding: 1em 0;
	text-transform: uppercase;

	@media ${media.secondary} {
		display: block;
	}

	&:hover {
		color: ${color.callout};
	}
}`;

const MobileMenu = ({ menu }) => (
  <MobileMenuStyles menu={menu}>
    <div className="wrap">
      <nav className="mobile-nav">
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/flavors">Flavors</StyledLink>
        <StyledLink to="/toppings">Toppings</StyledLink>
        <StyledLink to="/benefits">Benefits</StyledLink>
        <StyledLink to="/about">About</StyledLink>
      </nav>
      <LinkExternal
        text="Phone"
        href="tel:419-725-5558"
        title="(419) 725-5558 to place an order."
        filled
      />
      {/* <LinkExternal
        text="Email"
        href="mailto:info@koalaberry.com"
        title="(419) 725-5558 to place an order."
        filled
      /> */}
    </div>
  </MobileMenuStyles>
);

MobileMenu.propTypes = {
  menu: PropTypes.bool.isRequired,
};

export default MobileMenu;
