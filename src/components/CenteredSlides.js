import '../styles/main.css';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";

function CenteredSlides({ product, isActive }) {
  const introduceRef = useRef(null); // introduce 요소 참조
  const [isOpen, setIsOpen] = useState(false); // 클릭 상태 관리

  const [scrollTimeout, setScrollTimeout] = useState(null); // 스크롤 지연 타이머 관리
  const [scrollInterval, setScrollInterval] = useState(null); // 스크롤 간격 관리

  useEffect(() => {
    const introduceDiv = introduceRef.current;
    if (!introduceDiv) return;

    let scrollAmount = 0; // 현재 스크롤 위치
    const scrollSpeed = 1; // 스크롤 속도 (픽셀 단위)
    const intervalTime = 50; // 스크롤 업데이트 간격 (밀리초 단위)

    const startScrolling = () => {
        return setInterval(() => {
          scrollAmount += scrollSpeed; // 스크롤 이동
          introduceDiv.scrollTop = scrollAmount; // 스크롤 위치 적용
        }, intervalTime);
      };

      if (isActive) {
        // 활성 슬라이드일 때 1.5초 지연 후 스크롤 시작
        const timeout = setTimeout(() => {
          const interval = startScrolling();
          setScrollInterval(interval);
        }, 1500); // 1.5초 지연
  
        setScrollTimeout(timeout);
      } else {
        // 비활성 슬라이드일 때 초기화
        introduceDiv.scrollTop = 0;
        clearInterval(scrollInterval);
        clearTimeout(scrollTimeout); // 대기 중인 타이머도 정리
        setScrollInterval(null);
        setScrollTimeout(null);
        setIsOpen(false)
      }

      return () => {
        clearInterval(scrollInterval); // 정리 작업
        clearTimeout(scrollTimeout);
      };
    
  }, [isActive]);

  const textOpen = (event) => {
    event.stopPropagation();
    event.preventDefault()
    setIsOpen((prev) => !prev); // 클릭 시 상태 토글
  };

  const strHref = product.packid !== undefined ? '/ProductDetail' : '#';

  return (
    <>
      <div className="productCentered productWrap">
        <Link  to={strHref} onClick={e => e.preventDefault}>
          {product.number && <div className="ranking best">{product.number}</div>}
          <div className="image not-filter">
            {
              product.sale ?

                <div className="tag"><b>{product.sale}</b> %</div>
                : <></>
            }
            <img src={product.img} alt={product.goodsname} />

            {
              product.introduce ?

              <div className={`introduce ${isOpen ? 'open' : ''}`} onClick={textOpen}>
              <div ref={introduceRef}>
                {product.introduce}
              </div>
              {/* <button onClick={textOpen}>V</button> */}
            </div>
                : <></>
            }
            
          </div>
          <div className="meta">
          {
              product.brand ?

              <div className="name">
              <span className="brand">{product.brand}</span>
              {product.goodsname}
            </div>
                : <></>
            }
            {
              product.realmoney ?

              <div className="price">
              <span style={{ color: '#902bad' }}>{product.realmoney}</span>
              <span className="before-price">{product.saleBefore}</span>
                </div>
                : <></>
            }
            {
              product.title ?

              <div className="title">
                <p>{product.title}</p>
                <div>{product.subtitle}</div>
              </div>
                : <></>
            }


          </div>
        </Link>
      </div>
    </>
  );
}

export default CenteredSlides;
