import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styles
import mixins from '../../styles/mixins';
import theme from '../../styles/theme';

const { color, border } = theme;

const StyledLinkExternal = styled.a`
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
      filled ? `${color.foregroundTert}` : `${color.callout}`};
    border: 2px solid ${color.foregroundTert};
`;

const LinkExternal = ({ text, dark, href, title, filled, target }) => (
  <StyledLinkExternal
    href={href}
    title={title}
    dark={dark}
    filled={filled}
    target={target}
  >
    {text}
  </StyledLinkExternal>
);

LinkExternal.propTypes = {
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  dark: PropTypes.bool,
  href: PropTypes.string.isRequired,
  filled: PropTypes.bool,
  target: PropTypes.bool,
};

export default LinkExternal;
