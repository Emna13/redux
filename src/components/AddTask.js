import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ".././App.css";
import { add } from "../js/actionTask/actionTask";

const AddTask = ({handleFilter,filter}) => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTask(e.target.value);
  };
  const addNewTask = () => {
    if (task) {
      dispatch(add({ description: task, iDone: false, id: Math.random() }))
      setTask("");
    } else {
      alert("Write a new task");
    }
  };
  
  return (
    <div>
      <div className="list">
        <h1>To Do List</h1>
        <input
          className="input"
          type="text"
          placeholder="Enter a new task"
          onChange={handleChange}
          value={task}
        />
        <span>
          <button className="boutona" onClick={addNewTask}>
            Add Task
          </button>
          <button className="boutonb" onClick={handleFilter}>{filter? 'All Tasks': 'Done Tasks'}</button>
        </span>
      </div>
    </div>
  );
};

export default AddTask;
