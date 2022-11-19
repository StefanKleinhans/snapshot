import axios from "axios";

const ACTIONS_TYPES = {
  GET_PHOTOS: "getPhotos",
};

export const FlickrReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.GET_PHOTOS:
      return { ...state, photos: action.payload.data.photos.photo };
    default:
      return state;
  }
};

const apiUrl = `https://www.flickr.com/services/rest/?page=1&format=json&nojsoncallback=1&api_key=${process.env.REACT_APP_API_KEY}`;

export const getPhotos = async (search) => {
  return {
    type: ACTIONS_TYPES.GET_PHOTOS,
    payload: await axios.get(
      `${apiUrl}&method=flickr.photos.search&text=${search}`
    ),
  };
};
