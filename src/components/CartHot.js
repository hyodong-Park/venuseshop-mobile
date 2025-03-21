import '../styles/main.css'
import React, {useEffect, useState} from 'react'
import ProductTypeVertical from './ProductTypeVertical';
import TitleWrap from './TitleWrap';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import axios from "axios";
import {baseApi} from "../api/axiosInstance";

function CartHot() {

    let [productArray,setproductArray] = useState([]);
    let [itemUpdate, setitemUpdate] = useState();

    useEffect(() => {

        baseApi.get('/product/cartpick')
            .then(response => {
                const datalist = response.data.data;

                const cartpickItems = datalist.data;
                const cartpickUpdate = datalist.updatedate;

                let items = [];
                let update = cartpickUpdate;

                for(let i = 0 ; i < cartpickItems.length; i++) {

                    const data = cartpickItems[i];

                    const obj = {
                        pack_content_id: data.pack_content_id,
                        img : 'https://www.venus-eshop.co.kr/images/' + data.goods_image,
                        brand : data.info_brand,
                        goodsname : data.goods_model,
                        realmoney : data.price,
                        like : data.wish
                    }
                    items.push(obj);
                }

                setproductArray(items);
                setitemUpdate(update);

            })
            .catch(error => {
                console.log(error)
            });

    }, []);

    // let [product,setProduct] = useState([]);

    const likeToggle = (index) => {
        event.stopPropagation();
        event.preventDefault();

        setproductArray((prevProducts) =>
            prevProducts.map((item, i) =>
                i === index ? { ...item, like: !item.like } : item
            )
        );
    };
    
    return (
        <>
            <section>
                <TitleWrap content={{ text: '장바구니 최다 PICK👍🏻', type: 'update', updatetime : itemUpdate }} />
                <Swiper spaceBetween={12} slidesPerView={'auto'} slidesOffsetAfter={20} slidesOffsetBefore={20} freeMode={true} modules={[FreeMode]}>
                    {productArray.map((item, index) => (
                        <SwiperSlide className="productVertical" style={{ width: '140px' }} key={index}>
                            <ProductTypeVertical
                                product={{
                                    img: item.img,
                                    brand: item.brand, goodsname: item.goodsname, realmoney: item.realmoney, salePercent: item.salePercent, saleBefore: item.saleBefore, like:item.like,
                                    packid:item.pack_content_id
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
