import '../styles/main.css'
import {useEffect, useRef, useState} from "react";
import {gsap} from "gsap";
import likeOff from '../assets/image/like_off.svg';
import likeOn from '../assets/image/like_on.svg';
import {Link} from "react-router-dom";
import {changeWishItem} from "../api/commonApi";

function ProductTypeHorizon({product, likeToggle}) {

    const init = useRef(false);

    const heartRef = useRef(null);
    const likeRef = useRef(null);

    const [like, setLike] = useState(product.like);

    const ticking = useRef(false); // 중복 실행 방지

    useEffect(() => {

        if (init.current) {

            changeLike(like, 0.5);
        } else {

            init.current = true;

            if (like) {

                changeLike(like, 0);
            } else {

                ticking.current = false;
            }
        }
    }, [like]);

    const preventDuplication = () => {

        ticking.current = false;
    }

    const changeLike = (flag, duration) => {

        if (flag) {

            const isOn = gsap.fromTo(
                heartRef.current,
                {scale: 0,}, // 시작 크기와 투명도 설정
                {scale: 1.2, duration: duration, ease: "power2.out"} // 목표 크기와 애니메이션 속성
            );

            isOn.eventCallback('onComplete', preventDuplication);

        } else {

            const isOff = gsap.fromTo(
                heartRef.current,
                {scale: 1.2,}, // 시작 크기와 투명도 설정
                {scale: 0, duration: 0.1, ease: "power2.out"} // 목표 크기와 애니메이션 속성
            );
            isOff.eventCallback('onComplete', preventDuplication);
        }
    }

    var likeToggle = async (event) => {

        event.stopPropagation();
        event.preventDefault();

        if (!ticking.current) {
            ticking.current = true;

            try {

                await changeWishItem(!like, product.packid)
                    .then(response => {

                        if (response.success && response.message !== '이미 찜한 상품입니다.') setLike(!like);
                        else alert(response.message)
                    })
            } catch (error) {
                alert(error.message)
            } finally {
                ticking.current = false;
            }
        }
    }

    const strHref = product.packid !== undefined ? '/ProductDetail?id=' + product.packid : '#';

    return (
        <>
            <div className="productHorizon productWrap">
                <Link to={strHref} onClick={e => e.preventDefault}>
                    {product.number && (<div className={Number(product.number) < 4 ? 'ranking best' : 'ranking'}>{product.number}</div>)}
                    <div className="image">
                        <img src={product.img}/>
                        <button className={product.like ? 'like like-on' : 'like'} onClick={likeToggle} ref={likeRef}>
                            <img src={likeOff} className="off"/><img src={likeOn} className="on" ref={heartRef}/>
                        </button>
                    </div>
                    <div className="meta">
                        <div className="name two-ellipsis"><span
                            className="brand">{product.brand}</span>{product.goodsname}</div>
                        <div className="price">{product.realmoney}</div>
                        {product.promotion && product.promotion.trim() !== "" && (<div className="promotion">{product.promotion}</div>)}
                    </div>
                </Link>
            </div>
        </>
    );
}

export default ProductTypeHorizon;
