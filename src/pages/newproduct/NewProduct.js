import Headers from '../../components/Header';
// import Body from './Body';
import Footer from '../../components/Footer';
// import HeaderCategory from "./HeaderCategory";
import FilterList from "../../components/FilterList";
import ProductControlBar from "../../components/ProductControlBar";
import ProductTypeVertical from "../../components/ProductTypeVertical";
import React, {useEffect, useState} from "react";
import {SwiperSlide} from "swiper/react";
import venusProductBg from "../../assets/image/ad-venus.jpg";
import solbProductBg from "../../assets/image/ad-solb.jpg";
import wacoalProductBg from "../../assets/image/ad-wacoal.jpg";
import useNewProductTab from '../../store/store';

function NewProduct() {

    const {tab,setTab} = useNewProductTab();

    let productWoman = [
        { img:'https://www.venus-eshop.co.kr/images/OBR591720241219134842252Product01.png', brand: '오르화', goodsname: '크리미 풀컵 패드 브라(OBR5917)', realmoney: '133,000원', couponinfo:'15%', newtag:true, colorChip:['brown', 'black', 'skyblue', 'yellow', 'white', 'violet'], sizeView:'true', like:false },
        { img:'https://www.venus-eshop.co.kr/images/OBR592120241218153352277Product09.png', brand: '오르화', goodsname: '로제 레이스 커버업 패드 브라(OBR5921)', realmoney: '147,000원', newtag:true, colorChip:['brown', 'black', 'skyblue', 'yellow', 'white', 'violet'], sizeView:'true', like:false },
        { img:'https://www.venus-eshop.co.kr/images/OBR684720241128140415290Product06.png', brand: '오르화', goodsname: '딥브이 빵빵이 브라(OBR6847)', realmoney: '115,000원', newtag:true, besttag:true, colorChip:['violet', 'black'], sizeView:'true', like:false, promotion:'15% 추가할인' },
        { img:'https://www.venus-eshop.co.kr/images/OBR592520241128134952052Product01.png', brand: '오르화', goodsname: '우디 컴포트 엣지 와이어 브라(OBR5925)', realmoney: '149,000원', newtag:true, couponinfo:'15%', colorChip:['violet', 'black'], sizeView:'true', like:false },
        { img:'https://www.venus-eshop.co.kr/images/OBR321720241129145149370Product04.png', brand: '오르화', goodsname: '저중심 커버업 노와이어 브라(OBR3217)', realmoney: '117,000원', newtag:true, besttag:true, coupletag:true, colorChip:['black', 'red', 'blue'], review:[4.8, 2], sizeView:'true', like:false },
        { img:'https://www.venus-eshop.co.kr/images/OBR786020241128134716158Product05.png', brand: '오르화', goodsname: '풀커버리지 홑겹 브라(OBR7860)', realmoney: '132,000원', newtag:true, coupletag:true, colorChip:['yellow', 'pink'], sizeView:'true', like:false },
        { img:'https://www.venus-eshop.co.kr/images/OBR321620231221164053494Product08.png', brand: '오르화', goodsname: '풀사이드 커버업 노와이어 브라(OBR3216)', realmoney: '117,000원', newtag:true, colorChip:['beige'], sizeView:'true', like:false },
        { img:'https://www.venus-eshop.co.kr/images/OBR786120241106170926888Product04.png', brand: '오르화', goodsname: '엔젤망 섹시 풀컵 브라(OBR7861)', realmoney: '132,000원', newtag:true, colorChip:['black', 'pink', 'skyblue', 'gray'], sizeView:'true', like:false },
    ]

    let productMan = [
        { img:'https://www.venus-eshop.co.kr/images/VPA4512M20250306161622213Product01.png', brand: '비너스', goodsname: '면80수 주자 부엉이나염 남성 파자마(VPA4512M)', realmoney: '130,000원', couponinfo:'12%', newtag:true, colorChip:['blue'], sizeView:'true', like:false },
        { img:'https://www.venus-eshop.co.kr/images/VMP193420250306161431171Product01.png', brand: '비너스', goodsname: '면60수 주자 왕관 기하 나염 트렁크(VMP1934)', realmoney: '37,000원', newtag:true, colorChip:['brown', 'blue'], sizeView:'true', like:false },
        { img:'https://www.venus-eshop.co.kr/images/OBR684720241128140415290Product06.png', brand: '오르화', goodsname: '딥브이 빵빵이 브라(OBR6847)', realmoney: '115,000원', newtag:true, besttag:true, colorChip:['violet', 'black'], sizeView:'true', like:false},
        { img:'https://www.venus-eshop.co.kr/images/OBR592520241128134952052Product01.png', brand: '오르화', goodsname: '우디 컴포트 엣지 와이어 브라(OBR5925)', realmoney: '149,000원', newtag:true, couponinfo:'15%', colorChip:['violet', 'black'], sizeView:'true', like:false },
        { img:'https://www.venus-eshop.co.kr/images/OBR321720241129145149370Product04.png', brand: '오르화', goodsname: '저중심 커버업 노와이어 브라(OBR3217)', realmoney: '117,000원', newtag:true, besttag:true, coupletag:true, colorChip:['black', 'red', 'blue'], review:[4.8, 2], sizeView:'true', like:false },
        { img:'https://www.venus-eshop.co.kr/images/OBR786020241128134716158Product05.png', brand: '오르화', goodsname: '풀커버리지 홑겹 브라(OBR7860)', realmoney: '132,000원', newtag:true, coupletag:true, colorChip:['yellow', 'pink'], sizeView:'true', like:false },
        { img:'https://www.venus-eshop.co.kr/images/OBR321620231221164053494Product08.png', brand: '오르화', goodsname: '풀사이드 커버업 노와이어 브라(OBR3216)', realmoney: '117,000원', newtag:true, colorChip:['beige'], sizeView:'true', like:false },
        { img:'https://www.venus-eshop.co.kr/images/OBR786120241106170926888Product04.png', brand: '오르화', goodsname: '엔젤망 섹시 풀컵 브라(OBR7861)', realmoney: '132,000원', newtag:true, colorChip:['black', 'pink', 'skyblue', 'gray'], sizeView:'true', like:false },
    ]

    const category = [
        '여성 신상품', '남성 신상품'
    ]

    const [product, setProduct] = useState(productWoman)

    useEffect(() => {
        setProduct(tab === '여성 신상품' ? productWoman : productMan)
    }, [tab]);

    return (
        <div className="header-margin headercategoryMargin">
            {/* <ThemeColor/> */}
            <Headers category={category}/>
            <div className="body">
                {/*<HeaderCategory/>*/}
                <FilterList />
                <ProductControlBar/>
                <div className="double-product wrap">
                    {Array.from({ length: Math.ceil(product.length / 2) }, (_, i) => (
                        <div key={i}>
                            {product.slice(i * 2, i * 2 + 2).map((item, idx) => (
                                <ProductTypeVertical
                                    key={i * 2 + idx} // 고유한 key 값 설정
                                    product={item}
                                    likeToggle={() => likeToggle(i * 2 + idx)}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            {/*<Body/>*/}
            <Footer/>
        </div>
    );
}

export default NewProduct;
