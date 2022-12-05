import React, { Component } from 'react';
import EditTask from '../edit-task/edit-task';

import './task.css';

export default class Task extends Component {


  render() {

    const { label, onDeleted,
            onToggleCompleted,
            onToggleEdit, 
            completed, edit} = this.props;

    let classNames = 'view'

    if (completed) {
      classNames+= ' completed'
    }

    if (edit) {
        classNames+= ' edit'
    }

     return ( edit ? <EditTask/> :
      <div className={classNames}>
        <input
        className="toggle"
         type="checkbox" 
         onClick={onToggleCompleted}/>
        <label className="task-label">
          <span className="description">{label}</span>
          <span className="created">created 17 seconds ago</span>
        </label>
        <button className="icon icon-edit"
        onClick={onToggleEdit}></button>
        <button className="icon icon-destroy"
        onClick={onDeleted}></button>
      </div>
    );
  }
}
