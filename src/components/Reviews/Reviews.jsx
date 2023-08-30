import { useEffect, useState } from 'react';
import api from '../../services/movies-api';
import css from './Reviews.module.css';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    api
      .getReviewsMovie(movieId)
      .then(response => {
        console.log(response.data.results);
        setReviews(response.data.results);
      })
      .catch(error => {
        console.log(error);
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  if ((!isLoading && error) || reviews.length === 0) {
    return (
      <>
        <h2 className={css.tittle}>Reviews</h2>
        <p className={css.errorText}>
          This reviews not create, try again later...
        </p>
      </>
    );
  }

  return (
    <div className={css.reviews__container}>
      <h2 className={css.tittle}>Reviews</h2>
      <ul className={css.reviewsBox}>
        {reviews &&
          reviews.map(({ id, author, content }) => {
            return (
              <li className={css.reviewsBox__item} key={id}>
                <p className={css.reviewsBox__name}>{author}</p>
                <p className={css.reviewsBox__content}>{content}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Reviews;
