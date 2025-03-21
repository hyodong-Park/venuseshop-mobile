import '../styles/main.css'
import React, {useEffect, useRef, useState} from 'react'
import CenteredSlides from './CenteredSlides';
import TitleWrap from './TitleWrap';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import slideStopIco from '../assets/image/stop-gray.svg';
import slidePlayIco from '../assets/image/play-gray.svg';

import monthly01 from '../assets/image/monthly_01.jpg';
import monthly02 from '../assets/image/monthly_02.jpg';
import monthly03 from '../assets/image/monthly_03.jpg';
import axios from "axios";
import {baseApi} from "../api/axiosInstance";

function MonthlyVenus() {

  let [MonthlyVenusProduct,setProduct] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);  // 데이터 로딩 상태 추가

  useEffect(() => {

    baseApi.get('/product/monthitem')
        .then(response => {
          const monthlylist = response.data.data;

          let monthitems = monthlylist.monthdata;

          let month = [];

          for(let i = 0 ; i < monthitems.length; i++) {

            const data = monthitems[i];

            const obj = {
              eventid : data.eventid,
              subtitle : data.info_pdesc,
              img : 'https://www.venus-eshop.co.kr/images/kcommon/mobile/images/local/' + data.m_image01,
              pack_content_id : data.pack_content_id,
              pack_ids : data.pack_ids,
              percent : data.percent,
              title : data.title,
              urrp : data.urrp
            }

            month.push(obj);
          }

          setProduct(month)
          setIsDataLoaded(true);  // 데이터 로딩 완료 상태 업데이트

        })
        .catch(error => {
          console.log(error)
        });


  }, []);


  const [activeIndex, setActiveIndex] = useState(0); // 활성 슬라이드 인덱스 관리

  const fractionRef = useRef(); // Fraction Pagination 요소를 참조
  const swiperRef = useRef(null); // Swiper 인스턴스 참조
  const [isPlaying, setIsPlaying] = useState(true); // 자동재생 상태

  const toggleAutoplay = () => {
    if (swiperRef.current) {
      if (isPlaying) {
        swiperRef.current.autoplay.stop(); // 자동재생 중지
      } else {
        swiperRef.current.autoplay.start(); // 자동재생 시작
      }
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


  return (
    <>
      <section>
        <div className="monthlyVenus">
          <TitleWrap content={{ text: '월간 비너스', type: '' }} />
          {/*리스트 로딩이 끝난후에만 스위퍼 초기화*/}
          {isDataLoaded && (
          <Swiper slidesPerView={'auto'} spaceBetween={5} centeredSlides={true} loop={true} pagination={{ enabled: true, type: 'progressbar', el: '.monthlyVenus .swiper-pagination-progress' }} autoplay={{ delay: 5000 }} className="slides-scale gradient-pagination" modules={[Pagination, Autoplay]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper
              updateFractionPagination(swiper)
            }}
            onRealIndexChange={(swiper) => {
              updateFractionPagination(swiper);
              setActiveIndex(swiper.realIndex);
            }
            }
            onTouchEnd={(swiper) => {
              setIsPlaying(false)
              swiperRef.current.autoplay.stop();
            }}
          >
            {MonthlyVenusProduct.map((item, index) => (
              <SwiperSlide key={index}>
                <CenteredSlides
                  product={{
                    img: item.img,
                    title: item.title, subtitle: item.subtitle
                  }}
                  isActive={index === activeIndex}
                />
              </SwiperSlide>
            ))}

            <div className="pagination dual-pagination">
              <div className="progress gradient-progress">
                <div className="swiper-pagination swiper-pagination-progress"></div>
              </div>
              <div className="fraction">
                <div className="swiper-pagination swiper-pagination-fraction" style={{ position: 'static' }} ref={fractionRef}>
                  <span>01</span>
                  <span>{MonthlyVenusProduct.length.toString().padStart(2, '0')}</span>
                </div>
                <button className="ico" onClick={toggleAutoplay}>
                  <img src={isPlaying ? slideStopIco : slidePlayIco} alt={isPlaying ? "Pause autoplay" : "Play autoplay"} />
                </button>
              </div>
            </div>
          </Swiper>
          )}
        </div>

      </section>

    </>
  );
}

export default MonthlyVenus;
