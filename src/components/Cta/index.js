import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styles
import mixins from '../../styles/mixins';
import theme from '../../styles/theme';

const { border, color } = theme;

const StyledCta = styled((props) => <Link {...props} />)`
  ${mixins.animate}
	${mixins.cta}
  border-radius: ${border.radius};
  color: ${({ filled }) =>
    filled ? `${color.background}` : `${color.foreground}`};
  background-color: ${({ filled }) => (filled ? `${color.callout}` : `none`)};
  border: ${({ filled }) =>
    filled ? `2px solid ${color.callout}` : `2px solid ${color.foreground}`};
  display: inline-block;
  padding: 0.75em 1.5em 0.6em 1.5em;

  &:hover {
    color: ${({ filled }) =>
      filled ? `${color.foreground}` : `${color.foreground}`};
    background-color: ${({ filled }) =>
      filled ? `${color.callout}` : `${color.callout}`};
    border: 2px solid ${color.callout};
`;

const Cta = ({ text, href, title, filled }) => (
  <StyledCta className="cta" to={href} title={title} filled={filled}>
    {text}
  </StyledCta>
);

Cta.propTypes = {
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  filled: PropTypes.bool,
};

export default Cta;
