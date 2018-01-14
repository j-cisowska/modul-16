import React from 'react';
import style from '../style/Title.css';


const Title = props => (
	<div className={style.Title}>
		<h1>{props.title}</h1>
		<p>Number of tasks: {props.add}</p>
	</div>
);

export default Title;