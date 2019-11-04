import React, { Component } from 'react';
import './App.css';
import PostForm from './components/PostForm';
import AllPost from './components/AllPost';

class App extends Component {
  render() {
    return (
      <div className="App uk-container">
        <div className="navbar">
          <h2 className="uk-text-center ">Post It</h2>
        </div>
        <div class="uk-child-width-expand@s uk-text-center" uk-grid="true">
          <div>
            <PostForm />

          </div>
          <div>
            <AllPost />

          </div>

        </div>
      </div>
    );
  }
}

export default App;
