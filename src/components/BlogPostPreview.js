import React, { Component } from 'react';
import '../styles/BlogPostPreview.css';
import config from '../config.js';

class BlogPostPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  async componentDidMount() {
    var AWS = require('aws-sdk');
    var s3 = new AWS.S3({
      credentials: {
        accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY
      }
    });
    var params = {
      Bucket: config.s3Bucket, 
      Key: 'private/'+config.nicUsername+'/'+this.props.blogPost.image
    };
    s3.getSignedUrl('getObject', params, function(err, imageURL) {
      if (!err) {
        this.setState({imageURL});
      }
    }.bind(this));
  }

  render() {
    return (
      <div>
        <a className="link-to-blog-post" href={"/blog/"+this.props.blogPost.blogPostId}>
          <div
            className={"blog-post-preview" + (this.props.full ? " blog-post-preview-full" : "")}
          >
            <img
              width="300px"
              height="200px"
              src={this.state.imageURL}
              alt="Blog Post"
            />
            <h2>{this.props.blogPost.title}</h2>
            <p className={"blog-post-preview-date" + (this.props.full ? " blog-post-preview-date-full" : "")}>
              {this.parseDate(this.props.blogPost.publishedDate)}
            </p>
            <div
              dangerouslySetInnerHTML={{ __html: this.props.blogPost.content }}
              className={"blog-post-preview-content" + (this.props.full ? " blog-post-preview-content-full" : "")}
            />
          </div>
        </a>
      </div>
    );
  }
}

export default BlogPostPreview;
