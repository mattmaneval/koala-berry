import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Logo from '../icons/Logo';
// import ButtonCta from './navigation/ButtonCta';
import media from '../../styles/media';
import mixins from '../../styles/mixins';
import theme from '../../styles/theme';



const { color, fonts } = theme;


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
