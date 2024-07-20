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
    <div className="flex justify-center">
      <div className="w-[500px] h-[800px] bg-blue-300 rounded-md p-5 m-2">
        {/* <Carousel className="rounded-xl">
        {data.results.map((item) => (
          <MovieCard key={item.id} title={item.title} poster_path={item.poster_path} vote_average={item.vote_average} />
        ))}
      </Carousel> */}
        {/* <Carousel className="rounded-xl">
          <img
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            alt="image 1"
            className="object-cover w-full h-full"
          />
          <img
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="image 2"
            className="object-cover w-full h-full"
          />
          <img
            src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
            alt="image 3"
            className="object-cover w-full h-full"
          />
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
