import '../styles/main.css'
import React, {useEffect, useState} from 'react';
import MDsPickInner from './MDsPickInner';
import TitleWrap from './TitleWrap';
import 'swiper/css';
import 'swiper/css/free-mode';

import {baseApi} from '../api/axiosInstance';

function MDsPick() {

    const [firstProduct, setFirstProduct] = useState([]);
    const [secondProduct, setSecondProduct] = useState([]);
    const [thirdProduct, setThirdProduct] = useState([]);
    const [fourthProduct, setFourthProduct] = useState([]);

    const [firstMd, setFirstMd] = useState(null);
    const [secondMd, setSecondMd] = useState(null);
    const [thirdMd, setThirdMd] = useState(null);
    const [fourthMd, setFourthMd] = useState(null);

    const [firstReady, setFirstReady] = useState(false);
    const [secondReady, setSecondReady] = useState(false);
    const [thirdReady, setThirdReady] = useState(false);
    const [fourthReady, setFourthReady] = useState(false);

    useEffect(() => {

        function productSetting(pageList, idx) {

            let listTmp = [];

            for (let i = 0; i < pageList.length; i++) {

                const page = pageList[i];
                const tmpPage = [];

                for (let j = 0; j < page.length; j++) {

                    const data = page[j];

                    const obj = {
                        packid: data.pack_content_id,
                        img: 'https://www.venus-eshop.co.kr/images/' + data.goods_image,
                        brand: data.info_brand,
                        goodsname: data.goods_model,
                        realmoney: data.price,
                        stock: data.stock,
                        like: data.wish
                    }

                    tmpPage.push(obj);
                }

                listTmp.push(tmpPage);
            }

            if (idx === 0) {

                setFirstProduct(listTmp);
            } else if (idx === 1) {

                setSecondProduct(listTmp);
            } else if (idx === 2) {

                setThirdProduct(listTmp);
            } else if (idx === 3) {

                setFourthProduct(listTmp);
            }
        }

        function pickSetting(pickData, idx) {

            productSetting(pickData.product, idx);

            return {
                bg: pickData.bg,
                title: pickData.title,
                subTitle: pickData.subtitle,
                index: idx
            };
        }

        baseApi.get('/product/mdpick')
            .then(response => {
                const datalist = response.data.data.data;

                for (let i = 0; i < datalist.length; i++) {

                    const pickList = datalist[i];
                    const tmpObj = pickSetting(pickList, i);

                    if (i === 0) {

                        setFirstMd(tmpObj);
                    } else if (i === 1) {

                        setSecondMd(tmpObj);
                    } else if (i === 2) {

                        setThirdMd(tmpObj);
                    } else if (i === 3) {

                        setFourthMd(tmpObj);
                    }
                }
            })
            .catch(error => {
                console.log(error)
            });
    }, []);

    useEffect(() => {
        if (firstMd && firstProduct.length > 0) {
            setFirstReady(true);
        }
    }, [firstMd, firstProduct]);

    useEffect(() => {
        if (secondMd && secondProduct.length > 0) {
            setSecondReady(true);
        }
    }, [secondMd, secondProduct]);

    useEffect(() => {
        if (thirdMd && thirdProduct.length > 0) {
            setThirdReady(true);
        }
    }, [thirdMd, thirdProduct]);

    useEffect(() => {
        if (fourthMd && fourthProduct.length > 0) {
            setFourthReady(true);
        }
    }, [fourthMd, fourthProduct]);


    return (
        (firstReady || secondReady || thirdReady || fourthReady) ? (
        <>
            <section>
                <TitleWrap content={{text: '믿고 보는 MD 추천'}}/>
                {firstReady ? (<MDsPickInner data={firstMd} product={firstProduct} />) : (<></>)}
                {secondReady ? (<MDsPickInner data={secondMd} product={secondProduct} />) : (<></>)}
                {thirdReady ? (<MDsPickInner data={thirdMd} product={thirdProduct} />) : (<></>)}
                {fourthReady ? (<MDsPickInner data={fourthMd} product={fourthProduct} />) : (<></>)}

            </section>
        </>) : (<></>)
    );
}

export default MDsPick;
