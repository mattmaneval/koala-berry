import React from 'react';

/* eslint-disable */
const SVGSprite = () => (
  <svg className="hide">
    <symbol id="facebook" viewBox="0 0 167.7 167.7"> 
      <path d="M83.8,0.3C37.5,0.3,0,37.9,0,84.2c0,41.5,30.2,75.9,69.8,82.6v-65.1H49.6V78.2h20.2V61c0-20,12.2-31,30.1-31 c8.6,0,15.9,0.6,18.1,0.9v20.9l-12.4,0c-9.7,0-11.6,4.6-11.6,11.4v14.9h23.2l-3,23.4H94v65.7c41.5-5,73.6-40.3,73.6-83.2 C167.7,37.9,130.1,0.3,83.8,0.3z" />
    </symbol>

    <symbol id="instagram" viewBox="0 0 22 22">
      <path d="M11.1797 5.12793C8.17969 5.12793 5.78906 7.56543 5.78906 10.5186C5.78906 13.5186 8.17969 15.9092 11.1797 15.9092C14.1328 15.9092 16.5703 13.5186 16.5703 10.5186C16.5703 7.56543 14.1328 5.12793 11.1797 5.12793ZM11.1797 14.0342C9.25781 14.0342 7.66406 12.4873 7.66406 10.5186C7.66406 8.59668 9.21094 7.0498 11.1797 7.0498C13.1016 7.0498 14.6484 8.59668 14.6484 10.5186C14.6484 12.4873 13.1016 14.0342 11.1797 14.0342ZM18.0234 4.94043C18.0234 4.2373 17.4609 3.6748 16.7578 3.6748C16.0547 3.6748 15.4922 4.2373 15.4922 4.94043C15.4922 5.64355 16.0547 6.20605 16.7578 6.20605C17.4609 6.20605 18.0234 5.64355 18.0234 4.94043ZM21.5859 6.20605C21.4922 4.51855 21.1172 3.01855 19.8984 1.7998C18.6797 0.581055 17.1797 0.206055 15.4922 0.112305C13.7578 0.0185547 8.55469 0.0185547 6.82031 0.112305C5.13281 0.206055 3.67969 0.581055 2.41406 1.7998C1.19531 3.01855 0.820312 4.51855 0.726562 6.20605C0.632812 7.94043 0.632812 13.1436 0.726562 14.8779C0.820312 16.5654 1.19531 18.0186 2.41406 19.2842C3.67969 20.5029 5.13281 20.8779 6.82031 20.9717C8.55469 21.0654 13.7578 21.0654 15.4922 20.9717C17.1797 20.8779 18.6797 20.5029 19.8984 19.2842C21.1172 18.0186 21.4922 16.5654 21.5859 14.8779C21.6797 13.1436 21.6797 7.94043 21.5859 6.20605ZM19.3359 16.7061C19.0078 17.6436 18.2578 18.3467 17.3672 18.7217C15.9609 19.2842 12.6797 19.1436 11.1797 19.1436C9.63281 19.1436 6.35156 19.2842 4.99219 18.7217C4.05469 18.3467 3.35156 17.6436 2.97656 16.7061C2.41406 15.3467 2.55469 12.0654 2.55469 10.5186C2.55469 9.01855 2.41406 5.7373 2.97656 4.33105C3.35156 3.44043 4.05469 2.7373 4.99219 2.3623C6.35156 1.7998 9.63281 1.94043 11.1797 1.94043C12.6797 1.94043 15.9609 1.7998 17.3672 2.3623C18.2578 2.69043 18.9609 3.44043 19.3359 4.33105C19.8984 5.7373 19.7578 9.01855 19.7578 10.5186C19.7578 12.0654 19.8984 15.3467 19.3359 16.7061Z" />
    </symbol>

    <symbol id="mm-logo" viewBox="0 0 118 25">
      <path d="M47.356 0.879999L28.816 18.052C28.672 18.16 28.492 18.16 28.348 18.052L9.808 0.879999C9.664 0.771999 9.52 0.7 9.34 0.7H1.132C0.772 0.7 0.484 0.987998 0.484 1.384V24.352C0.484 24.712 0.772 25 1.132 25H7.072C7.468 25 7.756 24.712 7.756 24.352V9.592C7.756 9.268 8.116 9.124 8.332 9.34L25.18 24.856C25.288 24.964 25.468 25 25.612 25H31.516C31.696 25 31.876 24.964 31.984 24.856L48.832 9.34C49.048 9.124 49.408 9.268 49.408 9.592V24.352C49.408 24.712 49.696 25 50.056 25H55.996C56.392 25 56.68 24.712 56.68 24.352V1.384C56.68 0.987998 56.392 0.7 55.996 0.7H47.824C47.644 0.7 47.464 0.771999 47.356 0.879999ZM108.563 0.879999L90.023 18.052C89.879 18.16 89.699 18.16 89.555 18.052L71.015 0.879999C70.871 0.771999 70.727 0.7 70.547 0.7H62.339C61.979 0.7 61.691 0.987998 61.691 1.384V24.352C61.691 24.712 61.979 25 62.339 25H68.279C68.675 25 68.963 24.712 68.963 24.352V9.592C68.963 9.268 69.323 9.124 69.539 9.34L86.387 24.856C86.495 24.964 86.675 25 86.819 25H92.723C92.903 25 93.083 24.964 93.191 24.856L110.039 9.34C110.255 9.124 110.615 9.268 110.615 9.592V24.352C110.615 24.712 110.903 25 111.263 25H117.203C117.599 25 117.887 24.712 117.887 24.352V1.384C117.887 0.987998 117.599 0.7 117.203 0.7H109.031C108.851 0.7 108.671 0.771999 108.563 0.879999Z" />
    </symbol>
  </svg>
);
/* eslint-enable */

export default SVGSprite;