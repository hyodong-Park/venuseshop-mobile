import '../styles/main.css'
import React, { useState } from 'react'
import ProductTypeVertical from './ProductTypeVertical';
import TitleWrap from './TitleWrap';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

function HotProdduct() {

    let productArray = [
        { img:'https://www.venus-eshop.co.kr/images/VBR098020240202172330640Product10.png', brand: '비너스', goodsname: '플랑플랑 브라(VBR0980)', realmoney: '87,000원', like:true },
        { img:'https://www.venus-eshop.co.kr/images/VBR099120240821144145733Product10.png', brand: '비너스',  goodsname: 'SINCE 1954. 아뜰리에2(VBR0991)', realmoney: '83,000원', salePercent:'56%', saleBefore:'35,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/VPT0990T20240814163315633Product05.png', brand: '비너스', goodsname: '[광고]아뜰리에 티팬티(VPT0990T)', realmoney: '29,000원', like:true },
        { img:'https://www.venus-eshop.co.kr/images/OPT5916T20241004105354950Product01.png', brand: '오르화', goodsname: '프렌치 가든 헴팬티(SOPT6845H)', realmoney: '49,000원', salePercent:'56%', saleBefore:'35,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/SLGE00220240517165218632Product03.png', brand: '솔브', goodsname: '러브 글램 더블윙 브라(SBRD455)', realmoney: '36,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/VBRI64220241115092311928Product08.png', brand: '비너스', goodsname: '클래식 이즈 뉴 브라 VER.1(VBRI642)', realmoney: '49,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/SBRD28820221221103057969Product03.png', brand: '솔브', goodsname: '[인기] 베이직 브라 업그레이드 버전 (SBRD288)', realmoney: '29,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/SBRD12320210607105143231Product04.png', brand: '솔브', goodsname: 'BE MY SELF 브라(SBRD123)', realmoney: '37,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/WBRE00520241017103700230Product05.png', brand: '와코루', goodsname: '메이크핏 모던 와이어 보정 브라(WBRE005)', realmoney: '79,000원', like:false },
        { img:'https://www.venus-eshop.co.kr/images/VBTM73020241113160407097Product01.png', brand: '비너스', goodsname: '파워네트 홑겹 나염 쉐이퍼(VBTM730)', realmoney: '45,000원', like:false }
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
              <TitleWrap content={{ text: '조회 급상승중인 아이템⚡', type: 'update' }} />
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

export default HotProdduct;
