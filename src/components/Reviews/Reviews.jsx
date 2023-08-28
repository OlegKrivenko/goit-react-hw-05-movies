import { useEffect, useState } from 'react';
import api from '../../services/movies-api';
import css from './Reviews.module.css';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    api
      .getReviewsMovie(movieId)
      .then(response => {
        console.log(response.data.results);
        setReviews(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, [movieId]);

  return (
    <div className={css.reviews__container}>
      <h2 className={css.tittle}>Reviews</h2>
      <ul className={css.reviewsBox}>
        {reviews.length
          ? reviews.map(({ id, author, content }) => {
              return (
                <li className={css.reviewsBox__item} key={id}>
                  <p className={css.reviewsBox__name}>{author}</p>
                  <p className={css.reviewsBox__content}>{content}</p>
                </li>
              );
            })
          : 'Sorry, movie does not have reviews'}
      </ul>
    </div>
  );
};

export default Reviews;
