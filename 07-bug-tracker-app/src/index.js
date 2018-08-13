import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';

import registerServiceWorker from './registerServiceWorker';
import Spinner from './spinner';
import BugTracker from './bugTracker';
import appStore from './store';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

ReactDOM.render(
	<Provider store={appStore}>
		<Router>
			<div>
				<p>
				<Link to="/">Bug Tracker</Link>
				<br/>
				<Link to="/spinner">Spinner</Link>
				<br />
				</p>
			  <Route exact path="/" component={BugTracker} />
		      <Route path="/bugs" component={BugTracker} />
		      <Route path="/spinner" component={Spinner} />
		    </div> 
	    </Router>
	</Provider>
	, document.getElementById('root')
);


/*ReactDOM.render(
	<Provider store={appStore}>
		<div>
			<Spinner/>
			<hr/>
			<BugTracker/>
		</div>
	</Provider>,
	document.getElementById('root')
);*/
registerServiceWorker();