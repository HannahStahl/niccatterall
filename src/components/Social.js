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
            ) }
          </div> : <div />
        }
      </div>
    );
  }
}
 
export default Social;
