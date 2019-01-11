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
    req.open("GET", config.blogPostsURL+config.nicUsername, true);
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
          The Project Strong Bear blog was created out of remembrance 
          for my late grandfather, a source of immense strength 
          in my family, and late friend who exhibited the qualities 
          of a loving bear. Their sudden passing, along with my 
          grandfather's passion for writing, motivated me to seize 
          the day and start sharing my knowledge about healthy living 
          with others.
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
