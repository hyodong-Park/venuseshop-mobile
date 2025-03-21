import '../styles/main.css'
import React, {useEffect, useState} from 'react'
import ProductTypeVertical from './ProductTypeVertical';
import TitleWrap from './TitleWrap';
import { Swiper, SwiperSlide } from "swiper/react";
import circleArrow from '../assets/image/circle-arrow-right.svg';
import 'swiper/css';
import {baseApi} from '../api/axiosInstance';
import { Link } from "react-router-dom";

function SaleIng() {

    const [product, setProduct] = useState([])

    useEffect(() => {

        baseApi.get('/product/mainsale')
          .then(response => {
              const datalist = response.data.data;

              let listTmp = [];

              for(let i = 0 ; i < datalist.firstData.length; i++) {

                  const data = datalist.firstData[i];

                  const obj = {
                      packid: data.pack_content_id,
                      img : 'https://www.venus-eshop.co.kr/images/' + data.goods_image,
                      salePercent : data.percent + '%',
                      brand : data.info_brand,
                      goodsname : data.goods_model,
                      realmoney : data.price,
                      saleBefore : data.costprice,
                      like : data.wish
                  }

                  listTmp.push(obj);
              }


              for(let i = 0 ; i < datalist.secondData.length; i++) {

                  const data = datalist.secondData[i];

                  const obj = {
                      packid: data.pack_content_id,
                      img : 'https://www.venus-eshop.co.kr/images/' + data.goods_image,
                      salePercent : data.percent,
                      brand : data.info_brand,
                      goodsname : data.goods_model,
                      realmoney : data.price,
                      saleBefore : data.costprice,
                      like : data.wish
                  }

                  listTmp.push(obj);
              }

              setProduct(listTmp);
          })
          .catch(error => {
              console.log(error)
          });
    }, []);

    return (
        product.length === 0 ? <></> :
        <>
            <section>
                <TitleWrap content={{ text: '세일중', type: 'all' }} />
                <Swiper spaceBetween={12} slidesPerView={'auto'} style={{ paddingLeft: 20, paddingRight: 20 }} className="product-twin saleIng">
                    {Array.from({ length: Math.ceil(product.length / 2) }, (_, i) => (
                        <SwiperSlide key={i} className="productVertical" style={{ width: 140 }}>
                            {product.slice(i * 2, i * 2 + 2).map((item, idx) => (
                                <ProductTypeVertical
                                    key={idx}
                                    product={item}
                                    likeToggle={() => likeToggle(idx)}
                                />
                            
                            ))}
                        </SwiperSlide>
                    ))}
                    <SwiperSlide className="slide-more" style={{ width: '100px', alignSelf: 'auto', height: 'initial' }}>
                        <Link to={'/discountPage'} onClick={e => e.preventDefault}>
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

export default SaleIng;
