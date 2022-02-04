import styled from 'styled-components';
import media from '../../styles/media';
import PrimaryCta from '../navigation/PrimaryCta';

const TextCalloutStyle = styled.section`
  background-image: url('/assets/images/sparkles-white.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  p {
    display: inline-block;
    max-width: 22em;
    color: black;

    @media ${media.secondary} {
      max-width: 100%;
      margin-bottom: 1em;
    }
  }

  .image-container {
    max-width: 40%;
  }
`;

const HeadingGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h3 {
    max-width: 15em;
  }
`;

const TextCallout = ({ heading, text, link, href}) => (
  <TextCalloutStyle>
    <div className="wrap">
      <HeadingGroup>
        <div className="mark" />
        <h3>{heading}</h3>
        <p>{text}</p>
        <PrimaryCta
          ctaText={link}
        />
      </HeadingGroup>
    </div>
  </TextCalloutStyle>
);

export default TextCallout;
