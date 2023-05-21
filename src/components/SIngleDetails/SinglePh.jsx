import React from 'react';

const SinglePh = ({sinData}) => {
   console.log(sinData)
   return (
      <div className='my-10'>
         <div className="hero md:h-[560px] md:py-8 md:px-14 bg-base-100  ">

<div className="hero-content flex-col lg:flex-row gap-20 ">

 
   <img src={sinData.image} className=" md:w-[420px]   rounded-lg shadow-2xl" />
     

    
   <div>
      <h1 className="text-lg md:text-3xl pb-7    text-center font-bold">{sinData.name}</h1>

     
     
     
    
      <p className='font-medium py-2' ><span className='font-bold text-primary'>Price :{sinData.price} </span ><span className='text-white'>{}</span> <span className='text-success'> $</span>  </p>
      <p className='font-medium' ><span className='font-bold text-primary'>Rating :{sinData.rating} </span ><span className='text-white'>{}  </span> </p>
      <p className="py-1"><span className='text-lg  font-semibold text-primary'>Discriptiion :</span> <span className='text-white'>Its a Nice Product You can try it for your child and yur best whishers </span></p>
   </div>
</div>
</div>
      </div>
   );
};

export default SinglePh;