import '../styles/main.css'
import React, { useState, useRef } from 'react';
import ProductTypeHorizon from './ProductTypeHorizon';
import TitleWrap from './TitleWrap';
import TabNav from './TabNav';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

function WeeklyNew() {

    const [activeIndex, setActiveIndex] = useState(0); // 현재 활성화된 슬라이드 인덱스 관리
    const swiperRef = useRef(null); // Swiper 인스턴스 참조

    const tabToSlideMap = [0, 3];
    const slideToTabMap = { 0: 0, 1: 0, 2: 0, 3: 1, 4: 1 };


    const handleTabClick = (tabIndex) => {
        setActiveIndex(tabIndex);
        if (swiperRef.current) {
            swiperRef.current.slideTo(tabToSlideMap[tabIndex]); // 탭 인덱스에 매핑된 슬라이드로 이동
        }
    };

    const handleSlideChange = (swiper) => {
        const currentSlide = swiper.activeIndex;
        setActiveIndex(slideToTabMap[currentSlide] || 0); // 슬라이드에 매핑된 탭 버튼 활성화
    };

    let woman1 = [
        {img: 'https://www.venus-eshop.co.kr/images/VBRI64220241115092311928Product08.png', brand:'비너스', goodsname:'클래식 이즈 뉴 브라 VER.1(VBRI642)', realmoney:'49,000원', promotion:'#매끄러운라인#편안한착용감#소프트한촉감', like:true},
        {img: 'https://www.venus-eshop.co.kr/images/SBRD45520241104095419257Product07.png', brand:'솔브', goodsname:'러브 글램 더블윙 브라(SBRD455)', realmoney:'45,000원', promotion:'#부유방커버#레이스스타일#홀리데이시즌', like:false},
        {img: 'https://www.venus-eshop.co.kr/images/VBR098120240326110338962Product05.png', brand:'솔브', goodsname:'풀컵 부유방 보정브라(VBRQ863)', realmoney:'53,000원', promotion:'#복고풍럭셔리#화려한티팬티#연말무드', like:false},
        {img: 'https://www.venus-eshop.co.kr/images/VPT098120240326111201637Product04.png', brand:'솔브', goodsname:'BE MY SELF 브라(SBRD123)', realmoney:'45,000원', promotion:'#편안한착용감#부드러운소재#선물용으로딱#연말무드', like:false},
    ]
    
    let woman2 = [
        {img: 'https://www.venus-eshop.co.kr/images/WLGC407R20241205150225262Product01.png', brand:'와코루', goodsname:'오리엔탈 클래식 컵란쥬(WLGC407R)', realmoney:'218,000원', promotion:'#고풍스러움#울오버레이스#자수포인트', like:false},
        {img: 'https://www.venus-eshop.co.kr/images/VGBM12220250109110617723Product04.png', brand:'비너스', goodsname:'레이스 슬림 패드 거들 브라(VGBM122)', realmoney:'89,000원', promotion:'#탄탄한패드#편안한착용감#우수한보정', like:false},
        {img: 'https://www.venus-eshop.co.kr/images/VGBM54120250108102730510Product04.png', brand:'비너스', goodsname:'문직사틴 몰드 거들브라(VGBM541)', realmoney:'93,000원', promotion:'#큰사이즈보정#편안한착용감#매끈한실루엣', like:false},
        {img: 'https://www.venus-eshop.co.kr/images/VGRP141S20250108103252006Product01.png', brand:'비너스', goodsname:'웨이브헴 문직사틴 힙패드 삼각 거들(VGRP141S)', realmoney:'73,000원', promotion:'#애플힙완성#힙패드탈착가능#우수한보정효과', like:false}
    ]

    let woman3 = [
        {img: 'https://www.venus-eshop.co.kr/images/DPT0452A20250102142525348Product01.png', brand:'샬루트', goodsname:'프리미엄 레이스 삼각팬티(DPT0452A)', realmoney:'89,000원', promotion:'#럭셔리#화려한레이스#편안한착용감', like:false},
        {img: 'https://www.venus-eshop.co.kr/images/DPT0439T20250102143153349Product01.png', brand:'샬루트', goodsname:'올오버 레이스 프리미엄 티팬티(DPT0439T)', realmoney:'76,000원', promotion:'#모티프#화려함#옆선이중라인', like:false},
        {img: 'https://www.venus-eshop.co.kr/images/VPT659420250102143529516Product01.png', brand:'비너스', goodsname:'면 50수 수채화 꽃 나염 부인군 팬티(VPT6594)', realmoney:'19,000원', promotion:'#면100%#부드러운터치감#넉넉한밑위길이', like:false},
        {img: 'https://www.venus-eshop.co.kr/images/WLG2490S20250102144343850Product01.png', brand:'와코루', goodsname:'폴리기모 베이직 9부 내의세트(WLG2490S)', realmoney:'89,000원', promotion:'#따뜻함#겨울필수템#9부장내의', like:false}
    ]

    let man1 = [
        {img: 'https://www.venus-eshop.co.kr/images/WMV2410A20250108105255892Product01.png', brand:'와코루', goodsname:'마이크로모달 베이직 스타일 반팔 런닝(WMV2410A)', realmoney:'59,000원', promotion:'#부드러움#뛰어난신축성#베이직한스타일', like:false},
        {img: 'https://www.venus-eshop.co.kr/images/WMP240020250108104925226Product01.png', brand:'와코루', goodsname:'폴리스판 톤온톤 기하학 나염 드로즈(WMP2400)', realmoney:'42,000원', promotion:'#뛰어난신축성#기하학패턴#화사한분위기', like:false},
        {img: 'https://www.venus-eshop.co.kr/images/WMP540720250108104540425Product01.png', brand:'와코루', goodsname:'면70수 모던 페이즐리 나염 트렁크(WMP5407)', realmoney:'52,000원', promotion:'#페이즐리#뛰어난통기성#면100%', like:false},
        {img: 'https://www.venus-eshop.co.kr/images/VMP194320250108101233924Product02.png', brand:'비너스', goodsname:'면80수 주자 부엉이 나염 트렁크(VMP1943)', realmoney:'37,000원', promotion:'#면100%#부드러운터치감#우수한땀흡수력', like:false}
    ]

    let man2 = [
        {img: 'https://www.venus-eshop.co.kr/images/WMP2410V20250102143550237Product01.png', brand:'와코루', goodsname:'100수 스판 솔리드 드로즈(WMP2410V)', realmoney:'38,000원', promotion:'#마이크로모달#부드러운촉감#뛰어난신축성', like:false},
        {img: 'https://www.venus-eshop.co.kr/images/VMP1789L20250102143206817Product01.png', brand:'비너스', goodsname:'코트나 기모 체크나염 남성 바지(VMP1789L)', realmoney:'65,000원', promotion:'#부드러움#스판소재#따뜻함', like:false},
        {img: 'https://www.venus-eshop.co.kr/images/VMPQ15920241219135549138Product01.png', brand:'비너스', goodsname:'면60수 주자 사선나염 트렁크(VMPQ159)', realmoney:'22,000원', promotion:'#땀흡수#쾌적함#은은한광택감', like:false},
        {img: 'https://www.venus-eshop.co.kr/images/VMP193220241219135254783Product01.png', brand:'비너스', goodsname:'면60수 주자 심플 잔나염 트렁크(VMP1932)', realmoney:'37,000원', promotion:'#심플함#잔나염#쾌적함', like:false}
    ]


    return (
        <>
            <section>
                <TitleWrap content={{ text: '금주의 ', highlight: '신상품', type: 'all', subText: '남들보다 빠르게 신상 PICK' }} />
                <TabNav activeIndex={activeIndex} onTabClick={handleTabClick} type={'new'} />
                <div>
                    <Swiper spaceBetween={30} slidesPerView={1} onSlideChange={(swiper) => handleSlideChange(swiper)} style={{ paddingLeft: 20, paddingRight: '12%' }} className="sub-hashtag medium" onSwiper={(swiper) => (swiperRef.current = swiper)}>
                        <SwiperSlide>
                            {woman1.map((item, index) => (
                                <ProductTypeHorizon
                                    product={{
                                        img: item.img, brand: item.brand, goodsname: item.goodsname, realmoney: item.realmoney, promotion: item.promotion, like:item.like
                                    }}
                                    key={index}
                                />
                            ))}
                        </SwiperSlide>
                        <SwiperSlide>
                            {woman2.map((item, index) => (
                                <ProductTypeHorizon
                                    product={{
                                        img: item.img, brand: item.brand, goodsname: item.goodsname, realmoney: item.realmoney, promotion: item.promotion, like:item.like
                                    }}
                                    key={index}
                                />
                            ))}
                        </SwiperSlide>
                        <SwiperSlide>
                            {woman3.map((item, index) => (
                                <ProductTypeHorizon
                                    product={{
                                        img: item.img, brand: item.brand, goodsname: item.goodsname, realmoney: item.realmoney, promotion: item.promotion, like:item.like
                                    }}
                                    key={index}
                                />
                            ))}
                        </SwiperSlide>
                        <SwiperSlide>
                            {man1.map((item, index) => (
                                <ProductTypeHorizon
                                    product={{
                                        img: item.img, brand: item.brand, goodsname: item.goodsname, realmoney: item.realmoney, promotion: item.promotion, like:item.like
                                    }}
                                    key={index}
                                />
                            ))}
                        </SwiperSlide>
                        <SwiperSlide>
                            {man2.map((item, index) => (
                                <ProductTypeHorizon
                                    product={{
                                        img: item.img, brand: item.brand, goodsname: item.goodsname, realmoney: item.realmoney, promotion: item.promotion, like:item.like
                                    }}
                                    key={index}
                                />
                            ))}
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>
    );
}

export default WeeklyNew;
