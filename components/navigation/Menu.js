import styled from 'styled-components';
import Link from 'next/link';
import mixins from '../../styles/mixins';
import media from '../../styles/media';
import theme from '../../styles/theme';

const { color, fonts, space } = theme;

const MenuStyles = styled.section`
  background-color: ${color.foregroundTert};

  .nav-heading {
    font-family: ${fonts.heading};
    color: ${color.background};
    display: flex;
    align-items: center;
    margin-bottom: 2em;
    text-transform: uppercase;

    span {
      margin-right: 1em;
    }

    &:after {
      content: "";
      height: 1px;
      flex: 1 1 0%;
      background-color: currentcolor;
    }
  }

  .mobile-nav {
    display: inline-block;
    margin-bottom: ${space.halfSpace};

    a {
      color: ${color.background};
      display: block;
      padding-bottom: 1rem;
      font-size: 5.5em;
      font-family: ${fonts.heading};
      /* -webkit-text-stroke: 2px ${color.backgroundTert}; */

      @media ${media.secondary} {
        font-size: 2.5em;
      }

      &:hover {
        ${mixins.animate}
        color: ${color.foreground};
      }
    }
  }

  .nav-border {
    border-bottom: 1px solid ${color.background};
  }
`;

const Menu = () => (
  <MenuStyles>
    <div className="wrap">
      <div className="nav-heading">
        <span>Online Menu</span>
      </div>
      <nav className="mobile-nav">
        <Link href="/pizza">
          <a>Pizza</a>
        </Link>
        <Link href="/subs">
          <a>Subs</a>
        </Link>
        <Link href="/wings-and-things">
          <a>Wings</a>
        </Link>
        <Link href="/burgers">
          <a>Burgers</a>
        </Link>
        <Link href="/family-combos">
          <a>Family Combos</a>
        </Link>
        <Link href="/sides">
          <a>Sides</a>
        </Link>
        <Link href="/pasta">
          <a>Pasta</a>
        </Link>
        <Link href="/salads">
          <a>Salads</a>
        </Link>
        <Link href="/ice-cream">
          <a>Ice Cream</a>
        </Link>
        <Link href="/drinks">
          <a>Drinks</a>
        </Link>
      </nav>
      <div className="nav-border" />
    </div>
  </MenuStyles>
);

export default Menu;
