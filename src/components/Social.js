import React, { Component } from 'react';
import config from '../config.js';
import '../styles/Social.css';

class Social extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    };
  }

  getInstagramPhotos() {
    var req = new XMLHttpRequest();
    req.open("GET", config.getNicInstagramURL, true);
    req.onreadystatechange = function () {
      if (req.readyState === 4 && req.status === 200) {
        this.setState({
          photos: JSON.parse(req.responseText).data
        });
      }
    }.bind(this);
    req.send();
  }

  componentWillMount() {
    this.getInstagramPhotos();
  }

  render() {
    console.log(this.state.photos);
    return (
      <div className="instagram-photos-container">
        {
          this.state.photos.length > 0 ?
          <div className="instagram-photos">
            { this.state.photos.map(photo =>
              <img
                key={photo.id}
                src={photo.images.standard_resolution.url}
                className="instagram-photo"
                alt="Instagram"
              />
              // TODO use div with background instead of img
              // div should have white text with icons and # of likes and comments
              // this text should be hidden initially and only displayed on hover
            ) }
          </div> : <div />
        }
      </div>
    );
  }
}
 
export default Social;
