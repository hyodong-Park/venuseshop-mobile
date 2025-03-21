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

function HotProdduct() {

    let [productArray,setproductArray] = useState([]);
    let [itemuUpdate, setitemUpdate] = useState();

    useEffect(() => {

        baseApi.get('/product/trendingview')
            .then(response => {
                const datalist = response.data.data;

                const trendingviewItems = datalist.data;
                const trendingviewUpdate = datalist.updatedate;

                let items = [];
                let update = trendingviewUpdate;

                for(let i = 0 ; i < trendingviewItems.length; i++) {

                    const data = trendingviewItems[i];

                    const obj = {
                        pack_content_id: data.pack_content_id,
                        img : 'https://www.venus-eshop.co.kr/images/' + data.goods_image,
                        brand : data.info_brand,
                        goodsname : data.goods_model,
                        realmoney : data.price,
                        salePercent : data.percent !== 0 ? data.percent + '%' : null,
                        saleBefore : data.percent !== 0 ? data.costprice : null,
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
              <TitleWrap content={{ text: '조회 급상승중인 아이템⚡', type: 'update', updatetime : itemuUpdate}} />
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

export default HotProdduct;
