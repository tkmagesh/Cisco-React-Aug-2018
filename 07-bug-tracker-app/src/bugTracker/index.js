import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import BugStats from './views/bugStats';
import BugSort from './views/bugSort';
import BugEdit from './views/bugEdit';
import BugList from './views/bugList';

import * as bugActionCreators from './actions';

class BugTracker extends Component{
	render(){
		let { bugs, addNew, toggle, removeClosed, sort } = this.props;
		return(
			<div>
				<BugStats bugs={bugs} />
				<BugSort bugs={bugs} sort={sort} />
				<BugEdit addNew={addNew} />
				<BugList {...{bugs, toggle, removeClosed}} />
			</div>
		)
	}
}

function getComparerFor(attrName){
	return function(item1, item2){
		if ( item1[attrName] < item2[attrName] ) return -1;
		if ( item1[attrName] > item2[attrName] ) return 1;
		return 0;
	}
}

function getDescendingComparer(comparer){
	return function(item1, item2){
		return comparer(item1, item2) * -1;
	}
}


function mapStateToBugTrackerProps(storeState){
	let { bugs, sortBy, isDescending } = storeState.bugsData;
	let comparer = getComparerFor(sortBy);
	if (isDescending)
		comparer = getDescendingComparer(comparer);
	bugs.sort(comparer);
	return { bugs : [ ...bugs ]};
}
function mapDispatchToBugTrackerProps(dispatch){
	let bugActions = bindActionCreators(bugActionCreators, dispatch);
	return bugActions;
}

export default connect(
	mapStateToBugTrackerProps,
	mapDispatchToBugTrackerProps
)(BugTracker);

