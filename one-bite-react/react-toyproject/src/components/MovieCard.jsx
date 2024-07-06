import { Grid } from '@mui/material';

export const MovieCard = ({ title, backdrop_path, vote_average }) => {
  const path = 'https://image.tmdb.org/t/p/w1280';
  return (
    <Grid
      container
      sx={{
        margin: 3,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        border: 'solid 1px #dddddd',
        borderRadius: '10px',
        padding: '20px',
      }}
    >
      <Grid item>
        <img className="rounded-md" src={path + backdrop_path} />
      </Grid>
      <Grid item>
        <h3>{title}</h3>
      </Grid>
      <Grid item>
        <p>평점: {vote_average}</p>
      </Grid>
    </Grid>
  );
};
