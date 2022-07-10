import Demo from "../auth/Demo";
import './SplashPage.css'

const SplashPage = () => {
	return (
		<div className="splash-page-one">
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
		</div>
	);
};

export default SplashPage;
