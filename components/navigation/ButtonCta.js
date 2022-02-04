import styled from 'styled-components';
import media from '../../styles/media';
import theme from '../../styles/theme';

const { color, fonts } = theme;

const ButtonCtaStyle = styled.a`
  display: flex;
  align-items: center;
  color: ${({ alt }) => (alt ? `${color.foregroundAlt}` : `${color.background}`)};
  font-family: ${fonts.fontBold};
  line-height: 0;
  border: 0.25em solid currentColor;
  display: inline-block;
  padding: 1em 2em 0.85em;

  &:hover {
    background-color: ${({ alt }) => (alt ? `${color.foregroundAlt}` : `${color.background}`)};
    color: ${({ alt }) => (alt ? `${color.background}` : `${color.foregroundAlt}`)};
    border: ${({ alt }) => (alt ? `0.25em solid ${color.foregroundAlt}` : `0.25em solid ${color.background}`)};
  }

  @media ${media.secondary} {
    font-size: 0.865em;
  }
`;

const ButtonCta = ({ctaText, ctaHref, alt}) => (
  <ButtonCtaStyle alt={alt} href={ctaHref}>
    {ctaText}
  </ButtonCtaStyle>
);

export default ButtonCta;
