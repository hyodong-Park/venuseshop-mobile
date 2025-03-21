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

import {baseApi} from "../api/axiosInstance";


function Promotion() {

    useEffect(() => {

        baseApi.get('/event/main/list')
            .then(response => {
                const datalist = response.data.data;

                let promotion = [];

                for(let i = 0 ; i < datalist.length; i++) {

                    const data = datalist[i];

                    const obj = {
                        title: data.title,
                        item: data.productlist.slice(0, 10),
                        targetid : data.targetid,
                        index : i,
                        background : data.bannerimg
                    }
                    promotion.push(obj)
                }

                promotionMap.current = promotion;

                setEvent(promotionMap.current[0]);

            })
            .catch(error => {
                console.log(error)
            });

    }, []);

    const swiperRef = useRef(null); // Swiper 인스턴스를 저장할 ref

    let promotionMap = useRef([]);

    const listcount = promotionMap.current.length

    let [event, setEvent] = useState(promotionMap);


    const handleTabClick = (index) => {
        const list = promotionMap.current;
        let nextIndex;

        if (index + 1 >= list.length) {
            nextIndex = 0; // 마지막이면 처음으로
        } else {
            nextIndex = index + 1; // 그 외는 다음으로
        }

        setEvent(list[nextIndex]);

        if (swiperRef.current) {
            swiperRef.current.slideTo(0, 0);
        }
    };

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
                        {event.item?.map((item, index) =>
                        (
                            <SwiperSlide className="productVertical" style={{ width: '140px' }} key={index}>
                                <ProductTypeVertical
                                    product={{
                                        img: 'https://www.venus-eshop.co.kr/images/'+ item.goods_image, brand: item.info_brand,
                                        goodsname: item.goods_model, realmoney: item.price, like: item.wish, packid:item.pack_content_id
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
                        <button onClick={() => handleTabClick(event.index)}>기획전 더보기<span>0{event.index + 1}</span><span>{String(listcount).padStart(2, '0')}</span><em><img src={refresh}/></em></button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Promotion;
