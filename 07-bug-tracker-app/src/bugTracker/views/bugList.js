import React, { Component } from 'react';
import BugItem from './bugItem';

class BugList extends Component {
	render(){
		let { bugs, removeClosed, toggle } = this.props;
		let bugItems = bugs.map((bug, index) => (
			<BugItem model={bug} key={index} toggle={toggle}/>
		));
		return(
			<section className="list">
				<ol>
					{bugItems}
				</ol>
				<input type="button" value="Remove Closed" onClick={removeClosed} />
			</section>
		)
	}
}
export default BugList;