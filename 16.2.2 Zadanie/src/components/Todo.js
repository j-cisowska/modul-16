import React from 'react';
import style from '../style/Todo.css';

const Todo = (props) => {
	return (
        <li className = {style.Todo}> 
			{props.item.text}
			<button className={style.DeleteButton} onClick={() => props.removeTodo(props.item.id)}>Delete</button>
		</li>
	);
} 


export default Todo; 