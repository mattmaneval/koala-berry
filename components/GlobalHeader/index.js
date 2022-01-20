import styled from 'styled-components';
import theme from '../../styles/theme';

const { color, fonts } = theme;

const GlobalHeaderStyle = styled.div`
  background-color: ${color.callout};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${color.background};
  font-family: ${fonts.fontBold};
  padding: 1em;
  line-height: 0;
  margin-bottom: 1em;
  font-size: 0.85em;
`;

const GlobalHeader = () => (
  <GlobalHeaderStyle>Open everyday noon to 10 pm</GlobalHeaderStyle>
);

export default GlobalHeader;
