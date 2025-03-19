import '../styles/main.css'
import React, {useState, useRef, useEffect} from 'react';
import ProductTypeHorizon from './ProductTypeHorizon';
import TitleWrap from './TitleWrap';
import TabNav from './TabNav';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import axios from 'axios';

function Weeklybest() {

    let [braWrap1,setBraWrap1] = useState([]);
    let [braWrap2,setBraWrap2] = useState([]);
    let [pantyWrap,setPantyWrap] = useState([]);
    let [correctionWrap,setCorrectionWrap] = useState([]);
    let [pajamaWrap,setPajamaWrap] = useState([]);

    useEffect(() => {

        const instance = axios.create({
            baseURL: 'http://52.79.198.9:8000/eshop/api/',
            // baseURL: 'http://192.168.0.143:8080/eshop/api/',
            timeout: 10000,
        });

        instance.get('/product/weeklybest')
            .then(response => {

                const bra = response.data.data.bra;
                const panty = response.data.data.panty;
                const correction = response.data.data.bojung;
                const pajama = response.data.data.pajama;

                let braTmp = [];
                let pantyTmp = [];
                let correctionTmp = [];
                let pajamaTmp = [];

                for(let i = 0 ; i < bra.length; i++) {

                    const data = bra[i];

                    const obj = {
                        img : 'https://www.venus-eshop.co.kr/images/' + data.goods_image,
                        number : i + 1,
                        brand : data.info_brand,
                        goodsname : data.goods_model,
                        realmoney : data.price,
                        promotion : data.goods_promotion,
                        packid : data.pack_content_id,
                        like : false
                    }

                    braTmp.push(obj);
                    setBraWrap1(braTmp.slice(0,5))
                    setBraWrap2(braTmp.slice(5,10))
                }

                for(let i = 0 ; i < panty.length; i++) {

                    const data = panty[i];

                    const obj = {
                        img : 'https://www.venus-eshop.co.kr/images/' + data.goods_image,
                        number : i + 1,
                        brand : data.info_brand,
                        goodsname : data.goods_model,
                        realmoney : data.price,
                        promotion : data.goods_promotion,
                        packid : data.pack_content_id,
                        like : false
                    }

                    pantyTmp.push(obj);
                    setPantyWrap(pantyTmp)
                }

                for(let i = 0 ; i < correction.length; i++) {

                    const data = correction[i];

                    const obj = {
                        img : 'https://www.venus-eshop.co.kr/images/' + data.goods_image,
                        number : i + 1,
                        brand : data.info_brand,
                        goodsname : data.goods_model,
                        realmoney : data.price,
                        promotion : data.goods_promotion,
                        packid : data.pack_content_id,
                        like : false
                    }

                    correctionTmp.push(obj);
                    setCorrectionWrap(correctionTmp)
                }

                for(let i = 0 ; i < pajama.length; i++) {

                    const data = pajama[i];

                    const obj = {
                        img : 'https://www.venus-eshop.co.kr/images/' + data.goods_image,
                        number : i + 1,
                        brand : data.info_brand,
                        goodsname : data.goods_model,
                        realmoney : data.price,
                        promotion : data.goods_promotion,
                        packid : data.pack_content_id,
                        like : false
                    }

                    pajamaTmp.push(obj);
                    setPajamaWrap(pajamaTmp)
                }

            })
            .catch(error => {
                console.log(error)
            });

        // instance.post('/auth/login',{username : 'gsm0530test94', password : 'sooin12!'})
        //     .then(response => {
        //         console.log('!!인증')
        //         console.log(response)
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     });

    }, []);




    const [activeIndex, setActiveIndex] = useState(0); // 현재 활성화된 슬라이드 인덱스 관리
    const swiperRef = useRef(null); // Swiper 인스턴스 참조

    const tabToSlideMap = [0, 2, 3, 4];
    const slideToTabMap = { 0: 0, 1: 0, 2: 1, 3: 2, 4: 3 };

    const handleTabClick = (tabIndex) => {
        setActiveIndex(tabIndex);
        if (swiperRef.current) {
            swiperRef.current.slideTo(tabToSlideMap[tabIndex]); // 탭 인덱스에 매핑된 슬라이드로 이동
        }
    };

    const handleSlideChange = (swiper) => {
        const currentSlide = swiper.activeIndex;
        setActiveIndex(slideToTabMap[currentSlide] || 0); // 슬라이드에 매핑된 탭 버튼 활성화
    };


    return (
        <>
            <section>
                <TitleWrap content={{ text: '주간 판매 랭킹', type: 'all', href: '/bestproduct' }} />
                <TabNav activeIndex={activeIndex} onTabClick={handleTabClick} type={'ranking'} />
                <div>
                    <Swiper spaceBetween={30} slidesPerView={1} onSlideChange={handleSlideChange} style={{ paddingLeft: 20, paddingRight: '12%' }} className="sub-promotion" onSwiper={(swiper) => (swiperRef.current = swiper)}>
                        <SwiperSlide>
                            {braWrap1.map((item, index) => (
                                <ProductTypeHorizon
                                    product={{
                                        img: item.img, number: item.number, brand: item.brand, goodsname: item.goodsname, realmoney: item.realmoney, promotion: item.promotion, packid: item.packid, like:item.like
                                    }}
                                    key={index}
                                />
                            ))}
                        </SwiperSlide>
                        <SwiperSlide>
                            {braWrap2.map((item, index) => (
                                <ProductTypeHorizon
                                    product={{
                                        img: item.img, number: item.number, brand: item.brand, goodsname: item.goodsname, realmoney: item.realmoney, promotion: item.promotion, packid: item.packid, like:item.like
                                    }}
                                    key={index}
                                />
                            ))}
                        </SwiperSlide>
                        <SwiperSlide>
                            {pantyWrap.map((item, index) => (
                                <ProductTypeHorizon
                                    product={{
                                        img: item.img, number: item.number, brand: item.brand, goodsname: item.goodsname, realmoney: item.realmoney, promotion: item.promotion, packid: item.packid, like:item.like
                                    }}
                                    key={index}
                                />
                            ))}
                        </SwiperSlide>
                        <SwiperSlide>
                            {correctionWrap.map((item, index) => (
                                <ProductTypeHorizon
                                    product={{
                                        img: item.img, number: item.number, brand: item.brand, goodsname: item.goodsname, realmoney: item.realmoney, promotion: item.promotion, packid: item.packid, like:item.like
                                    }}
                                    key={index}
                                />
                            ))}
                        </SwiperSlide>
                        <SwiperSlide>
                            {pajamaWrap.map((item, index) => (
                                <ProductTypeHorizon
                                    product={{
                                        img: item.img, number: item.number, brand: item.brand, goodsname: item.goodsname, realmoney: item.realmoney, promotion: item.promotion, packid: item.packid, like:item.like
                                    }}
                                    key={index}
                                />
                            ))}
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>

        </>
    );
}

export default Weeklybest;
