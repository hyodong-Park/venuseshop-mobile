import '../styles/main.css'
import React from 'react'

function TitleWrap({content}) {
  
  return (
    <>
        <div className="titleWrap wrap">
        <h3>{content.text}<b>{content.highlight}</b></h3>
        {
          content.type == 'all' && (
            <div><a href={()=>false} className="all">전체보기<span></span></a></div>
          )
        }
        {
          content.type == 'update' && (
            <div><a href={()=>false} className="update">10:15 업데이트</a></div>
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
