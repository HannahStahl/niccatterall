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
    req.open("GET", config.blogPostsURL+config.nicUsername, true);
    req.onreadystatechange = function() {
      if (req.readyState === 4 && req.status === 200) {
        const blogPost = JSON.parse(req.responseText)[0];
        var AWS = require('aws-sdk');
        var s3 = new AWS.S3({
          credentials: {
            accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY
          }
        });
        var params = {
          Bucket: config.s3Bucket, 
          Key: 'private/'+config.nicUsername+'/'+blogPost.image
        };
        s3.getSignedUrl('getObject', params, function(err, imageURL) {
          if (!err) {
            this.setState({ blogPost, imageURL });
          }
        }.bind(this));
        // TODO change to be correct blog post rather than first blog post
        // use blogPostId to make proper call to backend
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
            width="100%"
            height="auto"
            src={this.state.imageURL}
            alt="Blog Post"
          />
          <h1>{this.state.blogPost.title}</h1>
          <p className="full-blog-date">{this.parseDate(this.state.blogPost.publishedDate)}</p>
          <div
            dangerouslySetInnerHTML={{ __html: this.state.blogPost.content }}
          />
          <p className="blog-back-link">
            <a href="/blog">
              <img src={require("../social-icons/left-arrow.svg")} width="26px" alt="Go" />
              Return to Project Strong Bear
            </a>
          </p>
        </div>}
      </div>
    );
  }
}
 
export default BlogPost;
