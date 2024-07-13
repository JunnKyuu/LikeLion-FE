import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className="p-5 ">
      <nav className="flex align-middle justify-evenly">
        <div className="flex p-3 w-[300px] md:w-[500px] lg:w-[700px] justify-evenly">
          <Link className="p-5 block border-black border-[1px] font-GmarketMedium" to={'/'}>
            Home
          </Link>
          <Link className="block font-GmarketMedium" to={'/movie'}>
            Movie
          </Link>
          <Link className="block font-GmarketMedium" to={'/menu1'}>
            Menu1
          </Link>
          <Link className="block font-GmarketMedium" to={'/menu2'}>
            Menu2
          </Link>
        </div>
        <div className="p-5 bg-gray-200">
          <Link className="block bg-pink-200 font-GmarketMedium" to={'/login'}>
            Login
          </Link>
        </div>
      </nav>
    </div>
  );
};
