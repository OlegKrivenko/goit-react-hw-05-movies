import { Link, Outlet, useLocation } from 'react-router-dom';

const MovieDetails = () => {
  const location = useLocation();
  console.log(location);

  return (
    <div>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};

export default MovieDetails;
