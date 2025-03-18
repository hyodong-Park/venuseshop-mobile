import '../styles/main.css'
import React, {useState, useRef, useEffect} from 'react';
import ProductTypeHorizon from './ProductTypeHorizon';
import TitleWrap from './TitleWrap';
import TabNav from './TabNav';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import axios from "axios";

function WeeklyNew() {

    let [woman1,setWoman1] = useState([]);
    let [woman2,setWoman2] = useState([]);
    let [woman3,setWoman3] = useState([]);
    let [man1,setMan1] = useState([]);
    let [man2,setMan2] = useState([]);

    useEffect(() => {

        const instance = axios.create({
            baseURL: 'http://52.79.198.9:8000/eshop/api/',
            timeout: 10000,
        });

        instance.get('/product/weeklynew')
          .then(response => {
              const datalist = response.data.data;

              let listTmp = [];

              for (let i = 0; i < datalist.woman.length; i++) {

                  const data = datalist.woman[i];

                  const obj = {
                      packid: data.pack_content_id,
                      img: 'https://www.venus-eshop.co.kr/images/' + data.goods_image,
                      brand: data.info_brand,
                      goodsname: data.goods_model,
                      realmoney: data.price,
                      promotion: data.info_pdesc,
                      like: data.wish
                  }

                  listTmp.push(obj);

                  if (i === 3) {

                      setWoman1(listTmp);
                      listTmp = [];
                  } else if (i === 7) {

                      setWoman2(listTmp);
                      listTmp = [];
                  } else if (i === datalist.woman.length - 1) {

                      setWoman3(listTmp);
                      listTmp = [];
                  }
              }

              for (let i = 0; i < datalist.man.length; i++) {

                  const data = datalist.man[i];

                  const obj = {
                      packid: data.pack_content_id,
                      img: 'https://www.venus-eshop.co.kr/images/' + data.goods_image,
                      brand: data.info_brand,
                      goodsname: data.goods_model,
                      realmoney: data.price,
                      promotion: data.info_pdesc,
                      like: data.wish
                  }

                  listTmp.push(obj);

                  if (i === 3) {

                      setMan1(listTmp);
                      listTmp = [];
                  } else if (i === datalist.man.length - 1) {

                      setMan2(listTmp);
                      listTmp = [];
                  }
              }
          })
          .catch(error => {
              console.log(error)
          });
    }, []);

    const [activeIndex, setActiveIndex] = useState(0); // 현재 활성화된 슬라이드 인덱스 관리
    const swiperRef = useRef(null); // Swiper 인스턴스 참조

    const tabToSlideMap = [0, 3];
    const slideToTabMap = { 0: 0, 1: 0, 2: 0, 3: 1, 4: 1 };


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
                <TitleWrap content={{ text: '금주의 ', highlight: '신상품', type: 'all', subText: '남들보다 빠르게 신상 PICK', href: '/NewProduct' }} />
                <TabNav activeIndex={activeIndex} onTabClick={handleTabClick} type={'new'} />
                <div>
                    <Swiper spaceBetween={30} slidesPerView={1} onSlideChange={(swiper) => handleSlideChange(swiper)} style={{ paddingLeft: 20, paddingRight: '12%' }} className="sub-hashtag medium" onSwiper={(swiper) => (swiperRef.current = swiper)}>
                        <SwiperSlide>
                            <ItemLine productList={woman1} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ItemLine productList={woman2} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ItemLine productList={woman3} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ItemLine productList={man1} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ItemLine productList={man2} />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>
    );
}

function ItemLine({ productList }) {

    return (
      <>
          {productList.map((item, index) => (
            <ProductTypeHorizon
              product={{packid: item.packid, img: item.img, brand: item.brand, goodsname: item.goodsname, realmoney: item.realmoney, promotion: item.promotion, like:item.like}}
              key={index}
            />
          ))}
      </>
    )
}

export default WeeklyNew;
