import styled from 'styled-components';
import theme from '../../styles/theme';

const { color, fonts } = theme;

const GlobalHeaderStyle = styled.div`
  background-color: ${color.foregroundTert};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${color.foregroundAlt};
  font-family: ${fonts.fontBold};
  padding: 1.3em 0;
  line-height: 0;
  margin-bottom: 1em;
  font-size: 0.85em;
`;

const GlobalHeader = () => (
  <GlobalHeaderStyle>Open everyday noon to 10 pm</GlobalHeaderStyle>
);

export default GlobalHeader;
