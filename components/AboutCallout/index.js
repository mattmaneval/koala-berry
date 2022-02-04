import styled from 'styled-components';

import SecondaryCta from '../navigation/SecondaryCta';
import Diagram from '../Diagram/index';
import ImageContainer from '../ImageContainer/index';

import media from '../../styles/media';
import theme from '../../styles/theme';

const { color, fonts } = theme;

const AboutCalloutStyle = styled.section`
  background: linear-gradient(to bottom, ${color.callout} 0%, ${color.foregroundAlt} 100%);
  text-align: center;
  
  p {
    color: ${color.background};
  }
`;

const AboutCalloutTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const AboutCalloutImageContainer = styled.div`
  background-image: url('/assets/images/chocolate-bowl.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  padding-top: 65%;
`;

const AboutCallout = ({ heading, text, link, href}) => (
  <AboutCalloutStyle>
    <div className="mini-wrap">
      <AboutCalloutTextContainer>
        <div className="title">{heading}</div>
        <p>{text}</p>
        <ImageContainer image="/assets/images/pink-spoon.png" />
      </AboutCalloutTextContainer>
    </div>
  </AboutCalloutStyle>
);

export default AboutCallout;
