const LOAD_IMAGES = "images/LOAD_IMAGES";

const loadImages = (images) => ({
    type: LOAD_IMAGES,
    images
});


export const getImages = () => async dispatch => {
    const response = await fetch(`/api/images`);
    if (response.ok) {
        const images = await response.json();
        dispatch(loadImages(images))
    }
}



const imageReducer = (state = {}, action) => {
    switch (action.type) {
        case LOAD_IMAGES:
            const allImages = action.images
            return allImages
        default:
            return state;
    }
}

export default imageReducer;