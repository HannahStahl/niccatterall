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
              <a
                href={photo.link}
                target="_blank"
                rel="noopener noreferrer"
                key={photo.id}
                style={{
                  "backgroundImage": `linear-gradient(
                    rgba(49, 49, 49, 0.1), 
                    rgba(49, 49, 49, 0.1)
                  ), url(${photo.images.standard_resolution.url})`
                }}
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
              // could do this by extracting each photo into separate component
              // (which is probably worth doing anyway at this point for code cleanliness)
              // each of these components will have its own state
              // so then you could use onmouseenter hover state solution
            ) }
          </div> : <div />
        }
      </div>
    );
  }
}
 
export default Social;
