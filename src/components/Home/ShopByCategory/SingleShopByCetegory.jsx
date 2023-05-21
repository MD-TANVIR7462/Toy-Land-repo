import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleShopByCetegory = ({ subCategory,category }) => {
  
   const navigate = useNavigate()
const handleSHOPdatails = (id)=>{
  navigate(`/singleDetails/${id}`)
  console.log(id)
}
   return (
      <div>
         <div className="bg-[#2c2c6c]  md:w-[400px] rounded-lg shadow-md">
            <img src={subCategory.image} alt={subCategory.name} className="w-full object-cover rounded-t-lg" />
            <div className="p-4">
               <h3 className="text-xl font-medium mb-2">{subCategory.name}</h3>
               <p className="">Price: <span className="text-green-500 font-semibold">{subCategory.price}</span></p>
               <p className="">Rating: {subCategory.rating}</p>
               <div className="flex items-center mt-4">
                  <button onClick={()=>handleSHOPdatails(category._id)} className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-4 py-2 transition duration-300 ease-in-out">
                     View Details
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SingleShopByCetegory;