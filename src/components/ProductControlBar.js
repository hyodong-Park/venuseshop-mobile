import '../styles/main.css'
import FilterModal from "./FilterModal";
import React, { useState } from "react";
import arrayIco from '../assets/image/array-ico.svg';
import arrayArrow from '../assets/image/array-arrow.svg';
import layout1 from '../assets/image/layout-1.svg';
import layout2 from '../assets/image/layout-2.svg';
import Modal from "react-modal";
import {SwiperSlide} from "swiper/react";
import RadioBox from "./RadioBox";
Modal.setAppElement("#root");



function ProductControlBar() {

  const [ view, setView ] = useState('two');

  let arrayList = ['추천순', '인기순', '신상품순', '고가순', '저가순', '상품평순'];

  const [selected, setSelected] = useState("추천순");

  const viewToggle = () => {
    setView((prevView) => (prevView === "two" ? "one" : "two"));
  }

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="product-controlbar wrap">
        <div className="count">총 <span>50</span>개</div>
        <div className="product-controlbar-right">
          <button onClick={() => setIsOpen(true)} className="array"><img src={arrayIco} style={{width:11}} alt='상품 정렬'/>추천순<img src={arrayArrow} style={{width:8}} alt='상품 정렬'/></button>
          <div className={`viewToggle ${view}`}>
            <button onClick={viewToggle}><span><img src={layout2} alt='두 개씩 보기'/></span><span><img src={layout1} alt='한 개씩 보기'/></span></button>
          </div>
        </div>
      </div>


      <Modal
          isOpen={isOpen}
          onRequestClose={() => setIsOpen(false)}
          className="bottomPop"
          overlayClassName="popDimm"
      >
        <div className="modal-header">
          <h2>정렬</h2>
          <button className="modal-close" onClick={() => setIsOpen(false)}>닫기</button>
        </div>
        <ul className="radiobox-wrap">
          {arrayList.map((item, index) => (
              <li key={index}>
                <RadioBox label={item} checked={selected === item} onChange={() => setSelected(item)}/>
              </li>
          ))}
        </ul>

      </Modal>
    </>
  );
}

export default ProductControlBar;
