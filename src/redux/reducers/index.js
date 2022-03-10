import { combineReducers } from 'redux';
import trackReducer from './tracks';

const reducers = () =>
	combineReducers({
		tracks: trackReducer,
	});
export default reducers;
