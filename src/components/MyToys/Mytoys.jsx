import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import SingleTOy from './SingleTOy';
import Swal from 'sweetalert2';
import useTiitle from '../../hooks/useTitle';

const Mytoys = () => {
   useTiitle('My Toys')
   const [Userdata, setedata] = useState(null)

   const { isLoggedIn } = useContext(AuthContext)




   const deletHandle = (id) => {
      Swal.fire({
         title: 'Are you sure?',
         text: "You won't be able to revert this!",
         icon: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
         if (result.isConfirmed) {

            fetch(`https://assignment-11-server-blue-rho.vercel.app/delete/${id}`, {
               method: "delete"
            })
               .then(res => res.json())
               .then(data => console.log(data))

            Swal.fire(
               'Deleted!',
               'Your file has been deleted.',
               'success'
            )
            const remainingProduct = Userdata.filter(product=> product._id !== id)
          setedata(remainingProduct)
         }
      })





   }



   useEffect(() => {
      fetch(`https://assignment-11-server-blue-rho.vercel.app/singleEmail?sellerEmail=${isLoggedIn.email}`)
         .then(res => res.json())
         .then(data => setproduct(data))
   }, [])
   const setproduct = (data) => {
      if (data.length > 0) {
         setedata(data)
      }
      else {
         setedata(null)
      }
   }

   return (
      <div className="overflow-x-auto w-full">
         {
            Userdata ? <table className="table w-full ">
               {/* head */}
               <thead>
                  <tr className='mt-5'>
                     <th className='pl-16 '>Toy Name</th>
                     <th>Seller Company Name </th>
                     <th>Sub-Category</th>
                     <th>Price</th>
                     <th>Available </th>
                     <th className='pr-0'>Update/Delet</th>
                  </tr>
               </thead>


               {
                  Userdata.map(singleData => <SingleTOy singleData={singleData} deletHandle={deletHandle} key={singleData._id}></SingleTOy>)
               }


            </table> :
               <p className='text-primary text-4xl items-center text-center min-h-[500px] pt-32
 '>You Don't Add any Product Yet!!  </p>
         }

      </div>

   );
};

export default Mytoys;