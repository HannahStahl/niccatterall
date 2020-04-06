import React, { Component } from 'react';
import moment from 'moment';
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
    return moment(date).format('MMMM D, YYYY');
  }

  componentWillMount() {
    this.setState({
      imageURL: config.blogCloudFrontURL + this.props.blogPost.image
    });
  }

  render() {
    return (
      <div>
        <a
          className="link-to-blog-post"
          href={"/blog/"+this.props.blogPost.itemId}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className={"blog-post-preview" + (this.props.full ? " blog-post-preview-full" : "")}
          >
            <img
              width="300px"
              height="200px"
              src={this.state.imageURL}
              alt="Blog Post"
            />
            <h2>{this.props.blogPost.itemName}</h2>
            <p className={"blog-post-preview-date" + (this.props.full ? " blog-post-preview-date-full" : "")}>
              {this.parseDate(this.props.blogPost.datePublished)}
            </p>
            <div
              dangerouslySetInnerHTML={{ __html: this.props.blogPost.itemHtml }}
              className={"blog-post-preview-content" + (this.props.full ? " blog-post-preview-content-full" : "")}
            />
          </div>
        </a>
      </div>
    );
  }
}

export default BlogPostPreview;
