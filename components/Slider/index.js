import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ChevronRight from '../icons/ChevronRight';
import styled from 'styled-components';
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

  .card-title {
    font-size: 2em;
  }

  .subtitle {
    font-size: 1.85em;
    font-family: ${fonts.title};
    letter-spacing: 0.05em;
  }

  .card-bottom {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;



    svg {
      width: 2.25em;
      height: 2.25em;
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
            <div className="subtitle">Self serve means Self inspired.</div>
            <div className="card-bottom">
              <div className="card-title">flavors</div>
              <ChevronRight />
            </div>
          </Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide>
            <div className="subtitle">We’ve got a lot!</div>
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
