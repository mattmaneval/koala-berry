import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ChevronRight from '../icons/ChevronRight';
import styled from 'styled-components';
import media from '../../styles/media';
import theme from '../../styles/theme';

const { color, fonts } = theme;

const SliderStyle = styled.section`
  background-color: ${color.callout};
`;

const Slide = styled.div`
  background-color: ${color.background};
  color: ${color.callout};
  display: flex;
  flex-direction: column;

  padding: 2em;
  width: 100%;
  height: 100%;
  /* display: flex;
  justify-content: space-between; */

  @media ${media.secondary} {
    padding: 1.25em;
  }

  .card-title {
    font-family: ${fonts.title};
    color: ${color.foregroundAlt};
    font-size: 4em;
    text-transform: uppercase;
    margin-right: 0.5em;
    margin-bottom: 0.25em;

    @media ${media.secondary} {
      font-size: 2.6em;
    }
  }

  .subtitle {
    color: ${color.foregroundAlt};
    font-size: 1.85em;
    font-family: ${fonts.fontBold};
    /* letter-spacing: 0.05em; */

    @media ${media.secondary} {
      font-size: 1.55em;
    }
  }

  .card-top {
    height: 100%;
    width: 100%;


    svg {
      height: 1em;
      width: 1em;
      color: ${color.callout};

      @media ${media.secondary} {
        /* height: 1.95em;
        width: 1.95em; */
      }
    }
  }

  .card-bottom {
    display: flex;
    /* display: none; */
    align-items: flex-end;
    justify-content: flex-start;



  }

  .card-image {
    /* background-image: url('/assets/images/toppings-img.jpeg');
    background-size: 120%;
    background-position: center;
    background-repeat: no-repeat;
    height: 0;
    width: 100%;
    padding-top: 56%;
    margin-bottom: 1em; */
  }
`;

const Slider = () => (
  <SliderStyle>
    <div className="wrap">
      <Swiper
        slidesPerView="auto"
        spaceBetween={30}
      >
        <SwiperSlide>
          <Slide>
            <div className="card-top">
              <div className="card-bottom">
                <div className="card-title">flavors</div>

              </div>
              <div className="card-image"></div>
              <div className="subtitle">Self serve means self inspired. <ChevronRight /></div>
            </div>

          </Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide>
          <div className="card-top">
            <div className="card-bottom">
              <div className="card-title">toppings</div>

            </div>
            <div className="card-image"></div>
            <div className="subtitle">We have a lot! <ChevronRight /></div>
          </div>

          </Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide>
          <div className="card-top">
            <div className="card-bottom">
              <div className="card-title">benefits</div>

            </div>
            <div className="card-image"></div>
            <div className="subtitle">Delicious taste, healthy lifestyle. <ChevronRight /></div>
          </div>
          </Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide>
          <div className="card-top">
          <div className="card-bottom">
            <div className="card-title">about</div>

          </div>
          <div className="card-image"></div>
          <div className="subtitle">About Koala Berry. <ChevronRight /></div>
          </div>
          </Slide>
        </SwiperSlide>
      </Swiper>
    </div>
  </SliderStyle>
);

export default Slider;
