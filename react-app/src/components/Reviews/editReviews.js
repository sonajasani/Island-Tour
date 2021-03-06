import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating'
import { editReview } from '../../store/reviews';
import DeleteReview from './deleteReviews';
import './Reviews.css'

const EditReview = ({reviewProp, setEditOpen}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const id = reviewProp.id

  const realRating = reviewProp.rating*20
  const [adjRating, setAdjRating] = useState(realRating);
  const [review, setReview] = useState(reviewProp.review);

  const handleRating = (rate) => {
    setAdjRating(rate)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const review_id = reviewProp.id;
    const rating = adjRating/20

    const payload = {
      rating,
      review,
    };

    if (rating < 1 || rating > 5) {
      return alert('Please submit a rating between 1 to 5 stars')
    }
    if (review.length > 1000) {
      return alert('Review cannot be greater than 1000 characters')
    }

    setEditOpen(false)

    await dispatch(editReview(payload, review_id))
      .then (setEditOpen(false))
      .then(() => history.push(`/resorts/${reviewProp.resortId}`))
  };

  return (
    <div className='RatingFormContainer'>
      <form onSubmit={handleSubmit} className='RatingForm'>
        <div onClick={() => {setEditOpen(false)}} className='ReviewFormActionButtons CloseBtn'>
          <i class="fa fa-remove"></i>
        </div>
        <div className='RatingFormInner'>
          <label className='NewRatingLabel'>
            <div className='NewRatingDiv'>
            Rating
            </div>
            <Rating onClick={handleRating} ratingValue={adjRating} emptyColor={'rgb(255, 255, 255)'} fillColor={'rgb(225,20,20)'} size={20} initialValue={0} allowHover={false}/>
          </label>
          <label className='NewRatingLabel'>
            <div className='NewRatingDiv'>
             Review
            </div>
            <textarea
              type="text"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              required
            />
          </label>
        </div>
        <div className='RatingFormInnerButtonsContainer'>
          <button type="submit" className='ReviewFormInnerButtons'>
          <i class="fa fa-send-o"></i>Submit</button>
          <DeleteReview reviewProp={reviewProp} setEditOpen={setEditOpen} className='ReviewFormInnerButtons' />
        </div>
      {/* <div className='ReviewFormActionButtonsContainer'>
      </div> */}
      </form>
    </div>
  );
};

export default EditReview;
