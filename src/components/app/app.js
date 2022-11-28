import React from 'react';

import './app.css';
import AppHeader from '../app-header/app-header';
import TaskList from '../task-list';
import AppFooter from '../app-footer';

const App = () => {
  const todoData = [
    { label: 'Completed task', completed: true, id: 1, className: 'completed', edit: false },
    { label: 'Editing task', completed: false, id: 2, className: 'editing', edit: true },
    { label: 'Active task', completed: false, id: 3, className: 'active', edit: false },
  ];

  return (
    <div className="todoapp">
      <AppHeader />
      <TaskList todos={todoData} />
      <AppFooter />
    </div>
  );
};

export default App;
