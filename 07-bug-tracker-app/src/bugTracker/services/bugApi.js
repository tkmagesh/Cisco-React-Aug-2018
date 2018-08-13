import axios from 'axios';

let baseUrl = 'http://localhost:3030/bugs';

function getAll(){
	return axios
		.get(baseUrl)
		.then(response => response.data);
}

function addNew(bugData){
	return axios
		.post(baseUrl, bugData)
		.then(response => response.data);
}

function update(bugData){
	return axios
		.put(`${baseUrl}/${bugData.id}`, bugData)
		.then(response => response.data);
}
function remove(bugData){
	return axios
		.delete(`${baseUrl}/${bugData.id}`, bugData)
		.then(response => response.data);
}

let bugApi = { getAll, addNew, update, remove };

export default bugApi;