import '../styles/main.css'
import React from 'react'
import Weeklybest from './Weeklybest';
import BestBrand from './BestBrand';
import HotProduct from './HotProduct';
import CartHot from './CartHot';
import WeeklySale from './WeeklySale';
import WeeklyNew from './WeeklyNew';
import MiniBanner from './MiniBanner';
import SaleIng from './SaleIng';
import BestLineup from './BestLineup';
import WishHot from './WishHot';
import MDsPick from './MDsPick';
import StaffReview from './StaffReview';
import Promotion from './Promotion';
import MonthlyVenus from './MonthlyVenus';
import AdvertisingGoods from './AdvertisingGoods';

function Content() {
  
  return (
    <>
        <div>
            <Weeklybest/>
            <BestBrand/>
            <HotProduct/>    
            <CartHot/> 
            <WeeklySale/>
            <WeeklyNew/>
            <MiniBanner/>
            <SaleIng/>
            <BestLineup/>
            <WishHot/>
            <MDsPick/>
            <StaffReview/> 
            <Promotion/>
            <MonthlyVenus/>
            <AdvertisingGoods/>
        </div>
    </>
  );
}

export default Content;
