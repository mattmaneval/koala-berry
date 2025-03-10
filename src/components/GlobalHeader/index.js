import styled from 'styled-components';
import theme from '../../styles/theme';

const { color, font } = theme;

const GlobalHeaderStyle = styled.div`
  background-color: ${color.foregroundTert};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${color.foregroundAlt};
  font-family: ${font.bold};
  padding: 1.5em 0;
  line-height: 0;
  margin-bottom: 1em;
  font-size: 0.85em;
  position: relative;
  z-index: 10;
`;

const GlobalHeader = () => (
  <GlobalHeaderStyle>Open Mon - Fri 3-10, Sat & Sun 12-10</GlobalHeaderStyle>
);

export default GlobalHeader;
