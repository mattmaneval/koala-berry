import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ChevronRight from '../icons/ChevronRight';
import styled from 'styled-components';
import media from '../../styles/media';
import theme from '../../styles/theme';

const { color, fonts } = theme;

const Slide = styled.div`
  background-color: ${color.callout};
  color: ${color.background};
  display: flex;
  flex-direction: column;
  font-family: ${fonts.fontBlack};
  padding: 2em;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;

  @media ${media.secondary} {
    padding: 1.25em;
  }

  .card-title {
    font-size: 2em;

    @media ${media.secondary} {
      font-size: 1.6em;
    }
  }

  .subtitle {
    font-size: 1.85em;
    font-family: ${fonts.title};
    letter-spacing: 0.05em;

    @media ${media.secondary} {
      font-size: 1.55em;
    }
  }

  .card-bottom {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;



    svg {
      height: 2.25em;
      width: 2.25em;

      @media ${media.secondary} {
        height: 1.95em;
        width: 1.95em;
      }
    }
  }
`;

const Slider = () => (
  <section>
    <div className="wrap">
      <Swiper
        slidesPerView="auto"
        spaceBetween={30}
      >
        <SwiperSlide>
          <Slide>
            <div className="subtitle">Self serve means self inspired.</div>
            <div className="card-bottom">
              <div className="card-title">flavors</div>
              <ChevronRight />
            </div>
          </Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide>
            <div className="subtitle">We have a lot!</div>
            <div className="card-bottom">
              <div className="card-title">toppings</div>
              <ChevronRight />
            </div>
          </Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide>
            <div className="subtitle">Delicious taste, healthy lifestyle.</div>
            <div className="card-bottom">
              <div className="card-title">benefits</div>
              <ChevronRight />
            </div>

          </Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide>
          <div className="subtitle">About Koala Berry.</div>
          <div className="card-bottom">
            <div className="card-title">about</div>
            <ChevronRight />
          </div>

          </Slide>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
);

export default Slider;
