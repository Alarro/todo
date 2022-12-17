import React from "react";

import "./app-header.css";
import NewTaskForm from "../new-task-form";

const AppHeader = (props) => {
  return (
    <header className="app-header">
      <h1 className="app-header-title">todos</h1>
      <NewTaskForm filter={props.filter} onItemAdded={props.onItemAdded} />
    </header>
  );
};

export default AppHeader;
