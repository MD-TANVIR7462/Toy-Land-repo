import React from 'react';
import Swal from 'sweetalert2';

const SingleTOy = ({ singleData,deletHandle }) => {


// const deletHandle = (id) =>{
//   Swal.fire({
//    title: 'Are you sure?',
//    text: "You won't to Detel it???",
//    icon: 'warning',
//    showCancelButton: true,
//    confirmButtonColor: '#3085d6',
//    cancelButtonColor: '#d33',
//    confirmButtonText: 'Yes, delete it!'
//  }).then((result) => {
//    if (result.isConfirmed) {
  
//    fetch(`http://localhost:5000/toyland/${id}`,{
//       method:"delete"
//    })
//    .then(res=>res.json())
//    .then(data=>{
      
//       console.log(data)})
//    Swal.fire(
//        'Deleted!',
//        'Your Product has been deleted.',
//        'success'
//      )
   
//    }
//  })


// }

   const {
      picture,
      email,
      available_quantity,
      description,
      price,
      rating,
      seller_name,
      sub_category,
      toy_name,
      _id,
   } = singleData
   return (
      <tbody className='my-20'>
         <tr className=' border border-indigo-950 '>
            <td>
               <div className="flex items-center space-x-3">
                  <div className="avatar">
                     <div className="mask mask-squircle w-12 h-12">
                        <img src={picture} alt="Photo" />
                     </div>
                  </div>
                  <div>
                     <div className="font-bold cla text-white">{toy_name}</div>
                  </div>
               </div>
            </td>
            <td className='text-white'>
               {seller_name}
            </td>
            <td className='text-white'>{sub_category}</td>
            <td className='text-white'>{price}<span className='text-green-600'> $</span></td>
            <td className='text-white'>{available_quantity} Items</td>
            <th className='ps-5'>
               <div className='flex flex-col my-2'>
                  <button className="btn btn-primary text-white font-bold btn-xs bg-success hover:bg-red-700 transition-all" onClick={()=>deletHandle(_id)}>Delete</button>
                  <button className="btn btn-primary text-white font-bold btn-xs mt-3 bg-primary hover:bg-blue-700 transition-all">Update</button>
               </div>
            </th>
         </tr>
      </tbody>




   );
};

export default SingleTOy;