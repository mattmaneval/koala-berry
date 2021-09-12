import styled from 'styled-components';
// import media from '../../styles/media';
import theme from '../../styles/theme';

const { color, fonts } = theme;

const CalloutStyle = styled.section`
  /* background-color: ${color.backgroundAlt}; */
`;

const HeadingGroup = styled.div`
  h3 {
    /* color: ${color.callout}; */
  }
`;



const Slide = styled.div`
  align-items: center;
  background-color: ${color.foregroundAlt};
  display: flex;
  justify-content: center;
  padding: 2em;
  height: 15em;
  color: ${color.background};
  font-size: 2em;
  font-family: ${fonts.title};
`;

function YogurtsCallout() {
  return (
    <CalloutStyle>
      <div className="wrap">
        <HeadingGroup>
          <h5>Our Yogurt</h5>
          <h3>Your very own unique, self-inspired dessert.</h3>
          <p>
            The benefits of yogurt have been talked about for years.
            Ours starts with real dairy, fresh milk, real fruit purees, natural
            flavors and lots of beneficial live yogurt cultures called probiotics.
          </p>
        </HeadingGroup>
    </div>
  </CalloutStyle>
  );
};

export default YogurtsCallout;
