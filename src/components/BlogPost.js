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
              <img
                width="80%"
                height="auto"
                src={require("./temp-photo.jpg")}
                alt="Blog Post"
              />
              <br />
              {this.props.blogPost.title}
              <br />
              <p>{this.parseDate(this.props.blogPost.publishedDate)}</p>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div
              dangerouslySetInnerHTML={{ __html: this.props.blogPost.content }}
            />
          </Modal.Body>
        </Modal>
        <div className="blog-post-preview" onClick={this.handleShowModal}>
          <img
            width="300px"
            height="200px"
            src={require("./temp-photo.jpg")}
            alt="Blog Post"
          />
          <h2>{this.props.blogPost.title}</h2>
          <p className="blog-post-preview-date">
            {this.parseDate(this.props.blogPost.publishedDate)}
          </p>
          <div
            dangerouslySetInnerHTML={{ __html: this.props.blogPost.content }}
            className="blog-post-preview-content"
          />
        </div>
      </div>
    );
  }
}

export default BlogPost;
