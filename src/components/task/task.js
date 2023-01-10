import React, { Component } from "react";
import EditTask from "../edit-task/edit-task";
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';

import Timer from "../timer";

import "./task.css";

export default class Task extends Component {

  static defaultProps = {
    label: 'Default content (defaultProps)',
  };
  static propTypes = {
    label: PropTypes.string,
  };

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
      created,
      min,
      sec
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
          <span className="created">{label}</span>
          <Timer min={min} sec={sec} />
          <span className="description">{formatDistanceToNow(created)}</span>
        </label>
        <button className="icon icon-edit" onClick={onToggleEdit}></button>
        <button className="icon icon-destroy" onClick={onDeleted}></button>
      </div>
    );
  }
}
