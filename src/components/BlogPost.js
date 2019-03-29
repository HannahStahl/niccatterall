import React, { Component } from 'react';
import '../styles/BlogPost.css';
import config from '../config.js';
 
class BlogPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogPost: null,
      imageURL: ""
    };
  }

  parseDate(date) {
    var dateMinusTime = date.split(',')[0];
    var [monthNumber, day, year]  = dateMinusTime.split('/');
    var months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
    var month = months[monthNumber-1];
    return month + ' ' + day + ', ' + year;
  }

  getBlogPost() {
    const blogPostId = this.props.match.params.id;
    var req = new XMLHttpRequest();
    req.open("GET", config.blogPostsURL+"blogPostForUser/"+config.nicUsername+"/"+blogPostId, true);
    req.onreadystatechange = function() {
      if (req.readyState === 4 && req.status === 200) {
        const blogPost = JSON.parse(req.responseText);
        this.setState({
          blogPost,
          imageURL: config.cloudFrontURL + blogPost.image
        });
      }
    }.bind(this);
    req.send();
  }

  componentWillMount() {
    this.getBlogPost();
  }

  render() {
    return (
      <div className="blog-post">
        {this.state.blogPost && <div>
          <img
            className="blog-post-feature-image"
            width="100%"
            height="auto"
            src={this.state.imageURL}
            alt="Nic Blog"
          />
          <h1>{this.state.blogPost.title}</h1>
          <p className="full-blog-date">{this.parseDate(this.state.blogPost.publishedDate)}</p>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: this.state.blogPost.content }}
          />
          <p className="blog-back-link">
            <a href="/blog">
              <img src={require("../misc-icons/left-arrow.svg")} width="26px" alt="Go" />
              Return to Project Strong Bear
            </a>
          </p>
        </div>}
      </div>
    );
  }
}
 
export default BlogPost;
