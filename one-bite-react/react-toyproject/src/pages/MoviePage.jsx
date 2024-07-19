import { useState, useEffect } from 'react';
import axios from 'axios';
import { MovieCard } from '../components/MovieCard';
import { Carousel } from '@material-tailwind/react';

export const MoviePage = () => {
  const [data, setData] = useState({ results: [] });

  const getData = async () => {
    try {
      const apiData = await axios.get('https://api.themoviedb.org/3/movie/now_playing?language=ko&page=1&region=KR', {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYmUyOGEwNGYxNDA2ODIzNmU3ZjJkOGIxNWI0MDZjNCIsIm5iZiI6MTcyMDE1NzYzNS42MzM0MzQsInN1YiI6IjY2ODc4NGEyZDc4ODA3YjQ5NjkzNjkyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.39IZBQrzniGQkof9wGK-UfRh8FqxtOFT7x1E7dGmORA',
        },
      });

      setData(apiData.data);
      console.log('success');
    } catch {
      console.log('error');
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="grid place-items-center">
      <div className="w-[80%]">
        {/* <Carousel className="rounded-xl">
        {data.results.map((item) => (
          <MovieCard key={item.id} title={item.title} poster_path={item.poster_path} vote_average={item.vote_average} />
        ))}
      </Carousel> */}
        <Carousel className="rounded-xl">
          {data.results.map((item) => (
            <MovieCard
              key={item.id}
              title={item.title}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};
