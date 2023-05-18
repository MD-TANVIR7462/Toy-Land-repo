
import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="hero min-h-[720px] bg-base-100">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://i.ibb.co/BwTM2P3/istockphoto-1182187147-612x612.jpg"
          alt="Toy Banner"
          className="max-w-2xl transition-transform hover:scale-105 rounded-lg shadow-3xl hero-overlay opacity-95"
        />
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl font-bold">BEST TOYS FOR YOUR KIDS!</h1>
          <p className="py-6">
            There’s just something about all of the different toys that makes me feel alive. After all, playing with toys
            is one of the best ways to spend my free time. We ended up buying a few things, but we didn’t buy anything
            very big or expensive. I thought that the prices were really fair for what you get. Overall, I had a great
            time at the toy store.
          </p>
          <Link to="/" className="inline-block">
            <button className="inline-flex items-center justify-center px-6 py-3 mt-4 text-lg font-medium transition-transform duration-300 bg-blue-500 rounded-full text-white hover:scale-105 hover:bg-indigo-500">
              Visit Shop
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-2 0V5H9a1 1 0 01-1-1zm4 1h2a1 1 0 011 1v10a1 1 0 01-1 1h-2a1 1 0 01-1-1V6a1 1 0 011-1zm-7 7H5a1 1 0 01-1-1V6a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1zm10 0h-2a1 1 0 01-1-1V6a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;


