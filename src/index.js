import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';

const rootElement = document.getElementById('root');
render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	rootElement
);

if (module.hot) {
	module.hot.accept();
}
