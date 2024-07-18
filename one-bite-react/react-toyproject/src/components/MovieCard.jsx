export const MovieCard = ({ title, poster_path, vote_average }) => {
  const basicUrl = 'https://image.tmdb.org/t/p/w1280';

  return (
    <div>
      <div>
        <img src={basicUrl + poster_path} alt="poster" />
      </div>
      <div>
        <h4>{title}</h4>
        <p>{vote_average}</p>
      </div>
    </div>
  );
};
