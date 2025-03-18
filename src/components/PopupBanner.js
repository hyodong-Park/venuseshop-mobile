import '../styles/main.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination  } from "swiper/modules";
import 'swiper/css';
import React, {useState, useEffect } from "react";
import Modal from "react-modal";
import Cookies from "js-cookie";
import axios from "axios";
Modal.setAppElement("#root");


function PopupBanner() {

  const [isOpen, setIsOpen] = useState(true);

  let [bannerList,setBannerList] = useState([]);

  useEffect(() => {

    const instance = axios.create({
      baseURL: 'http://52.79.198.9:8000/eshop/api/',
      timeout: 10000,
    });

    instance.get('/popup/list')
        .then(response => {

          const banner = response.data.data;
          let bannerTmp = [];

          for(let i = 0 ; i < banner.length; i++) {
            const data = banner[i];

            const obj = {
              img : data.banner_img,
              link : 'https://www.venus-eshop.co.kr/m/eventdetail?spId=' + data.targetid
            }
            bannerTmp.push(obj);
            setBannerList(bannerTmp)
          }

        })
        .catch(error => {
          console.log(error)
        });


  }, []);

  useEffect(() => {
    if (Cookies.get("hideBanner") === "true") {
      setIsOpen(false);
      document.body.classList.remove("ReactModal__Body--open");
    }
  }, []);

  const handleHide = () => {
    // 쿠키 설정 (1일 후 만료)
    Cookies.set("hideBanner", "true", { expires: 1 });

    setIsOpen(false);
  };

  if (!isOpen) return null;



  // let bannerList = [
  //   {img : 'https://www.venus-eshop.co.kr/images/popup/popup_20250207113319188.png', link : 'https://www.venus-eshop.co.kr/m/eventdetail?spId=311'},
  //   {img : 'https://www.venus-eshop.co.kr/images/popup/popup_20250228150046210.png', link : 'https://www.venus-eshop.co.kr/m/eventdetail?spId=767'}
  // ]


  return (
    <>
      <Modal
          isOpen={isOpen}
          onRequestClose={() => setIsOpen(false)}
          className="bottomPop bannerPop"
          shouldCloseOnOverlayClick={false}
          overlayClassName="popDimm"
      >
        <div className="popup-banner">
          <Swiper modules={[Autoplay, Pagination]} slidesPerView={1} loop={true} autoplay={{ delay: 3000, disableOnInteraction: false }} pagination={{ type: "fraction" }}>
            {bannerList.map((item, index) => (
                <SwiperSlide key={index}>
                  <a href={item.link}>
                    <img src={item.img} />
                  </a>
                </SwiperSlide>
            ))}

          </Swiper>

        </div>
        <div className="modal-footer">
          <button onClick={handleHide}>오늘 하루 보지않기</button>
          <button className="modal-close" onClick={() => setIsOpen(false)}>닫기</button>
        </div>

      </Modal>
    </>
  );
}

export default PopupBanner;
