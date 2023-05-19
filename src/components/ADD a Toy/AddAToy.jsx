import React from 'react';

const AddAToy = () => {
  return (
    <div className=" hero min-h-screen flex justify-center items-center px-4 sm:px-8">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg overflow-hidden">
        <div className="py-4 px-6">
          <h1 className="text-3xl font-bold text-center mb-6">Add A Toy</h1>

          <div className="mb-4">
            <label htmlFor="pictureUrl" className="block text-gray-700 font-semibold mb-2">
              Picture URL of the toy
            </label>
            <input
              type="text"
              id="pictureUrl"
              className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="sellerName" className="block text-gray-700 font-semibold mb-2">
              Seller Name
            </label>
            <input
              type="text"
              id="sellerName"
              className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"
              required
            />
          </div>

 

          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded focus:outline-none hover:bg-blue-600"
          >
            Add Toy
          </button>
        </div>
      </div>
    </div>
  );
};



export default AddAToy;
