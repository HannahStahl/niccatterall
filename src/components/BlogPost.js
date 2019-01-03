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
        <img
          className="blog-post-image"
          width="300px"
          height="200px"
          src={require("./temp-photo.jpg")}
          alt="Blog Post"
        />
        <h4>{this.props.blogPost.title}</h4>
        <div
          dangerouslySetInnerHTML={{ __html: this.props.blogPost.content }}
          className="blog-post-preview"
        />
      </div>
    );
  }
}

export default BlogPost;
