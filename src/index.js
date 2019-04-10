import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './serviceWorker';
import App from './App'
import 'tachyons';

ReactDOM.render(
	<App />, document.getElementById('root'));

registerServiceWorker();