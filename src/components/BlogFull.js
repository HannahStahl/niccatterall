import React, { Component } from 'react';
import config from '../config.js';
import '../styles/BlogFull.css';
import BlogPostPreview from './BlogPostPreview';
 
class BlogFull extends Component {
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
        this.setState({ blogPosts: JSON.parse(req.responseText) });
      }
    }.bind(this);
    req.send();
  }

  componentWillMount() {
    this.getBlogPosts();
  }

  render() {
    return (
      <div className="blog-full">
        <h1>Project Strong Bear</h1>
        <p className="blog-description">
          I created the Project Strong Bear blog out of remembrance 
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
              <BlogPostPreview key={blogPost.blogPostId} blogPost={blogPost} full={true} />
            ) }
          </div> : <div />
        }
        <p className="blog-link-to-main">
          <a href="/">
            <img src={require("../social-icons/left-arrow.svg")} width="26px" alt="Go" />
             Return to main site
          </a>
        </p>
      </div>
    );
  }
}
 
export default BlogFull;
