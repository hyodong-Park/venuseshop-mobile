import '../styles/main.css'
import React, { useRef,useState,useEffect } from 'react';
import ProductTypeVertical from './ProductTypeVertical';
import TitleWrap from './TitleWrap';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

import circleArrow from '../assets/image/circle-arrow-right-white.svg';
import moreArrow from '../assets/image/promotion-arrow.svg';
import refresh from '../assets/image/refresh.svg';

import promotionBg1 from '../assets/image/promotion-bg01.jpg';
import promotionBg2 from '../assets/image/promotion-bg02.jpg';


function Promotion() {
    const [index, setIndex] = useState(0);
    const [product, setProduct] = useState([]);
    const [title, setTitle] = useState();

      const swiperRef = useRef(null); // Swiper 인스턴스를 저장할 ref

    let firstPromotion = [
        { img:'https://www.venus-eshop.co.kr/images/VBRS11920231017152937562Product03.png', brand:'비너스', goodsname: '보정용 고탄력 와이어 브라(VBRG620)', realmoney: '77,000원', like:true},
        { img:'https://www.venus-eshop.co.kr/images/VBRS12020210608111057272Product06.png', brand:'비너스', goodsname: '기능성 스포츠팬티(VPTS119H)', realmoney: '21,000원', like:false},
        { img:'https://www.venus-eshop.co.kr/images/VPT0990T20240814163315633Product05.png', brand:'비너스', goodsname: '[광고]아뜰리에 티팬티(VPT0990T)', realmoney: '29,000원', like:true },
        { img:'https://www.venus-eshop.co.kr/images/VBRI64220241115092311928Product08.png', brand:'비너스', goodsname: '클래식 이즈 뉴 브라 VER.1(VBRI642)', realmoney: '49,000원', like:false},
        { img:'https://www.venus-eshop.co.kr/images/SBRD45520241104095419257Product07.png', brand:'비너스', goodsname: '러브 글램 더블윙 브라(SBRD455)', realmoney: '45,000원', like:false},
        { img:'https://www.venus-eshop.co.kr/images/VBRI64220241115092311928Product08.png', brand:'비너스', goodsname: '프렌치 가든 헴팬티(SOPT6845H)', realmoney: '35,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/SBRD45520241104095419257Product07.png', brand:'비너스', goodsname: '러브 글램 더블윙 브라(SBRD455)', realmoney: '36,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/VBRI63020241008101810162Product08.png', brand:'비너스', goodsname: '비너스 러블리 파스텔 레이스 브라(VBRI642)', realmoney: '35,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/VBR099120240821144145733Product10.png', brand:'비너스', goodsname: 'SINCE 1954. 아뜰리에2(VBR0991)', realmoney: '83,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/VBTM73020241113160407097Product01.png', brand:'비너스', goodsname: '파워네트 홑겹 나염 쉐이퍼(VBTM730)', realmoney: '45,000원', like:false }
    ];

    let secondPromotion = [
        { img:'https://www.venus-eshop.co.kr/images/SBRD28820221221103057969Product03.png', brand:'솔브', goodsname: '러브 글램 더블윙 브라(SBRD455)', realmoney: '45,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/SLGE00220240517165218632Product03.png', brand:'솔브', goodsname: '프렌치 가든 헴팬티(SOPT6845H)', realmoney: '35,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/SBRD12320210607105143231Product04.png', brand:'솔브', goodsname: '러브 글램 더블윙 브라(SBRD455)', realmoney: '36,000원', like:false},
        { img:'https://www.venus-eshop.co.kr/images/VBRI64220241115092311928Product08.png', brand:'솔브', goodsname: '클래식 이즈 뉴 브라 VER.1(VBRI642)', realmoney: '49,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/SBRE22020240329145410019Product07.png', brand:'솔브', goodsname: '러브 글램 더블윙 브라(SBRD455)', realmoney: '45,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/VBRI64220241115092311928Product08.png', brand:'솔브', goodsname: '프렌치 가든 헴팬티(SOPT6845H)', realmoney: '35,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/SBRD45520241104095419257Product07.png', brand:'솔브', goodsname: '러브 글램 더블윙 브라(SBRD455)', realmoney: '36,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/SPTD123H20210607110354284Product04.png', brand:'솔브', goodsname: '비너스 러블리 파스텔 레이스 브라(VBRI642)', realmoney: '35,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/VBR099120240821144145733Product10.png', brand:'솔브', goodsname: 'SINCE 1954. 아뜰리에2(VBR0991)', realmoney: '83,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/VBTM73020241113160407097Product01.png', brand:'솔브', goodsname: '파워네트 홑겹 나염 쉐이퍼(VBTM730)', realmoney: '45,000원', like:false }
    ]

    let firstMap = useRef({title:'# 비너스 브이핏라인✌️' , item : firstPromotion, index: 0 , background : promotionBg1});
    let secondMap = useRef({title:'# 프리미엄 보정라인👙' , item : secondPromotion, index: 1 , background : promotionBg2});
 
    let [event, setEvent] = useState(firstMap.current);


    const handleTabClick = (index) => {
        if (index === 0) {
            setEvent(secondMap.current);
        } else if (index === 1) {
            setEvent(firstMap.current);
        }

        if (swiperRef.current) {
            swiperRef.current.slideTo(0, 0); // 첫 번째 슬라이드로 이동
          }
    };

    React.useEffect(() => {
        setProduct(firstPromotion);
        setTitle('# 비너스 브이핏라인✌️');
    }, []);

    
    const likeToggle = (e, index) => {
        e.stopPropagation();
        e.preventDefault();
        setEvent((prevEvent) => ({
            ...prevEvent, // 기존 event 정보 유지
            item: prevEvent.item.map((item, i) =>
                i === index ? { ...item, like: !item.like } : item
            )
        }));
    };


    
    return (
        <>
            <section>
                <TitleWrap content={{ text: '지금 주목할 기획전', type: '' }} />
                <div className="promotionBg" style={{ backgroundImage: 'url(' + event.background + ')' }}>
                    <div className="promotionTitle wrap">
                        <div className="promotionName">{event.title}</div>
                        <a href={()=>false} className="promotionArrow"><img src={moreArrow} /></a>
                    </div>

                    <Swiper spaceBetween={12} slidesPerView={'auto'} slidesOffsetAfter={20} slidesOffsetBefore={20} freeMode={true} modules={[FreeMode]} onSwiper={(swiper) => (swiperRef.current = swiper)}>
                        {event.item.map((item, index) =>
                        (
                            <SwiperSlide className="productVertical" style={{ width: '140px' }} key={index}>
                                <ProductTypeVertical
                                    product={{
                                        img: item.img, brand: item.brand,
                                        goodsname: item.goodsname, realmoney: item.realmoney, like:item.like
                                    }}
                                    likeToggle={(e) => likeToggle(e, index)}
                                />
                            </SwiperSlide>
                        )
                        )}
                        <SwiperSlide className="slide-more white" style={{ width: '100px' }}>
                            <a href={()=>false}>
                                <div>
                                    <img src={circleArrow} />
                                </div>
                                <p>전체보기</p>
                            </a>

                        </SwiperSlide>
                    </Swiper>
                    <div className="promotionMore">
                        <button onClick={() => handleTabClick(event.index)}>기획전 더보기<span>0{event.index + 1}</span><span>02</span><em><img src={refresh}/></em></button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Promotion;
