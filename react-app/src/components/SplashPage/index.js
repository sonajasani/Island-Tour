import { useSelector } from "react-redux";
import Demo from "../auth/Demo";
import './SplashPage.css'
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

const SplashPage = () => {


	const sessionUser = useSelector(state => state.session.user)

	return (
		<>
			<div className="splash-page-one">
					{ sessionUser ?
						<div className="splash-text-content">
							<h1>Find Your Adventure..</h1>
							<h2 className="splash-sub-text">
								<div>Share the magic of nature's untapped beauty with the ones you love.</div>
								<div>Island Tour is in it for the adventure, no matter where life takes you..!!</div>
							</h2>
							<NavLink to='/resorts' className='splash-all-resort'>
								<button>
									<GiHamburgerMenu />
									<span>Choose Your Destination</span>
									</button>
							</NavLink>
						</div>
					:
						
						<div className="splash-text-content">
							<h1>Island Tour...</h1>
							<h2 className="splash-sub-text">
								<div>Good vibes happen on the tides..</div>
								<div>The tan will fade but the memories will last Forever..!!</div>
							</h2>
							<div className="splash-demo">
								<Demo />
							</div>
						</div>
						
					}
			</div>
		
		</>
	);
};

export default SplashPage;
