import styled from 'styled-components';

// Components

// import PrimaryCta from '../navigation/PrimaryCta';
import PageDescription from './PageDescription';

// Styles
import media from '../../styles/media';
import mixins from '../../styles/mixins';
import theme from '../../styles/theme';

const { color, fonts, space } = theme;

const FeaturedPageStyles = styled.div`
  grid-column: 1 / -1;

  .featured-project {
    cursor: pointer;
    overflow: hidden;
    position: relative;

    &:hover .featured-project-image {
      transform: scale(1.2);
      filter: blur(5px) brightness(50%);

      @media ${media.primary} {
        transform: none;
        filter: none;
      }
    }

    &:hover .featured-project-text {
      opacity: 1;
      transform: translate(-50%, -50%);

      @media ${media.primary} {
        transform: none;
      }
    }

    &-text {
      color: ${color.background};
      opacity: 0;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, 20%);
      transition: all .5s;
      backface-visibility: hidden;

      @media ${media.primary} {
        opacity: 1;
        position: static;
        transform: none;
        text-align: left;
        color: ${color.foreground};
      }
    }
  }
`;

const Container = styled.div`
  background-image: url('${(props) => props.background}');
  padding-top: 55%;
  transition: all .5s;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;

  @media ${media.primary} {
    margin-bottom: 2em;
    padding-top: 100%;
  }
`;

const FeaturedPage = ({ background, title, subtitle, href }) => (
  <FeaturedPageStyles>
    <div className="featured-project">
      <Container className="featured-project-image" background={background} />
      <div className="featured-project-text">
        <PageDescription
          title={title}
          subtitle={subtitle}
          href={href}
        />
      </div>
    </div>
  </FeaturedPageStyles>
);

export default FeaturedPage;
