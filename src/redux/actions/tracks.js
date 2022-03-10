import actionTypes from '@/redux/constants/tracks';

const tracksLoadStart = () => {
	return {
		type: actionTypes.TRACKS_LOAD_START,
	};
};

const trackLoadSuccess = (tracks) => ({
	type: actionTypes.TRACKS_LOAD_SUCCESS,
	payload: tracks,
});

const searchTracksSuccess = (result) => ({
	type: actionTypes.SEARCH_TRACKS_SUCCESS,
	payload: result,
});

const tracksLoadError = (errorMessage) => ({
	type: actionTypes.TRACKS_LOAD_ERROR,
	payload: errorMessage,
});

const deleteSearchTracks = () => ({
	type: actionTypes.DELETE_SEARCH_TRACKS,
});

const addFavoritesTracks = (payload) => ({
	type: actionTypes.ADD_FAVORITES_TRACKS,
	payload,
});

const removeFavoritesTracks = (id) => ({
	type: actionTypes.REMOVE_FAVORITES_TRACKS,
	payload: id,
});

const addPlaylistsTracks = (payload) => ({
	type: actionTypes.ADD_TO_PLAYLIST,
	payload: payload,
});

const removePlatlistTracks = () => ({
	type: actionTypes.REMOVE_ALL_PLAYLIST,
});

const nextTrack = (payload) => ({
	type: actionTypes.NEXT_TRACK,
	payload,
});

const previousTrack = (payload) => ({
	type: actionTypes.PREVIUS_TRACK,
	payload,
});

export default {
	tracksLoadStart,
	trackLoadSuccess,
	tracksLoadError,
	searchTracksSuccess,
	deleteSearchTracks,
	addFavoritesTracks,
	removeFavoritesTracks,
	addPlaylistsTracks,
	removePlatlistTracks,
	nextTrack,
	previousTrack
};
