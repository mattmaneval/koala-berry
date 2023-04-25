import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import LinkInternal from '../LinkInternal';
// import Cta from '../Cta/index';
// import Cta from '../Cta/index';

// Styles
import media from '../../styles/media';
import mixins from '../../styles/mixins';
import theme from '../../styles/theme';

const { border } = theme;

const AboutCalloutContainer = styled.div`
  border: 1px solid ${border.color};
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  min-height: 34em;
  overflow: hidden;

  @media ${media.secondary} {
    min-height: 0;
  }
`;

const AboutCalloutContent = styled.div`
  padding: 3em;

  @media ${media.secondary} {
    padding: 2em;
  }

  @media ${media.smallPhone} {
    padding: 1.65em;
  }
`;

const GridImage = styled.div`
  ${mixins.flexCenter}
  background-image: ${(props) => `url(${props.image})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media ${media.secondary} {
    padding: 6em 0;
  }
`;

function AboutCallout({ heading, copy, image }) {
  return (
    <AboutCalloutContainer>
      <GridImage image={image} />
      <AboutCalloutContent>
        <h4>{heading}</h4>
        <p>{copy}</p>
        <LinkInternal
          text="Learn More"
          href="/about"
          title="Learn more about private events at Poco Piatti."
        />
      </AboutCalloutContent>
    </AboutCalloutContainer>
  );
}

AboutCallout.propTypes = {
  heading: PropTypes.string.isRequired,
  copy: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default AboutCallout;
