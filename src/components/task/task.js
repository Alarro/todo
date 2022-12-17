import React, { Component } from "react";
import EditTask from "../edit-task/edit-task";

import "./task.css";

export default class Task extends Component {
  render() {
    const {
      label,
      id,
      onDeleted,
      onToggleCompleted,
      onToggleEdit,
      editLabel,
      completed,
      edit,
      createdDate
    } = this.props;
    let classNames = "view";

    if (completed) {
      classNames += " completed";
    }

    if (edit) {
      classNames += " edit";
    }

    return edit ? (
      <EditTask
        onToggleEdit={onToggleEdit}
        editLabel={editLabel}
        label={label}
        id={id}
      />
    ) : (
      <div className={classNames}>
        <input className="toggle" type="checkbox" onChange={onToggleCompleted} checked={completed} />
        <label className="task-label">
          <span className="description">{label}</span>
          <span className="created">created {createdDate} ago</span>
        </label>
        <button className="icon icon-edit" onClick={onToggleEdit}></button>
        <button className="icon icon-destroy" onClick={onDeleted}></button>
      </div>
    );
  }
}
