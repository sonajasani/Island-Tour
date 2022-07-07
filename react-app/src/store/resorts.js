const GET_ALL_RESORTS = "/resortss/getAllResorts";
const GET_RESORT = "/resorts/getResort";
const CREATE_RESORT = "/resorts/create";
const EDIT_RESORT = "/resorts/edit";
const DELETE_RESORT = "/resorts/delete";

const loadResorts = (spots) => ({
	type: GET_ALL_RESORTS,
	resorts,
});

const loadResort = (resort) => ({
	type: GET_RESORT,
	resort,
});

const createResort = (resort) => ({
	type: CREATE_RESORT,
	resort,
});

const editResort = (resort) => ({
	type: EDIT_RESORT,
	resort,
});

const deleteResort = (resort) => ({
	type: DELETE_RESORT,
	resort,
});

export const getResorts = () => async (dispatch) => {
	const response = await fetch("/api/resorts");

	if (response.ok) {
		const resortList = await response.json();
		dispatch(loadSpots(resortList));
		return resortList;
	}
};

export const getResort = (id) => async (dispatch) => {
	const response = await fetch(`/api/resorts/${id}`);

	if (response.ok) {
		const resort = await response.json();
		dispatch(loadResort(resort));
		return resort;
	}
};



export const addResort = (data) => async (dispatch) => {
	const response = await fetch("/api/resorts/new", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});

	if (response.ok) {
		const data = await response.json();
		dispatch(createResort(data));

		return data;
	} else if (response.status < 500) {
		const data = await response.json();
		if (data.errors) {
			return data.errors;
		}
	} else {
		return ["An error occurred. Please try again."];
	}
};



export const modifyResort = (data) => async (dispatch) => {
	const response = await fetch(`/api/resorts/${data.resortId}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});

	if (response.ok) {
		const data = await response.json();
		dispatch(editResort(data));
		return data;
	} else if (response.status < 500) {
		const data = await response.json();
		if (data.errors) {
			return data.errors;
		}
	} else {
		return ["An error occurred. Please try again."];
	}
};

export const eraseResort = (id) => async (dispatch) => {
	const response = await fetch(`/api/resorts/${id}`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
		},
	});

	if (response.ok) {
		dispatch(deleteResort(id));
	}
};

//AWS upload images
export const uploadImage = (imageData) => async dispatch => {
	const { url, spot_id, image } = imageData;

	const formData = new FormData();
	formData.append("url", url);
	formData.append("resort_id", resort_id);
	formData.append("image", image);

	const res = await fetch('/api/images/upload', {
		method: "POST",
		body: formData,
	});

	if (res.ok) {
		return await res.json();
	}

}


const resortsReducer = (state = {}, action) => {
	switch (action.type) {
		case GET_ALL_RESORTS:
			const allResorts = action.resorts;
			return allResorts;
		case GET_RESORT:
			const singleResort = action.resort;
			return singleResort;
		case CREATE_RESORT:
			return { ...state, [action.resort.id]: action.resort };
		case EDIT_RESORT:
			return { ...state, [action.resort.id]: action.resort };
		case DELETE_RESORT:
			let newState = { ...state };
			delete newState[action.resort.id];
			return newState;
		default:
			return state;
	}
};

export default resortsReducer;
