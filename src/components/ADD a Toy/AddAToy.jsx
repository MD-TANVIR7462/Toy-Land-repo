import React from 'react';

const AddAToy = () => {
  return (
    <div className="  p-16 min-h-screen flex justify-center items-center px-4 sm:px-8">
      <div className="max-w-xl w-full  bg-white shadow-lg  rounded-lg overflow-hidden">
        <div className="py-4 px-6">
          <h1 className="text-3xl font-bold text-center text-primary mb-6">Add A Toy</h1>

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

          <div className="mb-4">
            <label htmlFor="sellerEmail" className="block text-gray-700 font-semibold mb-2">
              Seller Email
            </label>
            <input
              type="email"
              id="sellerEmail"
              className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="subCategory" className="block text-gray-700 font-semibold mb-2">
              Sub-category
            </label>
            <select
              id="subCategory"
              className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"
              required
            >
              <option value="">Select Sub-category</option>
              <option value="math">Dinosaur</option>
              <option value="language">Teddy Bear</option>
              <option value="science">Butterfly</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="price" className="block text-gray-700 font-semibold mb-2">
              Price
            </label>
            <input
              type="number"
              id="price"
              className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="rating" className="block text-gray-700 font-semibold mb-2">
              Rating
            </label>
            <input
              type="number"
              id="rating"
              className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="availableQuantity" className="block text-gray-700 font-semibold mb-2">
              Available Quantity
            </label>
            <input
              type="number"
              id="availableQuantity"
              className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 font-semibold mb-2">
              Detail Description
            </label>
            <textarea
              id="description"
              className="border border-gray-300 rounded px-4 py-2 w-full h-24 resize-none focus:outline-none focus:border-blue-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full text-white"
          >
            Add A Toy
          </button>
        </div>
      </div>
    </div>
  );
};



export default AddAToy;
