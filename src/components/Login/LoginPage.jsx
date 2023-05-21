
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { useState } from 'react';


const LoginPage = () => {
   const [error, seterror] = useState('')
   const { googleCreatUSer,SignInUSer } = useContext(AuthContext)
   const location = useLocation()
   const navigate = useNavigate()
   const mainlocation = location.state?.from?.pathname || '/'

   const handleLogin = (e) => {
      e.preventDefault()
      const from = e.target
      const email = from.email.value
      const password = from.password.value
      SignInUSer( email, password )
      .then((result) => {
       
         const user = result.user;
         
         from.reset()
         navigate(mainlocation)
        
       })
       .catch((error) => {
         const errorCode = error.code;
         seterror(error.message)
       });
     
   };


   const handleGoogle = () => {
      googleCreatUSer()
      .then((result) => {
         const user = result.user;
         navigate(mainlocation)
         
         
   
      })
         .catch((error) => {
            const errorCode = error.code;
            seterror(error.message)
         });
   }

   return (
      <div className="min-h-screen flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
         <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
            <div>
               <h2 className="text-center text-3xl font-bold text-gray-800">
                  Log in to Your Account
               </h2>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleLogin}>
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
                        New Here?   <Link
                           to="/resister"
                           className="font-medium text-blue-600 hover:text-green-600"
                        >
                           Register Now....
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
               <p className='text-red-700'>
                {
                  error ? error : ''
                }
              </p>
            </form>

            <div className="mt-3">
               <p className='text-black font-semibold text-center pb-2 '>Or Sign Up With</p>


               <div className='my-2'>
                  <button className='btn w-full bg-gray-100 border-none text-black  shadow-md shadow-gray-500 hover:text-black hover:bg-white ' onClick={handleGoogle}> Google</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default LoginPage;

