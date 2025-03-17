import '../styles/main.css'
import React, {useState, useRecoilState, useEffect} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import filterIco from '../assets/image/filter-ico.svg';
import 'swiper/css';
import FilterModal from "./FilterModal";




function FilterList() {


  const filter = ['브랜드','카테고리','사이즈','컬러','소재','가격','키워드']



  // let tabs = type == 'ranking' ? WeeklyBestTab : newProductTab;

  // const [message, setMessage] = useState("");
  // const [modalOpen, setModalOpen] = useRecoilState(popUpModal);


  return (
    <>
      <div className="filter-list">
        <div className="filter-swiper">
          <Swiper slidesPerView={'auto'} spaceBetween={4} slidesOffsetAfter={25} slidesOffsetBefore={20}>
            {filter.map((item, index) => (
                <SwiperSlide key={index}>
                  <div>
                    <button>
                      {item}
                    </button>
                  </div>
                </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="filter-btn">
          <button></button>
        </div>
      </div>
      {/*<FilterModal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} content={{title:'eee'}}/>*/}
    </>
  );
}

export default FilterList;
