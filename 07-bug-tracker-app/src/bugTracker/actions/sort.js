export function sort(bugs, sortBy='name', isDescending = false){
	let action = { type : 'SORT', payload : {sortBy , isDescending}};
	return action;
}