import React from 'react';

const GeleryCard = ({toy}) => {
   return (
      <div className='mb-5 md:mb-0'>
         <div
          
          className="relative bg-white rounded-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
        >
          <div className="group">
            <img
              src={toy.image}
              alt={toy.name}
              className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
            />
            <div className="p-4 absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 transform translate-y-full group-hover:translate-y-0 transition-all duration-300">
              <h3 className="text-lg font-medium">{toy.name}</h3>
              <p className="text-sm text-gray-500">{toy.description}</p>
              <div className="flex items-center mt-2">
                <span className="text-yellow-500">{toy.rating}</span>
                <svg
                  className="w-4 h-4 text-yellow-500 ml-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 0L13.09 6.31L20 7.25L15 12.01L16.18 19.01L10 16.25L3.82 19L5 12.01L0 7.25L6.91 6.31L10 0Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
   );
};

export default GeleryCard;