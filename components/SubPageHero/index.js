import styled, { css } from 'styled-components';
import media from '../../styles/media';
import theme from '../../styles/theme';

const { color, fonts } = theme;

const SubPageHeroStyle = styled.section`
 background-image: url('${(props) => props.backgroundImage}');
 background-size: cover;
 background-repeat: no-repeat;
 background-position: center;
 height: 80vh;
 display: flex;
 flex-direction: column;
 justify-content: flex-end;

 &:before {
    background: linear-gradient(to top, black 5%, transparent);
    bottom: 0;
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    width: 100%;
  }

  h1 {
    color: ${color.background};
  }
`;

const SubPageHero = ({ backgroundImage, heading, subHeading}) => (
  <SubPageHeroStyle backgroundImage={backgroundImage}>
    <div className="wrap">
      <h1>{heading}</h1>
      <div className="h1-alt">{subHeading}</div>
    </div>
  </SubPageHeroStyle>
);

export default SubPageHero;
