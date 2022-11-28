import React from "react";

import './new-task-form.css'

const NewTaskForm = () => {
    return (
        <input type='text'
        placeholder="What needs to be done?"
        className="new-todo" />
    )
}

export default NewTaskForm;