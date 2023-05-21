import React from 'react';
import Benner from './Benner/Benner';
import Gelery from './gellery/Gelery';
import Featured from './FeaturedSection/Featured';
import ShopByCategory from './ShopByCategory/ShopByCategory';
import Extra from './Extra section/Extra';

const HomeMain = () => {
   return (
      <div>
        <Benner></Benner> 
        <Gelery></Gelery>
        <Featured></Featured>
        <ShopByCategory></ShopByCategory>
        <Extra></Extra>
      </div>
   );
};

export default HomeMain;