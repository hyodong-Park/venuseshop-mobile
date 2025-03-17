import '../styles/main.css'
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import likeOff from '../assets/image/like_off.svg';
import likeOn from '../assets/image/like_on.svg';
import sizeIco from '../assets/image/sizeview.svg';

function ProductTypeVertical({product ,likeToggle}) {

    const init = useRef(false);

    const heartRef = useRef(null);
    const likeRef = useRef(null);

    const [like, setLike] = useState(product.like);

      const ticking = useRef(false); // 중복 실행 방지
    
    useEffect(() => {
    
            if(init.current) {

                changeLike(like,0.5); 
            } else {

                init.current = true;

                if(like) {

                    changeLike(like,0); 
                    } else {
                        ticking.current = false;

                    }                 
            }         
                    setLike(!like)

      }, [product.like]);

      const preventDuplication = () => {

        ticking.current = false;
      }

      const changeLike = (flag,duration) => {

        if(flag) {

            const isOn = gsap.fromTo(
                heartRef.current, 
                { scale: 0, }, // 시작 크기와 투명도 설정
                { scale: 1.2, duration: duration, ease: "power2.out" } // 목표 크기와 애니메이션 속성
              );

              isOn.eventCallback('onComplete',preventDuplication);

        }else {

            const isOff = gsap.fromTo(
                heartRef.current, 
                { scale: 1.2, }, // 시작 크기와 투명도 설정
                { scale: 0, duration: 0.1, ease: "power2.out" } // 목표 크기와 애니메이션 속성
              );
              isOff.eventCallback('onComplete',preventDuplication);

        }

      }

    //   function likeToggle(){

    //     event.stopPropagation();
    //     event.preventDefault();

    //     if(!ticking.current) {
    //         ticking.current = true;

    //     setLike(!like)

    //     }

        
    //   }

    const visibleColor = Array.isArray(product.colorChip) ? product.colorChip.slice(0, 5) : [];
    const remainingCount = Array.isArray(product.colorChip) ? product.colorChip.length - 5 : 0;
  
    return (
        <>
            <div className="productVertical productWrap">
                <a href={()=>false}>
                    {
                        product.number && (
                            <div className="ranking best">{product.number}</div>
                        )
                    }

                    <div className="image">
                        {
                            product.couponinfo && (
                                <div className="couponinfo">{product.couponinfo}쿠폰</div>
                            )
                        }
                        <img src={product.img} />
                        <button className={product.like ? 'like like-on' : 'like'} onClick={likeToggle} ref={likeRef}><img src={likeOff} className="off"/><img src={likeOn} className="on" ref={heartRef}/></button>
                    </div>
                    <div className="meta">
                        {
                            product.newtag && (
                                <span className="tag">NEW</span>
                            )
                        }
                        {
                            product.besttag && (
                                <span className="tag">BEST</span>
                            )
                        }
                        {
                            product.coupletag && (
                                <span className="tag couple">COUPLE</span>
                            )
                        }
                        <div className="name two-ellipsis">
                        {
                                product.brand ?

                                <span className="brand">{product.brand}</span>
                                    : <></>
                            }
                            {product.goodsname}
                            </div>
                        <div className="price">
                            {
                                product.saleBefore ?

                                    <div className="before-price">{product.saleBefore}</div>
                                    : <></>
                            }
                            {
                                product.salePercent ?

                                    <div><span className="percent">{product.salePercent}</span>{product.realmoney}</div>
                                    : <div>{product.realmoney}</div>
                            }

                            {
                                product.promotion ?

                                    <div className="promotion">{product.promotion}</div>
                                    : <></>
                            }
                        </div>
                        {
                            product.colorChip && (

                                <ul className="color">
                                    {/*{product.colorChip.map(color =>*/}
                                    {/*    <li key={color} className={color}></li>*/}
                                    {/*)}*/}
                                    {visibleColor.map(color =>
                                        <li key={color} className={color}></li>
                                    )}
                                    {remainingCount > 0 && (
                                        <li className="remaining">+{remainingCount}</li>
                                    )}

                                </ul>
                            )
                        }
                        {
                            product.review ?

                                <div className="review"><div className="star">{product.review[0]}</div><div>리뷰 {product.review[1]}</div></div>
                                : <></>
                        }
                        {
                            product.sizeView ?

                                <div className="sizeView"><button><img src={sizeIco}/>사이즈 보기</button></div>
                                : <></>
                        }

                    </div>
                </a>
            </div>
        </>
    );
}

export default ProductTypeVertical;
