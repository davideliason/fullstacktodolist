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
			backgroundColor: "yellow",
			width: 250,
			border: "1px solid black",
			marginLeft: 200,
			marginTop: 50,
			textAlign: "center"
		};

		return(
				<div style={toDoListStyle}>
				  <div>
					<h3>ToDoList</h3>
					<h4>fullstack!</h4>
				  </div>
				  <div id="content">

				  </div>
				</div>
			);
	}
};

ReactDOM.render(<ToDoList />,document.querySelector('#container'));