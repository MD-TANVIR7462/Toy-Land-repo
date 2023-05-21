import React from 'react';

const TopSellersSection = () => {
  const sellers = [
    {
      name: 'Andy Smith',
      price: '$395.99',
      image: 'https://i.ibb.co/zhQYfG7/awppw-gvgcx.jpg',
    },
    {
      name: 'Jessica Arora',
      price: '$312.99',
      image: 'https://i.ibb.co/wYv5xZN/360-F-326985142-1aa-Kc-Ej-MQW6-ULp6o-I9-MYuv8l-N9f8s-Fmj.jpg',
    },
    {
      name: 'Mr Alam Nath',
      price: '$294.99',
      image: 'https://i.ibb.co/nBFGcdn/young-handsome-man-beard-wearing-260nw-1768126784.webp',
    },
  ];

  return (
   <div className="py-10">
   
   <div className="container mx-auto px-4">
     <h2 className="text-3xl font-bold mb-6 text-primary text-center ">Top Sellers</h2>
     <p className='text-center text-indigo-100 mb-8 font-bold text-base'>Those are The Top sellers Of this Weak</p>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:h-[300px] gap-6">
       {sellers.map((seller, index) => (
         <div key={index} className="bg-white rounded-lg shadow-lg p-6 transition duration-300 ease-in-out transform hover:scale-105">
           <img src={seller.image} className="w-40 h-40 mx-auto mb-4 rounded-full object-cover" />
           <h3 className="text-xl text-blue-500 font-bold mb-2 text-center">Name : {seller.name}</h3>
           <p className= "text-center text-black font-bold text-lg">Total Sell : <span className='text-red-500'>{seller.price}</span> <span className='text-success'>$</span></p>
         </div>
       ))}
     </div>
   </div>
 </div>
  );
};

export default TopSellersSection;