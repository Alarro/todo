import React from 'react';

import './app-footer.css';
import TasksFilter from '../tasks-filter';

const AppFooter = (props) => {

    return (
    <footer className="footer">
    <span className="todo-count">{props.todoCount} item left</span>
    <TasksFilter onFilterChange={props.onFilterChange} />
    <button className="clear-completed"
    onClick={props.onDeletedCompleted}>Clear completed</button>
    </footer>
    )
}

export default AppFooter;