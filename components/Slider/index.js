import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styled from 'styled-components';
import theme from '../../styles/theme';

const { color, fonts } = theme;

const Slide = styled.div`
  background-color: ${color.foregroundAlt};
  color: ${color.background};
  font-family: ${fonts.title};
  font-size: 2.65rem;
  padding: 2rem;
  margin-right: 2rem;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Slider = () => (
  <section>
    <div className="wrap">
      <Swiper
        slidesPerView="auto"
        spaceBetween={50}
      >
        <SwiperSlide>
          <Slide>
            <div>Flavors</div>
          </Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide>
            <div>Toppings</div>
          </Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide>
            <div>Benefits</div>
          </Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide>
            <div>About</div>
          </Slide>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
);

export default Slider;
