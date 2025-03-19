import '../styles/main.css'
// import React from 'react'
import logoBlackImport from '../assets/image/logo-black.svg';
import logoWhiteImport from '../assets/image/logo-white.svg';
import cartBlackImport from '../assets/image/cart-black.svg';
import cartWhiteImport from '../assets/image/cart-white.svg';
import searchBlackImport from '../assets/image/search-black.svg';
import searchWhiteImport from '../assets/image/search-white.svg';
import React, { useEffect, useState, useRef, useCallback } from "react";
import { useLocation, Link } from "react-router-dom";
import HeaderCategory from "./HeaderCategory";


function Headers({category}) {
  const logoBlack = logoBlackImport;
  const logoWhite = logoWhiteImport;
  const cartBlack = cartBlackImport;
  const cartWhite = cartWhiteImport;
  const searchBlack = searchBlackImport;
  const searchWhite = searchWhiteImport;

  const location = useLocation();


  const [headerMenu, setHeaderMenu] = useState([
    { title: "신상품", subtitle: "금주의", href: "/newproduct" },
    { title: "홈", href: "/", active: true },
    { title: "균일가전", subtitle: "UPTO 80%", href: "#" },
    { title: "베스트", href: "/bestproduct" },
    { title: "25SS", href: "#" },
    { title: "세일 중", href: "#" },
    { title: "쿠폰&혜택", href: "#" },
    { title: "스탭리뷰", href: "#" },
    { title: "룩북", href: "#" },
  ]);

  const [isState1, setIsState1] = useState(false); // 헤더 배경색 변경
  const [isState2, setIsState2] = useState(false); // 헤더 감춤 여부
  const lastScrollY = useRef(0); // 이전 스크롤 위치를 저장
  const ticking = useRef(false); // requestAnimationFrame 중복 실행 방지


  const handleScroll = useCallback(() => {
    
    if (!ticking.current) {
      ticking.current = true;

      requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const scrollDifference = lastScrollY.current - currentScrollY;

        if(lastScrollY.current == 0) {
          lastScrollY.current = currentScrollY;
        }

        if (currentScrollY === 0) {
          // 스크롤 맨 상단
          if (location.pathname === "/"){
            setIsState1(false);
            setIsState2(false);
          } else{
            setIsState1(true);
            setIsState2(false);
          }

        } else if (currentScrollY > lastScrollY.current) {
          // 스크롤 내릴 때
          setIsState1(true);
          setIsState2(true);
        
        } else if (scrollDifference >= 50) {
          // 50px 이상 올릴 때만 실행
          setIsState1(true);
          setIsState2(false);
          lastScrollY.current = currentScrollY;

        }

        if(lastScrollY.current - currentScrollY <= 0) {
          lastScrollY.current = currentScrollY;
        }

        ticking.current = false;
      });
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    setHeaderMenu((prevMenu) =>
        prevMenu.map((item) => ({
          ...item,
          active: item.href === location.pathname, // 현재 경로와 href가 같은 메뉴만 active
        }))
    );
  }, [location.pathname]); // pathname이 바뀔 때 실행

 useEffect(() => {
  let themeColorMeta = document.querySelector('meta[name="theme-color"]');
  
  if (!themeColorMeta) {
    themeColorMeta = document.createElement("meta");
    themeColorMeta.name = "theme-color";
    document.head.appendChild(themeColorMeta);
  }

  // `isState1`이 true이면 #FFFFFF, 아니면 #000000
  themeColorMeta.setAttribute("content", isState1 ? "#FFFFFF" : "#000000");
}, [isState1]);


  return (
    <header id="header" className={`header ${isState1 ? "white" : ""} ${isState2 ? "scrolled" : ""}`}>
      <div className="mainheader">
        <div className="headerTop">
            <div className="logo">
              <img src={location.pathname !== "/" ? logoBlack : isState1 ? logoBlack : logoWhite} />
            </div>   
            <div className="header-buttonWrap">
              <button><img src={location.pathname !== "/" ? searchBlack : isState1 ? searchBlack : searchWhite} /></button>
              <div className="cart">
                <button><img src={location.pathname !== "/" ? cartBlack : isState1 ? cartBlack : cartWhite} /></button>
                <span className="cart-badge">0</span>
              </div>
            </div>
        </div>
        
        <ul className="nav">
          {headerMenu.map((item, index) =>
            <li key={index} className={ item.active? "active" : "" }>
              <Link to={item.href} onClick={e => e.preventDefault}>
                <span>{item.subtitle}</span>
                <p>{item.title}</p>
              </Link>
            </li>

          )}

        </ul>
      </div>

      {
        (location.pathname === "/newproduct" || location.pathname === "/bestproduct") ?

            <HeaderCategory content={category}/>
            : <></>
      }
    </header>
  );
}


export default Headers;
