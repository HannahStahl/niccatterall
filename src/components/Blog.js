import React, { Component } from 'react';
import config from '../config.js';
import '../styles/Blog.css';
import BlogPostPreview from './BlogPostPreview';
 
class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogPosts: []
    };
  }

  getBlogPosts() {
    var req = new XMLHttpRequest();
    req.open("GET", config.blogPostsURL+"blogPostsForUser/"+config.nicUsername, true);
    req.onreadystatechange = function() {
      if (req.readyState === 4 && req.status === 200) {
        let blogPosts = JSON.parse(req.responseText);
        if (blogPosts.length > 3) {
          blogPosts = blogPosts.slice(0, 3);
        }
        this.setState({ blogPosts });
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
        {
          this.state.blogPosts.length > 0 ?
          <div className="blog-posts">
            { this.state.blogPosts.map(blogPost =>
              <BlogPostPreview key={blogPost.blogPostId} blogPost={blogPost} />
            ) }
          </div> : <div />
        }
        <p className="blog-link">
          <a href="/blog" target="_blank" rel="noopener noreferrer">See all blog posts 
            <img src={require("../misc-icons/right-arrow.svg")} width="26px" alt="Go" />
          </a>
        </p>
      </div>
    );
  }
}
 
export default Blog;
