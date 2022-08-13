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
import comingSoon from '../../../images/comingSoon.jpg'
import firePlace from '../../../images/firePlace.png'
import gym from '../../../images/gym.png'
import jacuzzi from '../../../images/jacuzzi.png'
import massage from '../../../images/massage.png'
import minibar from '../../../images/minibar.png'
import roomService from '../../../images/roomService.png'
import surfing from '../../../images/surfing.png'
import wifi from '../../../images/wifi.png'
import workspace from '../../../images/workspace.png'
import swimmingPool from '../../../images/swimmingPool.png'
import Maps from '../../map/map';


import "./SingleResort.css";

const SingleResort = ({ setLoaded, loaded }) => {
	const history = useHistory();
	const dispatch = useDispatch();
	const { resortId } = useParams();
	const [disable, setDisable] = useState(true);
	const user = useSelector((state) => state.session.user);
	const resort = useSelector((state) => state.resort?.images ? state.resort : state.resort[resortId]);


	const key = useSelector((state) => state.map.key);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


	const reviewsArr = resort?.reviews;

	const imagesArr = resort?.images;


	const disableHandler = (reviews, userId) => {
		if (reviews?.length > 0) {
			for (let i = 0; i < reviews?.length; i++) {
				let review = reviews[i]
				if (review?.user_id === userId) {
					return false;
				}
			}
		}
		return true;
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
				{resort?.images.length == 0 ?
					<img src={comingSoon} alt="" className="imagesResort-spare" ></img>
					:
					<div className="imagesResort">
						<ImageSlider resort={resort}/>
					</div>
				}

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
						<div className="amenities">
							<img src={minibar} alt="" className="amenities-img" ></img>
							<span> Minibar</span>
						</div>
						}
						{(resort?.gym) && 
						<div className="amenities">
							<img src={gym} alt="" className="amenities-img" ></img>
							<span> Fitness Center</span>
						</div>
						}
						{(resort?.spa) && 
						<div className="amenities">
							<img src={massage} alt="" className="amenities-img" ></img>
							<span> Spa</span>
						</div>
						}
						{(resort?.jacuzzi) && 
						<div className="amenities">
							<img src={jacuzzi} alt="" className="amenities-img" ></img>
							<span> Jacuzzi</span>
						</div>
						}
						{(resort?.pool) && 
						<div className="amenities">
							<img src={swimmingPool} alt="" className="amenities-img" ></img>
							<span> Swimming Pool</span>
						</div>
						}
						{(resort?.room_service) && 
						<div className="amenities">
							<img src={roomService} alt="" className="amenities-img" ></img>
							<span> Room Service</span>
						</div>
						}
						{(resort?.fire_place) && 
						<div className="amenities">
							<img src={firePlace} alt="" className="amenities-img" ></img>
							<span> Fire Place</span>
						</div>
						}
						{(resort?.wifi) && 
						<div className="amenities">
							<img src={wifi} alt="" className="amenities-img" ></img>
							<span> Wifi</span>
						</div>
						}
						{(resort?.workspace) && 
						<div className="amenities">
							<img src={workspace} alt="" className="amenities-img" ></img>
							<span> Personal Workspace</span>
						</div>
						}
						{(resort?.water_sports) && 
						<div className="amenities">
							<img src={surfing} alt="" className="amenities-img" ></img>
							<span> Water Activities</span>
						</div>
						}
					</div>
				</div>
			</div>
			
			<div className="review-map-section">
				<div className="main-review-div">
					<GetReviews />
					{disable && <ReviewForm />}
				</div>
				<div className="main-map-div">
					<h2>Location:</h2>
					<div className="map-sub-div">
						<Maps resort={resort} apiKey={key} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default SingleResort;


/**/
