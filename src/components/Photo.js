import React, { Component } from 'react';
import '../styles/Photo.css';

class Photo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
    this.toggleHover = this.toggleHover.bind(this);
  }

  toggleHover() {
    this.setState({ hover: !this.state.hover });
  }

  render() {
    return (
      <a
        href={this.props.photo.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          "backgroundImage": this.state.hover ? `linear-gradient(
            rgba(0, 0, 0, 0.5), 
            rgba(0, 0, 0, 0.5)
          ), url(${this.props.photo.images.standard_resolution.url})` : `linear-gradient(
            rgba(0, 0, 0, 0.1), 
            rgba(0, 0, 0, 0.1)
          ), url(${this.props.photo.images.standard_resolution.url})`
        }}
        className="instagram-photo"
        alt="Instagram"
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
      >
        <div className="likes">
          <img src={require("../social-icons/heart.svg")} width="28px" alt="Likes" />
          <p>{this.props.photo.likes.count}</p>
        </div>
        <div className="comments">
          <p>{this.props.photo.comments.count}</p>
          <img src={require("../social-icons/speech-bubble.svg")} width="28px" alt="Comments" />
        </div>
      </a>
    );
  }
}

export default Photo;
