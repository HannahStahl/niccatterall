import React, { Component } from 'react';
import config from '../config.js';
import '../styles/Blog.css';
import BlogPost from './BlogPost';
 
class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogPosts: []
    };
  }

  getBlogPosts() {
    var req = new XMLHttpRequest();
    req.open("GET", config.getNicBlogPostsURL, true);
    req.onreadystatechange = function() {
      if (req.readyState === 4 && req.status === 200) {
        this.setState({
          blogPosts: JSON.parse(req.responseText)
        });
      }
    }.bind(this);
    req.send();
  }

  componentWillMount() {
    this.getBlogPosts();
  }

  render() {
    return (
      <div>
        <h1 className="blog-header">Project Strong Bear</h1>
        <p className="blog-description">
          Insert description here. 
          Insert description here. 
          Insert description here. 
          Insert description here. 
          Insert description here. 
          Insert description here. 
          Insert description here. 
          Insert description here. 
          Insert description here.
        </p>
        {
          this.state.blogPosts.length > 0 ?
          <div className="blog-posts">
            { this.state.blogPosts.map(blogPost =>
              <BlogPost key={blogPost.blogPostId} blogPost={blogPost} />
            ) }
          </div> : <div />
        }
      </div>
    );
  }
}
 
export default Blog;
