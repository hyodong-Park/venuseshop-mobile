import '../styles/main.css'
import React, { useRef, useState, useEffect } from 'react'
import CenteredSlides from './CenteredSlides';
import TitleWrap from './TitleWrap';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import slideStopIco from '../assets/image/stop-gray.svg';
import slidePlayIco from '../assets/image/play-gray.svg';

function WeeklySale() {

  let WeeklySaleProduct = [
    { img: 'https://www.venus-eshop.co.kr/images/VBRI11920220315090336122Product08.png', sale: '10', brand: '비너스', goodsname: '마이핏 스포츠 브라(VBRI119)', realmoney: '33,750원', saleBefore: '45,000원', introduce: '브이핏 스포트의 미디움 타입 브라입니다.\n비너스의 스포츠 브라 시리즈로 오랫동안 사랑을 받는 브이핏 스포트의 미디움 타입 브라입니다.' },
    { img: 'https://www.venus-eshop.co.kr/images/SVPT1786H20250121111822831Product02.png', sale: '50', brand: '비너스', goodsname: '프린트 헴팬티(SVPT1786H)', realmoney: '13,000원', saleBefore: '26,000원', introduce: '섬세한 리지드 도트 망사를\n매치하여 포인트를 준\n팬티입니다.' },
    { img: 'https://www.venus-eshop.co.kr/images/VPT096520230321154823963Product01.png', sale: '22', brand: '비너스', goodsname: '에어러블 썸머 히든팬티(SVPT0965)', realmoney: '13,000원', saleBefore: '23,000원', introduce: '23 S/S 여름 광고 제품으로,\n프리컷팅 원단을 사용한\n노라인 컨셉의 히든 스타일 제품으로\n몸의 굴곡에 따라 늘어나는\n뛰어난 신축성으로 착용감이 편안합니다.' },
    { img: 'https://www.venus-eshop.co.kr/images/VBRI64520240426141036745Product01.png', sale: '61', brand: '비너스', goodsname: '비너스 군살 보정 심리스 브라 (SVBRI645)', realmoney: '20,000원', saleBefore: '45,000원', introduce: '퓨징기법을 이용하여\n이음선과 봉제선이 없어\n피부에 닿는 부분이 부드럽고\n매끄러우며 와이어와 파본이 없어\n편안한 착용감과 런닝형 어깨끈으로\n어깨 결림을 방지합니다.' },
    { img: 'https://www.venus-eshop.co.kr/images/VBR096520230327140245591Product03.png', sale: '70', brand: '비너스', goodsname: '에어러블 썸머 브라(SVBR0965)', realmoney: '45,000원', saleBefore: '73,000원', introduce: '#23SS여름광고 #시원한착용감' }
  ];

  const [activeIndex, setActiveIndex] = useState(0); // 활성 슬라이드 인덱스 관리

  const fractionRef = useRef(); // Fraction Pagination 요소를 참조
  const swiperRef = useRef(null); // Swiper 인스턴스 참조
  const [isPlaying, setIsPlaying] = useState(true); // 자동재생 상태
  const [timeLeft, setTimeLeft] = useState(""); // 남은 시간을 저장하는 상태

  const targetTime = new Date("2025-02-10T12:00:00").getTime(); // 목표 시간

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const timeDifference = targetTime - now;

      if (timeDifference <= 0) {
        setTimeLeft("종료됨");
        clearInterval(interval); // 타이머 정지
        return;
      }

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setTimeLeft(`D-${days} ${hours}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`);
    }, 1000);

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 타이머 정리
  }, [targetTime]);


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
        <div className="saleTime">
          <TitleWrap content={{ text: '금주의 인기 특가', type: '', subText: '꼭 봐야 할 MD선정 인기상품' }} />
          <div className="wrap time">⏰<b>{timeLeft}</b> <span>남았어요</span></div>
          <Swiper slidesPerView={'auto'} spaceBetween={5} centeredSlides={true} loop={true} pagination={{ enabled: true, type: 'progressbar', el: '.saleTime .swiper-pagination-progress' }} autoplay={{ delay: 5000 }} className="slides-scale gradient-pagination" modules={[Pagination, Autoplay]}
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
            {WeeklySaleProduct.map((item, index) => (
              <SwiperSlide key={index}>
                <CenteredSlides
                  product={{
                    img: item.img, sale: item.sale,
                    brand: item.brand, goodsname: item.goodsname, realmoney: item.realmoney, saleBefore: item.saleBefore, introduce: item.introduce
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
                  <span>{WeeklySaleProduct.length.toString().padStart(2, '0')}</span>
                </div>
                <button className="ico" onClick={toggleAutoplay}>
                  <img src={isPlaying ? slideStopIco : slidePlayIco} alt={isPlaying ? "Pause autoplay" : "Play autoplay"} />
                </button>
              </div>
            </div>
          </Swiper>
        </div>
      </section>

    </>
  );
}

export default WeeklySale;
