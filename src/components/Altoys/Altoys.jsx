import React, { useEffect, useState } from 'react';
import Tablee from './Tablee';

const Altoys = () => {
   const [datas,setdatas]=useState([])
  useEffect(()=>{
   fetch('http://localhost:5000/toyland')
   .then(res=>res.json())
   .then(data=>setdatas(data))
  },[])
 
   console.log(datas)
   return (
      <div>
         <p className='text-center my-10 text-primary text-4xl '>ALL TOYS</p>
         <div className="overflow-x-auto w-full">
            <table className=" table w-full">
               {/* head */}
               <thead className='' >
                  <tr className='text-white bg-purple-400'>

                     <th className='pl-16 '>Toy Name</th>
                     <th>Seller Company Name </th>
                     <th>Sub-Category</th>
                     <th>Price</th>
                     <th>Available </th>
                     <th>See Details</th>
                  </tr>
               </thead>

               {
                  datas.map(data => <Tablee data={data} key={data._id}></Tablee>)
               }


            </table>
         </div>
      </div>
   );
};

export default Altoys;