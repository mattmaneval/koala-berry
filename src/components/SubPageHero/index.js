import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components

// Styles
import mixins from '../../styles/mixins';
import media from '../../styles/media';
import theme from '../../styles/theme';

// Images
import PinkSpoon from '../../assets/images/pink-spoon.webp';

const { color } = theme;

const SubPageHeroStyle = styled.div`
  background-color: ${color.foregroundAlt};
  position: relative;
  padding: 14em 0 3em 0;

  .inner-wrap {
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

const HeroImage = styled.div`
  background-image: url('${PinkSpoon}');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 0;
  // margin-bottom: -7em;
  padding-top: 10%;
  width: 100%;

  @media ${media.secondary} {
    padding-top: 15%;
  }
`;

const SubPageHero = ({ h1Text, imageUrl, light, title, copy }) => (
  <>
    <SubPageHeroStyle light={light}>
      <div className="inner-wrap">
        <h1>{h1Text}</h1>
        <HeroImage />
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
