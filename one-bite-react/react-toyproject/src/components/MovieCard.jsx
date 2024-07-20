export const MovieCard = ({ title, poster_path, vote_average }) => {
  const basicUrl = 'https://image.tmdb.org/t/p/w1280';

  return (
    <div className="grid p-3 m-5 rounded-md place-items-center">
      <div className="rounded-md">
        <img className="m-1 rounded-md" src={basicUrl + poster_path} alt="poster" />
      </div>
      <div className="p-3">
        <h4 className="font-GmarketBold">{title}</h4>
        <p className="text-center font-GmarketMedium">{vote_average}</p>
      </div>
    </div>
  );
};
