import { eraseResort, getResorts } from "../../../store/resorts";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from 'react';
import {Modal} from '../../../context/Modal'

const DeleteResort = ({ resortId }) => {

	const [toggleDelete, setToggleDelete] = useState(false);
	const history = useHistory();
	const dispatch = useDispatch();



	const handleDelete = (e) => {
		e.preventDefault();
		dispatch(eraseResort(resortId));
		// dispatch(getResorts());
		history.push("/profile/@my-resorts");
		setToggleDelete(false)
	};

	// <button className='deleteResortBtn' onClick={onClick}>Delete Resort</button>

	return(
		<>
			<div className='resort-delete-button'>
				<p className='deleteResortBtn' onClick={() => setToggleDelete(true)}>Delete Resort</p>
			{ toggleDelete && 
				<Modal onClose={() => setToggleDelete(false)}>
				<div className='delete-resort-container'> 
					<form className='delete-resort-modal' onSubmit={handleDelete}>
						<h2 id='delete-confirmation'>Are you sure you want to delete this Resort?</h2>
						<button type='submit' className='delete-resort-btn'>Delete</button>
					</form>
				</div>
				</Modal>
				}
			</div>
		</>
		)
		
};

export default DeleteResort;
