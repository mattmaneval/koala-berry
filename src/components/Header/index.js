import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Components
import GlobalHeader from '../GlobalHeader/index';
import Logo from '../Logo/index';
// import LinkInternal from '../LinkInternal/index';
import MenuButton from '../MenuButton/index';
// import MobileMenu from '../MobileMenu/index';

// Styles
import mixins from '../../styles/mixins';
import theme from '../../styles/theme';
import media from '../../styles/media';

const { color, font } = theme;

const HeaderStyle = styled.header`
  padding: 0 0 2em 0;
  position: absolute;
  width: 100%;
  z-index: 1;
  position: absolute;

  .wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  svg {
    fill: ${color.background};
    padding: 1em 0;
    width: 7em;

    @media ${media.secondary} {
      width: 4.5em;
    }
  }

  a {
    color: ${color.background};
  }
`;

const NavContainer = styled.nav`
  @media ${media.primary} {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  ${mixins.animate}
  display: inline-block;
  font-family: ${font.bold};
  line-height: 0;
  padding: 1em;
  border-bottom: 4.5px solid transparent;
  border-bottom-width: calc(100% - 2em);
  text-transform: lowercase;

  &:hover {
    border-color: currentColor;
    color: ${color.foregroundTert};
  }
`;

function Header() {
  const [menu, active] = useState(false);

  const handleClick = () => (menu ? active(false) : active(true));

  return (
    <HeaderStyle menu={menu}>
      <GlobalHeader />
      <div className="wrap">
        <Link to="/">
          <Logo />
        </Link>
        <NavContainer>
          <StyledLink to="/flavors">Flavors</StyledLink>
          <StyledLink to="/toppings">Toppings</StyledLink>
          <StyledLink to="/benefits">Benefits</StyledLink>
          <StyledLink to="/about">About</StyledLink>
        </NavContainer>
        {/* <PrimaryCta
          hideOnMobile
          ctaText="contact"
          ctaHref="tel:419-725-5558"
        /> */}
        <MenuButton menu={menu} onClick={handleClick} />
      </div>
      {/* <MobileMenu menu={menu} /> */}
    </HeaderStyle>
  );
}

export default Header;
