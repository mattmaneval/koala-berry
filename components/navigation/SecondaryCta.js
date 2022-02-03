import styled from 'styled-components';
import media from '../../styles/media';
import theme from '../../styles/theme';

const { color, fonts } = theme;

const SecondaryCtaStyles = styled.a`
  border-bottom: 3px solid ${color.foregroundAlt};
  font-size: 0.85rem;
  color: ${color.foreground};
  letter-spacing: 0.05rem;
  line-height: 0;
  padding: 0.5rem 0 0.5rem;
  text-transform: uppercase;
  width: fit-content;
  cursor: pointer;
  line-height: 1.6;
  display: ${({ display }) => (display || 'inline-block')};
  margin-bottom: 0;

  @media ${media.secondary} {
    font-size: 0.75rem;
    color: ${color.foreground};
  }

  &:hover {

  }
`;

const SecondaryCta = ({ctaText, display}) => (
  <SecondaryCtaStyles
    display={display}
  >
    {ctaText}
  </SecondaryCtaStyles>
);

export default SecondaryCta;
