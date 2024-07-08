import React from 'react';

export const MovieCard = ({ title, poster_path, vote_average }) => {
  const basicPath = 'https://image.tmdb.org/t/p/w1280';

  return (
    <div className="grid place-items-center w-[450px] md:w-[680px] lg:w-[800px] bg-green-200 p-10 m-6">
      <img className="mb-5" src={basicPath + poster_path} alt="영화 포스터" />
      <h3 className="text-base font-bold md:text-lg lg:text-2xl ">{title}</h3>
      <p>{vote_average.toFixed(1)}</p>
    </div>
  );
};
