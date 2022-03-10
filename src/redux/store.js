import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import getReducers from './reducers/index';

const configureStore = () => {
	const middlewares = [thunk];
	const composeEnhancers =
		window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;
	const enhancers = composeEnhancers(applyMiddleware(...middlewares));
	return createStore(getReducers(), enhancers);
};

export default configureStore;
