import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex justify-between'>
      <div>
        <h2 className='p-4 font-bold text-xl'>My Portfolio</h2>
      </div>
      <nav className='flex'>
         <ul className='flex justify-end m-5 '>
          <li className='mr-4 text-slate-950 text-xl'>
            <Link to="/">Home</Link>
          </li>
          <li className='mr-4 text-slate-950 text-xl'>
            <Link to="/payment">Payment</Link>
          </li>
          <li className='mr-4 text-slate-950 text-xl'>
            <Link to="/about">About</Link>
          </li>
          <li className='mr-4 text-slate-950 text-xl'>
            <Link to="/blog">Blog</Link>
          </li>
         </ul>
      </nav>
    </div>
  );
}

export default Navbar;
