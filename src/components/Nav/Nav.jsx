
import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from '../Button/Button';
import { AuthContext } from '../providers/AuthProvider';




const Nav = () => {
 

const {isLoggedIn,signOutUSer}=useContext(AuthContext)
console.log(isLoggedIn)
const signout =()=>{
  
  signOutUSer()
  .then(()=>{
    console.log('successfull')
  })
  .catch(error=>{
    console.log(error)
  })
}

  return (
    <div className="">
      <div className="navbar px-2 md:px-28 md:h-32">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-800 rounded-box w-52 font-semibold">
              <li>
                <NavLink to="/" className={({ isActive }) => isActive ? 'text-primary' : 'text-white pl-4'}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/alltoys" className={({ isActive }) => isActive ? 'text-primary pl-4' : 'text-white pl-4'}>
                  All Toys
                </NavLink>
              </li>
              {isLoggedIn && (
                <>
                  <li>
                    <NavLink to="/mytoys" className={({ isActive }) => isActive ? 'text-primary pl-4' : 'text-white pl-4'}>
                      My Toys
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/addatoy" className={({ isActive }) => isActive ? 'text-primary pl-4' : 'text-white pl-4'}>
                      Add A Toy
                    </NavLink>
                  </li>
                </>
              )}
              <li>
                <NavLink to="/blog" className={({ isActive }) => isActive ? 'text-primary pl-4' : 'text-white pl-4'}>
                  Blogs
                </NavLink>
              </li>
            </ul>
          </div>
          <Link to="/" className="font-bold text-base md:text-3xl text-white">
      <div className='flex items-center'>
      <img src={"https://i.ibb.co/nn3wrvV/attachment-27003237.png"} className='w-12 flex rounded-full' alt="" />
            <span className="text-white">ToYLand</span>
      </div>
            
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex text-base">
          <ul className="menu menu-horizontal font-light mx-5">
            <NavLink to="/" className={({ isActive }) => isActive ? 'text-primary mr-5 flex items-center' : 'text-white mr-5 flex items-center'}>
              Home
            </NavLink>
            <NavLink to="/alltoys" className={({ isActive }) => isActive ? 'text-primary pl-4 flex items-center' : 'text-white pl-5 flex items-center'}>
              All Toys
            </NavLink>
            {isLoggedIn && (
              <>
                <NavLink to="/mytoys" className={({ isActive }) => isActive ? 'text-primary pl-4 flex items-center' : 'text-white pl-5 flex items-center'}>
                  My Toys
                </NavLink>
                <NavLink to="/addatoy" className={({ isActive }) => isActive ? 'text-primary pl-4 flex items-center' : 'text-white pl-5 flex items-center'}>
                  Add A Toy
                </NavLink>
              </>
            )}
            <NavLink to="/blog" className={({ isActive }) => isActive ? 'text-primary pl-4 flex items-center' : 'text-white pl-5 flex items-center'}>
              Blogs
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          {isLoggedIn ? (
            <div className="flex justify-center gap-4">
              <div className="tooltip" data-tip={isLoggedIn.displayName ? isLoggedIn.displayName : 'No-Name'}>
                <label  className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={isLoggedIn?.photoURL}  />
                  </div>
                </label>
              </div>
              
               <button onClick={signout} className='btn btn-primary'>
                Logout
               </button>
              
            </div>
          ) : (
            <Link to={'/login'}>
              <Button  className="bg-primary text-white">Login</Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;


