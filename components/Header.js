import { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Logo from './icons/Logo';
import Menu from './navigation/Menu';
import MenuButton from './navigation/MenuButton';
import MobileMenu from './navigation/MobileMenu';
import media from '../styles/media';
import theme from '../styles/theme';

const { color } = theme;

const HeaderStyle = styled.header`
  padding: 2em 0;


  position: absolute;
  width: 100%;
  z-index: 1;
  position: ${({ absolute }) => (absolute ? 'absolute' : 'relative')};

  .wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  svg {
    fill: ${({ dark }) => (dark ? color.foregroundAlt : color.background)};
    width: 6em;

    @media ${media.secondary} {
      width: 7em;
    }
  }

  a {
    color: ${({ dark }) => (dark ? color.foregroundAlt : color.background)};
  }
`;

function Header({ absolute, dark }) {
  const [menu, active] = useState(false);

  const handleClick = () => (menu ? active(false) : active(true));

  return (
    <HeaderStyle absolute={absolute} dark={dark} menu={menu}>
      <div className="wrap">
        <Link href="/">
          <a><Logo /></a>
        </Link>
        <Menu />
        <MenuButton menu={menu} onClick={handleClick} />
      </div>
      <MobileMenu menu={menu} />
    </HeaderStyle>
  );
}

export default Header;
