import React from 'react';
import ReactDOM from 'react-dom';

class ToDoList extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			items: [{key:"weds1609",
					 text: "code"}]
		}

		this.addItem = this.addItem.bind(this);
	}

	addItem(e){
		e.preventDefault();

		var itemsArray = this.state.items;
		itemsArray.push({
			key: Date.now(),
			text: this._inputElement.value
		});
		this.setState({
			items: itemsArray
		});
		this._inputElement.value="";

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
					<form onSubmit={this.addItem}>
						<input ref={(a) => this._inputElement =a} placeholder="enter task"></input>
						<button type="submit">Add</button>
					</form>
				  </div>
				  <div id="content">
				  	<ToDoListItem item={this.state.items[0].text} />
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