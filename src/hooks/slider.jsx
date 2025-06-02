// "use client"
// import { useEffect, useRef } from 'react';
// import Swiper from 'swiper';
// import 'swiper/swiper-bundle.min.css';

// const SliderComponent = ({ sliderOptions }) => {
//   const sliderRef = useRef(null);

//   useEffect(() => {
//     if (!sliderRef.current) return;

//     const settings = sliderOptions;

//     // Store references to the navigation Slider
//     const prevArrow = sliderRef.current.querySelector('.slider-prev');
//     const nextArrow = sliderRef.current.querySelector('.slider-next');
//     const paginationEl = sliderRef.current.querySelector('.slider-pagination');
//     const paginationElN = sliderRef.current.querySelector('.slider-pagination.pagi-number');

//     const paginationType = settings['paginationType'] ? settings['paginationType'] : 'bullets';
//     const autoplayconditon = settings['autoplay'];

//     const sliderDefault = {
//       slidesPerView: 1,
//       spaceBetween: settings['spaceBetween'] ? settings['spaceBetween'] : 24,
//       loop: settings['loop'] === false ? false : true,
//       speed: settings['speed'] ? settings['speed'] : 1000,
//       autoplay: autoplayconditon ? autoplayconditon : { delay: 6000, disableOnInteraction: false },
//       navigation: {
//         nextEl: nextArrow,
//         prevEl: prevArrow,
//       },
//       pagination: {
//         el: paginationEl,
//         type: paginationType,
//         clickable: true,
//         renderBullet: function (index, className) {
//           const number = index + 1;
//           const formattedNumber = number < 10 ? '0' + number : number;
//           if (paginationElN) {
//             return `<span class="${className} number">${formattedNumber}</span>`;
//           } else {
//             return `<span class="${className}" aria-label="Go to Slide ${formattedNumber}"></span>`;
//           }
//         },
//       },
//       on: {
//         slideChange: function () {
//           setTimeout(() => {
//             swiper.params.mousewheel.releaseOnEdges = false;
//           }, 500);
//         },
//         reachEnd: function () {
//           setTimeout(() => {
//             swiper.params.mousewheel.releaseOnEdges = true;
//           }, 750);
//         },
//       },
//     };

//     const options = { ...sliderDefault, ...settings };
//     const swiper = new Swiper(sliderRef.current, options); // Initialize Swiper with options

//     // Handle the case where the slider is inside a container with .slider-area
//     if (document.querySelector('.slider-area')) {
//       document.querySelector('.slider-area').closest('.container').parentNode.classList.add('arrow-wrap');
//     }

//     return () => {
//       // Cleanup swiper instance on component unmount
//       if (swiper) swiper.destroy();
//     };
//   }, [sliderOptions]);

//   return (
//     <div className="th-slider" ref={sliderRef} data-slider-options={JSON.stringify(sliderOptions)}>
//       {/* Slider content */}
//       <div className="swiper-wrapper">
//         {/* Add your slides here */}
//       </div>

//       {/* Navigation Arrows */}
//       <div className="slider-prev">Prev</div>
//       <div className="slider-next">Next</div>

//       {/* Pagination */}
//       <div className="slider-pagination"></div>
//     </div>
//   );
// };

// export default SliderComponent;
