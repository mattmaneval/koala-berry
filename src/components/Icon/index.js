import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styles
import theme from '../../styles/theme';

const { color, space } = theme;

const IconLink = styled.a`
  cursor: pointer;
  display: inline-block;
  position: relative;
`;

const IconContainer = styled.svg`
  margin-right: ${space.halfSpace};
  height: 1.35em;
  width: 1.35em;

  &,
  use {
    fill: ${color.background};
  }
`;

function Icon({ type, href }) {
  return (
    <IconLink target="_blank" href={href}>
      <IconContainer>
        <use xlinkHref={`#${type}`} />
      </IconContainer>
    </IconLink>
  );
}

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default Icon;
