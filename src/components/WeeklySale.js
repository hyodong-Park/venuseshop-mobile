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
import {baseApi} from '../api/axiosInstance';

function WeeklySale() {

  let [weeklySaleProduct,setWeeklySaleProduct] = useState([]);
  let [endDate,setEndDate] = useState([]);

  useEffect(() => {

    baseApi.get('/product/weeklybestsale')
      .then(response => {
        const datalist = response.data.data;

        let listTmp = [];

        setEndDate(datalist.endTime);

        for(let i = 0 ; i < datalist.product.length; i++) {

          const data = datalist.product[i];

          const obj = {
            packid: data.pack_content_id,
            img : 'https://www.venus-eshop.co.kr/images/' + data.goods_image,
            sale : data.percent,
            brand : data.info_brand,
            goodsname : data.goods_model,
            realmoney : formatPrice(data.urrp),
            saleBefore : data.price,
            introduce : data.pdesc
          }

          listTmp.push(obj);
          setWeeklySaleProduct(listTmp);
        }
      })
      .catch(error => {
        console.log(error)
      });
  }, []);

  const formatPrice = (price) => {
    return `${price.toLocaleString()}원`;
  };

  const [activeIndex, setActiveIndex] = useState(0); // 활성 슬라이드 인덱스 관리

  const fractionRef = useRef(); // Fraction Pagination 요소를 참조
  const swiperRef = useRef(null); // Swiper 인스턴스 참조
  const [isPlaying, setIsPlaying] = useState(true); // 자동재생 상태
  const [timeLeft, setTimeLeft] = useState(""); // 남은 시간을 저장하는 상태

  const targetTime = new Date(endDate).getTime(); // 목표 시간

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
    (timeLeft === '종료됨' || weeklySaleProduct.length === 0) ? <></> :
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
            {weeklySaleProduct.map((item, index) => (
              <SwiperSlide key={index}>
                <CenteredSlides
                  product={{
                    packid: item.packid, img: item.img, sale: item.sale,
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
                  <span>{weeklySaleProduct.length.toString().padStart(2, '0')}</span>
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
