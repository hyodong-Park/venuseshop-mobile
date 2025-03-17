import '../styles/main.css'
import React, { useEffect } from 'react';


function ThemeColor() {

    useEffect(() => {
        // theme-color 메타 태그 찾기 (없으면 생성)
        let themeColorMeta = document.querySelector('meta[name="theme-color"]');
        if (!themeColorMeta) {
          themeColorMeta = document.createElement("meta");
          themeColorMeta.name = "theme-color";
          document.head.appendChild(themeColorMeta);
        }
    
        // 초기 색상 설정
        themeColorMeta.setAttribute("content", "#fff");
    
        // 스크롤 이벤트 핸들러
        const handleScroll = () => {
          const scrollTop = window.scrollY; // 현재 스크롤 위치
          const maxScroll = 200; // 최대 200px까지 변화
          const scrollRatio = Math.min(scrollTop / maxScroll, 1); // 0 ~ 1 사이 값으로 제한
    
          // RGB 값 계산 (검정 -> 흰색)
          const colorValue = Math.round(scrollRatio * 255);
          const newColor = `rgb(${colorValue}, ${colorValue}, ${colorValue})`;
    
          // theme-color 업데이트
          themeColorMeta.setAttribute("content", newColor);
        };
    
        // 이벤트 리스너 추가
        window.addEventListener("scroll", handleScroll);
    
        // 클린업 함수
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
    
      return null; // UI를 렌더링할 필요 없음
}

export default ThemeColor;
