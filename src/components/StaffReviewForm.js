import '../styles/main.css'
import React from 'react'
import { Link } from "react-router-dom";

function StaffReviewForm({content}) {

    return (
        <>
            <div>
                    <div className="image">
                        <Link to={content.reviewLink} onClick={e => e.preventDefault}>
                            <img src={content.img} />
                            <div className="title">{content.title}</div>
                        </Link>
                    </div>
                
                <Link to={content.productLink} onClick={e => e.preventDefault}>
                    <div className="meta">
                        <div className="product-image"><img src={content.productImg} /></div>
                        <div className="product-text">
                            <div className="name"><span className="brand">{content.brand}</span>{content.goodsname}</div>
                            <div className="price">{content.realmoney}</div>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
}

export default StaffReviewForm;
