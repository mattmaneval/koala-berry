import React, { useState } from 'react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import SliderImage from './SliderImage';

// Styles
import mixins from '../../styles/mixins';
import theme from '../../styles/theme';

const { color } = theme;

const ImageSliderContainer = styled.section`
  svg {
    fill: none;
    stroke: ${color.callout};
    stroke-width: 4;
    stroke-miterlimit: 10;
    overflow: visible;
    width: 3.5em;

    &:first-of-type {
      margin-right: 0.65em;
    }

    &:last-of-type {
      margin-left: 0.65em;
    }
  }

  .dots {
    display: flex;
    padding: 2em 0;
    justify-content: center;
  }

  .dot {
    border: none;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin: 0 5px;
    padding: 5px;
    cursor: pointer;
    border: 1px solid ${color.typeDim};
  }

  .dot:focus {
    outline: none;
  }

  .dot.active {
    border: 1px solid ${color.foreground};
    background: ${color.foreground};
  }
`;

const ImageSliderWrap = styled.div`
  ${mixins.wrap}
  cursor: grab;
  display: flex;
`;

const ImageSliderItem = styled.div``;

function ImageSlider({ imageData }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    loop: true,
    breakpoints: {
      '(max-width: 767px)': {
        slides: { perView: 1, spacing: 15 },
      },
      '(min-width: 767px)': {
        slides: { perView: 2, spacing: 30 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 2.5, spacing: 40 },
      },
    },
  });

  return (
    <ImageSliderContainer className="no-padding-top">
      <div className="wrap">
        <ImageSliderWrap ref={sliderRef} loop className="keen-slider">
          {Object.keys(imageData).map((key) => (
            <ImageSliderItem key={key} className="keen-slider__slide">
              <SliderImage data={imageData[key]} />
            </ImageSliderItem>
          ))}
        </ImageSliderWrap>
        {/* {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )} */}
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => (
            <button
              type="button"
              aria-label="slider button"
              key={idx}
              onClick={() => {
                instanceRef.current?.moveToIdx(idx);
              }}
              className={`dot${currentSlide === idx ? ' active' : ''}`}
            />
          ))}
        </div>
      )}
    </ImageSliderContainer>
  );
}

ImageSlider.propTypes = {
  imageData: PropTypes.shape({
    image: PropTypes.string.isRequired,
  }),
};

// function Arrow({ disabled, onClick, left }) {
//   const disabeld = disabled ? ' arrow--disabled' : '';
//   return (
//     <svg
//       onClick={onClick}
//       className={`arrow ${left ? 'arrow--left' : 'arrow--right'} ${disabeld}`}
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 24 24"
//     >
//       {left && (
//         <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
//       )}
//       {!left && <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />}
//     </svg>
//   );
// }

// Arrow.propTypes = {
//   disabled: PropTypes.string.isRequired,
//   onClick: PropTypes.string.isRequired,
//   left: PropTypes.string.isRequired,
// };

export default ImageSlider;
