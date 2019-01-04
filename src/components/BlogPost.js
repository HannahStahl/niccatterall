import React, { Component } from 'react';
// import { Storage } from "aws-amplify";
import { Modal } from 'react-bootstrap';
import '../styles/BlogPost.css';

class BlogPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
    this.handleShowModal = this.handleShowModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleShowModal() {
    this.setState({
      showModal: true
    });
  }

  handleCloseModal() {
    this.setState({
      showModal: false
    });
  }

  // async componentDidMount() {
  //   this.props.blogPost.imageURL = await Storage.vault.get(this.props.blogPost.image);
  // }

  render() {
    return (
      <div>
        <Modal
          show={this.state.showModal}
          onHide={this.handleCloseModal}
          className="blog-post-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title>
              {this.props.blogPost.title}
              {/* <br />
              {this.props.blogPost.publishedDate.split(',')[0]} */}
              <br />
              <img
                width="70%"
                height="auto"
                src={require("./temp-photo.jpg")}
                alt="Blog Post"
              />
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div
              dangerouslySetInnerHTML={{ __html: this.props.blogPost.content }}
            />
          </Modal.Body>
        </Modal>
        <div className="blog-post" onClick={this.handleShowModal}>
          <img
            className="blog-post-image"
            width="300px"
            height="200px"
            src={require("./temp-photo.jpg")}
            alt="Blog Post"
          />
          <h4>{this.props.blogPost.title}</h4>
          <div
            dangerouslySetInnerHTML={{ __html: this.props.blogPost.content }}
            className="blog-post-preview"
          />
        </div>
      </div>
    );
  }
}

export default BlogPost;
