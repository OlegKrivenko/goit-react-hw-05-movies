import api from 'services/movies-api';

console.log(api.getTrendingMovies());
console.log(api.getSearchMovies('batman'));
console.log(api.getDetailsMovie(268));
console.log(api.getCreditsMovie(268));
console.log(api.getReviewsMovie(268));

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      React homework template
    </div>
  );
};
