import React, { Component } from "react";

class CreateProject extends Component {
  state = {};
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    console.log(this.state);
    e.preventDefault();
  };
  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create Project</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Project Content</label>
            <textarea
              id="content"
              onChange={this.handleChange}
              className="materialize-textarea"
            />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateProject;
