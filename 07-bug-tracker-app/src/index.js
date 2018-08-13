import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';

import registerServiceWorker from './registerServiceWorker';
import Spinner from './spinner';
import BugTracker from './bugTracker';
import appStore from './store';


import axios from 'axios';

/*var p = axios.get('http://localhost:3030/bugs');
var p2 = p.then(function(response){
	return response.data;
});
p2.then(function(bugs){
	console.table(bugs);
});*/

axios.get('http://localhost:3030/bugs')
	.then(response => response.data)
	.then(bugs => console.table(bugs));

ReactDOM.render(
	<Provider store={appStore}>
		<div>
			<Spinner/>
			<hr/>
			<BugTracker/>
		</div>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
