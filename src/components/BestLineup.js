import '../styles/main.css'
import React, { useState } from 'react'
import ProductTypeVertical from './ProductTypeVertical';
import TitleWrap from './TitleWrap';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

function BestLineup() {

    let productArray = [
        {img: 'https://www.venus-eshop.co.kr/images/VBRI63120241008101249757Product10.png', brand:'비너스', goodsname:'NEW 보정 커버  튤레이스 브라(VBRI631)', realmoney:'35,000원', like:false},
        {img: 'https://www.venus-eshop.co.kr/images/SBRE23020240403161207911Product08.png', brand:'솔브', goodsname:'빅사이즈 부유방 커버브라(SBRE230)', realmoney:'16,900원', like:false},
        {img: 'https://www.venus-eshop.co.kr/images/VBR099020250121112145756Product05.png', brand:'비너스', goodsname:'SINCE 1954. 아뜰리에 (VBR0990)', realmoney:'85,000원', like:true},
        {img: 'https://www.venus-eshop.co.kr/images/YBRE02120241025171309876Product07.png', brand:'비너스', goodsname:'저중심 노와이어 브라(YBRE021)', realmoney:'22,900원', like:false},
        {img: 'https://www.venus-eshop.co.kr/images/YPTE020H20241025171238836Product03.png', brand:'컴핏비너스', goodsname:'이지피지 헤링본 팬티(YPTE020H)', realmoney:'79,000원', like:true},
        {img: 'https://www.venus-eshop.co.kr/images/OBR682820230817164816643Product04.png', brand:'오르화', goodsname:'저중심 물방울 리버 레이스 브라(SOBR6828)', realmoney:'129,000원', like:false},
        {img: 'https://www.venus-eshop.co.kr/images/OPT6829S20230707133844088Product02.png', brand:'오르화', goodsname:'초경량 슬림 레이스 팬티(SOPT6829S)', realmoney:'43,000원', like:false},
        {img: 'https://www.venus-eshop.co.kr/images/VBR098120240326110338962Product05.png', brand:'비너스', goodsname:'플랑플랑 VER.2 브라(VBR0981)', realmoney:'67,000원', like:false},
        {img: 'https://www.venus-eshop.co.kr/images/SBRD45720241205134053474Product07.png', brand:'솔브', goodsname:'홀리데이 프리미엄 부유방 커버 브라(SBRD457)', realmoney:'53,000원', like:false},
        {img: 'https://www.venus-eshop.co.kr/images/VPTI642H20230417145604512Product01.png', brand:'비너스', goodsname:'클래식 이즈 뉴 헴팬티 VER.1(VPTI642H)', realmoney:'13,000원', like:false}
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
              <TitleWrap content={{ text: '실시간 구매 BEST 라인업🏆', type: 'update' }} />
              {/* <div className="product-scrollWrap"> */}
              <Swiper spaceBetween={12} slidesPerView={'auto'} slidesOffsetAfter={20} slidesOffsetBefore={20} freeMode={true} modules={[FreeMode]} /*resistanceRatio={0.5} touchRatio={0.75}*/>
                  {product.map((item, index) => (
                      <SwiperSlide className="productVertical" style={{ width: '140px' }} key={index}>
                          <ProductTypeVertical
                        //   <ProductTypeVertical key={index} style={{width:140}}
                              product={{
                                  img: item.img, brand: item.brand, goodsname: item.goodsname, realmoney: item.realmoney, like:item.like
                              }}
                              likeToggle={() => likeToggle(index)}
                          />
                    </SwiperSlide>
                  ))}
              </Swiper>
              {/* </div> */}
          </section>
      </>
  );
}

export default BestLineup;
