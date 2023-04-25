import styled from 'styled-components';

// Components
import Icon from '../Icon/index';

// Styles
import theme from '../../styles/theme';
import mixins from '../../styles/mixins';
import media from '../../styles/media';

const { color } = theme;

const SunfooterContainer = styled.div`
  font-size: 0.65em;
  padding: 3em 0;

  @media ${media.secondary} {
    font-size: 0.65em;
  }

  @media ${media.smallPhone} {
    font-size: 0.55em;
  }
`;

const StyledCopyright = styled.div`
  color: ${color.background};
  margin-bottom: 0.5em;
`;

const StyledSiteBy = styled.div`
  color: ${color.background};
  display: flex;
  align-items: center;

  a {
    ${mixins.animate}

    svg {
      margin-left: 0.65em;
      margin-right: 0;
      height: 0.65em;
      width: 3.15em;

      &,
      use {
        fill: ${color.background};
      }
    }

    &:hover {
      svg {
        &,
        use {
          fill: ${color.callout};
        }
      }
    }
  }
`;

const year = new Date().getFullYear();

function Subfooter() {
  return (
    <SunfooterContainer>
      <div className="wrap">
        <StyledCopyright>
          Copyright &#169; {year} Koala Berry. All Rights Reserved.
        </StyledCopyright>
        <StyledSiteBy>
          <div>
            <span>Site by</span>
          </div>
          <Icon type="mm-logo" href="https://mattmaneval.com/" />.
        </StyledSiteBy>
      </div>
    </SunfooterContainer>
  );
}

export default Subfooter;
