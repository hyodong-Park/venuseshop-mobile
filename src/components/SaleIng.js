import '../styles/main.css'
import React, { useState } from 'react'
import ProductTypeVertical from './ProductTypeVertical';
import TitleWrap from './TitleWrap';
import { Swiper, SwiperSlide } from "swiper/react";
import circleArrow from '../assets/image/circle-arrow-right.svg';
import 'swiper/css';

function SaleIng() {

    let productArray = [
        { img:'https://www.venus-eshop.co.kr/images/OBR591720241219134842252Product02.png', brand: '오르화', goodsname: '크리미 풀컵 패드 브라(OBR5917)', realmoney: '55,000원', salePercent: '56%', saleBefore: '133,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/OPT5917S20241219135701242Product01.png', brand: '오르화', goodsname: '크리미 레이스 팬티(OPT5917S)', realmoney: '27,000원', salePercent: '47%', saleBefore: '52,000원', like:true },
        { img:'https://www.venus-eshop.co.kr/images/OBR592120241218153352277Product01.png', brand: '오르화', goodsname: '로제 레이스 커버업 패드 브라(OBR5921)', realmoney: '65,000원', salePercent: '55%', saleBefore: '147,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/OPT5921S20241218153548017Product02.png', brand: '오르화', goodsname: '로제 레이스 팬티(OPT5921S)', realmoney: '35,000원', salePercent: '56%', saleBefore: '47,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/OBR592520241128134952052Product01.png', brand: '오르화', goodsname: '우디 컴포트 엣지 와이어 브라(OBR5925)', realmoney: '35,000원', salePercent: '56%', saleBefore: '149,000원', like:true },
        { img:'https://www.venus-eshop.co.kr/images/OPT5925H20241128152427297Product02.png', brand: '오르화', goodsname: '우디 컴포트 엣지 헴 팬티(OPT5925H)', realmoney: '35,000원', salePercent: '56%', saleBefore: '57,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/OBR786020241128134716158Product02.png', brand: '오르화', goodsname: '풀커버리지 홑겹 브라(OBR7860)', realmoney: '38,000원', salePercent: '53%', saleBefore: '132,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/OPT7859S20240627162402019Product02.png', brand: '오르화', goodsname: '데미 레이스 팬티(OPT7859S)', realmoney: '35,000원', salePercent: '59%', saleBefore: '52,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/OBR321720241129145149370Product02.png', brand: '오르화', goodsname: '풀커버리지 홑겹 브라(OBR7860)', realmoney: '35,000원', salePercent: '51%', saleBefore: '132,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/OBR786120241106170926888Product09.png', brand: '오르화', goodsname: '데미 레이스 팬티(OPT7859S)', realmoney: '35,000원', salePercent: '56%', saleBefore: '52,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/OBR783220240418134750537Product06.png', brand: '오르화', goodsname: '풀커버리지 홑겹 브라(OBR7860)', realmoney: '35,000원', salePercent: '56%', saleBefore: '132,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/OBR685120240529163859575Product04.png', brand: '오르화', goodsname: '데미 레이스 팬티(OPT7859S)', realmoney: '35,000원', salePercent: '56%', saleBefore: '52,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/VPT0990H20240814163222826Product04.png', brand: '비너스', goodsname: '[광고]아뜰리에 헴팬티(VPT0990H)', realmoney: '29,000원', salePercent: '53%', saleBefore: '35,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/VPT0990A20240814163115907Product06.png', brand: '비너스', goodsname: '[광고]아뜰리에 헴팬티(VPT0990H)', realmoney: '29,000원', salePercent: '56%', saleBefore: '35,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/VFS099020240814164148943Product01.png', brand: '비너스', goodsname: '아뜰리에 풀슬립(VFS0990)', realmoney: '35,000원', salePercent: '56%', saleBefore: '139,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/VPT0990S20240814163250468Product04.png', brand: '비너스', goodsname: '[광고]아뜰리에 레이스팬티(VPT0990S)', realmoney: '31,000원', salePercent: '56%', saleBefore: '35,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/VGBM54120250108102730510Product01.png', brand: '비너스', goodsname: '문직사틴 몰드 거들브라(VGBM541)', realmoney: '43,000원', salePercent: '56%', saleBefore: '93,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/VGBM15520241226151127366Product01.png', brand: '비너스', goodsname: '문직사틴 랩스타일 거들브라(VGBM155)', realmoney: '44,500원', salePercent: '52%', saleBefore: '89,000원', like:true },
        { img:'https://www.venus-eshop.co.kr/images/VBR098020240202172330640Product10.png', brand: '비너스', goodsname: '플랑플랑 브라(VBR0980)', realmoney: '41,000원', salePercent: '51%', saleBefore: '83,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/VGBM14020250106101322405Product01.png', brand: '비너스', goodsname: '풀사이드 스트레치 문직샤틴 거들브라(VGBM140)', realmoney: '38,000원', salePercent: '56%', saleBefore: '99,000원', like:false }
    ];

    const [product, setProduct] = useState(productArray)

    const likeToggle = (index) => {
        event.stopPropagation();
        event.preventDefault();

        setProduct((prev) =>
            prev.map((item, i) =>
                i === index ? { ...item, like: !item.like } : item
            )
        );

        // console.log(productArray[index].like)


    };

   

    return (
        <>
            <section>
                <TitleWrap content={{ text: '세일중', type: 'all' }} />
                <Swiper spaceBetween={12} slidesPerView={'auto'} style={{ paddingLeft: 20, paddingRight: 20 }} className="product-twin saleIng">
                    {Array.from({ length: Math.ceil(productArray.length / 2) }, (_, i) => (
                        <SwiperSlide key={i} className="productVertical" style={{ width: 140 }}>
                            {productArray.slice(i * 2, i * 2 + 2).map((item, idx) => (
                                <ProductTypeVertical
                                    key={idx}
                                    product={item}
                                    likeToggle={() => likeToggle(idx)}
                                />
                            
                            ))}
                        </SwiperSlide>
                    ))}
                    <SwiperSlide className="slide-more" style={{ width: '100px', alignSelf: 'auto', height: 'initial' }}>
                        <a href={() => false}>
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

export default SaleIng;
