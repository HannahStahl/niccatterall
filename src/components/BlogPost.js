import React, { Component } from 'react';
// import { Storage } from "aws-amplify";
import '../styles/BlogPost.css';

class BlogPost extends Component {
  // async componentDidMount() {
  //   this.props.blogPost.imageURL = await Storage.vault.get(this.props.blogPost.image);
  // }

  render() {
    return (
      <div className="blog-post">
        {/* <img className="blog-post-image" src={this.props.blogPost.imageURL} width="300px" height="200px" alt="Blog" /> */}
        <h4>{this.props.blogPost.title}</h4>
      </div>
    );
  }
}

export default BlogPost;
