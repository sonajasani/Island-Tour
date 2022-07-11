import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { deleteReview } from '../../store/reviews'
import { getResorts } from '../../store/resorts';
import {Modal} from '../../context/Modal'
import './Reviews.css'

const DeleteReview = ({reviewProp, setEditOpen}) => {

  const [toggleDelete, setToggleDelete] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteReview(reviewProp.id))
    dispatch(getResorts())
    history.push(`/resorts/${reviewProp.resortId}`)
    setToggleDelete(false)
  };

  return (
    <>
      <div className='review-delete-button'>
        <i class="fa fa-trash-o" onClick={() => setToggleDelete(true)}></i>
      { toggleDelete && 
        <Modal onClose={() => setToggleDelete(false)}>
        <div className='delete-review-container'> 
            <form className='delete-review-modal' onSubmit={handleDelete}>
                <h2 id='delete-confirmation'>Are you sure you want to delete this Review?</h2>
                <button type='submit' className='delete-review-btn'>Delete</button>
            </form>
        </div>
        </Modal>
        }
      </div>
    </>
  )
}

export default DeleteReview