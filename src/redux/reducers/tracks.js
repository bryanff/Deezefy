import actionTypes from '@/redux/constants/tracks';
import { getItem } from '@/Services/storage'
import { v4 as uuidv4 } from 'uuid';

const initialState = {
	player:{
		current:{
			preview:getItem('playlist')[0]
		},
	},
	playlist: getItem('playlist'),
	search: {
		query: '',
		next: '',
		prev: '',
		data: [],
		total: 0,
	},
	favorites: getItem('favorites'),
	isLoading: false,
	tracks: [],
	errorMessage: null,
};

const trackReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case actionTypes.TRACKS_LOAD_START:
			return {
				...state,
				isLoading: true,
				tracks: null,
				errorMessage: null,
			};
		case actionTypes.TRACKS_LOAD_SUCCESS:
			return {
				...state,
				isLoading: false,
				tracks: payload,
			};
		case actionTypes.TRACKS_LOAD_ERROR:
			return {
				...state,
				isLoading: false,
				errorMessage: payload,
			};
		case actionTypes.SEARCH_TRACKS_SUCCESS:
			return {
				...state,
				isLoading: false,
				search: {
					...payload,
				},
			};
		case actionTypes.DELETE_SEARCH_TRACKS:
			return {
				...state,
				search: {
					query: state.query,
					next: '',
					prev: '',
					data: [],
				},
			};
		case actionTypes.ADD_FAVORITES_TRACKS:
			return {
				...state,
				favorites: [
					...state.favorites,
					{
						...payload,
					//	id: uuidv4(),
					},
				],
			};
		case actionTypes.REMOVE_FAVORITES_TRACKS:
			return {
				...state,
				favorites: [state.favorites.filter((track) => track.id !== payload)],
			};
		case actionTypes.ADD_TO_PLAYLIST:
			return {
				...state,
				playlist: [
					...state.playlist,
					{
						...payload,
					},
				],
			};
		case actionTypes.REMOVE_ALL_PLAYLIST:
			return {
				...state,
				playlist: []
			};
		case actionTypes.NEXT_TRACK:
			return {
				...state,
				player: {
					current: payload
				}
			};
		case actionTypes.PREVIUS_TRACK:
			return {
				...state,
				player: {
					current: payload
				}
			};
		default:
			return state;
	}
};

export default trackReducer;
