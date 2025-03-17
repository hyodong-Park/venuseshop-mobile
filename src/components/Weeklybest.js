import '../styles/main.css'
import React, {useState, useRef, useEffect} from 'react';
import ProductTypeHorizon from './ProductTypeHorizon';
import TitleWrap from './TitleWrap';
import TabNav from './TabNav';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import axios from 'axios';

function Weeklybest() {

    let [braWrap1,setBraWrap1] = useState([]);

    useEffect(() => {

        const instance = axios.create({
            baseURL: 'http://52.79.198.9:8000/eshop/api/',
            // baseURL: 'http://192.168.0.143:8080/eshop/api/',
            timeout: 10000,
        });

        instance.get('/product/bestitem')
            .then(response => {
                const datalist = response.data.data;

                let braTmp = [];

                for(let i = 0 ; i < datalist.length; i++) {

                    const data = datalist[i];

                    const obj = {
                        img : 'https://www.venus-eshop.co.kr/images/' + data.goods_image,
                        number : i + 1,
                        brand : data.info_brand,
                        goodsname : data.goods_model,
                        realmoney : data.price,
                        promotion : data.goods_promotion,
                        like : false
                    }

                    braTmp.push(obj);
                    setBraWrap1(braTmp)
                }
            })
            .catch(error => {
                console.log(error)
            });

        // instance.post('/auth/login',{username : 'gsm0530test94', password : 'sooin12!'})
        //     .then(response => {
        //         console.log('!!인증')
        //         console.log(response)
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     });

    }, []);


    // let braWrap1 = [
    //     {img: 'https://www.venus-eshop.co.kr/images/VBRI64220241115092311928Product08.png', number:'1', brand:'비너스', goodsname:'클래식 이즈 뉴 브라 VER.1(VBRI642)', realmoney:'49,000원', promotion:'크리스마스 에디션', like:true},
    //     {img: 'https://www.venus-eshop.co.kr/images/SBRD45520241104095419257Product07.png', number:'2', brand:'솔브', goodsname:'러브 글램 더블윙 브라(SBRD455)', realmoney:'45,000원', promotion:'', like:false},
    //     {img: 'https://www.venus-eshop.co.kr/images/VBR098120240326110338962Product05.png', number:'3', brand:'솔브', goodsname:'풀컵 부유방 보정브라(VBRQ863)', realmoney:'53,000원', promotion:'오프라인 판매 베스트', like:false},
    //     {img: 'https://www.venus-eshop.co.kr/images/VPT098120240326111201637Product04.png', number:'4', brand:'솔브', goodsname:'BE MY SELF 브라(SBRD123)', realmoney:'45,000원', promotion:'오프라인 판매 베스트', like:false}
    //     // {img: 'https://www.venus-eshop.co.kr/images/VPT0990H20240814163222826Product04.png', number:'5', brand:'솔브', goodsname:'[빅사이즈] 하이브리드 인견 판매 베스트 솔브 브라(SBRD123)', realmoney:'45,000원', promotion:'빅사이즈 추천', like:false},
    // ]

    const [activeIndex, setActiveIndex] = useState(0); // 현재 활성화된 슬라이드 인덱스 관리
    const swiperRef = useRef(null); // Swiper 인스턴스 참조

    const tabToSlideMap = [0, 2, 3, 4];
    const slideToTabMap = { 0: 0, 1: 0, 2: 1, 3: 2, 4: 3 };

    const handleTabClick = (tabIndex) => {
        setActiveIndex(tabIndex);
        if (swiperRef.current) {
            swiperRef.current.slideTo(tabToSlideMap[tabIndex]); // 탭 인덱스에 매핑된 슬라이드로 이동
        }
    };

    const handleSlideChange = (swiper) => {
        const currentSlide = swiper.activeIndex;
        setActiveIndex(slideToTabMap[currentSlide] || 0); // 슬라이드에 매핑된 탭 버튼 활성화
    };



    let braWrap2 = [
        {img: 'https://www.venus-eshop.co.kr/images/VBR099020240814163021280Product01.png', number:'6', brand:'비너스', goodsname:'SINCE 1954. 아뜰리에 (VBR0990)', realmoney:'85,000원', promotion:'', like:false},
        {img: 'https://www.venus-eshop.co.kr/images/WBR207020240814163601794Product04.png', number:'7', brand:'와코루', goodsname:'[광고]이터널 클래식 브라(WBR2070)', realmoney:'169,000원', promotion:'오프라인 판매 베스트', like:true},
        {img: 'https://www.venus-eshop.co.kr/images/WBR206020240327145945150Product01.png', number:'8', brand:'와코루', goodsname:'[광고]에어리 던 브라(WBR2060)', realmoney:'153,000원', promotion:'', like:false},
        {img: 'https://www.venus-eshop.co.kr/images/WBR205020240116113132003Product01.png', number:'9', brand:'와코루', goodsname:'[광고]그레이스 가든 브라(WBR2050)', realmoney:'159,000원', promotion:'오프라인 판매 베스트', like:false},
        {img: 'https://www.venus-eshop.co.kr/images/WBR204020230821134104588Product01.png', number:'10', brand:'와코루', goodsname:'MOOD BLAST 브라(WBR2040)', realmoney:'169,000원', promotion:'빅사이즈 추천', like:false},
    ]

    let pantyWrap = [
        {img: 'https://www.venus-eshop.co.kr/images/VPT0980H20240201151718079Product05.png', number:'1', brand:'비너스', goodsname:'[광고]플랑플랑 헴팬티(VPT0980H)', realmoney:'29,000원', promotion:'빅사이즈 추천', like:false},
        {img: 'https://www.venus-eshop.co.kr/images/VPT098120240326111201637Product04.png', number:'2', brand:'비너스', goodsname:'[광고]플랑플랑 VER.2 삼각팬티(VPT0981)', realmoney:'19,000원', promotion:'오프라인 판매 베스트', like:false},
        {img: 'https://www.venus-eshop.co.kr/images/VPT0990H20240814163222826Product04.png', number:'3', brand:'비너스', goodsname:'[광고]아뜰리에 헴팬티(VPT0990H)', realmoney:'29,000원', promotion:'오프라인 판매 베스트', like:false},
        {img: 'https://www.venus-eshop.co.kr/images/VPTI642H20230417145604512Product01.png', number:'4', brand:'비너스', goodsname:'클래식 이즈 뉴 헴팬티 VER.1(VPTI642H)', realmoney:'13,000원', promotion:'빅사이즈 추천', like:false},
        {img: 'https://www.venus-eshop.co.kr/images/VPTI631H20241008101342300Product04.png', number:'5', brand:'비너스', goodsname:'군살정리 완벽 튤레이스 노라인 햄팬티(VPTI631H)', realmoney:'11,000원', promotion:'빅사이즈 추천', like:false},
    ]
    
    let correctionWrap = [
        {img: 'https://www.venus-eshop.co.kr/images/VGRM155S20241226152317930Product01.png', number:'1', brand:'비너스', goodsname:'문직사틴 랩스타일 삼각거들(VGRM155S)', realmoney:'59,000원', promotion:'빅사이즈 추천', like:false},
        {img: 'https://www.venus-eshop.co.kr/images/WGRM101S20240627163031146Product02.png', number:'2', brand:'와코루', goodsname:'미디움 타입 하이웨이스트 쇼트거들(WGRM101S)', realmoney:'175,000원', promotion:'', like:false},
        {img: 'https://www.venus-eshop.co.kr/images/WGRM100S20240321175625510Product01.png', number:'3', brand:'와코루', goodsname:'미듐타입 쇼트 거들(WGRM100S)', realmoney:'115,000원', promotion:'', like:false},
        {img: 'https://www.venus-eshop.co.kr/images/DBT047020241011112020429Product01.png', number:'4', brand:'샬루트', goodsname:'오리엔탈 클래식 바디슈트(DBT0470)', realmoney:'38,000원', promotion:'', like:false},
        {img: 'https://www.venus-eshop.co.kr/images/VBTH53120240715142214122Product01.png', number:'5', brand:'비너스', goodsname:'하드타입 심플몰드 쉐이퍼(VBTH531)', realmoney:'173,000원', promotion:'빅사이즈 추천', like:false},
    ]

    let pajamaWrap = [
        {img: 'https://www.venus-eshop.co.kr/images/SLGE00220240517165218632Product03.png', number:'1', brand:'솔브', goodsname:'솔브 투웨이 튜브탑 (SLGE002)', realmoney:'18,900원', promotion:'20% 할인쿠폰', like:false},
        {img: 'https://www.venus-eshop.co.kr/images/WPA2468W20241226145407240Product02.png', number:'2', brand:'와코루', goodsname:'샤무즈 쉬폰 꽃나염 여성 파자마(WPA2468W)', realmoney:'188,000원', promotion:'', like:false},
        {img: 'https://www.venus-eshop.co.kr/images/VEP388FS20241205135639548Product01.png', number:'3', brand:'비너스', goodsname:'따수미 극세사 솔리드 여성 목도리세트(VEP388FS)', realmoney:'117,000원', promotion:'', like:false},
        {img: 'https://www.venus-eshop.co.kr/images/VPA4480W20241205132637087Product02.png', number:'4', brand:'비너스', goodsname:'웜후레쉬 선염체크 여성 파자마(VPA4480W)', realmoney:'150,000원', promotion:'', like:false},
        {img: 'https://www.venus-eshop.co.kr/images/VPA4452W20241205114930524Product01.png', number:'5', brand:'비너스', goodsname:'면기모 눈꽃 나염 여성 파자마(VPA4452W)', realmoney:'130,000원', promotion:'', like:false},
    ]



    return (
        <>
            <section>
                <TitleWrap content={{ text: '주간 판매 랭킹', type: 'all' }} />
                <TabNav activeIndex={activeIndex} onTabClick={handleTabClick} type={'ranking'} />
                <div>
                    <Swiper spaceBetween={30} slidesPerView={1} onSlideChange={handleSlideChange} style={{ paddingLeft: 20, paddingRight: '12%' }} className="sub-promotion" onSwiper={(swiper) => (swiperRef.current = swiper)}>
                        <SwiperSlide>
                            {braWrap1.map((item, index) => (
                                <ProductTypeHorizon
                                    product={{
                                        img: item.img, number: item.number, brand: item.brand, goodsname: item.goodsname, realmoney: item.realmoney, promotion: item.promotion, like:item.like
                                    }}
                                    key={index}
                                />
                            ))}
                        </SwiperSlide>
                        <SwiperSlide>
                            {braWrap2.map((item, index) => (
                                <ProductTypeHorizon
                                    product={{
                                        img: item.img, number: item.number, brand: item.brand, goodsname: item.goodsname, realmoney: item.realmoney, promotion: item.promotion, like:item.like
                                    }}
                                    key={index}
                                />
                            ))}
                        </SwiperSlide>
                        <SwiperSlide>
                            {pantyWrap.map((item, index) => (
                                <ProductTypeHorizon
                                    product={{
                                        img: item.img, number: item.number, brand: item.brand, goodsname: item.goodsname, realmoney: item.realmoney, promotion: item.promotion, like:item.like
                                    }}
                                    key={index}
                                />
                            ))}
                        </SwiperSlide>
                        <SwiperSlide>
                            {correctionWrap.map((item, index) => (
                                <ProductTypeHorizon
                                    product={{
                                        img: item.img, number: item.number, brand: item.brand, goodsname: item.goodsname, realmoney: item.realmoney, promotion: item.promotion, like:item.like
                                    }}
                                    key={index}
                                />
                            ))}
                        </SwiperSlide>
                        <SwiperSlide>
                            {pajamaWrap.map((item, index) => (
                                <ProductTypeHorizon
                                    product={{
                                        img: item.img, number: item.number, brand: item.brand, goodsname: item.goodsname, realmoney: item.realmoney, promotion: item.promotion, like:item.like
                                    }}
                                    key={index}
                                />
                            ))}
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>

        </>
    );
}

export default Weeklybest;
