import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addResort, getResorts } from "../../store/resorts";
import { uploadImage } from "../../store/resorts";
import UploadImage from "../Other/UploadImage"


const CreateResort = () => {
	const history = useHistory();
	const dispatch = useDispatch();

	const continents = ["Asia", "Africa", "Antartica", "Europe", "North America", "Oceania", "South America"];

    const [name, setName] = useState("");
    const [island, setIsland] = useState("");
    const [country, setCountry] = useState("");
    const [continent, setContinent] = useState("Asia");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [minibar, setMinibar] = useState(false);
    const [gym, setGym] = useState(false);
    const [spa, setSpa] = useState(false);
    const [jacuzzi, setJacuzzi] = useState(false);
    const [pool, setPool] = useState(false);
    const [room_service, setRoomService] = useState(false);
    const [fire_place, setFirePlace] = useState(false);
    const [wifi, setWifi] = useState(false);
    const [workspace, setWorkspace] = useState(false);
    const [water_sports, setWaterSports] = useState(false);
	const [images, setImages] = useState([]);
	const [validationErrors, setValidationErrors] = useState([]);
	const [hasSubmitted, setHasSubmitted] = useState(false);

	const addImages = (images, resort_id) => {
		images.forEach(async (image) => {
			const imageData = {
				image: image,
				url: image.filename,
				resort_id: resort_id,
			};
			await dispatch(uploadImage(imageData));
		});
	};

	useEffect(() => {
		const errors = [];
		if (name.length < 5) errors.push("Must provide a valid name.");
		if (island.length < 2) errors.push("Island name must be at least 5 characters.");
        if (country.length < 3) errors.push("Country name must be at least 3 characters.");
		if (description.length < 10)
			errors.push("Description must be more than 10 characters.");
		if (price <= 10) errors.push("Price must be greater than 10.");
		if (images.length < 4) errors.push('Please submit more than three photos')

		setValidationErrors(errors);
	}, [
		name,
		island,
        country,
		description,
		price
	]);

	const onSubmit = async (e) => {
		e.preventDefault();
		setHasSubmitted(true);
		const imageFiles = images.map((image) => image.file);
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
			const resort = await dispatch(addResort(data));
			const resort_id = resort.id;
			await addImages(imageFiles, resort_id);
			history.push(`/resorts/${resort_id}`);
			setValidationErrors([]);
			setHasSubmitted(false);
			await dispatch(getResorts());
		}
	};

	return (
		<div>
			<div>
				<h2>Do you own a Resort? Want to Share ?</h2>
				<img
					className="imageFormLeft"
					src="https://media.istockphoto.com/photos/water-villas-in-hotel-resort-maldives-picture-id519691168?k=20&m=519691168&s=612x612&w=0&h=zCwQOV7xfc0Ewj_ilJxzxueA7uvw6tXF8p87IyoyN0o="
				/>
			</div>
			<div className="resort-form-div">
				<form onSubmit={onSubmit}>
					{hasSubmitted && validationErrors.length > 0 && (
						<div>
							{validationErrors.map((error, idx) => (
								<p  key={idx}>{error}</p>
							))}
						</div>
					)}
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
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
					<div >
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
					<button type="submit">Add Resort</button>
				</form>
                <div>
                    <UploadImage images={images} setImages={setImages} />
                </div>
			</div>
		</div>
	);
};

export default CreateResort;
