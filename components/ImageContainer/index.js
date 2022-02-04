import React from 'react';
import styled from 'styled-components';

const ImageContainerStyles = styled.div`
  background-image: url('${({ image }) => (image)}');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 0;
  padding-top: 25%;
  width: 100%;
`;

const ImageContainer = ({ image }) => (
  <ImageContainerStyles className="image-container" image={image} />
);

export default ImageContainer;
