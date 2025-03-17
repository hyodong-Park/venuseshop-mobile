import '../styles/main.css'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import banner_1 from '../assets/image/minibanner_01.jpg';
import banner_2 from '../assets/image/minibanner_02.jpg';

function MiniBanner() {

    let bannerList = [
        { src: banner_1},
        { src: banner_2},
        // { src: banner_3}
    ];

  
    return (
        <>
            <section>
                <div className="minibanner">
                    <Swiper slidesPerView={1} modules={[Pagination, Autoplay]} autoplay={{ delay: 5000 }}
                        pagination={{
                            type: 'progressbar', el: '.minibanner .progress',
                        }}
                        loop={true}>
                        {bannerList.map((banner, index) => (
                            <SwiperSlide key={index}>
                                <a href={()=>false}>
                                    <img src={banner.src} />
                                </a>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="progress gradient-progress"></div>
                </div>
            </section>
      </>
  );
}

export default MiniBanner;
