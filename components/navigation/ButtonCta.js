import styled from 'styled-components';
// import PropTypes from 'prop-types';
import media from '../../styles/media';
import theme from '../../styles/theme';

const { color, space, fonts } = theme;

const ButtonCtaStyle = styled.a`
  display: flex;
  align-items: center;
  color: ${color.callout};
  font-family: ${fonts.fontBold};
  line-height: 0;
  border: 0.25em solid currentColor;
  display: inline-block;
  padding: 1em 2em 0.85em;


  @media ${media.secondary} {
    font-size: 1.25em;
  }

  @media ${media.smallPhone} {
    font-size: 1em;
  }
`;

const ButtonCta = ({ctaText, ctaHref}) => (
  <ButtonCtaStyle href={ctaHref}>
    {ctaText}
  </ButtonCtaStyle>
);

export default ButtonCta;
