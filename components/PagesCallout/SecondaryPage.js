import styled from 'styled-components';

// Components
import PageDescription from './PageDescription';

// Styles
import media from '../../styles/media';

const SecondaryPageStyles = styled.div`
  cursor: pointer;
  overflow: hidden;
  position: relative;

  .project-secondary {
    .project-text {
      opacity: 0;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, 20%);
      transition: all .5s;

      @media ${media.primary} {
        opacity: 1;
        position: static;
        transform: none;
        text-align: left;
      }
    }

    &:hover .project-image {
      transform: scale(1.2);
      filter: blur(5px) brightness(50%);

      @media ${media.primary} {
        transform: none;
        filter: none;
      }
    }

    &:hover .project-text {
      opacity: 1;
      transform: translate(-50%, -50%);

      @media ${media.primary} {
        transform: none;
      }
    }
  }
`;

const Container = styled.div`
  background-image: url('${(props) => props.background}');
  padding-top: 65%;
  transition: all .5s;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;

  @media ${media.primary} {
    margin-bottom: 2rem;
  }
`;

const SecondaryPage = ({ background, title, subtitle, href }) => (
  <SecondaryPageStyles>
    <div className="project-secondary">
      <Container className="project-image" background={background} />
      <div className="project-text">
        <PageDescription
          title={title}
          subtitle={subtitle}
          href={href}
        />
      </div>
    </div>
  </SecondaryPageStyles>
);

export default SecondaryPage;
