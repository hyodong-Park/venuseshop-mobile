import '../styles/main.css'
import React, {useEffect, useState} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import axios from "axios";
import { Link } from "react-router-dom";

function MiniBanner() {

    const [bannerList, setBannerList] = useState([])

    useEffect(() => {

        const instance = axios.create({
            baseURL: 'http://52.79.198.9:8000/eshop/api/',
            timeout: 10000,
        });

        instance.get('/banner/linebanner')
            .then(response => {
                const datalist = response.data.data;

                let listTmp = [];

                for(let i = 0 ; i < datalist.length; i++) {

                    const data = datalist[i];

                    const obj = { src: data.bannerImg }

                    listTmp.push(obj);
                }

                setBannerList(listTmp);
            })
            .catch(error => {
                console.log(error)
            });
    }, []);

  
    return (
        bannerList.length === 0 ? <></> :
        <>
            <section>
                <div className="minibanner">
                    <Swiper slidesPerView={1} modules={[Pagination, Autoplay]} autoplay={{ delay: 5000 }}
                        pagination={{type: 'progressbar', el: '.minibanner .progress',}}
                        loop={true}>
                        {bannerList.map((banner, index) => (
                            <SwiperSlide key={index}>
                                <Link to={'/eventDetail?id' + banner.id} onClick={e => e.preventDefault}>
                                    <img src={banner.src} />
                                </Link>
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
