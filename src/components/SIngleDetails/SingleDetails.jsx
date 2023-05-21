import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SinglePh from './SinglePh';

const SingleDetails = () => {

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