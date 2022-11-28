import React from "react";

import Task from '../task';
import './task-list.css';

const TaskList = ( {todos} ) => {

    return (
        <section className='main'>
            <ul className='todo-list'>
        {todos.map((item) => {

        return (
            <li key={item.id} className={item.className}>
                <Task item={item}/>
            </li>
        );
    })}
    </ul>
    </section>
)};

export default TaskList;