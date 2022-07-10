import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { deleteReview } from '../../store/reviews'
import { getResorts } from '../../store/resorts';

const DeleteReview = ({reviewProp, setEditOpen}) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteReview(reviewProp.id))
    dispatch(getResorts())
    setEditOpen(false)
    return history.push(`/resorts/${reviewProp.resortId}`)
  };

  return (
    <button onClick={handleDelete}>
      Delete
    </button>
  )
}

export default DeleteReview
