import React from 'react';
import { Link } from 'react-router-dom';

const Resister = () => {
   const handleResister = (e) =>{
      e.preventDefault()
      const from = e.target
      const url = from.url.value
      const email = from.email.value
      const name = from.name.value
      const password = from.password.value


      console.log(url,name,email,password)
   }
   return (
      <div>
          <div className="min-h-screen flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
        <div>
          <h2 className="text-center text-3xl font-bold text-gray-800">
            Resister Now
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleResister}>
          <div>
            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <div className="mt-1">
              <input
             
                name="name"
                type="text"
                
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your Name"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
              Photo URL
            </label>
            <div className="mt-1">
              <input
             
                name="url"
                type="url"
                
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your Image URL"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <div className="mt-1">
              <input
             
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your email address"
              />
            </div>
          </div>


          <div className="mt-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="mt-1">
              <input
              
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your password"
              />
            </div>
          </div>
          <div className="flex items-center justify-between my-3">
          <div className="text-sm ">
            <p className='text-end text-black font-medium'>
               Have An Accaount..?   <Link
                to="/login"
                className="font-medium text-blue-500 hover:text-blue-700"
              >
               Login Now....
              </Link>
            </p>
            </div>
            
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className='btn w-full bg-success border-none text-white  shadow-md shadow-gray-300 hover:text-black hover:bg-primary '
            >
              Log in
            </button>
          </div>
        </form>
        
        
      </div>
    </div>
      </div>
   );
};

export default Resister;