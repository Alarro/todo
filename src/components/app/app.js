import React, { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';

import './app.css';
import AppHeader from '../app-header/app-header';
import TaskList from '../task-list';
import AppFooter from '../app-footer';

export default class App extends Component {
  maxId = 10;

  state = {
    todoData: [
      this.createItem('Completed task'),
      this.createItem('Editing task'),
      this.createItem('Active task'),
    ],
    filter: 'all',
    min: '',
    sec: '',
  };

  createItem(label) {
    return {
      label,
      completed: false,
      edit: false,
      id: this.maxId++,
      created: new Date ()
    };
  }

  addItem = (text, min, sec) => {
    const newItem = this.createItem(text);

    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];

      return {
        todoData: newArr,
        min: min,
        sec: sec
      };
    });
  };

  editLabel = (curId, curLabel) => {
    const todo = this.state.todoData;
    let newToDo = [...todo].find(({ id }) => id === curId);
    newToDo.label = curLabel;
  };

  deleteItem = (id) => {
    const data = this.state.todoData;
    let newData = [...data].filter((value) => value.id !== id);
    console.log(newData);
    this.setState({ todoData: newData });
  };

  deleteCompletedItem = (id) => {
    const data = this.state.todoData;
    let newData = [...data].filter((el) => el.id !== id && !el.completed);
    console.log(newData);
    this.setState({ todoData: newData });
  };

  onFilterChange = (filter) => {
    this.setState({ filter });
  };

  filterItems(items, filter) {
    if (filter === 'all') {
      return items;
    } else if (filter === 'active') {
      return items.filter((item) => !item.completed);
    } else if (filter === 'completed') {
      return items.filter((item) => item.completed);
    }
  }

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  };

  onToggleEdit = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'edit'),
      };
    });
  };

  onToggleCompleted = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'completed'),
      };
    });
  };

  render() {
    const { todoData, filter } = this.state;

    const doneCount = todoData.filter((el) => el.completed).length;

    const todoCount = todoData.length - doneCount;

    const visibleItems = this.filterItems(todoData, filter);

    return (
      <div className="todoapp">
        <AppHeader filter={filter} onItemAdded={this.addItem} />
        <TaskList
          todos={visibleItems}
          onDeleted={this.deleteItem}
          onToggleCompleted={this.onToggleCompleted}
          onToggleEdit={this.onToggleEdit}
          editLabel={this.editLabel}
          created={this.created}
          min={this.state.min}
          sec={this.state.sec}
        />
        <AppFooter
          todoCount={todoCount}
          onFilterChange={this.onFilterChange}
          onDeletedCompleted={this.deleteCompletedItem}
        />
      </div>
    );
  }
}

App.propTypes = {
  label: PropTypes.string
}

App.defaultProps = {
  completed: false,
  edit: false
}