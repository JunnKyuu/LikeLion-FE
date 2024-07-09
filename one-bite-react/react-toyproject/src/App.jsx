import axios from 'axios';
import { useState, useEffect } from 'react';

import { Header } from './components/Header';
import { MovieCard } from './components/MovieCard';

export const App = () => {
  const [data, setData] = useState({ results: [] });

  const getData = async () => {
    try {
      const apiResult = await axios.get('https://api.themoviedb.org/3/movie/now_playing?language=ko&page=1&region=KR', {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYmUyOGEwNGYxNDA2ODIzNmU3ZjJkOGIxNWI0MDZjNCIsIm5iZiI6MTcyMDI3NDQ4My41Njc4OTYsInN1YiI6IjY2ODc4NGEyZDc4ODA3YjQ5NjkzNjkyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TpkCcILcwEBOi65_vErEqY8_2exzzrW2K5Zg-FY1xbA',
        },
      });
      console.log('success');
      setData(apiResult.data);
    } catch {
      console.log('error');
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Header />
      <div className="grid bg-blue-200 place-items-center">
        {data.results.map((item) => {
          return (
            <MovieCard
              key={item.id}
              title={item.title}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
            />
          );
        })}
      </div>
    </div>
  );
};
