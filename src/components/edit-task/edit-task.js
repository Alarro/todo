import React, { Component } from "react";

export default class EditTask extends Component {
  state = {
    label: this.props.label,
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.label !== '') {
    console.log(this.state.label);
    this.props.onToggleEdit(this.props.id);
    this.props.editLabel(this.props.id, this.state.label);
    }
  };

  render() {
    console.log(this.props.label);
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          className="edit"
          onChange={this.onLabelChange}
          value={this.state.label}
        />
      </form>
    );
  }
}
