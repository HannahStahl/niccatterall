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
              <a
                href={photo.link}
                target="_blank"
                rel="noopener noreferrer"
                key={photo.id}
                style={{"backgroundImage":`url(${photo.images.standard_resolution.url})`}}
                className="instagram-photo"
                alt="Instagram"
              >
                <div className="likes">
                  <img src="heart.svg" width="28px" alt="Likes" />
                  <p>{photo.likes.count}</p>
                </div>
                <div className="comments">
                  <p>{photo.comments.count}</p>
                  <img src="speech-bubble.svg" width="28px" alt="Comments" />
                </div>
              </a>
              // TODO white should stay white on hover
            ) }
          </div> : <div />
        }
      </div>
    );
  }
}
 
export default Social;
