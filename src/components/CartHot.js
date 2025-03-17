import '../styles/main.css'
import React, { useState } from 'react'
import ProductTypeVertical from './ProductTypeVertical';
import TitleWrap from './TitleWrap';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

function CartHot() {


    let productArray = [
        { img:'https://www.venus-eshop.co.kr/images/VBRS11920231017152937562Product03.png', brand: '비너스', goodsname: '보정용 고탄력 와이어 브라(VBRG620)', realmoney: '77,000원', like:true },
        { img:'https://www.venus-eshop.co.kr/images/SPTE210H20240405112702068Product08.png', brand: '와코루',  goodsname: '메이크핏 모던 와이어 보정 브라(WBRE005)', realmoney: '79,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/VBRG11420210121125532121Product04.png', brand: '솔브', goodsname: 'BE MY SELF 브라(SBRD123)', realmoney: '36,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/VBR178220240319141959693Product02.png', brand: '비너스', goodsname: '클래식 이즈 뉴 브라 VER.1(VBRI642)', realmoney: '49,000원', like:true },
        { img:'https://www.venus-eshop.co.kr/images/SBRE20320240521141840266Product10.png', brand: '솔브', goodsname: '군살 보정 노와이어 브라 (SBRE203)', realmoney: '23,900원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/DPT0470A20241011105716555Product01.png', brand: '샬루트', goodsname: '오리엔탈 클래식 삼각팬티(DPT0470A)', realmoney: '79,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/VBR098120240326110338962Product05.png', brand: '비너스', goodsname: '플랑플랑 VER.2 브라(VBR0981)', realmoney: '67,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/VBR096520230403103257935Product10.png', brand: '비너스', goodsname: '에어러블 썸머 브라(SVBR0965)', realmoney: '73,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/OBR682820230817164816643Product04.png', brand: '오르화', goodsname: '저중심 물방울 리버 레이스 브라(SOBR6828)', realmoney: '129,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/VPTI64520240422110554701Product03.png', brand: '비너스', goodsname: '빌리티 팬티(SVPTI645)', realmoney: '11,000원' }
    ];

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
                <TitleWrap content={{ text: '장바구니 최다 PICK👍🏻', type: 'update' }} />
                <Swiper spaceBetween={12} slidesPerView={'auto'} slidesOffsetAfter={20} slidesOffsetBefore={20} freeMode={true} modules={[FreeMode]}>
                    {product.map((item, index) => (
                        <SwiperSlide className="productVertical" style={{ width: '140px' }} key={index}>
                            <ProductTypeVertical
                                product={{
                                    img: item.img,
                                    brand: item.brand, goodsname: item.goodsname, realmoney: item.realmoney, salePercent: item.salePercent, saleBefore: item.saleBefore, like:item.like
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

export default CartHot;
