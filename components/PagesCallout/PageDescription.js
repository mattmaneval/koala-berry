import styled from 'styled-components';

// Components
import SecondaryCta from '../navigation/SecondaryCta';

// Styles
import media from '../../styles/media';
import mixins from '../../styles/mixins';
import theme from '../../styles/theme';

const { color, fonts } = theme;

const PageDescriptionStyles = styled.div`
  text-align: center;

  @media ${media.secondary} {
    ${mixins.miniWrap}
  }

  .title {
    color: ${color.background};

    @media ${media.secondary} {
      color: ${color.foreground};
    }
  }

  .project-item-description {
    margin-bottom: 0.5em;
    color: ${color.background};
    font-size: 1.15rem;
    line-height: 1.3;
    margin-bottom: 1em;

    @media ${media.secondary} {
      color: ${color.foreground};
      margin-bottom: 0.5rem;
      font-size: 0.85rem;
    }
  }

  a {
    color: ${color.background};

    @media ${media.secondary} {
      color: ${color.foreground};
    }
  }
`;

const PageDescription = ({ title, subtitle, href }) => (
  <PageDescriptionStyles>
    <div className="title">{title}</div>
    <p className="project-item-description">{subtitle}</p>
    <SecondaryCta ctaText="Learn more" />
  </PageDescriptionStyles>
);

export default PageDescription;
