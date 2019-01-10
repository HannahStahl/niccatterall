import React, { Component } from 'react';
import config from '../config.js';
import Photo from './Photo';
import '../styles/Social.css';

class Social extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    };
    this.scrollLeft = this.scrollLeft.bind(this);
    this.scrollRight = this.scrollRight.bind(this);
    this.scrollAmount = 300;
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

  getCurrentScroll() {
    var scroller = document.getElementById('scroller');
    var currentTransform = scroller.style.transform;
    var currentScroll = 0;
    if (currentTransform !== "") {
      currentScroll = parseInt(currentTransform.split('(')[1].split('px)')[0]);
    }
    return currentScroll;
  }

  scrollLeft() {
    var currentScroll = this.getCurrentScroll();
    if (currentScroll < 0) {
      var newScroll = (currentScroll < -this.scrollAmount) ? currentScroll + this.scrollAmount : 0;
      var scroller = document.getElementById('scroller');
      scroller.style.transform = `translateX(${newScroll}px)`;
    }
  }

  scrollRight() {
    var currentScroll = this.getCurrentScroll();
    var limit = document.getElementById('scroller-container').offsetWidth - 2160;
    if (currentScroll > limit) {
      var newScroll = (currentScroll > limit + this.scrollAmount) ? currentScroll - this.scrollAmount : limit;
      var scroller = document.getElementById('scroller');
      scroller.style.transform = `translateX(${newScroll}px)`; 
    }
  }

  componentWillMount() {
    this.getInstagramPhotos();
  }

  render() {
    return (
      <div className="social-feed">
        <h1>@cattogolf on Instagram</h1>
        <div className="instagram-container">
          <div className="arrow left-arrow" onClick={this.scrollLeft}>
            <img src={require("../social-icons/left-arrow.svg")} width="60px" alt="Left" />
          </div>
          <div id="scroller-container" className="instagram-photos-container">
            {
              this.state.photos.length > 0 ?
              <div id="scroller" className="instagram-photos">
                { this.state.photos.map(photo =>
                  <Photo key={photo.id} photo={photo} />
                ) }
              </div> : <div />
            }
          </div>
          <div className="arrow right-arrow" onClick={this.scrollRight}>
            <img src={require("../social-icons/right-arrow.svg")} width="60px" alt="Right" />
          </div>
        </div>
      </div>
    );
  }
}
 
export default Social;
