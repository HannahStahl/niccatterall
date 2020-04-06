import React, { Component } from 'react';
import moment from 'moment';
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
    return moment(date).format('MMMM D, YYYY');
  }

  getBlogPost() {
    const blogPostId = this.props.match.params.id;
    Promise.all([
      fetch(`${config.apiURL}item/${config.nicUsername}/${blogPostId}`).then(res => res.json()),
      fetch(`${config.apiURL}itemsToPhotos/${config.nicUsername}`).then(res => res.json()),
      fetch(`${config.apiURL}photos/${config.nicUsername}`).then(res => res.json())
    ]).then((results) => {
      let [blogPost, photosToBlogPosts, photos] = results;
      const { photoId } = photosToBlogPosts.find(imageToBlogPost => imageToBlogPost.itemId === blogPost.itemId);
      const { photoName } = photos.find(image => image.photoId === photoId);
      this.setState({ blogPost, imageURL: `${config.cloudFrontURL}${photoName}` });
    });
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
          <h1>{this.state.blogPost.itemName}</h1>
          <p className="full-blog-date">{this.parseDate(this.state.blogPost.datePublished)}</p>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: this.state.blogPost.itemHtml }}
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
