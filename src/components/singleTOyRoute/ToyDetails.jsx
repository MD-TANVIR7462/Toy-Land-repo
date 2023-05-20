import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ToyDetails = () => {
  const data = useLoaderData()
 const {   
   picture,
sellerEmail,
   available_quantity,
   description,
   price,
   rating,
   seller_name,
   sub_category,
   toy_name,
   _id,}  =  data
   console.log(data)
  
   return (
      <div >
            <div className="hero md:h-[560px] md:py-8 md:px-14  bg-base-200  ">

      <div className="hero-content flex-col lg:flex-row gap-20 ">
     
       
         <img src={picture} className=" md:w-[420px]   rounded-lg shadow-2xl" />
           

          
         <div>
            <h1 className="text-lg md:text-3xl pb-7    text-center font-bold">{toy_name}</h1>

            <p className=' font-bol text-lg text-white'> <span className='text-primary font-bold '>Seller : </span>{seller_name}</p>
            <p className=' font-bol my-2 text-white'> <span className='text-primary font-bold '>Seller-Email : </span>{sellerEmail}</p>
           
            <p className='font-medium ' ><span className='font-bold text-primary'>Abaiable : </span > <span className='text-white'>{available_quantity}</span> <span className='text-white'> Item's</span></p>
            <p className='font-medium py-2' ><span className='font-bold text-primary'>Price : </span ><span className='text-white'>{price}</span> <span className='text-success'> $</span>  </p>
            <p className='font-medium' ><span className='font-bold text-primary'>Rating : </span ><span className='text-white'>{rating}  </span> </p>
            <p className="py-1"><span className='text-lg  font-semibold text-primary'>Discriptiion :</span> <span className='text-white'>{description} </span></p>
         </div>
      </div>
   </div>
      </div>
   );
};

export default ToyDetails;   <div className="hero md:h-[550px] md:py-8 md:px-14  bg-base-200  ">

      <div className="hero-content flex-col lg:flex-row gap-11">

       
         <img src="" className=" md:max-w-xl   rounded-lg shadow-2xl" />
           
     
          
         <div>
            <h1 className="text-lg md:text-3xl pb-8 text-center font-bold"><span className='text-pink-700'>I'm</span> name</h1>

            <p className='text-center font-bold text-gray-600 text-xl'>About Me</p>
            <p className="py-1"><span className='text-lg  font-semibold text-primary'>Bio :</span> <span className='text-gray-500'>Hi I'm a Chef,I hade a high level Experience and Quality for Making  Delacious food, Here I give all The details about Me, What you should have to KNow </span></p>
            <p className='font-medium ' ><span className='font-bold text-primary'>Experience : </span >  <span className='text-gray-600'> 6 Years</span></p>
            <p className='font-medium py-2' ><span className='font-bold text-primary'>Recipes : </span ><span className='text-gray-600'>55 Recipes</span>  </p>
            <p className='font-medium' ><span className='font-bold text-primary'>Likes : </span ><span className='text-gray-600'> num Likes</span> </p>
         </div>
      </div>
   </div>