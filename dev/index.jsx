import React from 'react';
import ReactDOM from 'react-dom';

class ToDoList extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			items: [{key:"weds1609",
					 text: "code"}]
		}
	}
	render(){
		const toDoListStyle = {
			marginLeft: 200,
			textAlign: "center"
		};

		return(
				<div style={toDoListStyle}>
				  <div>
					<h3>ToDoList</h3>
					<h4>fullstack!</h4>
					<form>
						<input type="text" placeholder="to do task"></input>
						<button type="submit">Add</button>
					</form>
				  </div>
				  <div id="content">
				  	<ToDoListItem item="item" />
				  </div>
				</div>
			);
	}
};

class ToDoListItem extends React.Component {
	render(){
		var toDoListItemStyle = {
			padding: 20,
			backgroundColor: "pink",
			border: "2px solid black",
			borderRadius: 20
		} 
		return(
			 <div style={toDoListItemStyle}>
			 	{this.props.item}
			 </div>
			);
	}
};

ReactDOM.render(<ToDoList />,document.querySelector('#container'));