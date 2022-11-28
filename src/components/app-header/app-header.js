import React from "react";

import './app-header.css';
import NewTaskForm from "../new-task-form";

const AppHeader = () => {
    return (
        <header className='app-header'>
        <h1 className="app-header-title">todos</h1>
        <NewTaskForm />
        </header>

    )
}

export default AppHeader;
