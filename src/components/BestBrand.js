import '../styles/main.css'
import React, { useState, useRef, useEffect } from 'react';

import ProductTypeVertical from './ProductTypeVertical';
import TitleWrap from './TitleWrap';
import TabNavCircle from './TabNavCircle';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

import venus from '../assets/image/brand-tab-venus.png';
import solb from '../assets/image/brand-tab-solb.png';
import wacoal from '../assets/image/brand-tab-wacoal.png';
import signature from '../assets/image/brand-tab-signature.png';
import orlfa from '../assets/image/brand-tab-orlfa.png';
import circleArrow from '../assets/image/circle-arrow-right.svg';
import {baseApi} from '../api/axiosInstance';
import { Link } from "react-router-dom";

function BestBrand() {

    const [activeIndex, setActiveIndex] = useState(0);
    const [product, setProduct] = useState([]); // 현재 표시할 제품 목록 상태
    const swiperRef = useRef(null); // Swiper 인스턴스를 저장할 ref

    const [venusProduct, setVenusProduct] = useState( [] );
    const [solbProduct, setSolbProduct] = useState( [] );
    const [wacoalProduct, setWacoalProduct] = useState( [] );
    const [signatureProduct, setSignatureProduct] = useState( [] );
    const [orlfaProduct, setOrlfaProduct] = useState( [] );

    const [nowBrand, setNowBrand] = useState("비너스");

    const brands = [
        { img: venus, name: '비너스' },
        { img: solb, name: '솔브' },
        { img: wacoal, name: '와코루' },
        { img: signature, name: '시그니처' },
        { img: orlfa, name: '오르화' },
    ];

    useEffect(() => {

        function productSetting(productList, type) {

            let listTmp = [];

            for(let i = 0 ; i < productList.length; i++) {

                const data = productList[i];

                const obj = {
                    packid: data.pack_content_id,
                    img : 'https://www.venus-eshop.co.kr/images/' + data.goods_image,
                    sale : data.percent,
                    brand : data.info_brand,
                    goodsname : data.goods_model,
                    realmoney : data.price,
                    stock: data.stock,
                    like : data.wish
                }

                listTmp.push(obj);
            }

            if (type === "VENUS") {

                setVenusProduct(listTmp);
                setProduct(listTmp);
            } else if (type === "SOLB") {

                setSolbProduct(listTmp);
            } else if (type === "WACOAL") {

                setWacoalProduct(listTmp);
            } else if (type === "SIGNATURE") {

                setSignatureProduct(listTmp);
            } else if (type === "ORLFA") {

                setOrlfaProduct(listTmp);
            }
        }

        baseApi.get('/product/bestbrand')
            .then(response => {
                const datalist = response.data.data;

                productSetting(datalist.VENUS, "VENUS");
                productSetting(datalist.SOLB, "SOLB");
                productSetting(datalist.WACOAL, "WACOAL");
                productSetting(datalist.SIGNATURE, "SIGNATURE");
                productSetting(datalist.ORLFA, "ORLFA");
            })
            .catch(error => {
                console.log(error)
            });
    }, []);

    const handleTabClick = (index) => {
        setActiveIndex(index);
    
        // 브랜드에 따라 제품 변경
        if (index === 0) {
            setNowBrand("비너스");
          setProduct(venusProduct);
        } else if (index === 1) {
            setNowBrand("솔브");
          setProduct(solbProduct);
        } else if (index === 2) {
            setNowBrand("와코루");
          setProduct(wacoalProduct);
        } else if (index === 3) {
            setNowBrand("시그니쳐");
          setProduct(signatureProduct);
        } else if (index === 4) {
            setNowBrand("오르화");
          setProduct(orlfaProduct);
        } 

        if (swiperRef.current) {
            swiperRef.current.slideTo(0,0); // 첫 번째 슬라이드로 이동
        }
    };

    return (
        <>
            <section>
                <TitleWrap content={{ text: '인기 브랜드관', type: 'all' }} />
                <div className="tabNavCircle">
                    <Swiper spaceBetween={10} slidesPerView={'auto'} slidesOffsetAfter={20} slidesOffsetBefore={20} freeMode={true} modules={[FreeMode]}>
                        {brands.map((brand, index) => (
                            <SwiperSlide style={{ width: 64 }} key={index}>
                                <TabNavCircle
                                    key={index}
                                    content={{...brand, on: activeIndex === index}}
                                    onClick={() => {handleTabClick(index)}}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <Swiper spaceBetween={12} slidesPerView={'auto'} slidesOffsetAfter={20} slidesOffsetBefore={20} freeMode={true} modules={[FreeMode]} onSwiper={(swiper) => (swiperRef.current = swiper)}>

                    {product.map((item, index) => (
                        <SwiperSlide className="productVertical" style={{ width: '140px' }} key={item.packid}>
                            <ProductTypeVertical
                                product={{...item, packid: item.packid, img: item.img, brand: item.brand, goodsname: item.goodsname, realmoney: item.realmoney, like:item.like}}
                                likeToggle={() => likeToggle(index)}
                            />
                        </SwiperSlide>
                    ))}

                    <SwiperSlide className="slide-more" style={{ width: '100px' }}>
                        <Link to={'/brandPage?brand=' + nowBrand} onClick={e => e.preventDefault}>
                            <div>
                                <img src={circleArrow} />
                            </div>
                            <p>더보기</p>
                        </Link>

                    </SwiperSlide>
                </Swiper>
            </section>

        </>
    );
}

export default BestBrand;
