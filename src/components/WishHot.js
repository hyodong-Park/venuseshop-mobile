import '../styles/main.css'
import React, { useState } from 'react'
import ProductTypeVertical from './ProductTypeVertical';
import TitleWrap from './TitleWrap';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

function WishHot() {

    let productArray = [
        {img: 'https://www.venus-eshop.co.kr/images/VBRS11920231017152937562Product03.png', brand:'비너스', goodsname:'보정용 고탄력 와이어 브라(VBRG620)', realmoney:'77,000원', like:false},
        {img: 'https://www.venus-eshop.co.kr/images/SPTE210H20240405112702068Product08.png', brand:'와코루', goodsname:'메이크핏 모던 와이어 보정 브라(WBRE005)', realmoney:'79,900원', like:false},
        {img: 'https://www.venus-eshop.co.kr/images/VBRG11420210121125532121Product04.png', brand:'솔브', goodsname:'BE MY SELF 브라(SBRD123)', realmoney:'36,000원', like:false},
        {img: 'https://www.venus-eshop.co.kr/images/VBR178220240319141959693Product02.png', brand:'비너스', goodsname:'클래식 이즈 뉴 브라 VER.1(VBRI642)', realmoney:'49,900원', like:false},
        {img: 'https://www.venus-eshop.co.kr/images/VGBM53020240705151647996Product01.png', brand:'비너스', goodsname:'에어본 슬림 보정 브라(VGBM530)', realmoney:'91,000원', like:false},
        {img: 'https://www.venus-eshop.co.kr/images/SPTE230C20240403161236931Product04.png', brand:'솔브', goodsname:'아랫배 커버 맥시팬티(SPTE230C)', realmoney:'6,900원', like:false},
        {img: 'https://www.venus-eshop.co.kr/images/SBRE22020240329145410019Product07.png', brand:'솔브', goodsname:'올라운더 더블 다운핏 브라(SBRE220)', realmoney:'16,900원', like:false},
        {img: 'https://www.venus-eshop.co.kr/images/SBRD45120240802114754519Product03.png', brand:'솔브', goodsname:'[광고] 어텀 베리떼 믹스본 브라(SBRD451)', realmoney:'43,000원', like:false},
        {img: 'https://www.venus-eshop.co.kr/images/VBR098020240202172330640Product10.png', brand:'비너스', goodsname:'플랑플랑 브라(VBR0980)', realmoney:'83,000원', like:false},
        {img: 'https://www.venus-eshop.co.kr/images/VBRI64620240404132536763Product04.png', brand:'비너스', goodsname:'프리티 노와이어 브라(VBRI646)', realmoney:'47,000원', like:false}
    ]

            let [product,setProduct] = useState(productArray);
        
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
                <TitleWrap content={{ text: '관심폭발 찜하기 인기템🔥', type: 'update' }} />
                <Swiper spaceBetween={12} slidesPerView={'auto'} slidesOffsetAfter={20} slidesOffsetBefore={20} freeMode={true} modules={[FreeMode]}>
                    {product.map((item, index) => (
                        <SwiperSlide className="productVertical" style={{ width: '140px' }} key={index}>
                            <ProductTypeVertical
                                product={{
                                    img: item.img, brand: item.brand, goodsname: item.goodsname, realmoney: item.realmoney, like:item.like
                                }}
                                likeToggle={() => likeToggle(index)}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </>
    );
}

export default WishHot;
