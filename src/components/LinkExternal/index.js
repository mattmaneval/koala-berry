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
  color: ${({ dark }) =>
    dark ? `${color.background}` : `${color.foreground}`};
  background-color: ${({ filled }) => (filled ? `${color.callout}` : `none`)};
  border: ${({ filled }) =>
    filled ? `2px solid ${color.callout}` : `2px solid ${color.callout}`};
    padding: 0.7em;
    border-radius: ${border.radius};

  &:hover {
    color: ${({ filled }) =>
      filled ? `${color.foreground}` : `${color.foreground}`};
    background-color: ${({ filled }) =>
      filled ? `${color.backgroundAlt}` : `${color.callout}`};
    border: 2px solid ${color.backgroundAlt};
`;

const LinkExternal = ({ text, dark, href, title, filled, target }) => (
  <StyledLinkExternal
    className="cta"
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
