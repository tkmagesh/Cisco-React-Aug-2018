import bugApi from '../services/bugApi';

export function removeClosed(){
	return function(dispatch, getState){
		let closedBugs = getState().bugsData.bugs.filter(bug => bug.isClosed);
		closedBugs
		.forEach(closedBug => {
			bugApi
				.remove(closedBug)
				.then(() => {
					let action = { type : 'REMOVE', payload : closedBug};
					dispatch(action);
				})
		})
	}
	
}