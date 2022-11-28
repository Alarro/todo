import React from "react";
import ActiveTask from "../active-task";
import EditTask from "../edit-task";
import CompletedTask from "../completed-task";

import './task.css';


const Task = ({item: {edit, label, completed}}) => {
    
 return edit ? <EditTask label={label}/> : completed ? <ActiveTask label={label}/> : <CompletedTask label={label}/>

};


export default Task;