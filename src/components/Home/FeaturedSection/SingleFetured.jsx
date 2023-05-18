import React from 'react';

const SingleFetured = ({toy}) => {
   return (
      <div>
         <div className="w-96 bg-[#2c2c6c] rounded-lg shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg">
              <img src={toy.image} alt={toy.name} className="w-full rounded-t-lg" />
              <div className="p-4">
                <h3 className="text-xl font-medium mb-2">{toy.name}</h3>
                <p className="text-gray-300">{toy.description}</p>
                <div className="flex items-center mt-4">
                  <span className="text-lg font-bold text-green-500">${toy.price.toFixed(2)}</span>
                  <button className="ml-auto bg-blue-500 hover:bg-blue-600 text-white rounded-full px-4 py-2 transition duration-300 ease-in-out transform hover:scale-110">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
      </div>
   );
};

export default SingleFetured;