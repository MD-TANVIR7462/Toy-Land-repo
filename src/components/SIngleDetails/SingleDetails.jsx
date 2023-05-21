import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SinglePh from './SinglePh';
import useTiitle from '../../hooks/useTitle';

const SingleDetails = () => {
    useTiitle('Details')

   const loaderData = useLoaderData()
   console.log(loaderData)
// 


   return (
      <div className='my-10' >
   {
       loaderData.subCategories.map(sinData=> <SinglePh sinData={sinData} key={sinData.id}></SinglePh>)
   }
</div>
   );
};

export default SingleDetails;