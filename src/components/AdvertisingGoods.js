import '../styles/main.css'
import React, { useState, useRef, useEffect } from 'react';
import ProductTypeVertical from './ProductTypeVertical';
import TitleWrap from './TitleWrap';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

import venusProductBg from '../assets/image/ad-venus.jpg';
import solbProductBg from '../assets/image/ad-solb.jpg';
import wacoalProductBg from '../assets/image/ad-wacoal.jpg';

// import circleArrow from '../src/assets/image/circle-arrow-right-fill.svg';
import circleArrow from '../assets/image/arrow_fill.svg';
import axios from "axios";
import {baseApi} from "../api/axiosInstance";

function AdvertisingGoods() {

  let [venusProduct,setvenuslist] = useState([]);
  let [solbProduct,setsolblist] = useState([]);
  let [wacoalProduct,setwacoallist] = useState([]);

  useEffect(() => {


    baseApi.get('/product/aditem')
      .then(response => {
        const datalist = response.data.data;

        const venusItems = datalist.venus;  // venus 리스트
        const solbItems = datalist.solb;  // solb 리스트
        const wacoalItems = datalist.wacoal;  // wacoal 리스트

        let venus = [];
        let solb = [];
        let wacoal = [];

        for(let i = 0 ; i < venusItems.length; i++) {

          const data = venusItems[i];

          const obj = {
            pack_content_id: data.pack_content_id,
            img : 'https://www.venus-eshop.co.kr/images/' + data.goods_image,
            brand : data.info_brand,
            goodsname : data.goods_model,
            realmoney : data.price,
            promotion : data.goods_promotion,
            like : false
          }
          venus.push(obj);
        }

        for(let i = 0 ; i < solbItems.length; i++) {

          const data = solbItems[i];

          const obj = {
            pack_content_id: data.pack_content_id,
            img : 'https://www.venus-eshop.co.kr/images/' + data.goods_image,
            brand : data.info_brand,
            goodsname : data.goods_model,
            realmoney : data.price,
            promotion : data.goods_promotion,
            like : false
          }
          solb.push(obj);
        }

        for(let i = 0 ; i < wacoalItems.length; i++) {

          const data = wacoalItems[i];

          const obj = {
            pack_content_id: data.pack_content_id,
            img : 'https://www.venus-eshop.co.kr/images/' + data.goods_image,
            brand : data.info_brand,
            goodsname : data.goods_model,
            realmoney : data.price,
            promotion: data.goods_promotion != null ? "AW광고제품" : data.goods_promotion,
            like : false
          }
          wacoal.push(obj);
        }

        setvenuslist(venus);
        setsolblist(solb);
        setwacoallist(wacoal);


      })
      .catch(error => {
        console.log(error)
      });

  }, []);

  const [activeTab, setActiveTab] = useState(0); // 활성화된 탭의 인덱스를 관리

  const [adBg, setAdBg] = useState(venusProductBg);
  
  const [title, setTitle] = useState('비너스')
  const [subtitle, setSubtitle] = useState('2024 AW VENUS')

  const swiperRef = useRef(null); // Swiper 인스턴스를 저장할 ref

  const handleTabClick = (index) => {
    setActiveTab(index); // 클릭된 탭의 인덱스를 설정

    if (index === 0) {
      setProduct(venusProduct);
      setAdBg(venusProductBg)
      setTitle('비너스')
      setSubtitle('2024 AW VENUS')
    } else if (index === 1) {
      setProduct(solbProduct);
      setAdBg(solbProductBg)
      setTitle('솔브')
      setSubtitle('2024 AW SOLB')
    } else if (index === 2) {
      setProduct(wacoalProduct);
      setAdBg(wacoalProductBg)
      setTitle('와코루')
      setSubtitle('2024 AW WACOAL')
    }
  };

  const brand = [
    '비너스', '솔브', '와코루'
  ]

  const [product, setProduct] = useState([]); // 현재 표시할 제품 목록 상태

  // 첫 화면 로딩시 venusProduct 리스트가 부러진 경우에만
  React.useEffect(() => {
    if (venusProduct.length > 0) {
      setProduct(venusProduct);
    }
  }, [venusProduct]);

  useEffect(() => {
    // 제품 변경 완료 후 Swiper를 첫 번째 슬라이드로 이동
    if (swiperRef.current) {
      swiperRef.current.slideTo(0, 0); // 첫 번째 슬라이드로 이동
    }

  }, [activeTab]);

  const likeToggle = (index) => {
    event.stopPropagation();
    event.preventDefault();
    setvenuslist((prevProducts) =>
        prevProducts.map((item, i) =>
            i === index ? { ...item, like: !item.like } : item
        )
    );
};

  return (
    <>
      <section>
        <div>
          <TitleWrap content={{ text: '광고상품', type: 'all' }} />
          <ul className='diagonalTab three'>
            {brand.map((tab, index) => (
              <li key={index} className={activeTab === index ? 'on' : ''}>
                <button onClick={() => handleTabClick(index)}>{tab}</button>
                <div></div>
              </li>
            ))}
          </ul>
          <div className="md-bgArea" style={{ backgroundImage: 'url(' + adBg + ')' }}>
            <div className="ad-wrap" style={{ backgroundImage: `url(${adBg})` }}>
             <div className="ad-wrap-inner"></div>
              <div className="title"><p>{title}</p>{subtitle}</div>
              <Swiper spaceBetween={12} slidesPerView={'auto'} slidesOffsetAfter={25} slidesOffsetBefore={25} freeMode={true} modules={[FreeMode]} className="sub-promotion" onSwiper={(swiper) => (swiperRef.current = swiper)}>
                {product.map((item, index) =>
                (
                  <SwiperSlide className="productVertical" style={{ width: '140px' }} key={index}>
                    <ProductTypeVertical
                      product={{
                        img: item.img,
                        goodsname: item.goodsname, realmoney: item.realmoney, promotion: item.promotion, like:item.like, packid:item.pack_content_id
                      }}
                      likeToggle={() => likeToggle(index)}
                    />
                  </SwiperSlide>
                )
                )}
                <SwiperSlide className="slide-more" style={{ width: '100px' }}>
                  <a href={()=>false}>
                    <div>
                      <img src={circleArrow} />
                    </div>
                    <p>전체보기</p>
                  </a>
                </SwiperSlide>
              </Swiper>
              </div>
            
          </div>
        </div>
      </section>
    </>
  );
}

export default AdvertisingGoods;
