import '../styles/main.css'
import React, {useState} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';

function TabNav({ activeIndex, onTabClick, type }) {
  
  let changeActiveIndex = 0;

  if(type == 'ranking') {

    changeActiveIndex = activeIndex == 0 ? activeIndex : activeIndex - 1;
  } else if(type == 'new'){
    changeActiveIndex = activeIndex == 0 ? activeIndex : activeIndex - 2;
  }

 


  const WeeklyBestTab = [
    {label:'브라', image:'https://www.venus-eshop.co.kr/images/SBRD12320210607105143231Product04.png'},
    {label:'팬티', image:'https://www.venus-eshop.co.kr/images/VPTG625H20241211153621740Product01.png'},
    {label:'보정', image:'https://www.venus-eshop.co.kr/images/WBT195220240729163902404Product01.png'},
    {label:'파자마', image:'https://www.venus-eshop.co.kr/images/SPA2406W20240424163635936Product01.png'}
  ]

  const newProductTab = [
    {label:'여성', image:'https://www.venus-eshop.co.kr/images/VBRQ86320240103154436905Product09.png'},
    {label:'남성', image:'https://www.venus-eshop.co.kr/images/VPA4476M20241011131713056Product01.png'}
  ]

  // const tabs = WeeklyBestTab;

  let tabs = type == 'ranking' ? WeeklyBestTab : newProductTab;
    
  return (
    <>
        <Swiper className="tabNav wrap" slidesPerView={'auto'} spaceBetween={6} style={{paddingLeft:20}}>
        {tabs.map((item, index) => (
          <SwiperSlide key={index}>
            <div>
              <button
                className={activeIndex === index ? 'on' : ''}
                onClick={() => onTabClick(index)}
              >
                <span><img src={item.image} alt={item.label} /></span>
                {item.label}
              </button>
            </div>
          </SwiperSlide>
        ))}
        </Swiper>
    </>
  );
}

export default TabNav;
