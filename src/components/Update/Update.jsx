import React from 'react';
import { json, useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useTiitle from '../../hooks/useTitle';

const Update = () => {
  useTiitle('Update')
const navigate = useNavigate()
  const loaderdata = useLoaderData()
  console.log(loaderdata)
  const { _id } = loaderdata
  const updateHandle = (e) => {
    e.preventDefault()
    const from = e.target
    const price = from.price.value
    const quantity = from.quantity.value
    const description = from.description.value
    const updatedProduct = { price, quantity, description }

    fetch(`https://assignment-11-server-blue-rho.vercel.app/update/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": 'application/json'
      },
      body: JSON.stringify(updatedProduct)
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {

          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Your Toy has been Updated',
            showConfirmButton: false,
            timer: 1500
          })
          from.reset()
          navigate('/mytoys')

        }
      })
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <form onSubmit={updateHandle} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Pirce</span>
              </label>
              <input type="text" name='price' required placeholder="Update Price" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <input type="text" name='quantity' required placeholder="Update Quantity" className="input input-bordered" />

            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input type="text" name='description' required placeholder="Update Description" className="input input-bordered" />

            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Update</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;