import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css'

class Edit extends Component {
  handleEdit = (e) => {
    e.preventDefault();
    const newTitle = this.getTitle.value;
    const newMessage = this.getMessage.value;
    const data = {
      newTitle,
      newMessage
    }
    this.props.dispatch({
      type: 'UPDATE',
      id: this.props.post.id, data: data
    })
  }
  render() {
    return (
      <div key={this.props.post.id} className="post">
        <form className="form" onSubmit={this.handleEdit}>
          <input
            class="uk-input"
            required
            type="text"
            ref={(input) => this.getTitle = input}
            defaultValue={this.props.post.title}
            placeholder="Enter Post Title" /><br /><br />
          <textarea
            class="uk-range"
            required
            rows="5"
            ref={(input) => this.getMessage = input}
            defaultValue={this.props.post.message}
            cols="28"
            placeholder="Enter Post" /><br /><br />
          <button class="uk-button uk-button-primary">Update</button>
        </form>
      </div>
    );
  }
}
export default connect()(Edit);