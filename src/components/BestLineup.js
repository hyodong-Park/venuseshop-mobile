import '../styles/main.css'
import React, {use, useEffect, useState} from 'react'
import ProductTypeVertical from './ProductTypeVertical';
import TitleWrap from './TitleWrap';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import axios from "axios";
import {baseApi} from "../api/axiosInstance";

function BestLineup() {

    let [productArray,setproductArray] = useState([]);
    let [itemUpdate, setitemUpdate] = useState();

    useEffect(() => {

        baseApi.get('/product/realtimebest')
            .then(response => {
                const datalist = response.data.data;

                const realtimebestItems = datalist.data;
                const realtimebestUpdate = datalist.updatedate;

                let items = [];
                let update = realtimebestUpdate;

                for(let i = 0 ; i < realtimebestItems.length; i++) {

                    const data = realtimebestItems[i];

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

        let [product,setProduct] = useState([]);

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
              <TitleWrap content={{ text: '실시간 구매 BEST 라인업🏆', type: 'update', updatetime: itemUpdate }} />
              {/* <div className="product-scrollWrap"> */}
              <Swiper spaceBetween={12} slidesPerView={'auto'} slidesOffsetAfter={20} slidesOffsetBefore={20} freeMode={true} modules={[FreeMode]} /*resistanceRatio={0.5} touchRatio={0.75}*/>
                  {productArray.map((item, index) => (
                      <SwiperSlide className="productVertical" style={{ width: '140px' }} key={index}>
                          <ProductTypeVertical
                        //   <ProductTypeVertical key={index} style={{width:140}}
                              product={{
                                  img: item.img, brand: item.brand, goodsname: item.goodsname, realmoney: item.realmoney, like:item.like,
                                  packid:item.pack_content_id
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
