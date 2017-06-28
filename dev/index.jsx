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
			marginLeft: 200
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

				  </div>
				</div>
			);
	}
};

ReactDOM.render(<ToDoList />,document.querySelector('#container'));