import React from "react";

import Task from "../task";
import "./task-list.css";

const TaskList = ({
  todos,
  onDeleted,
  onToggleCompleted,
  onToggleEdit,
  editLabel,
  checked
}) => {
  const elements = todos.map((item) => {
    const { id, className, ...itemProps } = item;
    return (
      <li key={id} className="task">
        <Task
          {...itemProps}
          id={id}
          onDeleted={() => onDeleted(id)}
          onToggleCompleted={() => onToggleCompleted(id)}
          onToggleEdit={() => onToggleEdit(id)}
          editLabel={editLabel}
        />
      </li>
    );
  });

  return (
    <section className="main">
      <ul className="todo-list">{elements}</ul>
    </section>
  );
};

export default TaskList;
