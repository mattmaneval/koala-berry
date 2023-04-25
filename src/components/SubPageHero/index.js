import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components

// Styles
import mixins from '../../styles/mixins';
import theme from '../../styles/theme';

const { color } = theme;

const SubPageHeroImage = styled.div`
  // background-image: ${(props) => `url(${props.imageUrl})`};
  // background-position: center;
  // background-repeat: no-repeat;
  // background-size: cover;
  background-color: ${color.foregroundAlt};
  // filter: brightness(0.65);
  // height: 100%;
  // width: 100%;
  // position: absolute;
  // top: 0;
  // right: 0;
`;

const SubPageHeroStyle = styled.div`
  position: relative;
  padding: 14em 0 3em 0;

  .inner-wrap {
    z-index: 1;
    text-align: center;
  }
`;

const SubpageHeroCopy = styled.div`
  ${mixins.innerWrap}
  padding: 3em 0;

  .title {
    margin-bottom: 2em;
  }

  p.large {
    color: ${color.foreground};
    text-align: left;
    margin-bottom: 0;
  }
`;

const SubPageHero = ({ h1Text, imageUrl, light, title, copy }) => (
  <>
    <SubPageHeroStyle light={light}>
      <SubPageHeroImage imageUrl={imageUrl} />
      <div className="inner-wrap">
        <h1>{h1Text}</h1>
      </div>
    </SubPageHeroStyle>
    {copy ? (
      <SubpageHeroCopy>
        <div className="title">{title}</div>
        <p className="large drop-cap">{copy}</p>
      </SubpageHeroCopy>
    ) : null}
  </>
);

SubPageHero.propTypes = {
  h1Text: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  light: PropTypes.bool,
  title: PropTypes.string,
  copy: PropTypes.string,
};

export default SubPageHero;
