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

function AdvertisingGoods() {

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


  let venusProduct = [
    { img: 'https://www.venus-eshop.co.kr/images/VBR099020240814163021280Product01.png', goodsname: 'SINCE 1954. 아뜰리에 (VBR0990)', realmoney: '85,000원', promotion: 'AW광고제품', like:false },
    { img: 'https://www.venus-eshop.co.kr/images/VBR099120240821144145733Product10.png', goodsname: 'SINCE 1954. 아뜰리에2(VBR0991)', realmoney: '83,000원', promotion: 'AW광고제품', like:false },
    { img: 'https://www.venus-eshop.co.kr/images/VPT0990T20240814163315633Product05.png', goodsname: '[광고]아뜰리에 티팬티(VPT0990T)', realmoney: '29,000원', like:true },
    { img: 'https://www.venus-eshop.co.kr/images/VBRI64220241115092311928Product08.png', goodsname: '클래식 이즈 뉴 브라 VER.1(VBRI642)', realmoney: '49,000원', promotion: 'AW광고제품', like:false },
    { img: 'https://www.venus-eshop.co.kr/images/SBRD45520241104095419257Product07.png', goodsname: '러브 글램 더블윙 브라(SBRD455)', realmoney: '45,000원', promotion: 'AW광고제품', like:false },
    { img: 'https://www.venus-eshop.co.kr/images/VBRI64220241115092311928Product08.png', goodsname: '프렌치 가든 헴팬티(SOPT6845H)', realmoney: '35,000원', like:false },
    { img: 'https://www.venus-eshop.co.kr/images/SBRD45520241104095419257Product07.png', goodsname: '러브 글램 더블윙 브라(SBRD455)', realmoney: '36,000원', like:false },
    { img: 'https://www.venus-eshop.co.kr/images/VBRI63020241008101810162Product08.png', goodsname: '비너스 러블리 파스텔 레이스 브라(VBRI642)', realmoney: '35,000원', like:false },
    { img: 'https://www.venus-eshop.co.kr/images/VBR099120240821144145733Product10.png', goodsname: 'SINCE 1954. 아뜰리에2(VBR0991)', realmoney: '83,000원', like:false },
    { img: 'https://www.venus-eshop.co.kr/images/VBTM73020241113160407097Product01.png', goodsname: '파워네트 홑겹 나염 쉐이퍼(VBTM730)', realmoney: '45,000원', like:false }
  ];

  let solbProduct = [
    { img: 'https://www.venus-eshop.co.kr/images/SBRD28820221221103057969Product03.png', goodsname: '러브 글램 더블윙 브라(SBRD455)', realmoney: '45,000원', promotion: 'AW광고제품', like:false },
    { img: 'https://www.venus-eshop.co.kr/images/SLGE00220240517165218632Product03.png', goodsname: '프렌치 가든 헴팬티(SOPT6845H)', realmoney: '35,000원', like:false },
    { img: 'https://www.venus-eshop.co.kr/images/SBRD12320210607105143231Product04.png', goodsname: '러브 글램 더블윙 브라(SBRD455)', realmoney: '36,000원', promotion: 'AW광고제품', like:false },
    { img: 'https://www.venus-eshop.co.kr/images/VBRI64220241115092311928Product08.png', goodsname: '클래식 이즈 뉴 브라 VER.1(VBRI642)', realmoney: '49,000원', like:false },
    { img: 'https://www.venus-eshop.co.kr/images/SBRE22020240329145410019Product07.png', goodsname: '러브 글램 더블윙 브라(SBRD455)', realmoney: '45,000원', like:false },
    { img: 'https://www.venus-eshop.co.kr/images/VBRI64220241115092311928Product08.png', goodsname: '프렌치 가든 헴팬티(SOPT6845H)', realmoney: '35,000원', like:false },
    { img: 'https://www.venus-eshop.co.kr/images/SBRD45520241104095419257Product07.png', goodsname: '러브 글램 더블윙 브라(SBRD455)', realmoney: '36,000원', like:false },
    { img: 'https://www.venus-eshop.co.kr/images/SPTD123H20210607110354284Product04.png', goodsname: '비너스 러블리 파스텔 레이스 브라(VBRI642)', realmoney: '35,000원', like:false },
    { img: 'https://www.venus-eshop.co.kr/images/VBR099120240821144145733Product10.png', goodsname: 'SINCE 1954. 아뜰리에2(VBR0991)', realmoney: '83,000원', like:false },
    { img: 'https://www.venus-eshop.co.kr/images/VBTM73020241113160407097Product01.png', goodsname: '파워네트 홑겹 나염 쉐이퍼(VBTM730)', realmoney: '45,000원', like:false }
  ]

  let wacoalProduct = [
    { img: 'https://www.venus-eshop.co.kr/images/WPT2070S20240814163801476Product01.png', goodsname: '[광고]이터널 클래식 레이스팬티(WPT2070S)', realmoney: '45,000원', like:false },
    { img: 'https://www.venus-eshop.co.kr/images/WPT2070H20240814163741028Product01.png', goodsname: '프렌치 가든 헴팬티(SOPT6845H)', realmoney: '35,000원', like:false },
    { img: 'https://www.venus-eshop.co.kr/images/WBR194820241212132218831Product01.png', goodsname: '러브 글램 더블윙 브라(SBRD455)', realmoney: '36,000원', promotion: 'AW광고제품', like:false },
    { img: 'https://www.venus-eshop.co.kr/images/VBRI64220241115092311928Product08.png', goodsname: '클래식 이즈 뉴 브라 VER.1(VBRI642)', realmoney: '49,000원', like:false },
    { img: 'https://www.venus-eshop.co.kr/images/SBRD45520241104095419257Product07.png', goodsname: '러브 글램 더블윙 브라(SBRD455)', realmoney: '45,000원', like:false },
    { img: 'https://www.venus-eshop.co.kr/images/VBRI64220241115092311928Product08.png', goodsname: '프렌치 가든 헴팬티(SOPT6845H)', realmoney: '35,000원', like:false },
    { img: 'https://www.venus-eshop.co.kr/images/SBRD45520241104095419257Product07.png', goodsname: '러브 글램 더블윙 브라(SBRD455)', realmoney: '36,000원', like:false },
    { img: 'https://www.venus-eshop.co.kr/images/VBRI63020241008101810162Product08.png', goodsname: '비너스 러블리 파스텔 레이스 브라(VBRI642)', realmoney: '35,000원', like:false },
    { img: 'https://www.venus-eshop.co.kr/images/VBR099120240821144145733Product10.png', goodsname: 'SINCE 1954. 아뜰리에2(VBR0991)', realmoney: '83,000원', like:false },
    { img: 'https://www.venus-eshop.co.kr/images/VBTM73020241113160407097Product01.png', goodsname: '파워네트 홑겹 나염 쉐이퍼(VBTM730)', realmoney: '45,000원', like:false }
  ]


  React.useEffect(() => {
    setProduct(venusProduct);
  }, []);

  useEffect(() => {
    // 제품 변경 완료 후 Swiper를 첫 번째 슬라이드로 이동
    if (swiperRef.current) {
      swiperRef.current.slideTo(0, 0); // 첫 번째 슬라이드로 이동
    }

  }, [activeTab]);

  const likeToggle = (index) => {
    event.stopPropagation();
    event.preventDefault();
    setProduct((prevProducts) =>
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
                        goodsname: item.goodsname, realmoney: item.realmoney, promotion: item.promotion, like:item.like
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
