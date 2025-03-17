import '../styles/main.css'
import React from 'react'
import Mainbanner from './Mainbanner';
import Submenu from './Submenu.js';
import Content from './Content.js';

function Body() {
  
  return (
    <>
        <div className='body'>
            <Mainbanner/>
            <div className="mainWrap">
              <Submenu/>
              <Content/>
            </div>
        </div>
    </>
  );
}

export default Body;
