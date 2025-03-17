import '../styles/main.css'
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';


function TabNavCircle({content, onClick }) {

  const circleRef = useRef(null);

  useEffect(() => {
    if (content.on) {
      // 버튼이 on 상태일 때 GSAP 애니메이션 실행
      gsap.fromTo(
        circleRef.current,
        { strokeDasharray: 194.78, strokeDashoffset: 200.0 }, // 시작 상태
        { strokeDashoffset: 0, duration: 1, ease: 'power2.out' } // 종료 상태
      );
    }
  }, [content.on]);


  return (
    <>
      {/* <div className="tabNavCircleInner"><button className={content.on ? 'on' : ''} onClick={onClick}><div><img src={content.img}/></div>{content.name}</button></div> */}
      <div className="tabNavCircleInner"><button className={content.on ? 'on' : ''} onClick={onClick}>
      <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
        {/* ClipPath 정의 */}
        <defs>
          <clipPath id="circle-clip">
            <circle cx="32" cy="32" r="32" fill="none" stroke="#FF62E1" strokeWidth="0" />
          </clipPath>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%" gradientTransform="rotate(45)">
            <stop offset="0%" stopColor="#8727af" />
            <stop offset="100%" stopColor="#ee478e" />
          </linearGradient>
        </defs>

          <image x="0" y="0" width="64" height="64" clipPath='url(#circle-clip)' href={content.img} />
          {content.on && (
            <circle
              ref={circleRef}
              cx="32"
              cy="32"
              r="30.5"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="3"
              strokeDasharray="194.78"
              strokeDashoffset="0"
              transform="rotate(-90 32 32)"
            />
          )}
        </svg>
        <div></div>{content.name}</button></div>

    </>
  );
}

export default TabNavCircle;
