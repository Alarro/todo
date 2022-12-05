import React, { Component } from 'react';

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
  };

  createItem(label) {
    return {
      label,
      completed: false,
      edit: false,
      id: this.maxId++,
    };
  }

  addItem = (text) => {
    const newItem = this.createItem(text);

    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];

      return {
        todoData: newArr,
      };
    });
  };

  deleteItem = (id) => {
    const data = this.state.todoData
    let newData = [...data].filter(value => value.id !== id)
    console.log(newData)
    this.setState({todoData:newData})
  };

  deleteCompletedItem = (id) => {
    const data = this.state.todoData
    let newData = [...data].filter(el => el.id !== id && !el.completed)
    console.log(newData)
    this.setState({todoData:newData})
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
  }

  onToggleCompleted = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'completed'),
      };
    });
  };

  onToggleEdit = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'edit'),
      };
    });
  };

  render() {
    const { todoData, filter } = this.state;

    const doneCount = todoData.filter((el) => el.done).length;

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
