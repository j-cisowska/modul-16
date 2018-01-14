import React from 'react';
import style from '../style/TodoForm.css';

class TodoForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            taskName: ''
		};
	this.changeTaskName = this.changeTaskName.bind(this);
}
	changeTaskName(event) {
        this.setState({
            taskName: event.target.value
        });
}
	render() {
		return (
			<form className={style.TodoForm}>
					<input className={style.TodoInput} type={"text"} value={this.state.taskName}  onChange={this.changeTaskName} placeholder = "Add new task here"/>
					<button className={style.AddButton} type={"button"} onClick={() => this.props.addTodo(this.state.taskName)}>Add</button>
			</form>
		)
	};
}	
export default TodoForm;

