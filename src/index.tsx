import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { initStores } from './store/index';
import * as serviceWorker from './serviceWorker';

initStores();

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

serviceWorker.unregister();
