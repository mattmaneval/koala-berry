import styled from 'styled-components';
// import PropTypes from 'prop-types';
import Phone from '../icons/Phone';
import media from '../../styles/media';
import theme from '../../styles/theme';

const { color, space, fonts } = theme;

const CallCtaStyle = styled.a`
  display: flex;
  align-items: center;
  color: ${color.callout};
  /* font-size: 1.85em; */
  font-family: ${fonts.fontBold};
  /* font-size: 2.5em; */
  line-height: 1.5;

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

const CallCta = ({ctaText}) => (
  <CallCtaStyle href="tel:419-237-3737">
    <Phone />
    <span>{ctaText}</span>
  </CallCtaStyle>
);

export default CallCta;
