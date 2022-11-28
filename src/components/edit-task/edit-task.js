import React from "react";

const EditTask = ({label}) => {
    return (

        <><div className="view">
            <input className="toggle" type="checkbox" />
            <label className="task-label">
                <span className="description">{label}</span>
                <span className="created">created 17 seconds ago</span>
            </label>
            <button className="icon icon-edit"></button>
            <button className="icon icon-destroy"></button>
        </div><input type="text" className="edit" value="Editing task" /></>
        )
}

export default EditTask;