import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaHome, FaBloggerB, FaSignInAlt } from 'react-icons/fa';
import Button from '../Button/Button';
const user = true
const Nav = () => {
   return (
      <div className='  ' >

      <div className="navbar  px-2 md:px-28  md:h-32    ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold">
              <li><NavLink to={'/'} className={({ isActive }) => isActive ? 'text-primary ' : 'text-white pl-4'}> Home</NavLink ></li>

              <li> <NavLink to={'/Blogs'} className={({ isActive }) => isActive ? " text-primary  pl-4" : "text-white  pl-4 "}> All Toys</NavLink></li>
              <li> <NavLink to={'/resister'} className={({ isActive }) => isActive ? " text-primary pl-4" : "text-white  pl-4 "}> My Toys</NavLink></li>
              <li> <NavLink to={'/resister'} className={({ isActive }) => isActive ? " text-primary pl-4" : "text-white  pl-4 "}> Add A Toy</NavLink></li>
              <li> <NavLink to={'/resister'} className={({ isActive }) => isActive ? " text-primary  pl-4" : "text-white  pl-4 "}> Blogs</NavLink></li>
            </ul>
          </div>
        
          <Link to={'/'} className=" font-bold  text-base md:text-3xl"><span className='text-[#fff]' >ToYLand</span> </Link>
       

        </div>
        <div className="navbar-center hidden lg:flex text-base ">
          <ul className="menu menu-horizontal  font-light mx-5">
            <NavLink to={'/'} className={({ isActive }) => isActive ? 'text-primary  mr-5 flex  items-center' : 'text-white mr-5 flex  items-center'}>Home</NavLink>

            <NavLink to={'/Blogs'} className={({ isActive }) => isActive ? "text-primary pl-4 flex  items-center" : "text-white  pl-5 flex  items-center "}> All Toys</NavLink >
            <NavLink to={'/resister'} className={({ isActive }) => isActive ? " text-primary  pl-4 flex  items-center" : "text-white  pl-5 flex  items-center "}>My Toys</NavLink >
            <NavLink to={'/resister'} className={({ isActive }) => isActive ? " text-primary  pl-4 flex  items-center" : "text-white  pl-5 flex  items-center "}>Add A Toy</NavLink >
            <NavLink to={'/resister'} className={({ isActive }) => isActive ? " text-primary  pl-4 flex  items-center" : "text-white  pl-5 flex  items-center "}>Blogs</NavLink >

          </ul>
        </div>
        <div className="navbar-end">

      
{

            user ?
              <div className="flex justify-center gap-4">
                <div className="tooltip" data-tip={user.displayName ? user.displayName : 'No-Name'}>

                  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                      <img src='' />
                    </div>
                  </label>


                </div>
                <Link  > {<Button>Logout</Button>}</Link>
              </div>


              :
              
              <Link >{<Button>Logout</Button>}</Link>
          }




        </div>

      </div>
    </div>
   )
};

export default Nav;