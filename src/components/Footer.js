import '../styles/main.css'
import React from 'react'
import FooterNav from './FooterNav';

import sgi from '../assets/image/footer_sgi.png';
import kcp from '../assets/image/footer_kcp.png';

function Footer() {
  return (
    <>
      <footer id="footer" className="footer">
        <div className="footerWrap">
          <ul className="link">
            <li>
              <a href="javascript:void(0)">공지사항</a>
            </li>
            <li>
              <a href="javascript:void(0)">고객센터</a>
            </li>
            <li>
              <a href="javascript:void(0)">문의안내</a>
            </li>
          </ul>
          <div className='wrap'>
            <div className="info"><button>비너스이숍 사업자정보</button></div>
            <div className="sublink">
              <a href="javascript:void(0)"><b>개인정보취급방침</b></a>
              <a href="javascript:void(0)">이용약관</a>
              <a href="javascript:void(0)">신영통합멤버십회원이용약관</a>
              <a href="javascript:void(0)">회사소개</a>
            </div>
            <div className="logo">
              <div><img src={sgi}/></div>
              <div><img src={kcp}/></div>
            </div>
            <div className="select">
              <div>
                <select defaultValue="FAMILY SITE">
                  <option value="FAMILY SITE">FAMILY SITE</option>
                  <option value="Shinyoungwacoal">Shinyoungwacoal</option>
                  <option value="VENUS">VENUS</option>
                  <option value="Wacoal">Wacoal</option>
                  <option value="ORLFA">ORLFA</option>
                  <option value="Solb">Solb</option>
                  <option value="Motherpia">Motherpia</option>
                  <option value="Remamma">Remamma</option>
                </select>
              </div>
              <div>
                <select defaultValue="BLOG">
                  <option value="BLOG">BLOG</option>
                  <option value="Shinyoungwacoal">Shinyoungwacoal Blog</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <FooterNav/>
      </footer>
     
    </>
  );
}


export default Footer;
