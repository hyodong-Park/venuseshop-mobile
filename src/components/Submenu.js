import '../styles/main.css'
import React from 'react'
import Lottie from "lottie-react";
// import submenu_1 from "../assets/image/lottie/균일가전.json"; // 로컬 JSON 파일 가져오기
import submenu_1 from '../assets/video/균일가전.mp4'
import submenu_2 from '../assets/video/신규가입.mp4'
import submenu_3 from '../assets/video/웰컴백.mp4'
import submenu_4 from '../assets/image/룩북.png'
import submenu_5 from '../assets/video/친구추천.mp4'
import submenu_6 from '../assets/image/여성.png'
import submenu_7 from '../assets/image/남성.png'
import submenu_8 from '../assets/image/파자마.png'
import submenu_9 from '../assets/video/빅사이즈.mp4'
import submenu_10 from '../assets/image/임산부.png'


function Submenu() {

    let submenuArray1 = [
        {type : 'video', src : submenu_1, title: '균일가전'},
        // {type : 'lottie', src : submenu_1, title: '균일가전'},
        {type : 'video', src : submenu_2, title: '신규가입'},
        {type : 'video', src : submenu_3, title: '웰컴백'},
        {type : 'image', src : submenu_4, title: '룩북'},
        {type : 'video', src : submenu_5, title: '친구추천'}
    ];

    let submenuArray2 = [
        {type : 'image', src : submenu_6, title: '여성'},
        {type : 'image', src : submenu_7, title: '남성'},
        {type : 'image', src : submenu_8, title: '파자마'},
        {type : 'video', src : submenu_9, title: '빅사이즈'},
        {type : 'image', src : submenu_10, title: '임산부'}
    ]

    return (
        <>
            <div className='mainCategoryScrollContainer'>
                <div className='mainCategoryWrap'>
                    <div className='mainCategory video'>
                        {submenuArray1.map((src, index) =>

                            <div className='mainCategoryItem' key={index}>
                                <a href={()=>false}>
                                    <div>
                                        {/* {
                                            src.type == 'image' ?
                                                <img src={src.src} /> :
                                                <video muted autoPlay loop playsInline>
                                                    <source src={src.src} type="video/mp4" />
                                                </video>
                                        } */}
                                         {
                                            src.type == 'image' && (
                                                <img src={src.src} />
                                               
                                            )
                                        }
                                        {
                                            src.type == 'video' && (
                                                <video muted autoPlay loop playsInline>
                                                    <source src={src.src} type="video/mp4" />
                                                </video>
                                            )
                                                
                                        }
                                        {
                                            src.type == 'lottie' && (
                                                <Lottie animationData={submenu_1} loop={true}/>
                                            
                                            )
                                                
                                        }
                                    </div>
                                    <div>
                                        <div>{src.title}</div>
                                    </div>
                                </a>
                            </div>

                        )}

                    </div>
                    <div className='mainCategory wrap img'>


                        {submenuArray2.map((src, index) =>

                            <div className='mainCategoryItem' key={index}>
                                <a href={()=>false}>
                                    <div>
                                        {
                                            src.type == 'image' ?
                                                <img src={src.src} /> :
                                                <video muted autoPlay loop playsInline>
                                                    <source src={src.src} type="video/mp4" />
                                                </video>
                                        }
                                    </div>
                                    <div style={{}}>
                                        <div>{src.title}</div>
                                    </div>
                                </a>
                            </div>

                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Submenu;
