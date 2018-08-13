import bugApi from '../services/bugApi';

export function addNew(bugName){
	return function(dispatch){
		let newBugData = {
			id : 0,
			name : bugName,
			isClosed : false,
			createdAt : new Date()
		};
		bugApi
			.addNew(newBugData)
			.then(newBug => {
				let action = { type : 'ADD_NEW', payload : newBug };
				dispatch(action);			
			});
	}	
}