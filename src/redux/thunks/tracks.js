import actions from '../actions/tracks';
import * as trackService from '@/Services/tracks';
import * as StorageService from '@/Services/storage';

export const searchTracksAsync = (query = '') => {
	return async (dispatch, getState) => {
		dispatch(actions.tracksLoadStart());
		const currentState = getState().tracks.search;
		let newQuery;
		if (query !== currentState.query && query != '') {
			dispatch(actions.deleteSearchTracks());
			newQuery = query;
		} else {
			newQuery = currentState.query;
		}
		if (!newQuery) return;
		const url = !currentState.next ? currentState.next : null;
		trackService
			.search(url, newQuery)
			.then(({ data }) => {
				console.log('response', data);
				data.data = [...getState().tracks.search.data, ...data.data];
				data.query = newQuery;
				dispatch(actions.searchTracksSuccess(data));
			})
			.catch((error) => {
				dispatch(actions.tracksLoadStart(error.message));
			});
	};
};

export const addFavoritesTracks= (track) =>{
	return async (dispatch, getState) => {
		try {
			console.log('track',track)
			StorageService.setItem('favorites', track);
			dispatch(actions.addFavoritesTracks(track));
		}catch (error){
			console.log('error');
			console.error(error);
		}
	}
}

export const addPlaylistsTracks= (track) =>{
	return async (dispatch, getState) => {
		try {
			StorageService.setItem('playlist', track);
			dispatch(actions.addPlaylistsTracks(track));
		}catch (error){
			console.log('error');
			console.error(error);
		}
	}
}

export const playOneMusic = (track) =>{
	return async (dispatch, getState) => {
		try {
			dispatch(actions.removePlatlistTracks());
			StorageService.setItem('playlist', track);
			dispatch(actions.addPlaylistsTracks(track));
		}catch (error){
			console.error(error);
		}
	}
}
