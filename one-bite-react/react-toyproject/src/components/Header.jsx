import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="flex justify-between p-5">
      <div className="flex justify-around w-[200px] bg-yellow-200">
        <Link to={'/'}>홈</Link>
        <Link to={'/movie'}>영화</Link>
        <Link to={'/my'}>마이페이지</Link>
      </div>
      <div className="flex justify-around bg-green-200 w-[150px]">
        <Link to={'/login'}>로그인</Link>
        <Link to={'setting'}>설정</Link>
      </div>
    </header>
  );
};
