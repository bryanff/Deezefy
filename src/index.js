import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import App from './App.jsx';

const rootElement = document.getElementById('root');
const store = configureStore();

render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	rootElement
);

if (module.hot) {
	module.hot.accept();
}
