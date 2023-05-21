import React from 'react';
import Benner from './Benner/Benner';
import Gelery from './gellery/Gelery';
import Featured from './FeaturedSection/Featured';
import ShopByCategory from './ShopByCategory/ShopByCategory';
import TopSellersSection from '../TopSellerSection/TopSellerSection';

const HomeMain = () => {
   return (
      <div>
        <Benner></Benner> 
        <Gelery></Gelery>
        <Featured></Featured>
        <ShopByCategory></ShopByCategory>
        <TopSellersSection></TopSellersSection>
      </div>
   );
};

export default HomeMain;