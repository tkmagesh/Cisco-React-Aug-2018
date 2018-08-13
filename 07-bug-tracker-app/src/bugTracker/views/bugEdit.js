import React, { Component } from 'react';

class BugEdit extends Component{
	txtNewBugNameRef = React.createRef();
	onCreateNewClick = () => {
		let bugName = this.txtNewBugNameRef.current.value;
		this.props.addNew(bugName);
	}
	render(){
		return(
			<section className="edit">
				<label htmlFor="">Bug Name :</label>
				<input type="text" ref={this.txtNewBugNameRef}/>
				<input type="button" value="Create New" onClick={this.onCreateNewClick} />
			</section>
		)
	}
}
export default BugEdit;