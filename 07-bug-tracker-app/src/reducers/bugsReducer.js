let initialBugState = {
	bugs : [],
	sortBy : 'name',
	isDescending : false
};

function bugsReducer(currentState = initialBugState, action){
	if (action.type === 'ADD_NEW'){
		let newBug = action.payload;
		let newState = { ...currentState, bugs : [...currentState.bugs, newBug] };
		return newState;
	}
	if (action.type === 'UPDATE'){
		let {oldBug, newBug} = action.payload;
		let newState = { ...currentState , bugs : currentState.bugs.map(bug => bug === oldBug ? newBug : bug) };
		return newState;
	}
	if (action.type === 'REMOVE'){
		let closedBugs = action.payload;
		let newState = { ...currentState , bugs : currentState.bugs.filter(bug => closedBugs.indexOf(bug) === -1) };
		return newState;
	}
	if (action.type === 'SORT'){
		let { sortBy, isDescending } = action.payload;
		return {...currentState, sortBy : sortBy, isDescending : isDescending };
	}
	return currentState;
}

export default bugsReducer;