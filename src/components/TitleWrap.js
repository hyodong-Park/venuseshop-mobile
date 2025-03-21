import '../styles/main.css'
import React from 'react'
import { Link } from "react-router-dom";

function TitleWrap({content}) {

  const strHref = content.href !== undefined ? content.href : "#"

  return (
    <>
        <div className="titleWrap wrap">
        <h3>{content.text}<b>{content.highlight}</b></h3>
        {
          content.type == 'all' && (
            <div><Link to={strHref} onClick={e => e.preventDefault} className="all">전체보기<span></span></Link></div>
          )
        }
        {
          content.type == 'update' && (
            <div><a href={()=>false} className="update">{content.updatetime} 업데이트</a></div>
          )
        }

{
        content.subText && (
          <div className="subtext">{content.subText}</div>
        )
      }
      </div>
      
    </>
  );
}

export default TitleWrap;
