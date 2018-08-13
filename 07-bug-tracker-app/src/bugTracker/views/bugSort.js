import React, { Component } from 'react';

class BugSort extends Component {
	state = { sortOrder : '', sortDescending : false };
	onSortByChange = (attrName) => {
		this.setState({sortOrder : attrName});
		this.props.sort(this.props.bugs, attrName, this.state.sortDescending);
	}

	onSortDescendingChange = (isDescending) => {
		this.setState({sortDescending : isDescending});
		this.props.sort(this.props.bugs, this.state.sortOrder, isDescending);
	}
	render(){
		return(
			<section className="sort">
				<label htmlFor="">Order By :</label>
				<select onChange={evt => this.onSortByChange(evt.target.value)}>
					<option value="name">Name</option>
					<option value="isClosed">Status</option>
					<option value="createdAt">Created</option>
				</select>
				<label htmlFor="">Descending ? :</label>
				<input type="checkbox" onChange={evt => this.onSortDescendingChange(evt.target.checked)}/>
			</section>
		)
	}
}
export default BugSort;