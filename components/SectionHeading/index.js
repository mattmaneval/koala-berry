import styled from 'styled-components';
import media from '../../styles/media';
import theme from '../../styles/theme';

const { color, fonts } = theme;

const SectionHeadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3em;

  &:before,
  &:after {
    content: "";
    height: 3px;
    flex: 1 1 0%;
    background-color: ${color.foregroundAlt};
  }
`;

const SectionHeadingText = styled.div`
  font-family: ${fonts.title};
  font-size: 1.85em;
  margin: 0 1em;
  text-transform: uppercase;

  @media ${media.secondary} {
    font-size: 1.25em;
  }
`;

const SectionHeading = ({ text }) => (
  <SectionHeadingContainer>
    <SectionHeadingText>{text}</SectionHeadingText>
  </SectionHeadingContainer>
);

export default SectionHeading;
