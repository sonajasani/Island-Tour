import { eraseResort, getResorts } from "../../../store/resorts";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const DeleteResort = ({ resortId }) => {
	const history = useHistory();
	const dispatch = useDispatch();
	const onClick = () => {
		dispatch(eraseResort(resortId));
		dispatch(getResorts());
		history.push("/");
	};

	return <button className='deleteResortBtn' onClick={onClick}>Delete Resort</button>;
};

export default DeleteResort;
