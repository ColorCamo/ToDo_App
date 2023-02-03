import React, { useState } from "react";
import classes from "./AddTodo.module.css";
import Button from "../UI/Button";

import { useDispatch } from "react-redux";
import * as actionTypes from "../store/actions";

const AddTodo = () => {
	const [todo, setTodo] = useState({ title: "", task: "" });

	const dispatch = useDispatch();

	const changeHandler = (e) => {
		const { name, value } = e.target;

		setTodo((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const addHandler = (e) => {
		e.preventDefault();
		console.log(todo);
		dispatch({
			type: actionTypes.ADD_TODO,
			payload: todo,
		});
	};
  return (
    <form onSubmit={addHandler} className={classes.input}>
      <div>
        <label>Title</label>
        <input type="text" onChange={changeHandler} />
      </div>
      <div>
        <label>Task</label>
        <input type="text" onChange={changeHandler} />
      </div>
      <Button>Add Task</Button>
    </form>
  );
};

export default AddTodo;
