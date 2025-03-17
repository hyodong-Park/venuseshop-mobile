import '../styles/main.css'
import React, { useState } from 'react';
import MDsPickInner from './MDsPickInner';
import TitleWrap from './TitleWrap';
import 'swiper/css';
import 'swiper/css/free-mode';

import firstImg from '../assets/image/md-img01.jpg';
import secondImg from '../assets/image/md-img02.jpg';
import thirdImg from '../assets/image/md-img03.jpg';
import fourthImg from '../assets/image/md-img04.jpg';

function MDsPick() {


  const mdProduct11 = [
    { brand: '솔브', goodsname: '러브 글램 더블윙 브라(SBRD455)', realmoney: '45,000원', image: 'https://www.venus-eshop.co.kr/images/SBRD45520241104095419257Product05.png', like:false },
    { brand: '솔브', goodsname: '러브 글램 레이스팬티(SPTD455S)', realmoney: '21,000원', image: 'https://www.venus-eshop.co.kr/images/SPTD455S20241104100015338Product06.png', like:false },
    { brand: '솔브', goodsname: '홀리데이 프리미엄 부유방 커버 브라(SBRD457)', realmoney: '53,000원', image: 'https://www.venus-eshop.co.kr/images/SBRD45720241205134053474Product08.png', like:false },
    { brand: '솔브', goodsname: '홀리데이 프리미엄 레이스팬티(SPTD457S)', realmoney: '23,000원', image: 'https://www.venus-eshop.co.kr/images/SPTD457S20241205134112416Product08.png', like:false }
  ];

  const mdProduct12 = [
    { brand: '솔브', goodsname: '베리드뮤어 헴팬티(SPTD470H)', realmoney: '45,000원', image: 'https://www.venus-eshop.co.kr/images/SBRD47020241018114855518Product07.png', like:false },
    { brand: '솔브', goodsname: '베리드뮤어 헴팬티(SPTD470H)', realmoney: '19,000원', image: 'https://www.venus-eshop.co.kr/images/SPTD470H20241018130203611Product04.png', like:false },
    { brand: '솔브', goodsname: '홀리데이 프리미엄 헴팬티(SPTD457H)', realmoney: '21,000원', image: 'https://www.venus-eshop.co.kr/images/SPTD455T20241104100411659Product02.png', like:false },
    { brand: '솔브', goodsname: '크리미 풀컵 패드 브라(OBR5917)', realmoney: '23,000원', image: 'https://www.venus-eshop.co.kr/images/SPTD457T20241219140501099Product01.png', like:false }
  ];

  const mdProduct13 = [
    { brand: '비너스', goodsname: '[블랙라벨] 와이어 감각 브라(VBRB639)', realmoney: '97,000원', image: 'https://www.venus-eshop.co.kr/images/VBRB63920240911163036492Product07.png', like:false },
    { brand: '솔브', goodsname: '[블랙라벨] 헴원단 감각 팬티(VPTB639H)', realmoney: '31,000원', image: 'https://www.venus-eshop.co.kr/images/VPTB639H20240911164424108Product07.png', like:false },
    { brand: '와코루', goodsname: '[광고]이터널 클래식 브라(WBR2070)', realmoney: '169,000원', image: 'https://www.venus-eshop.co.kr/images/WBR207020240814163601794Product07.png', like:false },
    { brand: '와코루', goodsname: '[광고]이터널 클래식 레이스팬티(WPT2070S)', realmoney: '61,000원', image: 'https://www.venus-eshop.co.kr/images/WPT2070S20240814163801476Product05.png', like:false }
  ];

  const mdProduct14 = [
    { brand: '솔브', goodsname: '블링 글램 커버 브라(SBRD453)', realmoney: '43,000원', image: 'https://www.venus-eshop.co.kr/images/SBRD45320240912100238756Product06.png', like:false },
    { brand: '솔브', goodsname: '플라워 믹스매치 노와이어 브라(SBRD461)', realmoney: '37,000원', image: 'https://www.venus-eshop.co.kr/images/SBRD46120240910134857101Product02.png', like:false },
    { brand: '오르화', goodsname: '울트라 푸쉬업 볼륨업 브라(OBR6090)', realmoney: '95,000원', image: 'https://www.venus-eshop.co.kr/images/OBR609020230719130034041Product01.png', like:false },
    { brand: '오르화', goodsname: '울트라 레이스 팬티(OPT6090S)', realmoney: '39,000원', image: 'https://www.venus-eshop.co.kr/images/OPT6090S20230719130627179Product04.png', like:false }
  ];

  const mdProduct21 = [
    { brand: '비너스', goodsname: '클래식 이즈 뉴 브라 VER.1(VBRI642)', realmoney: '49,000원', image: 'https://www.venus-eshop.co.kr/images/VBRI64220241115092311928Product08.png', like:false },
    { brand: '비너스', goodsname: '비너스 마이핏 스포츠 브라(VBRI119)', realmoney: '45,000원', image: 'https://www.venus-eshop.co.kr/images/VBRI11920220315090336122Product08.png', like:false },
    { brand: '비너스', goodsname: '비너스 풀컵 부유방보정 브라(VBRQ863)', realmoney: '45,000원', image: 'https://www.venus-eshop.co.kr/images/VBRQ86320240103154436905Product09.png', like:false },
    { brand: '비너스', goodsname: '비너스 러블리 파스텔 레이스 브라(VBRI630)', realmoney: '35,000원', image: 'https://www.venus-eshop.co.kr/images/VBRI63020241008101810162Product08.png', like:false }
  ];

  const mdProduct22 = [
    { brand: '비너스', goodsname: 'SINCE 1954. 아뜰리에 (VBR0990)', realmoney: '85,000원', image: 'https://www.venus-eshop.co.kr/images/VBR099020240814163021280Product01.png', like:false },
    { brand: '비너스', goodsname: 'SINCE 1954. 아뜰리에2(VBR0991)', realmoney: '83,000원', image: 'https://www.venus-eshop.co.kr/images/VBR099120240821144145733Product10.png', like:false },
    { brand: '비너스', goodsname: '플랑플랑 VER.2 브라(VBR0981)', realmoney: '67,000원', image: 'https://www.venus-eshop.co.kr/images/VBR098120240326110338962Product04.png', like:false },
    { brand: '비너스', goodsname: '에어본 슬림 보정 브라(VGBM530)', realmoney: '91,000원', image: 'https://www.venus-eshop.co.kr/images/VGBM53020240705151647996Product01.png', like:false }
  ];

  const mdProduct23 = [
    { brand: '비너스', goodsname: '브이핏 스포츠 브라(VBRS119)', realmoney: '65,000원', image: 'https://www.venus-eshop.co.kr/images/VBRS11920231017152937562Product03.png', like:false },
    { brand: '비너스', goodsname: '보정용 고탄력 와이어 브라(VBRG620)', realmoney: '77,000원', image: 'https://www.venus-eshop.co.kr/images/VBRG62020241121160208510Product07.png', like:false },
    { brand: '비너스', goodsname: '플랑플랑 브라(VBR0980)', realmoney: '83,000원', image: 'https://www.venus-eshop.co.kr/images/VBR098020240202172330640Product10.png', like:false },
    { brand: '비너스', goodsname: '프리티 노와이어 브라(VBRI646)', realmoney: '47,000원', image: 'https://www.venus-eshop.co.kr/images/VBRI64620240404132536763Product04.png', like:false }
  ];

  const mdProduct24 = [
    { brand: '비너스', goodsname: '에센셜 심플 데일리 요일브라 (VBRQ451)', realmoney: '35,000원', image: 'https://www.venus-eshop.co.kr/images/VBRQ45120231123151805787Product01.png', like:false },
    { brand: '비너스', goodsname: '문직사틴 몰드 거들브라(VGBM541)', realmoney: '93,000원', image: 'https://www.venus-eshop.co.kr/images/VGBM54120250108102730510Product04.png', like:false },
    { brand: '비너스', goodsname: '러블리 순백 몰드 브라(VBR1698)', realmoney: '79,000원', image: 'https://www.venus-eshop.co.kr/images/VBR169820240814152603880Product06.png', like:false },
    { brand: '비너스', goodsname: '기모 극세사 보온 내의세트 (VLGI002S)', realmoney: '37,000원', image: 'https://www.venus-eshop.co.kr/images/VLGI002S20240925171417048Product02.png', like:false }
  ];

  const mdProduct31 = [
    { brand: '솔브', goodsname: '빅사이즈 부유방 커버브라(SBRE230)', realmoney: '16,900원', image: 'https://www.venus-eshop.co.kr/images/SBRE23020240403161207911Product08.png', like:false },
    { brand: '솔브', goodsname: '[인기] 베이직 브라 업그레이드 버전 (SBRD288)', realmoney: '29,000원', image: 'https://www.venus-eshop.co.kr/images/SBRD28820221221103057969Product02.png', like:false },
    { brand: '솔브', goodsname: 'BE MY SELF 브라(SBRD123)', realmoney: '37,000원', image: 'https://www.venus-eshop.co.kr/images/SBRD12320210607105143231Product03.png', like:false },
    { brand: '솔브', goodsname: '[빅사이즈] 하이브리드 인견브라(SBRE210)', realmoney: '19,900원', image: 'https://www.venus-eshop.co.kr/images/SBRE21020230601161508707Product07.png', like:false }
  ];

  const mdProduct32 = [
    { brand: '솔브', goodsname: '[추천] 메쉬 에스핏 브라(SBRS104)', realmoney: '31,000원', image: 'https://www.venus-eshop.co.kr/images/SBRS10420210607174959849Product02.png', like:false },
    { brand: '솔브', goodsname: '[빅사이즈] 트리플 윙 밀착 보정브라 (SBRD047)', realmoney: '39,000원', image: 'https://www.venus-eshop.co.kr/images/SBRD04720221104140842534Product10.png', like:false },
    { brand: '솔브', goodsname: '아랫배 커버 맥시팬티(SPTE230C)', realmoney: '6,900원', image: 'https://www.venus-eshop.co.kr/images/SPTE230C20240403161236931Product07.png', like:false },
    { brand: '솔브', goodsname: '올라운더 더블 다운핏 브라(SBRE220)', realmoney: '16,900원', image: 'https://www.venus-eshop.co.kr/images/SBRE22020240329145410019Product07.png', like:false }
  ];

  const mdProduct33 = [
    { brand: '솔브', goodsname: '[광고] 어텀 베리떼 믹스본 브라(SBRD451)', realmoney: '43,000원', image: 'https://www.venus-eshop.co.kr/images/SBRD45120240802114754519Product01.png', like:false },
    { brand: '솔브', goodsname: '빅사이즈 듀얼 커버 브라(SBRE240)', realmoney: '16,900원', image: 'https://www.venus-eshop.co.kr/images/SBRE24020240403161012860Product06.png', like:false },
    { brand: '솔브', goodsname: '[인기] 매일 에센셜 베이직 팬티(SPTD288H)', realmoney: '9,000원', image: 'https://www.venus-eshop.co.kr/images/SPTD288H20221221104037848Product02.png', like:false },
    { brand: '솔브', goodsname: '러브 글램 더블윙 브라(SBRD455)', realmoney: '45,000원', image: 'https://www.venus-eshop.co.kr/images/SBRD45520241104095419257Product05.png', like:false }
  ];

  const mdProduct34 = [
    { brand: '솔브', goodsname: '홀리데이 프리미엄 부유방 커버 브라(SBRD457)', realmoney: '53,000원', image: 'https://www.venus-eshop.co.kr/images/SBRD45720241205134053474Product07.png', like:false },
    { brand: '솔브', goodsname: '군살 커버 큰컵 와이어 언니브라 (SBRE202)', realmoney: '23,900원', image: 'https://www.venus-eshop.co.kr/images/SBRE20220241017101954461Product08.png', like:false },
    { brand: '솔브', goodsname: '페미닌 풀레이스 브라(SBRD391)', realmoney: '29,000원', image: 'https://www.venus-eshop.co.kr/images/SBRD39120240620154918591Product07.png', like:false },
    { brand: '솔브', goodsname: '[광고]라이블리 데이 브라(SBRD405)', realmoney: '43,000원', image: 'https://www.venus-eshop.co.kr/images/SBRD40520240327150253072Product01.png', like:false }
  ];

  const mdProduct41 = [
    { brand: '비너스', goodsname: '따수미 극세사 솔리드 여성 목도리세트(VEP388FS)', realmoney: '117,000원', image: 'https://www.venus-eshop.co.kr/images/VEP388FS20241205135639548Product01.png', like:false },
    { brand: '비너스', goodsname: '따수미 극세사 솔리드 남성 목도리세트(VEP388MS)', realmoney: '117,000원', image: 'https://www.venus-eshop.co.kr/images/VEP388MS20241205134437435Product01.png', like:false },
    { brand: '비너스', goodsname: '코트나 기모 체크나염 남성 바지(VMP1789L)', realmoney: '65,000원', image: 'https://www.venus-eshop.co.kr/images/VMP1789L20250102143206817Product01.png', like:false },
    { brand: '와코루', goodsname: '폴리기모 베이직 9부 내의세트(WLG2490S)', realmoney: '89,000원', image: 'https://www.venus-eshop.co.kr/images/WLG2490S20250102144343850Product01.png', like:false }
  ];

  const mdProduct42 = [
    { brand: '와코루', goodsname: '면 기모 나염 남성 9부 바지(WMP541MP)', realmoney: '89,000원', image: 'https://www.venus-eshop.co.kr/images/WMP541MP20241205140519415Product01.png', like:false },
    { brand: '와코루', goodsname: '면 기모 나염 여성 9부 바지(WMP541WP)', realmoney: '89,000원', image: 'https://www.venus-eshop.co.kr/images/WMP541WP20241205140824262Product01.png', like:false },
    { brand: '비너스', goodsname: '선염 면 기모 체크 남성 하의(VEP3863M)', realmoney: '69,000원', image: 'https://www.venus-eshop.co.kr/images/VEP3863M20241114144000413Product02.png', like:false },
    { brand: '비너스', goodsname: '선염 면 기모 체크 남성 상의(VEV3863M)', realmoney: '69,000원', image: 'https://www.venus-eshop.co.kr/images/VEV3863M20241114110216173Product01.png', like:false }
  ];

  const mdProduct43 = [
    { brand: '비너스', goodsname: '선염 면 기모 체크 여성 하의(VEP3863F)', realmoney: '69,000원', image: 'https://www.venus-eshop.co.kr/images/VEP3863F20241114143940804Product02.png', like:false },
    { brand: '비너스', goodsname: '선염 면 기모 체크 여성 상의(VEV3863F)', realmoney: '69,000원', image: 'https://www.venus-eshop.co.kr/images/VEV3863F20241114110115062Product02.png', like:false },
    { brand: '비너스', goodsname: '아크릴 면 기모 9부 여성 상의(VLG5059C)', realmoney: '79,000원', image: 'https://www.venus-eshop.co.kr/images/VLG5059C20241128144303576Product01.png', like:false },
    { brand: '비너스', goodsname: '아크릴 면 기모 9부 여성 하의(VLG5059L)', realmoney: '75,000원', image: 'https://www.venus-eshop.co.kr/images/VLG5059L20241128143911768Product01.png', like:false }
  ];

  const mdProduct44 = [
    { brand: '비너스', goodsname: '폴리 기모 팬더나염 남성 하의(VEP3893M)', realmoney: '63,000원', image: 'https://www.venus-eshop.co.kr/images/VEP3893M20241121144337482Product03.png', like:false },
    { brand: '비너스', goodsname: '폴리 기모 팬더나염 남성 상의(VEV3893M)', realmoney: '62,000원', image: 'https://www.venus-eshop.co.kr/images/VEV3893M20241121143936366Product02.png', like:false },
    { brand: '비너스', goodsname: '폴리 기모 팬더나염 여성 하의(VEP3893F)', realmoney: '63,000원', image: 'https://www.venus-eshop.co.kr/images/VEP3893F20241121143152619Product02.png', like:false },
    { brand: '비너스', goodsname: '폴리 기모 팬더나염 여성 상의(VEV3893F)', realmoney: '62,000원', image: 'https://www.venus-eshop.co.kr/images/VEV3893F20241122102502535Product04.png', like:false }
  ];


    const firstProduct = [mdProduct11,mdProduct12,mdProduct13,mdProduct14];
    const secondProduct = [mdProduct21,mdProduct22,mdProduct23,mdProduct24];
    const thirdProduct = [mdProduct31,mdProduct32,mdProduct33,mdProduct34];
    const fourthProduct = [mdProduct41,mdProduct42,mdProduct43,mdProduct44];

    const firstPick = { bg: firstImg, title:'크리스마스 에디션🎄', subTitle:'Christmas edition', product:firstProduct, index:0};
    const secondPick = { bg: secondImg, title:'올해 인기상품 VENUS🏆', subTitle:'BEST of VENUS', product:secondProduct, index:1};
    const thirdPick = { bg: thirdImg, title:'올해 인기상품 SOLB🎁', subTitle:'BEST of SOLB', product:thirdProduct, index:2};
    const fourthPick = { bg: fourthImg, title:'겨울 필수아이템⛄', subTitle:'Winter item', product:fourthProduct, index:3};

    const mdContent = [firstPick,secondPick,thirdPick,fourthPick]

    
//  let [product,setProduct] = useState(mdContent);

//  const likeToggle = (index) => {
//      event.stopPropagation();
//      event.preventDefault();

//      setProduct((prevProducts) =>
//          prevProducts.map((item, i) =>
//              i === index ? { ...item, like: !item.like } : item
//          )
//      );
//  };

  return (
    <>
      <section>
        <TitleWrap content={{ text: '믿고 보는 MD 추천' }} />
        {mdContent.map((item, index) => (
          <MDsPickInner data={{ item }} sunbun={index} key={index} />
        ))}
      </section>
    </>
  );
}

export default MDsPick;
