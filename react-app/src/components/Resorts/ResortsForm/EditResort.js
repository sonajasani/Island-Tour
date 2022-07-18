import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { modifyResort, uploadImage, updateImage, deleteImg, getResort, getResorts } from "../../../store/resorts";
import ImageUploader from "../../Tools/ImageUploader";
import ImageUploading from "react-images-uploading";
import './ResortsForm.css'
import resortImg from '../../../images/resortImg.jpg'

const EditResort = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const { resortId } = useParams();
	const resort = useSelector((state) => state.resort.images ? state.resort : state.resort[resortId]);
	let imageArr = resort?.images;

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
	const [images, setImages] = useState([]);
	const [previousPk, setPreviousPk] = useState()
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


	// const editImages = (image, resort_id) => {
	// 	const imageData = {
	// 		image: image,
	// 		url: image.filename,
	// 		resort_id: resort_id,
	// 	}
	// 	dispatch(updateImage(imageData, image.id));
	// };

	useEffect(() => {
		const errors = [];
		if (name.length < 5) errors.push("Name must be at least 5 characters.");
		if (name.length > 50) errors.push("Name must be within 50 characters.");
		if (island.length < 3) errors.push("Island name must be at least 3 characters.");
		if (island.length > 50) errors.push("Island name must be within 50 characters.");
        if (country.length < 3) errors.push("Country name must be at least 3 characters.");
		if (country.length > 50 ) errors.push("Country name must be within 50 characters.")
		if (description.length < 10) errors.push("Description must be more than 10 characters.");
		if (description.length > 500) errors.push("Description must not be more than 500 characters.");
		if (price <= 10) errors.push("Price must be greater than 10.");
		if (price >= 9000) errors.push("Price must be less than 9000.");
		if (images.length > 10) errors.push('You can add maximum 10 images at a time.')


		setValidationErrors(errors);
	}, [
		name,
		island,
        country,
		description,
		price,
		previousPk,
		images
	]);

	const onCancel = () => {
		history.push(`/resorts/${resortId}`)
	}

	const onSubmit = async (e) => {
		e.preventDefault();

		setHasSubmitted(true);
		const imageFiles = images?.map((image) => image.file);
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
            water_sports,
			images
		};
		
		if (validationErrors.length <= 0) {
			await dispatch(modifyResort(data, resort.id));
			await addImages(imageFiles, resort.id)
			
			history.push(`/resorts/${resort.id}`)
			setValidationErrors([]);
			setHasSubmitted(false);
			await dispatch(getResorts());
			}
		};

	const onDeleteImage = (imageId) => async(e) => {
		e.preventDefault();
		await dispatch(deleteImg(imageId))
		await dispatch(getResort(resortId));
		imageArr = resort?.images;
	}
			


		
	return (
		<>
			<div className="formPage">
				<div className="leftSideImage">
					<h2>Edit your Resort !</h2>
					{ resort.images.length == 0 ?
						<img src={resortImg} alt="" />
					:
						<div>
							{imageArr && imageArr.map((image, idx) =>(
								<div key = {idx}>
									<img src={image.url} width="200px" />
									<button className="imageUploaderBtn-del"
										onClick={onDeleteImage(image.id)}
									><i class="fa fa-trash-o"></i></button>
								</div>
							))}
						</div>
					}
					</div>
				<div className="formGroup">
					<form onSubmit={onSubmit}>
					<h4 id='image-id-h4'>Note: You cannot add more than 10 images at a time.</h4>
						{hasSubmitted && validationErrors.length > 0 && (
							<div>
								{validationErrors.map((error, idx) => (
									<p className='auth-err-msg' key={idx}>{error}</p>
								))}
							</div>
						)}
						<div className="formGroupInput">
							<div className='input-field-form'>
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
										className="inputForm"
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
										className="inputForm"
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
										className="inputForm"
										name="price"
										type="number"
										placeholder="Price/Day"
										onChange={(e) => setPrice(e.target.value)}
										value={price}
									/>
								</div>
							</div>
						<div className='checkbox-field'>
							<h3>Amenities:</h3> 
								<div>
									<input
										type='checkbox'
										name='minibar'
										checked={minibar}
										value={minibar}
										onChange={(e) => setMinibar(!minibar)}
									>
									</input>
									<label className='checkbox' htmlFor="minibar">Minibar</label>
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
									<label className='checkbox' htmlFor="gym">Fitness Center</label>
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
									<label className='checkbox' htmlFor="spa">Spa</label>
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
									<label className='checkbox' htmlFor="jacuzzi">Jacuzzi</label>
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
									<label className='checkbox' htmlFor="pool">Swimming Pool</label>
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
									<label className='checkbox' htmlFor="room_service">Room Service</label>
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
									<label className='checkbox' htmlFor="fire_place">Fire Place</label>
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
									<label className='checkbox' htmlFor="wifi">Wifi</label>
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
									<label className='checkbox' htmlFor="workspace">Workspace</label>
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
									<label className='checkbox' htmlFor="water_sports">Water Activities</label>
								</div>
								<button className="submitResortBtn" type="submit">
									Edit Resort
								</button>
								<button onClick={onCancel} className="cancelResortBtn">Cancel</button>
							</div>
						</div>
					</form>
					<div className='form-btns'>
					</div>
					<ImageUploader images={images} setImages={setImages}  />
				</div>
			</div>
		</>
	);
};

export default EditResort;
