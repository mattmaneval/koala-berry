import styled from 'styled-components';

// Components
import ImageContainer from '../ImageContainer/index';

// Styles
import theme from '../../styles/theme';

const { color } = theme;

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

const AboutCallout = ({ heading, text, link, href}) => (
  <AboutCalloutStyle>
    <div className="mini-wrap">
      <AboutCalloutTextContainer>
        <div className="title alt">{heading}</div>
        <p>{text}</p>
        <ImageContainer image="/assets/images/pink-spoon.png" />
      </AboutCalloutTextContainer>
    </div>
  </AboutCalloutStyle>
);

export default AboutCallout;
