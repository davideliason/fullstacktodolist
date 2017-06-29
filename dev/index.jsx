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

		const formInput = {
			padding: 20,
			borderRadius: 20
		};

		return(
				<div style={toDoListStyle}>
				  <div>
					<h3>ToDoList</h3>
					<h4>fullstack!</h4>

				    {/* invoke binded method */}
					<form onSubmit={this.addItem}>
					    {/* use ref to capture this element for action */}
						<input style={formInput} ref={(a) => this._inputElement =a} placeholder="enter task"></input>
						<button style={formInput} type="submit">Add</button>
					</form>
				  </div>
				  <div id="content">
				  	<ToDoListItem items={this.state.items} />
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
			borderRadius: 20,
			listStyleType: "none"
		} 

	    {/* pass items state array from parent  */}
		var toDoItems = this.props.items;
   
        {/* create function to invoke using map */}
		function listOutItem(item){
				return <li key={item.key}>{item.text}</li>
			}
	    {/* create array populated with nested item components */}		
		var itemList = toDoItems.map(listOutItem);

        {/* spit out all those nested but ready components, they mirror state */ }
		return(
				<ul style={toDoListItemStyle}>
					{itemList}
				</ul>

			);
	}
};

ReactDOM.render(<ToDoList />,document.querySelector('#container'));