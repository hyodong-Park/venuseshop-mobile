import '../styles/main.css'
import React from 'react'
import StaffReviewForm from './StaffReviewForm';
import TitleWrap from './TitleWrap';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

import circleArrow from '../assets/image/circle-arrow-right.svg';

function StaffReview() {

    let staffReviewList = [
        {img:'https://d1nb1kdtagrict.cloudfront.net/venusstore/ecstaff00220241129181305799StaffReview1.png', productImg:'https://www.venus-eshop.co.kr/images/OBR370220240905171425826Product01.png', title:'에어로쿨 항균&소취 기능성 운동 브라 추천', reviewLink:'#', productLink:'#', brand:'오르화', goodsname:'하이써포트 심리스 브라(OBR3702)', realmoney:'83,000원'},
        {img:'https://d1nb1kdtagrict.cloudfront.net/venusstore/ecstaff00320241212104405147StaffReview1.png', productImg:'https://www.venus-eshop.co.kr/images/OBR591420240705151401970Product06.png', title:'세련된 느낌적인 너낌 뭔지 알죠?', reviewLink:'#', productLink:'#', brand:'오르화', goodsname:'하이서포트 풀메이크업 브라(OBR5914)', realmoney:'125,000원'},
        {img:'https://d1nb1kdtagrict.cloudfront.net/venusstore/solbstaff00120241230083547703StaffReview1.png', productImg:'https://www.venus-eshop.co.kr/images/SBRD45720241205134053474Product07.png', title:'연말 감성 뿜뿜한 프리미엄 부유방 커버 브라!', reviewLink:'#', productLink:'#', brand:'솔브', goodsname:'홀리데이 프리미엄 부유방 커버 브라(SBRD457)', realmoney:'53,000원'},
        {img:'https://d1nb1kdtagrict.cloudfront.net/venusstore/solbstaff00120241230084005586StaffReview1.png', productImg:'https://www.venus-eshop.co.kr/images/SPTD457S20241205134112416Product08.png', title:'섹시한 레이스 팬티를 찾으신다면 *_!', reviewLink:'#', productLink:'#', brand:'솔브', goodsname:'홀리데이 프리미엄 레이스팬티(SPTD457S)', realmoney:'23,000원'},
        {img:'https://d1nb1kdtagrict.cloudfront.net/venusstore/solbstaff00120241230100709081StaffReview1.png', productImg:'https://www.venus-eshop.co.kr/images/SPTD457T20241219140501099Product01.png', title:'특별한날 특별한 감성을 (u‿ฺu✿ฺ)', reviewLink:'#', productLink:'#', brand:'솔브', goodsname:'홀리데이 프리미엄 티팬티(SPTD457T)', realmoney:'23,000원'},
    ]
  
  return (
      <>
          <section>
              <TitleWrap content={{ text: '리뷰가 검증된 상품', type: 'all', subText: '이유있는 추천, 스탭리뷰' }} />
              <Swiper spaceBetween={12} slidesPerView={'auto'} slidesOffsetAfter={20} slidesOffsetBefore={20}>
                  {staffReviewList.map((item, index) => (
                      <SwiperSlide className="staffreviewWrap" style={{ width: '258px' }} key={index}>
                          <StaffReviewForm
                              content={{
                                  img: item.img, productImg: item.productImg, title: item.title, reviewLink: item.reviewLink, productLink: item.productLink, brand: item.brand, goodsname: item.goodsname, realmoney: item.realmoney
                              }}
                          />
                      </SwiperSlide>
                  ))}
                  <SwiperSlide className="slide-more" style={{ width: '100px' }}>
                      <a href={()=>false}>
                          <div>
                              <img src={circleArrow} />
                          </div>
                          <p>전체보기</p>
                      </a>
                  </SwiperSlide>
              </Swiper>
          </section>
      </>
  );
}

export default StaffReview;
