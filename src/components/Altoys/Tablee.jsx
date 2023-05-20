import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tablee = ({ data }) => {
const navigate = useNavigate()

const handleDetails = (id)=>{
  navigate(`/singletoy/${id}`)

}

  const { 
    picture,
    available_quantity,
    description,
    price,
    rating,
    seller_name,
    sub_category,
    toy_name,
    _id,
  } = data




  return (

    <tbody className='my-10  border-2  border-indigo-950  '>
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={picture}alt="Photo" />
              </div>
            </div>
            <div>
              <div className="font-bold  cla">{toy_name}</div>

            </div>
          </div>
        </td>
        <td className='text-white'>
         {seller_name}

        </td>
        <td className='text-white'>{sub_category}</td>
        <td className='text-white' > {price}<span className='text-green-600'> $</span></td>
        <td className='text-white'>{available_quantity} Items</td>
        <th>
          <button className="btn btn-primary btn-xs  text-white font-bold" onClick={()=>handleDetails(_id)}>details</button>
        </th>
      </tr>

    </tbody>








  );
};

export default Tablee;