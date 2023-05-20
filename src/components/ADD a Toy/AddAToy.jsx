import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const AddAToy = () => {

  const { isLoggedIn } = useContext(AuthContext)
  console.log(isLoggedIn)
  const handleADDaToy = (e) => {
    e.preventDefault()
    const from = e.target
    const toy_name = from.name.value
    const seller_name = from.sellerName.value
    const sellerEmail = from.sellerEmail.value
    const sub_category = from.subCategory.value
    const price = from.price.value
    const rating = from.rating.value
    const available_quantity = from.availableQuantity.value
    const description = from.description.value
    const picture = from.img.value
    const newToy = { toy_name, sellerEmail, seller_name, sub_category, price, rating, available_quantity, description, picture }


    fetch('https://assignment-11-server-blue-rho.vercel.app/toyland', {
      method: "post",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(newToy)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        from.reset()
      })

  }




  return (
    <div className="hero min-h-screen  bg-zinc-100">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl text-black font-bold">Add A Toy!</h1>
        </div>
        <form onSubmit={handleADDaToy} className="card  md:w-[450px] shadow-2xl bg-base-100" >
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text"> Toy Name</span>
              </label>
              <input type="text" name='name' required placeholder="Toy Name" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Toy URL</span>
              </label>
              <input type="url" name='img' required placeholder="Toy URL" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">sellerEmail</span>
              </label>
              <input type="email" value={isLoggedIn.email} name='sellerEmail' required placeholder="sellerEmail" className="input input-bordered" />
            </div>


            <div className="form-control">
              <label className="label">
                <span className="label-text" >sellerName</span>
              </label>
              <input type="text" required defaultValue={isLoggedIn.displayName
              } placeholder="sellerName" name='sellerName' className="input input-bordered" />

            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">subCategory</span>
              </label>
              <select
                name="subCategory"
                className="input input-bordered"
                placeholder='select Subcetegory'
                required
              >
                <option value="">Change ME</option>
                <option value="Dinosaur">Dinosaur</option>
                <option value="Butterfly">Butterfly</option>
                <option value="Teddy Bear">Teddy Bear</option>
              </select>

            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">price</span>
              </label>
              <input type="number" required placeholder="price" name='price' className="input input-bordered" />

            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">rating</span>
              </label>
              <input type="number" required placeholder="rating" name='rating' className="input input-bordered" />

            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">availableQuantity</span>
              </label>
              <input type="number" required placeholder="availableQuantity" name='availableQuantity' className="input input-bordered" />

            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">description </span>
              </label>
              <input type="text" required placeholder="description " name='description' className="input input-bordered" />

            </div>




            <div className="form-control mt-6">

              <button className="btn btn-primary">Add A Toy</button>
            </div>
          </div>
        </form >
      </div>
    </div>
  );
};



export default AddAToy;
