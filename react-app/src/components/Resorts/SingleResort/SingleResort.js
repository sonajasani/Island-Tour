import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Calendar from "../../UserPage/BookingsPage/Calendar";
import GetReviews from "../../Reviews/getReviews";
import ReviewForm from "../../Reviews/postReviews";
import DeleteResort from "./DeleteResort";
import PageNotFound from "../../PageNotFound";
import { getResorts } from "../../../store/resorts";
import ImageSlider from'../../Tools/ImageSlider'

import "./SingleResort.css";

const SingleResort = ({ setLoaded, loaded }) => {
	const history = useHistory();
	const dispatch = useDispatch();
	const { resortId } = useParams();
	const [disable, setDisable] = useState(true);
	const resort = useSelector((state) => state?.resort[resortId]);
	const user = useSelector((state) => state?.session.user);

	const reviewsArr = resort?.reviews;
	const imagesArr = resort?.images;

	const disableHandler = (reviews, userId) => {
		if (reviews?.length > 0) {
			for (let i = 0; i < reviews?.length; i++) {
				let review = reviews[i]
				if (review.user_id === userId) {
					return false;
				}
			}
		}
		return true;
	};

	const onClickEdit = () => {
		history.push(`/resorts/${resortId}/edit`);
	};

	useEffect(() => {
		setDisable(disableHandler(reviewsArr, user.id));
	}, [reviewsArr, user.id, disable]);

	if (!resort && loaded) {
		return <PageNotFound />;
	}
	return (
		<div className="singleResortBody">
			
			<div key={resort?.id}>
				<div className="resortHeader">
					<div className="resortHeaderInfo">
						<h1>{resort?.name}</h1>
					</div>
				</div>
				<div className="imagesResort">
					<ImageSlider resort={resort}/>
				</div>
				<div className="divisionSpace">
					<div className="divisionLeft">
						<h2>
							Island: {resort?.island},   Country: {resort?.country}
						</h2>
						<p className="resortDescription">{resort?.description}</p>
						<h3>Price: ${resort?.price}/night</h3>
						<div className="divisionRight">
							<Calendar />
						</div>
					</div>
					<div className="resort-amenities">
						<h2>Amenities</h2>
						{(resort?.minibar) && 
						<p>Minibar</p>
						}
						{(resort?.gym) && 
						<p>Fitness Center</p>
						}
						{(resort?.spa) && 
						<p>Spa</p>
						}
						{(resort?.jacuzzi) && 
						<p>Jacuzzi</p>
						}
						{(resort?.pool) && 
						<p>Swimming Pool</p>
						}
						{(resort?.room_service) && 
						<p>Room Service</p>
						}
						{(resort?.fire_place) && 
						<p>Fire Place</p>
						}
						{(resort?.wifi) && 
						<p>Wifi</p>
						}
						{(resort?.workspace) && 
						<p>Personal Workspace</p>
						}
						{(resort?.water_sports) && 
						<p>Water Activities</p>
						}
					</div>
				</div>
			</div>
			<div className="main-review-div">
				<GetReviews />
				{disable && <ReviewForm />}
			</div>
		</div>
	);
}

export default SingleResort;
