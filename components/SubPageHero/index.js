import styled from 'styled-components';

// Styles
import media from '../../styles/media';
import theme from '../../styles/theme';

const { color, fonts } = theme;

const SubPageHeroStyle = styled.section`
  background: linear-gradient(to bottom,${color.callout},${color.foregroundAlt});
  height: 70vh;
  min-height: 37em;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;


  .mini-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  p {
    color: ${color.background};
  }
`;

const HeroImage = styled.div`
  background-image: url('/assets/images/group.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 0;
  margin-bottom: -7em;
  padding-top: 50%;
  width: 100%;

  @media ${media.secondary} {
    padding-top: 100%;
  }
`;

const SubPageHero = ({ backgroundImage, heading, subHeading, text}) => (
  <SubPageHeroStyle backgroundImage={backgroundImage}>
    <div className="mini-wrap">
      <div class="small-title">{heading}</div>
      <h4>{subHeading}</h4>
      <p>{text}</p>
    </div>

  </SubPageHeroStyle>
);

export default SubPageHero;
