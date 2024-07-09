import React from 'react';

export const MovieCard = ({ title, poster_path, vote_average }) => {
  const basicPath = 'https://image.tmdb.org/t/p/w1280';

  return (
    <div className="grid place-items-center w-[300px] md:w-[400px] lg:w-[500px] bg-green-200 p-10 m-6 rounded-[10px]">
      <img className="mb-5 rounded-[10px]" src={basicPath + poster_path} alt="영화 포스터" />
      <h3 className="text-base font-bold md:text-lg lg:text-2xl ">{title}</h3>
      <p>{vote_average.toFixed(1)}</p>
    </div>
  );
};
