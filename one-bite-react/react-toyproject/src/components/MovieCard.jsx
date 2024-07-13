export const MovieCard = ({ title, poster_path, vote_average }) => {
  const basic_url = 'https://image.tmdb.org/t/p/w1280';

  return (
    <div>
      <img src={basic_url + poster_path} alt="poster" />
      <h3>{title}</h3>
      <p>{vote_average}</p>
    </div>
  );
};
