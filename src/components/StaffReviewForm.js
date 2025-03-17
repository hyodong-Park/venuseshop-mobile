import '../styles/main.css'
import React from 'react'

function StaffReviewForm({content}) {
  
    return (
        <>
            <div>
                    <div className="image">
                    <a href={()=>false}>
                        <img src={content.img} />
                        <div className="title">{content.title}</div>
                        </a>
                    </div>
                
                <a href={()=>false}>
                    <div className="meta">
                        <div className="product-image"><img src={content.productImg} /></div>
                        <div className="product-text">
                            <div className="name"><span className="brand">{content.brand}</span>{content.goodsname}</div>
                            <div className="price">{content.realmoney}</div>
                        </div>
                    </div>
                </a>
            </div>
        </>
    );
}

export default StaffReviewForm;
