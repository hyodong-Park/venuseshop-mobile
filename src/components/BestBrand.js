import '../styles/main.css'
import React, { useState, useRef, useEffect } from 'react';

import ProductTypeVertical from './ProductTypeVertical';
import TitleWrap from './TitleWrap';
import TabNavCircle from './TabNavCircle';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

import venus from '../assets/image/brand-tab-venus.png';
import solb from '../assets/image/brand-tab-solb.png';
import wacoal from '../assets/image/brand-tab-wacoal.png';
import signature from '../assets/image/brand-tab-signature.png';
import orlfa from '../assets/image/brand-tab-orlfa.png';
import circleArrow from '../assets/image/circle-arrow-right.svg';

function BestBrand() {

    const [activeIndex, setActiveIndex] = useState(0);
    const [product, setProduct] = useState([]); // 현재 표시할 제품 목록 상태
    const swiperRef = useRef(null); // Swiper 인스턴스를 저장할 ref

    const brands = [
        { img: venus, name: '비너스' },
        { img: solb, name: '솔브' },
        { img: wacoal, name: '와코루' },
        { img: signature, name: '시그니처' },
        { img: orlfa, name: '오르화' },
    ];

    const handleTabClick = (index) => {
        setActiveIndex(index);
    
        // 브랜드에 따라 제품 변경
        if (index === 0) {
          setProduct(venusProduct);
        } else if (index === 1) {
          setProduct(solbProduct);
        } else if (index === 2) {
          setProduct(wacoalProduct);
        } else if (index === 3) {
          setProduct(signatureProduct);
        } else if (index === 4) {
          setProduct(orlfaProduct);
        } 

        if (swiperRef.current) {
            swiperRef.current.slideTo(0,0); // 첫 번째 슬라이드로 이동
          }

    
    };

    // const [brandType, setBrandType] = useState(product);

    let venusProduct = [
        { img:'https://www.venus-eshop.co.kr/images/SBRD45520241104095419257Product07.png', brand: '비너스', goodsname: '러브 글램 더블윙 브라(SBRD455)', realmoney: '45,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/VBRI64220241115092311928Product08.png', brand: '비너스', goodsname: '프렌치 가든 헴팬티(SOPT6845H)', realmoney: '35,000원', like:true },
        { img:'https://www.venus-eshop.co.kr/images/SBRD45520241104095419257Product07.png', brand: '비너스', goodsname: '러브 글램 더블윙 브라(SBRD455)', realmoney: '36,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/VBRI64220241115092311928Product08.png', brand: '비너스', goodsname: '클래식 이즈 뉴 브라 VER.1(VBRI642)', realmoney: '49,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/SBRD45520241104095419257Product07.png', brand: '비너스', goodsname: '러브 글램 더블윙 브라(SBRD455)', realmoney: '45,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/VBRI64220241115092311928Product08.png', brand: '비너스', goodsname: '프렌치 가든 헴팬티(SOPT6845H)', realmoney: '35,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/SBRD45520241104095419257Product07.png', brand: '비너스', goodsname: '러브 글램 더블윙 브라(SBRD455)', realmoney: '36,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/VBRI63020241008101810162Product08.png', brand: '비너스', goodsname: '비너스 러블리 파스텔 레이스 브라(VBRI642)', realmoney: '35,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/VBR099120240821144145733Product10.png', brand: '비너스', goodsname: 'SINCE 1954. 아뜰리에2(VBR0991)', realmoney: '83,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/VBTM73020241113160407097Product01.png', brand: '비너스', goodsname: '파워네트 홑겹 나염 쉐이퍼(VBTM730)', realmoney: '45,000원', like:false }
    ];

    let solbProduct = [
        { img:'https://www.venus-eshop.co.kr/images/SBRD28820221221103057969Product03.png', brand: '솔브', goodsname: '러브 글램 더블윙 브라(SBRD455)', realmoney: '45,000원', like:true },
        { img:'https://www.venus-eshop.co.kr/images/SLGE00220240517165218632Product03.png', brand: '솔브', goodsname: '프렌치 가든 헴팬티(SOPT6845H)', realmoney: '35,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/SBRD12320210607105143231Product04.png', brand: '솔브', goodsname: '러브 글램 더블윙 브라(SBRD455)', realmoney: '36,000원', like:true },
        { img:'https://www.venus-eshop.co.kr/images/VBRI64220241115092311928Product08.png', brand: '솔브', goodsname: '클래식 이즈 뉴 브라 VER.1(VBRI642)', realmoney: '49,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/SBRE22020240329145410019Product07.png', brand: '솔브', goodsname: '러브 글램 더블윙 브라(SBRD455)', realmoney: '45,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/VBRI64220241115092311928Product08.png', brand: '솔브', goodsname: '프렌치 가든 헴팬티(SOPT6845H)', realmoney: '35,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/SBRD45520241104095419257Product07.png', brand: '솔브', goodsname: '러브 글램 더블윙 브라(SBRD455)', realmoney: '36,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/SPTD123H20210607110354284Product04.png', brand: '솔브', goodsname: '비너스 러블리 파스텔 레이스 브라(VBRI642)', realmoney: '35,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/VBR099120240821144145733Product10.png', brand: '솔브', goodsname: 'SINCE 1954. 아뜰리에2(VBR0991)', realmoney: '83,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/VBTM73020241113160407097Product01.png', brand: '솔브', goodsname: '파워네트 홑겹 나염 쉐이퍼(VBTM730)', realmoney: '45,000원', like:false }
    ]

    let wacoalProduct = [
        { img:'https://www.venus-eshop.co.kr/images/WPT2070S20240814163801476Product01.png', brand: '와코루', goodsname: '[광고]이터널 클래식 레이스팬티(WPT2070S)', realmoney: '45,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/WPT2070H20240814163741028Product01.png', brand: '와코루', goodsname: '프렌치 가든 헴팬티(SOPT6845H)', realmoney: '35,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/WBR194820241212132218831Product01.png', brand: '와코루', goodsname: '러브 글램 더블윙 브라(SBRD455)', realmoney: '36,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/VBRI64220241115092311928Product08.png', brand: '와코루', goodsname: '클래식 이즈 뉴 브라 VER.1(VBRI642)', realmoney: '49,000원', like:true },
        { img:'https://www.venus-eshop.co.kr/images/SBRD45520241104095419257Product07.png', brand: '와코루', goodsname: '러브 글램 더블윙 브라(SBRD455)', realmoney: '45,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/VBRI64220241115092311928Product08.png', brand: '와코루', goodsname: '프렌치 가든 헴팬티(SOPT6845H)', realmoney: '35,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/SBRD45520241104095419257Product07.png', brand: '와코루', goodsname: '러브 글램 더블윙 브라(SBRD455)', realmoney: '36,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/VBRI63020241008101810162Product08.png', brand: '와코루', goodsname: '비너스 러블리 파스텔 레이스 브라(VBRI642)', realmoney: '35,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/VBR099120240821144145733Product10.png', brand: '와코루', goodsname: 'SINCE 1954. 아뜰리에2(VBR0991)', realmoney: '83,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/VBTM73020241113160407097Product01.png', brand: '와코루', goodsname: '파워네트 홑겹 나염 쉐이퍼(VBTM730)', realmoney: '45,000원', like:false }
    ]

    let signatureProduct = [
        { img:'https://www.venus-eshop.co.kr/images/VPTI643H20230417152055752Product03.png', brand: '솔브', goodsname: '클래식 이즈 뉴 헴팬티 VER.2(VPTI643H)', realmoney: '13,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/YBJE002S20240502165537136Product04.png', brand: '컴핏비너스', goodsname: '투웨이 밴딩 반바지 오렌지 (YBJE002S)', realmoney: '29,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/8MPE011T20240308095623668Product01.png', brand: '스타우트', goodsname: '전용제품 퓨징 남성 드로즈(8MPE011T)', realmoney: '69,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/KBRE16520230619110945812Product02.png', brand: '아르보', goodsname: '유넥 심리스 브라 (KBRE165)', realmoney: '16,900원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/WBRE00420220419112024524Product07.png', brand: '와코루', goodsname: 'NEW 볼륨 모던 보정 완벽핏 브라(WBRE004)', realmoney: '59,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/VBRQ50820200204140815055Product07.png', brand: '비너스', goodsname: '비너스 몰드 스타일 데일리 브라(VBRQ508)', realmoney: '35,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/SKBRS23420240524113149272Product02.png', brand: '아르보', goodsname: '더블업 와이어 브라 A-B컵 (SKBRS234)', realmoney: '16,900원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/SEPE002F20221024155323878Product01.png', brand: '솔브', goodsname: '극세사 하트무늬 여성잠옷바지 (SEPE002F)', realmoney: '14,900원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/SKBRS23520240308102102884Product01.png', brand: '아르보', goodsname: '더블업 노와이어 브라 A-B컵 (SKBRS235)', realmoney: '16,900원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/SBRE20220241017101954461Product03.png', brand: '솔브', goodsname: '군살 커버 큰컵 와이어 언니브라 (SBRE202)', realmoney: '23,900원', like:false }
    ]

    let orlfaProduct = [
        { img:'https://www.venus-eshop.co.kr/images/OBR591720241219134842252Product01.png', brand: '오르화', goodsname: '크리미 풀컵 패드 브라(OBR5917)', realmoney: '133,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/OBR592120241218153352277Product09.png', brand: '오르화', goodsname: '로제 레이스 커버업 패드 브라(OBR5921)', realmoney: '147,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/OBR684720241128140415290Product06.png', brand: '오르화', goodsname: '딥브이 빵빵이 브라(OBR6847)', realmoney: '115,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/OBR592520241128134952052Product01.png', brand: '오르화', goodsname: '우디 컴포트 엣지 와이어 브라(OBR5925)', realmoney: '149,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/OBR321720241129145149370Product04.png', brand: '오르화', goodsname: '저중심 커버업 노와이어 브라(OBR3217)', realmoney: '117,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/OBR786020241128134716158Product05.png', brand: '오르화', goodsname: '풀커버리지 홑겹 브라(OBR7860)', realmoney: '132,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/OBR321620231221164053494Product08.png', brand: '오르화', goodsname: '풀사이드 커버업 노와이어 브라(OBR3216)', realmoney: '117,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/OBR786120241106170926888Product04.png', brand: '오르화', goodsname: '엔젤망 섹시 풀컵 브라(OBR7861)', realmoney: '132,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/OBR591820240122104332503Product01.png', brand: '오르화', goodsname: '티아라 오너먼트 3D패드 브라(OBR5918)', realmoney: '146,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/OBR783220240418134750537Product06.png', brand: '오르화', goodsname: '클래식 엔젤망 홑겹 브라(OBR7832)', realmoney: '129,000원', like:false }
    ]


    React.useEffect(() => {
        setProduct(venusProduct);
      }, []);
      
    //   useEffect(() => {
    //     // 제품 변경 완료 후 Swiper를 첫 번째 슬라이드로 이동
    //     if (swiperRef.current) {
    //       swiperRef.current.slideTo(0,0); // 첫 번째 슬라이드로 이동
    //     }

    //   }, [product]); // product 상태 변경 시 실행

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
                <TitleWrap content={{ text: '인기 브랜드관', type: 'all' }} />
                <div className="tabNavCircle">
                    <Swiper spaceBetween={10} slidesPerView={'auto'} slidesOffsetAfter={20} slidesOffsetBefore={20} freeMode={true} modules={[FreeMode]}>
                        {brands.map((brand, index) => (
                            <SwiperSlide style={{ width: 64 }} key={index}>
                                <TabNavCircle
                                    key={index}
                                    content={{
                                        ...brand,
                                        on: activeIndex === index, // 현재 활성화된 버튼인지 여부 전달
                                    }}
                                    onClick={() => {
                                        handleTabClick(index);
                                    }}

                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <Swiper spaceBetween={12} slidesPerView={'auto'} slidesOffsetAfter={20} slidesOffsetBefore={20} freeMode={true} modules={[FreeMode]} onSwiper={(swiper) => (swiperRef.current = swiper)}>

                    {product.map((item, index) =>
                    (
                        <SwiperSlide className="productVertical" style={{ width: '140px' }} key={index}>
                            <ProductTypeVertical
                                product={{...item,
                                    img: item.img,
                                    brand: item.brand, goodsname: item.goodsname, realmoney: item.realmoney, like:item.like
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
                            <p>더보기</p>
                        </a>

                    </SwiperSlide>
                </Swiper>
            </section>

        </>
    );
}

export default BestBrand;
