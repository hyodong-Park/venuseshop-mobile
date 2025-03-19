import '../styles/main.css'
import React, {useEffect, useState} from 'react'
import StaffReviewForm from './StaffReviewForm';
import TitleWrap from './TitleWrap';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

import circleArrow from '../assets/image/circle-arrow-right.svg';
import axios from "axios";

function StaffReview() {


    let [staffReviewList,setStaffReviewList] = useState([]);

    useEffect(() => {

        const instance = axios.create({
            baseURL: 'http://52.79.198.9:8000/eshop/api/',
            // baseURL: 'http://192.168.0.143:8080/eshop/api/',
            timeout: 10000,
        });

        instance.get('/staffreview/main/list')
            .then(response => {

                const staffreview = response.data.data;

                let staffreviewTmp = [];

                for(let i = 0 ; i < staffreview.length; i++) {

                    const data = staffreview[i];

                    const obj = {
                        img :  data.bannerimg,
                        productImg : data.productimg,
                        brand : data.brandname,
                        title : data.title,
                        goodsname : data.goodsname,
                        realmoney : data.rrp.toLocaleString() + '원',
                        reviewLink : '/staffreview/detail/' + data.targetid,
                        productLink : '/api/product/detail/' + data.packid
                    }

                    staffreviewTmp.push(obj);
                    setStaffReviewList(staffreviewTmp)
                }


            })
            .catch(error => {
                console.log(error)
            });

    }, []);
  
  return (
      <>
          <section>
              <TitleWrap content={{ text: '리뷰가 검증된 상품', type: 'all', subText: '이유있는 추천, 스탭리뷰', href:'/staffreview/main/' }} />
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
