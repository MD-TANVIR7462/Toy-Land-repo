import React from 'react';
import Nav from './components/Nav/Nav';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className='bg-[#1f1f38]'>
      <Nav></Nav>
    <main className='w-11/12 mx-auto'>
    <Outlet></Outlet>
    </main>
      <Footer></Footer>
    </div>
  );
};

export default App;