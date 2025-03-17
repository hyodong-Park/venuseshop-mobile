import '../styles/main.css'
import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

import tabCategory from '../assets/image/tab-category-black.svg';
import tabBrand from '../assets/image/tab-brand-black.svg';
import tabHome from '../assets/image/tab-home-black.svg';
import tabMypage from '../assets/image/tab-mypage-black.svg';

import tabCategoryOn from '../assets/image/tab-category-on.svg';
import tabBrandOn from '../assets/image/tab-brand-on.svg';
import tabHomeOn from '../assets/image/tab-home-on.svg';
import tabMypageOn from '../assets/image/tab-mypage-on.svg';

import topArrow from '../assets/image/top-arrow.svg';


function FooterNav() {

  const [activeId, setActiveId] = useState("home");
  const imgRefs = useRef({});

  const navItems = [
    { id: "category", title: "카테고리", img: tabCategory, imgOn: tabCategoryOn },
    { id: "brand", title: "브랜드", img: tabBrand, imgOn: tabBrandOn },
    { id: "home", title: "홈", img: tabHome, imgOn: tabHomeOn, isActive: true },
    { id: "mypage", title: "마이페이지", img: tabMypage, imgOn: tabMypageOn },
    { id: "recent", title: "최근 본/찜", img: 'https://www.venus-eshop.co.kr/images/VBR099020240814163021280Product01.png', imgOn: 'https://www.venus-eshop.co.kr/images/VBR099020240814163021280Product01.png' },
  ];

  const handleClick = (id) => {
    setActiveId(id);

    // 해당 ID의 이미지 요소에 애니메이션 적용
    if (imgRefs.current[id]) {
      gsap.fromTo(
        imgRefs.current[id], 
        { scale: 1, rotate: 30, opacity: 1 }, // 시작 상태
        { scale: 1, rotate: 0, opacity: 1, duration: 0.5, ease: "elastic.out(1, 0.5)" } // 종료 상태
      );
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="footer_top"><button onClick={scrollToTop}><img src={topArrow}/></button></div>
      <div className="footer_nav">
        <ul>
        {navItems.map((item) => (
          <li key={item.id} className={activeId === item.id ? "on" : ""}>
            <button onClick={() =>handleClick(item.id)}>
              <em className={item.id === 'recent' ? "recent" : ""} ref={(el) => (imgRefs.current[item.id] = el)}>
                <img
                  src={activeId === item.id ? item.imgOn : item.img}
                  alt={item.title} />
              </em>
              {item.title}
            </button>
          </li>
        ))}
        </ul>
      </div>
    </>
  );
}


export default FooterNav;
