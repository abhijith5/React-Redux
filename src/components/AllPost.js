import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import EditComponent from './Edit';
import '../App.css'

class AllPost extends Component {
  render() {
    return (
      <div>
        <h1 className="">All Posts</h1>
        <div>
          <div>
            {this.props.posts.map((post) => (
              <div key={post.id} className="uk-card uk-card-default uk-card-basic uk-padding" style={{ marginBottom: "20px" }}>
                {post.editing ? <EditComponent post={post} key={post.id} /> : <Post post={post}
                  key={post.id} />}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state
  }
}
export default connect(mapStateToProps)(AllPost);
