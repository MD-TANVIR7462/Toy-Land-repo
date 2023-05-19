import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Tablee from './Tablee';

const Altoys = () => {
   const datas = useLoaderData()
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
                     <th>Seller Name</th>
                     <th>Sub-Category</th>
                     <th>Price</th>
                     <th>Available </th>
                     <th>See Details</th>
                  </tr>
               </thead>

               {
                  datas.map(data => <Tablee data={data}></Tablee>)
               }


            </table>
         </div>
      </div>
   );
};

export default Altoys;