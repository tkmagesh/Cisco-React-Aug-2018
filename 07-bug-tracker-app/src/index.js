import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';

import registerServiceWorker from './registerServiceWorker';
import Spinner from './spinner';
import BugTracker from './bugTracker';
import appStore from './store';

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
