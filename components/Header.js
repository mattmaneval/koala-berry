import { useState } from 'react';
import styled from 'styled-components';
import Logo from './icons/Logo';
import MenuButton from './navigation/MenuButton';
import MobileMenu from './navigation/MobileMenu';
import media from '../styles/media';
import theme from '../styles/theme';

const { color } = theme;

const HeaderStyle = styled.header`
  padding: 2em 0;

  .wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  svg {
    fill: ${color.foregroundAlt};
    width: 12em;

    @media ${media.secondary} {
      width: 7em;
    }
  }
`;

function Header() {
  const [menu, active] = useState(false);

  const handleClick = () => (menu ? active(false) : active(true));

  return (
    <HeaderStyle menu={menu}>
      <div className="wrap">
        <Logo />
        <MenuButton menu={menu} onClick={handleClick} />
      </div>
      <MobileMenu menu={menu} />
    </HeaderStyle>
  );
}

export default Header;
