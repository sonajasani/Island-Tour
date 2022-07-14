import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { getResorts } from "../../../store/resorts";
import { useDispatch } from "react-redux";
import DeleteResort from "../../Resorts/SingleResort/DeleteResort";
import './ProfileListing.css'
import comingSoon from '../../../images/comingSoon.jpg'

function ProfileListings() {
	const user = useSelector((state) => state.session.user);

	useEffect(() => {
	  dispatch(getResorts())
	})
	
	const resorts = useSelector((state) => state.resort);
	const resortsArr = Object.values(resorts);
	const userResorts = resortsArr?.filter((resort) => user?.id === resort.host?.id);
  const dispatch = useDispatch();
	



	return (
		<div className="profile-listings-page">
			<div className='profile-resort-subdiv'>
				{userResorts.length ? (
					userResorts.map((resort) => {
						return (
						
							<div className='resort-list-main'>
								<Link
									key={resort?.id}
									className="resort-detail-link"
									to={`/resorts/${resort?.id}`}
								>
									<div className="resortDetailBody">
										<h3>{resort?.name}</h3>
										{resort?.images.length == 0 ?
											<img src={comingSoon} alt="" className="listingResortImage" ></img>
											: 
											<img className="listingResortImage" src={resort?.images[0]?.url} />
										}
									</div>
								</Link>
								<div className="resort-btns">
									<NavLink to={`/resorts/${resort.id}/edit`}>
										<button className="editResortBtn">
											Edit Resort
										</button>
									</NavLink>
									<DeleteResort resortId={resort.id} />
								</div>
							</div>
						);
					})
				) : (
					<div className='no-resort-div'>
						<h1 className="no-resort-message">
							No Resort currently owned by you. Upload New Resort to add a
							Resort !!
						</h1>
						<NavLink to='/resorts/new' className='no-resort-link'>
							Click Here !!
						</NavLink>
					</div>
				)}
			</div>
		</div>
	);
}

export default ProfileListings;
