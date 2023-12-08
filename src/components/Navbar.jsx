import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    < >
      <Link to={'/'}><h1 className='text-[#00df9a] md:text-6xl font-bold py-7 text-5xl'>FSF</h1></Link>
    </>
  );
}

export default Navbar;
