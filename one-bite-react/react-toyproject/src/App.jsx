import { useState, useEffect } from 'react';
import { MovieCard } from './components/MovieCard';
import axios from 'axios';

import { Container, Box } from '@mui/material';

export const App = () => {
  const [data, setData] = useState({ results: [] });

  const token =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYmUyOGEwNGYxNDA2ODIzNmU3ZjJkOGIxNWI0MDZjNCIsIm5iZiI6MTcyMDI3NDQ4My41Njc4OTYsInN1YiI6IjY2ODc4NGEyZDc4ODA3YjQ5NjkzNjkyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TpkCcILcwEBOi65_vErEqY8_2exzzrW2K5Zg-FY1xbA';

  const getData = async () => {
    try {
      const result = await axios.get('https://api.themoviedb.org/3/movie/now_playing?language=ko&page=1&region=KR', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setData(result.data);
      console.log('success');
    } catch {
      console.log('error');
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container fixed maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1 className="text-3xl font-bold">현재 상영작</h1>
        {data.results.map((item) => (
          <MovieCard
            key={item.id}
            title={item.title}
            backdrop_path={item.backdrop_path}
            vote_average={item.vote_average}
          />
        ))}
      </Box>
    </Container>
  );
};
