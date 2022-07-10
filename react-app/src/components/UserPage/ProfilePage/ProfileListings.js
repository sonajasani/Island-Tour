import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getResorts } from "../../../store/resorts";
import { useDispatch } from "react-redux";

function ProfileListings() {
	const user = useSelector((state) => state.session.user);
	const resorts = useSelector((state) => state.resort);
	const resortsArr = Object.values(resorts);
	const userResorts = resortsArr.filter((resort) => user.id === resort.host.id);
  const dispatch = useDispatch();
	console.log(userResorts);

  useEffect(() => {
    dispatch(getResorts())
  })

	return (
		<div className="profile-listings-page profile-section">
			{userResorts.length ? (
				userResorts.map((resort) => {
					return (
						<Link
							key={resort?.id}
							className="resort-detail-link"
							to={`/resorts/${resort?.id}`}
						>
							<div className="resortDetailBody">
								<h2>{resort?.name}</h2>
								<h3>${resort?.price}/night</h3>
								<img className="listingResortImage" src={resort?.images[0]?.url} />
							</div>
						</Link>
					);
				})
			) : (
				<h1 className="noListingsMessage">
					No Resort currently owned by you. Click on Upload New Resort to add a
					Resort !!
				</h1>
			)}
		</div>
	);
}

export default ProfileListings;
