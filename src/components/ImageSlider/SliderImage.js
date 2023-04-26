import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SliderImageContainer = styled.img`
  // background-image: ${(props) => `url(${props.imageUrl})`};
  // background-size: cover;
  // background-position: center;
  border-radius: 1.65em;
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

const SliderImage = ({ data }) => <SliderImageContainer src={data.image} />;

SliderImage.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string.isRequired,
  }),
};

export default SliderImage;
