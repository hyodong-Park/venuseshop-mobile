import '../styles/main.css'
import React, {useEffect, useRef, useState} from 'react'

import slideStopIco from '../assets/image/stop-white.svg';
import slidePlayIco from '../assets/image/play-white.svg';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import axios from "axios";
import { Link } from "react-router-dom";

function Mainbanner() {

  const [bannerVideo, setBannerVideo] = useState( [] );

  useEffect(() => {

    const instance = axios.create({
      baseURL: 'http://52.79.198.9:8000/eshop/api/',
      timeout: 10000,
    });

    instance.get('/banner/mainbanner')
        .then(response => {
          const datalist = response.data.data;

          let listTmp = [];

          for (let i = 0; i < datalist.length; i++) {

            const data = datalist[i];

            const obj = {
              eventid: data.eventid,
              main: data.title,
              sub: data.subtitle,
              src: data.videoSrc,
              thumnail: data.thumbnail
            }

            listTmp.push(obj);
          }

          setBannerVideo(listTmp);
        })
        .catch(error => {
          console.log(error)
        });
  }, []);

  const fractionRef = useRef(); // Fraction Pagination 요소를 참조
  const swiperRef = useRef(null); // Swiper 인스턴스 참조
  const [isPlaying, setIsPlaying] = useState(true); // 자동재생 상태

  const toggleAutoplay = () => {
    if (swiperRef.current) {

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

    }, 100); // Swiper의 loop 전환을 고려한 약간의 지연
  };



  return (
    <>
      <div className='mainbanner'>
      
        <Swiper
           onSlideChangeTransitionEnd={(swiper) => {
            handleSlideChange(swiper);
            updateFractionPagination(swiper);
          }}
           onInit={(swiper) => {
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
              <Link to={'/eventDetail?id' + content.id} onClick={e => e.preventDefault}>
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
              </Link>

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
