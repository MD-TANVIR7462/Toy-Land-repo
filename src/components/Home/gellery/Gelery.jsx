
import React, { useEffect, useState } from 'react';
import GeleryCard from '../GeleryCard/GeleryCard';


const Gallery = () => {
   const [toys,setToys] =useState([])
useEffect(()=>{
fetch('http://localhost:5000/gelery')
.then(res=>res.json())
.then(data=>{ 
   
   console.log(data._id)
   setToys(data)})
},[])

   return (
      <div className='my-16 '>


         <h1 className="text-4xl font-bold text-center text-primary mb-4">Toys Gallery</h1>
         <p className="text-lg text-center mb-8 px-6 sm:px-10">
            Welcome to our Toy Gallery, where you'll find a curated selection of the most popular toys from our shop. Each toy is carefully chosen to provide endless fun and entertainment for children of all ages. From exciting cars and action figures to cuddly plush companions, our gallery showcases a wide variety of toys that are loved by kids everywhere.
         </p>

         <div className=" md:grid grid-cols-3 gap-4">
            {
               toys.map(toy => <GeleryCard toy={toy} key={toy._id}></GeleryCard>)
            }
         </div>
      </div>
   );
};

export default Gallery;














