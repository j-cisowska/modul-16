import React from 'react';
import Todo from './Todo';
import style from '../style/TodoList.css';


const TodoList = props => {
	return (
			<ul className={style.TodoList}> {
			props.data.map(item =>
			<Todo key={item.id} item={item} removeTodo={props.removeTodo} />
			)
		}
		</ul>
	);
}


export default TodoList;


