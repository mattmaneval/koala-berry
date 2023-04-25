import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Components
import Logo from '../Logo/index';
import Icon from '../Icon/index';
import Subfooter from '../Subfooter/index';

// Styles
import theme from '../../styles/theme';
import mixins from '../../styles/mixins';
import media from '../../styles/media';

const { color, font } = theme;

const FooterStyles = styled.footer`
  background-color: ${color.foregroundAlt};
  padding: 6em 0 0 0;

  .logo {
    margin-bottom: 3em;
    width: 12em;

    @media ${media.secondary} {
      width: 8em;
    }
  }

  .footer {
    &-content {
      color: ${color.background};
      font-family: ${font.font};
      font-size: 0.9em;
      margin-bottom: 2em;

      div {
        margin-bottom: 3em;
      }

      span {
        display: block;
        margin-bottom: 0.5em;

        a {
          ${mixins.animate}
          font-size: 1em;
          color: ${color.foregroundTert};
          text-decoration: underline;

          &:hover {
            color: ${color.background};
          }
        }
      }
    }
  }
`;

const MenuStyle = styled.nav`
  display: flex;
  flex-direction: column;
  font-family: ${font.bold};
  margin-bottom: 2em;
`;

const MenuLinkStyle = styled(Link)`
  ${mixins.animate}
  color: ${color.background};
  box-sizing: border-box;
  display: inline-block;
  line-height: 0;
  padding: 1em 0;
  border-bottom-width: calc(100% - 2em);

  &:hover {
    border-color: currentColor;
    color: ${color.backgroundAlt};
    transform: translateX(0.25em);
  }
`;

const SocialsContainer = styled.div`
  margin-bottom: 4em;
`;

const Footer = () => (
  <FooterStyles>
    <div className="wrap">
      <Logo />
      <MenuStyle>
        <MenuLinkStyle to="/flavors">flavors</MenuLinkStyle>
        <MenuLinkStyle to="/toppings">toppings</MenuLinkStyle>
        <MenuLinkStyle to="/benefits">benefits</MenuLinkStyle>
        <MenuLinkStyle to="/about">about</MenuLinkStyle>
      </MenuStyle>
      <div className="footer-content">
        <div>
          <span>6710 Central Ave</span>
          <span>Toledo, OH</span>
          <span>
            <a href="tel:419-725-5558">419-725-5558</a>
          </span>
        </div>
        <div>Open Everyday Noon to 10 pm</div>
      </div>
      <SocialsContainer>
        <Icon type="facebook" href="https://www.facebook.com/koalaberry/" />
        {/* <Icon
          type="instagram"
          href="https://www.instagram.com/pocopiatti_pb/?hl=en"
        /> */}
      </SocialsContainer>
    </div>
    <Subfooter />
  </FooterStyles>
);

export default Footer;
