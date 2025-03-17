import '../styles/main.css'
import React, {useCallback, useEffect, useState} from 'react'
import { useLocation } from "react-router-dom";
import {SwiperSlide} from "swiper/react";
import newproductBGwoman from '../assets/image/newproduct-bg-woman.jpg';
import newproductBGman from '../assets/image/newproduct-bg-man.jpg';
import useNewProductTab from '../store/store';

function HeaderCategory({ active, content }) {

  const {tab,setTab} = useNewProductTab();

  const location = useLocation();

  const [categoryBG, setCategoryBG] = useState(newproductBGwoman);

  const NewProductCategory = content;
    // {title:'여성 신상품', active:true},
    // {title:'남성 신상품'}


  const [isState, setIsState] = useState(false); // 헤더 배경색 변경

  const handleScroll = useCallback(() => {
    requestAnimationFrame(() => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setIsState(false);
      }else{
        setIsState(true);
      }

    });

  },[]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);


  return (
    <>
      <div className="headercategory">
        <div className={isState ? "scrolled" : ""}
             style={{backgroundImage: 'url(' + categoryBG + ')'}}>
          <ul className="wrap">
            {NewProductCategory.map((item, index) => (
                    <li key={index}>
                      <button onClick={() => setTab(item)} className={item === tab ? "active" : ""}>{item}</button>
                    </li>
                )
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default HeaderCategory;
