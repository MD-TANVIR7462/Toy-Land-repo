import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import useTiitle from '../../hooks/useTitle';

const ToyDetails = () => {
   useTiitle('Toy Details')
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

export default ToyDetails;   
 