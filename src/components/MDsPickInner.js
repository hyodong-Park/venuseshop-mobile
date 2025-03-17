import '../styles/main.css'
import React, { useState } from 'react';
import ProductTypeVertical from './ProductTypeVertical';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import navigationArrowNext from '../assets/image/circle-arrow-right.svg';
// import navigationArrowNextHover from '../src/assets/image/circle-arrow-right-violetfill.svg';

import mdImg1 from '../assets/image/md-img01.jpg';
import mdImg2 from '../assets/image/md-img02.jpg';
import mdImg3 from '../assets/image/md-img03.jpg';
import mdImg4 from '../assets/image/md-img04.jpg';

function MDsPickInner({data,sunbun}) {

// const content = data.item;
const [prevBtnImg, setPrevBtnImg] = useState(navigationArrowNext);
const [nextBtnImg, setNextBtnImg] = useState(navigationArrowNext);

let [content,setContent] = useState(data.item);

//  const likeToggle = (index) => {
//      event.stopPropagation();
//      event.preventDefault();

//      setProduct((prevProducts) =>

//         ({
//         ...prevProducts,
//         item: prevProducts.item.map((item, i) =>
//             i === index ? { ...item, like: !item.like } : item
//         )


//     })
//      );
//  };

const likeToggle = (productIndex, itemIndex) => {

    setContent((prevContents) => ({
        ...prevContents,
        product: prevContents.product.map((dataItem, dIndex) =>
            dIndex === productIndex
                ? dataItem.map((item, i) =>
                      i === itemIndex ? { ...item, like: !item.like } : item
                  )
                : dataItem
        ),
    }));
};
  
  return (
      <>

          <div className={"md-bgArea md-bgArea" + sunbun} style={{ backgroundImage: 'url(' + content.bg + ')' }}>
              <div className='title wrap'>
                  <p className="main">{content.title}</p>
                  <p>{content.subTitle}</p>
              </div>

              <Swiper slidesPerView={1} loop={true} modules={[Pagination, Navigation]}
                  pagination={{
                      type: 'fraction', el: '.md-bgArea' + sunbun + ' .md-navigator .fraction',
                      renderFraction: (currentClass, totalClass) => {
                          return `<span class="${currentClass}"></span><span class="${totalClass}"></span>`;
                      },
                      formatFractionCurrent: (number) => `0${number}`,
                      formatFractionTotal: (number) => `0${number}`,
                  }}
                  navigation={{

                      nextEl: '.md-bgArea' + sunbun + ' .md-navigator .next button',
                      prevEl: '.md-bgArea' + sunbun + ' .md-navigator .prev button',
                  }}>
                  {
                      content.product.map((dataItem, dataIndex) => {


                          return <SwiperSlide className="productVertical productSlideWrap four" key={dataIndex}>
                              {dataItem.map((item, index) => (

                                  <ProductTypeVertical
                                      product={{
                                          img: item.image, brand: item.brand, goodsname: item.goodsname, realmoney: item.realmoney, like:item.like

                                      }}
                                      key={index}
                                      likeToggle={() => likeToggle(dataIndex, index)}
                                  />
                              )
                              )}
                          </SwiperSlide>

                      }
                      )
                  }


              </Swiper>

              <div className="md-navigator navigator-custom" style={{ marginBottom: 60 }}>
                  <div className='prev'>
                      <button
                        //   onTouchStart ={() => setPrevBtnImg(navigationArrowNextHover)}

                        //   onTouchEnd={() => setPrevBtnImg(navigationArrowNext)}
                      >
                          <img src={prevBtnImg} alt="prev" />
                      </button>
                  </div>
                  <div className='fraction'></div>
                  <div className='next'>
                      <button
                        //   onTouchStart ={() => setNextBtnImg(navigationArrowNextHover)}
                        //   onTouchEnd={() => setNextBtnImg(navigationArrowNext)}
                      >
                          <img src={nextBtnImg} alt="next" /></button></div>
              </div>
          </div>

      </>
  );
}

export default MDsPickInner;
