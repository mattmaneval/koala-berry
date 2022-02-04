import React from 'react';
import styled from 'styled-components';

const DiagramStyles = styled.div`
  background-image: url('/assets/images/sparkles-white.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  .mini-wrap {
    display: flex;
    justify-content: center;
  }
`;

const DiagramImage = styled.div`
  background-image: url('${({ image }) => (image)}');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 10em;
  width: 50%;
`;

const Diagram = ({ image }) => (
  <DiagramStyles>
    <div className="mini-wrap">
      <DiagramImage image={image} />
    </div>
  </DiagramStyles>
);

export default Diagram;
