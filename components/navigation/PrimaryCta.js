import styled from 'styled-components';
import media from '../../styles/media';
import theme from '../../styles/theme';

const { color, fonts } = theme;

const PrimaryCtaStyles = styled.a`
  background-color: ${color.callout};
  font-family: ${fonts.fontBold};
  color: ${color.background};
  line-height: 1;
  padding: 0.75em 1.5em 0.6em 1.5em;
  width: fit-content;
  cursor: pointer;
  line-height: 1;

  @media ${media.secondary} {
    font-size: 0.95em;
    display: ${({ hideOnMobile }) => (hideOnMobile ? `none` : `inline-block`)};
  }

  &:hover {
    background-color: ${color.background};
    color: ${color.foreground};
  }
`;

const PrimaryCta = ({ ctaText, hideOnMobile}) => (
  <PrimaryCtaStyles hideOnMobile={hideOnMobile}>{ctaText}</PrimaryCtaStyles>
);

export default PrimaryCta;
