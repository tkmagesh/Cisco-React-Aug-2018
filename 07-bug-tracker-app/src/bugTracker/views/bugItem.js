import React, { Component } from 'react';

class BugItem extends Component{
	onBugNameClick = () => {
		let { model , toggle } = this.props;
		toggle(model);
	}
	render(){
		let bug = this.props.model,
			bugStyle = 'bugname ' + (bug.isClosed ? 'closed' : '');
		return(
			<li>
				<span className={bugStyle} onClick={this.onBugNameClick}>
					{bug.name}
				</span>
				<div className="datetime">{bug.createdAt.toString()}</div>
			</li>
		)
	}
}
export default BugItem;