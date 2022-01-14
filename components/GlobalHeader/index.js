import styled from 'styled-components';
// import PropTypes from 'prop-types';
import Phone from '../icons/Phone';
import media from '../../styles/media';
import theme from '../../styles/theme';

const { color, space, fonts } = theme;

const GlobalHeaderStyle = styled.a`
  background-color: ${color.callout};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${color.callout};
  font-family: ${fonts.fontBold};
  padding: 0.5em;
  line-height: 0;
  margin-bottom: 1em;


  @media ${media.secondary} {
    font-size: 1.25em;
  }

  @media ${media.smallPhone} {
    font-size: 1em;
  }

  svg {
    width: 1.15em;
    height: 1.15em;
    fill: ${color.foregroundTert};
    margin-right: ${space.quarterSpace};
  }
`;

const GlobalHeader = () => (
  <GlobalHeaderStyle>
    <div>Open everyday noon to 10 pm</div>
  </GlobalHeaderStyle>
);

export default GlobalHeader;
