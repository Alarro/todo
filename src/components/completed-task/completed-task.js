import React from "react";

const CompletedTask = ({label}) => {
    return (
        <div className="view">
        <input className="toggle" type="checkbox"/>
        <label className="task-label">
          <span className="description">{label}</span>
          <span className="created">created 17 seconds ago</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>
    )
};

export default CompletedTask;