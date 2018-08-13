import bugApi from '../services/bugApi';

/*var p = axios.get('http://localhost:3030/bugs');
var p2 = p.then(function(response){
	return response.data;
});
p2.then(function(bugs){
	console.table(bugs);
});*/

/*

*/
/*function getBugs(){
	return [
		{id : 1, name : 'Server communication failure', isClosed : false, createdAt : new Date()},
		{id : 2, name : 'Application not responding', isClosed : true, createdAt : new Date()},
	]
}*/


export function load(){
	return function(dispatch){
		bugApi
			.getAll()
			.then(bugs => {
				let action = { type : 'LOADED', payload : bugs};
				dispatch(action);
			});
	}	
}