import '../styles/main.css'
import React, { useRef, useState } from 'react'
import banner_1 from '../assets/video/bannerVideo_1.mp4';
import banner_2 from '../assets/video/bannerVideo_2.mp4';
import banner_3 from '../assets/video/bannerVideo_3.mp4';

import banner_1_png from '../assets/video/bannerVideo_1.png';
import banner_2_png from '../assets/video/bannerVideo_2.png';
import banner_3_png from '../assets/video/bannerVideo_3.png';

import slideStopIco from '../assets/image/stop-white.svg';
import slidePlayIco from '../assets/image/play-white.svg';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function Mainbanner() {
  
  // let bannerVideo = [banner_1,banner_2,banner_3,banner_4];c:\Users\admin\Downloads\222\sample4.mp4 c:\Users\admin\Downloads\222\sample2.mp4 c:\Users\admin\Downloads\222\sample3.mp4
  let bannerVideo = [
    {src: banner_1, main:'2024 AW\nVENUS', sub:'2024 A W 비너스 광고 기획전', thumnail : banner_1_png},
    {src: banner_2, main:'브랜드 세일\nUP TO 78%', sub:'비너스 · 솔브 · 오르화', thumnail : banner_2_png},
    {src: banner_3, main:'사이즈 무료교환\n이벤트', sub:'비너스이숍 신년 맞이', thumnail : banner_3_png},
    // {src: banner_1, main:'2024 AW\nVENUS', sub:'2024 A W 비너스 광고 기획전'},
    // {src: banner_2, main:'브랜드 세일\nUP TO 78%', sub:'비너스 · 솔브 · 오르화'},
    // {src: banner_3, main:'사이즈 무료교환\n이벤트', sub:'비너스이숍 신년 맞이'},
    // {src: banner_1, main:'2024 AW\nVENUS', sub:'2024 A W 비너스 광고 기획전'}
    // {src: banner_4, main:'2025 새해맞이\n행운 이벤트', sub:'돌리기만하면 100% 당첨!'},
  ]; //임시 1개만 표시.

  // const [playing, setPlaying] = useState(true);

  const fractionRef = useRef(); // Fraction Pagination 요소를 참조
  const swiperRef = useRef(null); // Swiper 인스턴스 참조
  const [isPlaying, setIsPlaying] = useState(true); // 자동재생 상태

  const toggleAutoplay = () => {
    if (swiperRef.current) {
      // if (isPlaying) {
      //   swiperRef.current.autoplay.stop(); // 자동재생 중지
      // } else {
      //   swiperRef.current.autoplay.start(); // 자동재생 시작
      // }
      setIsPlaying(!isPlaying); // 상태 변경
    }
  };


  const updateFractionPagination = (swiper) => {


    // Fraction Pagination 업데이트
    if (fractionRef.current) {

      const currentSlide = (swiper.realIndex + 1).toString().padStart(2, '0');
      const totalSlides = swiper.slides.length.toString().padStart(2, '0');

      fractionRef.current.innerHTML = `<span>${currentSlide}</span><span>${totalSlides}</span>`;
    }
  };

  const handleVideoEnd = () => {
    if (swiperRef.current && isPlaying == true) {
      swiperRef.current.slideNext(); // 다음 슬라이드로 이동
    }
  };

  const handleSlideChange = (swiper) => {
  
    setTimeout(() => {
      // 모든 슬라이드의 비디오 정지
      swiper.slides.forEach((slide) => {
        const video = slide.querySelector('video');
        if (video) {
          video.pause();
          video.currentTime = 0; // 비디오 재생 위치 초기화
        }
      });
  
      // // 현재 활성 슬라이드 찾기 (loop 모드 대응)
      // const activeSlide = swiper.slides[swiper.activeIndex];
      // const activeVideo = activeSlide ? activeSlide.querySelector('video') : null;
      // if (activeVideo) {
      //   activeVideo.play();
      // }
      const visibleSlides = [];
      for (let i = swiper.activeIndex; i < swiper.activeIndex + swiper.params.slidesPerView; i++) {
        visibleSlides.push(swiper.slides[i]);
      }
  
      // 현재 화면에 보이는 슬라이드들의 비디오 재생
      visibleSlides.forEach((slide) => {
        const video = slide.querySelector('video');
        if (video) {
          video.play();
        }
      });

    }, 50); // Swiper의 loop 전환을 고려한 약간의 지연
  };



  return (
    <>
      <div className='mainbanner'>
      
        <Swiper
           onSlideChangeTransitionEnd={(swiper) => {
            handleSlideChange(swiper);
            updateFractionPagination(swiper);
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper
            handleSlideChange(swiper); // 초기 활성 슬라이드의 비디오 재생
            updateFractionPagination(swiper)
          }}
          onTouchEnd={(swiper) => {
            setIsPlaying(false)
         
          }}
          slidesPerView={1}
          breakpoints={{712:{slidesPerView:2}}}
          pagination={{
            type: 'progressbar', el: '.mainbanner .swiper-pagination-progress',
          }}
          loop={true}

          modules={[Pagination]}
        >
          {bannerVideo.map((content, index) =>
            <SwiperSlide key={index}>
              <a href={()=>false}>
                <div className='topDimm'></div>
                <video muted onEnded={handleVideoEnd} loop={!isPlaying} playsInline style={{zIndex:2, position:'relative'}}>
                  <source src={content.src} type="video/mp4" />
                </video>

                <div className='bottomDimm'></div>
                <div className='textSwiper'>
                  <p className='main'>{content.main}</p>
                  <p className='sub'>{content.sub}</p>
                </div>

                <div className='thumbnail' style={{position:"absolute",inset:0,width:'100%',height:'100%',zIndex:1}}><img src={content.thumnail} style={{width:'100%',height:"100%",objectFit:'cover'}}/></div>
              </a>

            </SwiperSlide>
          )}

        </Swiper>

        <div className="pagination dual-pagination">
          <div className="progress">
            <div className="swiper-pagination swiper-pagination-progress"></div>
          </div>
          <div className="fraction">
            <div className="swiper-pagination swiper-pagination-fraction" style={{ position: 'static' }} ref={fractionRef}>
              <span>01</span>
              <span>{bannerVideo.length.toString().padStart(2, '0')}</span>
            </div>
            <button className="ico" onClick={toggleAutoplay}>
              <img src={isPlaying ? slideStopIco : slidePlayIco} alt={isPlaying ? "Pause autoplay" : "Play autoplay"}/>
            </button>
            
          </div>

        </div>

      </div>
    </>
  );
}

export default Mainbanner;
