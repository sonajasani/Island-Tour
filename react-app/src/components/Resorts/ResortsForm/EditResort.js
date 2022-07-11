import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { modifyResort } from "../../../store/resorts";
import './ResortsForm.css'

const EditResort = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const { resortId } = useParams();
	const resort = useSelector((state) => state.resort[resortId]);
	const image = resort.images[0];

	const continents = ["Asia", "Africa", "Antartica", "Europe", "North America", "Oceania", "South America"];


	const [name, setName] = useState(resort?.name);
    const [island, setIsland] = useState(resort?.island);
    const [country, setCountry] = useState(resort?.country);
    const [continent, setContinent] = useState(resort?.continent);
    const [description, setDescription] = useState(resort?.description);
    const [price, setPrice] = useState(resort?.price);
    const [minibar, setMinibar] = useState(resort?.minibar);
    const [gym, setGym] = useState(resort?.gym);
    const [spa, setSpa] = useState(resort?.spa);
    const [jacuzzi, setJacuzzi] = useState(resort?.jacuzzi);
    const [pool, setPool] = useState(resort?.pool);
    const [room_service, setRoomService] = useState(resort?.room_service);
    const [fire_place, setFirePlace] = useState(resort?.fire_place);
    const [wifi, setWifi] = useState(resort?.wifi);
    const [workspace, setWorkspace] = useState(resort?.workspace);
    const [water_sports, setWaterSports] = useState(resort?.water_sports);
	const [validationErrors, setValidationErrors] = useState([]);
	const [hasSubmitted, setHasSubmitted] = useState(false);


	useEffect(() => {
		const errors = [];
		if (name.length < 5) errors.push("Must provide a valid name.");
		if (island.length < 2) errors.push("Island name must be at least 5 characters.");
        if (country.length < 3) errors.push("Country name must be at least 3 characters.");
		if (description.length < 10)
			errors.push("Description must be more than 10 characters.");
		if (price <= 10) errors.push("Price must be greater than 10.");

		setValidationErrors(errors);
	}, [
		name,
		island,
        country,
		description,
		price
	]);

	const onCancel = () => {
		history.push(`/resorts/${resortId}`)
	}

	const onSubmit = async (e) => {
		e.preventDefault();

		setHasSubmitted(true);

		const data = {
			name,
            island,
            country,
            continent,
            description,
            price,
            minibar,
            gym,
            spa,
            jacuzzi,
            pool,
            room_service,
            fire_place,
            wifi,
            workspace,
            water_sports 
		};
		
		if (validationErrors.length <= 0) {
			await dispatch(modifyResort(data, resortId)).then(
				() => console.log(data, resortId),
				history.push(`/resorts/${resortId}`)
				);
				setValidationErrors([]);
				setHasSubmitted(false);
			}
		};
		
	return (
		<div className="formPage">
			<div className="leftSideImage">
				<h2>Edit your Resort !</h2>
				<img
					className="imageFormLeft"
					src={image.url}
				/>
			</div>
			<div className="formGroup">
				<form onSubmit={onSubmit}>
					{hasSubmitted && validationErrors.length > 0 && (
						<div>
							{validationErrors.map((error, idx) => (
								<p className='auth-err-msg' key={idx}>{error}</p>
							))}
						</div>
					)}
					<div className="formGroupInput">
					<div>
							<label htmlFor="name">Name</label>
							<input
								className="inputForm"
								required
								name="name"
								type="text"
								placeholder="Resort Name"
								onChange={(e) => setName(e.target.value)}
								value={name}
							/>
						</div>
						<div>
							<label htmlFor="island">Island</label>
							<input
								className="inputForm"
								required
								name="island"
								type="text"
								placeholder="Island"
								onChange={(e) => setIsland(e.target.value)}
								value={island}
							/>
						</div>
						<div>
							<label htmlFor="country">Country</label>
							<input
								className="inputForm"
								required
								name="country"
								type="text"
								placeholder="Country"
								onChange={(e) => setCountry(e.target.value)}
								value={country}
							/>
						</div>
						<div>
							<label htmlFor="description">Description</label>
							<textarea
								required
								name="description"
								type="text"
								placeholder="Description"
								value={description}
								onChange={(e) => setDescription(e.target.value)}
							/>
						</div>
						<div>
							<label htmlFor="continent">Continent</label>
							<select
								required
								name="continent"
								onChange={(e) => setContinent(e.target.value)}
								value={continent}
							>
								{continents.map((continent) => (
									<option value={continent}>{continent}</option>
								))}
							</select>
						</div>
						<div>
							<label htmlFor="price">Price per day</label>
							<input
								required
								name="price"
								type="number"
								placeholder="Price/Day"
								onChange={(e) => setPrice(e.target.value)}
								value={price}
							/>
						</div>
						<div>
							<input
								type='checkbox'
								name='minibar'
								checked={minibar}
								value={minibar}
								onChange={(e) => setMinibar(!minibar)}
							>
							</input>
							<label htmlFor="minibar">Minibar</label>
						</div>
						<div>
							<input
								type='checkbox'
								name='gym'
								checked={gym}
								value={gym}
								onChange={(e) => setGym(!gym)}
							>
							</input>
							<label htmlFor="gym">Fitness Center</label>
						</div>
						<div>
							<input
								type='checkbox'
								name='spa'
								checked={spa}
								value={spa}
								onChange={(e) => setSpa(!spa)}
							>
							</input>
							<label htmlFor="spa">Spa</label>
						</div>
						<div>
							<input
								type='checkbox'
								name='jacuzzi'
								checked={jacuzzi}
								value={jacuzzi}
								onChange={(e) => setJacuzzi(!jacuzzi)}
							>
							</input>
							<label htmlFor="jacuzzi">Jacuzzi</label>
						</div>
						<div>
							<input
								type='checkbox'
								name='pool'
								checked={pool}
								value={pool}
								onChange={(e) => setPool(!pool)}
							>
							</input>
							<label htmlFor="pool">Swimming Pool</label>
						</div>
						<div>
							<input
								type='checkbox'
								name='room_service'
								checked={room_service}
								value={room_service}
								onChange={(e) => setRoomService(!room_service)}
							>
							</input>
							<label htmlFor="room_service">Room Service</label>
						</div>
						<div>
							<input
								type='checkbox'
								name='fire_place'
								checked={fire_place}
								value={fire_place}
								onChange={(e) => setFirePlace(!fire_place)}
							>
							</input>
							<label htmlFor="fire_place">Fire Place</label>
						</div>
						<div>
							<input
								type='checkbox'
								name='wifi'
								checked={wifi}
								value={wifi}
								onChange={(e) => setWifi(!wifi)}
							>
							</input>
							<label htmlFor="wifi">Wifi</label>
						</div>
						<div>
							<input
								type='checkbox'
								name='workspace'
								checked={workspace}
								value={workspace}
								onChange={(e) => setWorkspace(!workspace)}
							>
							</input>
							<label htmlFor="workspace">Workspace</label>
						</div>
						<div>
							<input
								type='checkbox'
								name='water_sports'
								checked={water_sports}
								value={water_sports}
								onChange={(e) => setWaterSports(!water_sports)}
							>
							</input>
							<label htmlFor="water_sports">Water Activities</label>
						</div>
					</div>
					<button className="submitResortBtn" type="submit">
						Edit Resort
					</button>
					<button onClick={onCancel} className="cancelResortBtn">Cancel</button>
				</form>
			</div>
		</div>
	);
};

export default EditResort;
