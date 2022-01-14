import styled from 'styled-components';
import ChevronRight from '../icons/ChevronRight';
import media from '../../styles/media';
import mixins from '../../styles/mixins';
import theme from '../../styles/theme';

const { color, fonts } = theme;

const CardsStyle = styled.section`
  background-color: ${color.callout};
  background-image: url('/assets/images/koala-bear.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  .inner-wrap {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2em;

    @media ${media.secondary} {
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 1em;
    }
  }
`;

const Card = styled.div`
  ${mixins.animate};
  background-color: ${color.background};
  color: ${color.callout};
  display: flex;
  flex-direction: column;
  padding: 2em;

  @media ${media.secondary} {
    padding: 1.25em;
  }

  .card {
    &-title {
      font-family: ${fonts.title};
      color: ${color.foregroundAlt};
      display: inline-block;
      font-size: 4em;
      position: relative;
      text-transform: uppercase;
      margin-bottom: 0.25em;
      z-index: 1;

      @media ${media.secondary} {
        font-size: 2.6em;
      }
    }

    &-subtitle {
      color: ${color.foregroundAlt};
      display: flex;
      align-items: flex-end;
      font-family: ${fonts.fontBold};
      justify-content: space-between;
      width: 100%;

      span {
        font-size: 1.25em;
      }

      svg {
        height: 2em;
        width: 2em;
        color: ${color.callout};
      }
    }
  }

  &:hover {
    background-color: ${color.foregroundAlt};

    .card-title,
    .card-subtitle {
      color: ${color.background};
    }

    .card-title {
      &:before {
        content: "";
        position: absolute;
        height: 0.5em;
        width: 100%;
        background-color: ${color.callout};
        display: inline-block;
        bottom: 0;
        left: 0;
        z-index: -1;
      }
    }

    svg {
      color: ${color.background};
    }
  }
`;

const Cards = () => (
  <CardsStyle>
    <div className="inner-wrap">
      <Card>
        <div className="card-top">
          <div className="card-title">flavors</div>
          <div className="card-subtitle">
            <span>Self serve means self inspired.</span>
            <ChevronRight />
          </div>
        </div>
      </Card>
      <Card>
        <div className="card-top">
          <div className="card-title">toppings</div>
          <div className="card-subtitle">
            <span>We have a lot!</span>
            <ChevronRight />
          </div>
        </div>
      </Card>
      <Card>
        <div className="card-top">
          <div className="card-title">benefits</div>
          <div className="card-subtitle">
            <span>Delicious taste, healthy lifestyle.</span>
            <ChevronRight />
          </div>
        </div>
      </Card>
      <Card>
        <div className="card-top">
          <div className="card-title">about</div>
          <div className="card-subtitle">
            <span>About Koala Berry.</span>
            <ChevronRight />
          </div>
        </div>
      </Card>
    </div>
  </CardsStyle>
);

export default Cards;
