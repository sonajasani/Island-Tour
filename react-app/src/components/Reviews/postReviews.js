import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { postReview } from '../../store/reviews'
import { Rating } from 'react-simple-star-rating'
import { getResorts } from '../../store/resorts';
import { getReviews } from '../../store/reviews';
import './Reviews.css'

const ReviewForm = () => {

  const dispatch = useDispatch();
  const {resortId} = useParams();

  const resort_id = resortId;
  
  const [adjRating, setAdjRating] = useState(0);
  const [review, setReview] = useState('');
  const [error, setError] = useState([]);
  const rating = adjRating/20


  
 useEffect(() => {
    const err = [];
    if (rating < 1 || rating > 5) err.push('Please submit a rating between 1 to 5 stars')
    if (review.length > 1000) err.push('Review cannot be greater than 1000 characters')
    setError(err);
  },[review, rating])


  const handleRating = (rate) => {
    setAdjRating(rate)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      resort_id,
      rating,
      review,
    };

    if (rating < 1 || rating > 5) {
      return alert('Please submit a rating between 1 to 5 stars')
    }
    if (error.length <= 0){
      await dispatch(postReview(payload, resort_id))
      await dispatch(getResorts())
      await dispatch(getReviews())
    }
  };

  




  return (
    <div className='RatingFormContainerNew'>
      <div className='RatingFormContainerNewInner'>
        Post Your Reivew
      </div>
      <div classname='err-msg-div'>
        {error.length > 0 && error.map((err, idx) => (
          <p className='review-err-msg' key={idx}>Note: {err}</p>
        ))}
      </div>
      <form onSubmit={handleSubmit} className='RatingFormNew'>
        <div className='RatingFormInner'>
          <label className='NewRatingLabel'>
            <div className='NewRatingDiv'>
              Rating
            </div>
            <Rating onClick={handleRating} ratingValue={adjRating} emptyColor={'rgb(255, 255, 255)'} fillColor={'rgb(225,20,20)'} size={20} initialValue={0} allowHover={false}/>
          </label>
          <label className='NewRatingLabel'>
            <div className='NewRatingDiv'>
              Comments
            </div>
            <textarea
              type="text"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit" className='RatingFormNewSubmit'>
        <i class="fa fa-send-o"></i>Submit</button>
      </form>
    </div>
  );
};

export default ReviewForm;
