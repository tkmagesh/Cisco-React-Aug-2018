let initialBugState = {
	bugs : [],
	sortBy : 'name',
	isDescending : false
};

function bugsReducer(currentState = initialBugState, action){
	if (action.type === 'LOADED'){
		return { ...currentState, bugs : action.payload };
	}
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
		let closedBug = action.payload;
		let newState = { ...currentState , bugs : currentState.bugs.filter(bug => bug.id !== closedBug.id) };
		return newState;
	}
	if (action.type === 'SORT'){
		let { sortBy, isDescending } = action.payload;
		return {...currentState, sortBy : sortBy, isDescending : isDescending };
	}
	return currentState;
}

export default bugsReducer;