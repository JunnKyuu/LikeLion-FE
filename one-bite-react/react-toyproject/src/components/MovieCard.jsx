export const MovieCard = ({ poster_path, title, vote_average }) => {
  const poster = 'https://api.themoviedb.org/3/movie/now_playing?language=ko&page=1&region=KR' + poster_path;
  return (
    <div>
      <img src={poster} alt="영화 포스터"></img>
      <h4>{title}</h4>
      <span>{vote_average}</span>
    </div>
  );
};
