import bugApi from '../services/bugApi';

export function toggle(bugToToggle){
	return function(dispatch){
		let toggledBugData = { ...bugToToggle, isClosed : !bugToToggle.isClosed};
		bugApi
			.update(toggledBugData)
			.then(toggledBug => {
				let action = { type : 'UPDATE' , payload : {oldBug : bugToToggle, newBug : toggledBug}};
				dispatch(action);
			});
	}
}