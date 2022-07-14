import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";
import { useHistory } from "react-router-dom";
import comingSoon from '../../../images/comingSoon.jpg'

import './Calendar.css'
import { authenticate } from "../../../store/session";

const BookingConfirmationModal = ({ booking, setModal }) => {
	const history = useHistory();
	const dispatch = useDispatch();
	const resort = useSelector((state) => state.resort.booking ? state.resort : state.resort[booking?.resort_id]);
	const user = useSelector((state) => state.session.user);

	const start = new Date(booking?.start_date);
	const startNew = start.getTime();
	const end = new Date(booking?.end_date);
	const endNew = end.getTime();
	const timeSpan = endNew - startNew;
	const numOfDays = timeSpan / (1000 * 60 * 60 * 24);

	const checkIn = format(start, "MMMM do, yyyy");
	const checkOut = format(end, "MMMM do, yyyy");

	// useEffect(() => {
	// 	setTimeout(() => {
	// 		dispatch(authenticate())
	// 		setModal(false)
	// 	}, 6000)
	// }, [])

	return (
		<div className="bookingContainer">
			<h1>Booking Confirmation:</h1>
			<h2 className="booking-blurb">
			  Name: {user?.username}
			</h2>
			{resort?.images.length == 0 ?
					<img src={comingSoon} alt="" className="imagesResort-spare" ></img>
					:
					<img
						className="resort-image"
						src={resort?.images[0]?.url}
						alt={`${resort?.images[0]?.id}`}
					/>
			}
			<div className="booking-details">
				<div className='booking-details-dates'>
					<h3>Check-in Date: {booking?.start_date.slice(0, 16)}</h3>
					<h3>Check-out Date: {booking?.end_date.slice(0, 16)}</h3>
				</div>
				<h3>
					Location: #{resort?.island}, {resort?.country}
				</h3>
				<h3>Total Cost: ${numOfDays * resort?.price}</h3>
			</div>
		</div>
	);
};

export default BookingConfirmationModal;
