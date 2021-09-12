import styled from 'styled-components';
import Logo from './icons/Logo';
import media from '../styles/media';
import theme from '../styles/theme';

const { color } = theme;

const HeaderStyle = styled.header`
  padding: 2em 0;

  svg {
    fill: ${color.foregroundAlt};
    width: 12em;

    @media ${media.secondary} {
      width: 7em;
    }
  }
`;

function Header() {
  return (
    <HeaderStyle>
      <div className="wrap">
        <Logo />
      </div>
    </HeaderStyle>
  );
}

export default Header;
