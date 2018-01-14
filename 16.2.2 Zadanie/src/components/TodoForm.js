import React from 'react';
import style from '../style/TodoForm.css';

class TodoForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            taskTitle: ''
		};
	this.changeTaskTitle = this.changeTaskTitle.bind(this);
}
	changeTaskTitle(event) {
        this.setState({
            taskTitle: event.target.value
        });
}
	render() {
		return (
			<form className={style.TodoForm}>
					<input className={style.TodoInput} type={"text"} value={this.state.taskTitle}  onChange={this.changeTaskTitle} placeholder = "Add new task here"/>
					<button className={style.AddButton} type={"button"} onClick={() => this.props.addTodo(this.state.taskTitle)}>Add</button>
			</form>
		)
	};
}	
export default TodoForm;

