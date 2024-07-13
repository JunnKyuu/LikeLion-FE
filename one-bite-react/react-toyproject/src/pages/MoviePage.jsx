import { useState, useEffect } from 'react';
import axios from 'axios';
import { MovieCard } from '../components/MovieCard';

export const MoviePage = () => {
  const [data, setData] = useState({ results: [] });

  const getData = async () => {
    try {
      const resultData = await axios.get(
        'https://api.themoviedb.org/3/movie/now_playing?language=ko&page=1&region=KR',
        {
          headers: {
            Authorization:
              'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYmUyOGEwNGYxNDA2ODIzNmU3ZjJkOGIxNWI0MDZjNCIsIm5iZiI6MTcyMDI3NDQ4My41Njc4OTYsInN1YiI6IjY2ODc4NGEyZDc4ODA3YjQ5NjkzNjkyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TpkCcILcwEBOi65_vErEqY8_2exzzrW2K5Zg-FY1xbA',
          },
        }
      );

      setData(resultData.data);
      console.log('success');
    } catch {
      console.log('error');
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {data.results.map((item) => {
        return (
          <MovieCard key={item.id} title={item.title} poster_path={item.poster_path} vote_average={item.vote_average} />
        );
      })}
    </div>
  );
};
