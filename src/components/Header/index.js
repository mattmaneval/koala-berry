import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import GlobalHeader from '../GlobalHeader/index';
import Logo from '../Logo/index';
import MenuButton from '../MenuButton/index';
import MobileMenu from '../MobileMenu/index';

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

  svg {
    fill: ${({ dark }) =>
      dark ? `${color.foregroundAlt}` : `${color.background}`};
    padding: 1em 0;
    width: 7em;

    @media ${media.secondary} {
      width: 4.5em;
    }
  }

  a {
    color: ${({ dark }) =>
      dark ? `${color.foregroundAlt}` : `${color.background}`};
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
  font-size: 1.2em;
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

const StyledHeaderWrap = styled.div`
  ${mixins.wrap}
  align-items: center;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

function Header({ dark }) {
  const [menu, active] = useState(false);

  const handleClick = () => (menu ? active(false) : active(true));

  return (
    <HeaderStyle menu={menu} dark={dark}>
      <GlobalHeader />
      <StyledHeaderWrap>
        <Link to="/">
          <Logo />
        </Link>
        <NavContainer>
          <StyledLink to="/flavors">Flavors</StyledLink>
          <StyledLink to="/toppings">Toppings</StyledLink>
          <StyledLink to="/benefits">Benefits</StyledLink>
          <StyledLink to="/about">About</StyledLink>
        </NavContainer>
        <MenuButton menu={menu} onClick={handleClick} />
      </StyledHeaderWrap>
      <MobileMenu menu={menu} />
    </HeaderStyle>
  );
}

Header.propTypes = {
  dark: PropTypes.bool,
};

export default Header;
