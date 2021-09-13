import styled from 'styled-components';
import Link from 'next/link';
import mixins from '../../styles/mixins';
import media from '../../styles/media';
import theme from '../../styles/theme';

const { color, fonts } = theme;

const MenuStyle = styled.nav`
  font-family: ${fonts.fontBold};
  transform: translateX(1.3em);

  @media ${media.primary} {
    display: none;
  }

  a {
    ${mixins.animate}
    box-sizing: border-box;
    display: inline-block;
    line-height: 0;
    padding: 1em;
    color: ${color.foregroundAlt};
    border-bottom: 4.5px solid transparent;
    border-bottom-width: calc(100% - 2em);

    &:hover {
      border-color: currentColor;
      color: ${color.callout};
    }
  }
`;

const Menu = () => (
  <MenuStyle>
    <Link href="/">
      <a>flavors</a>
    </Link>
    <Link href="/">
      <a>toppings</a>
    </Link>
    <Link href="/">
      <a>benefits</a>
    </Link>
    <Link href="/">
      <a>about</a>
    </Link>
  </MenuStyle>
);

export default Menu;
