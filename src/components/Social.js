import React, { Component } from 'react';
import config from '../config.js';
import Photo from './Photo';
import '../styles/Social.css';

class Social extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      leftArrowVisible: false,
      rightArrowVisible: true
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
      this.setState({ rightArrowVisible: true });
      var newScroll = 0;
      if (currentScroll < -this.scrollAmount) {
        newScroll = currentScroll + this.scrollAmount;
      } else {
        this.setState({ leftArrowVisible: false });
      }
      var scroller = document.getElementById('scroller');
      scroller.style.transform = `translateX(${newScroll}px)`;
    }
  }

  scrollRight() {
    var currentScroll = this.getCurrentScroll();
    var limit = document.getElementById('scroller-container').offsetWidth - 2160;
    if (currentScroll > limit) {
      this.setState({ leftArrowVisible: true });
      var newScroll = limit;
      if (currentScroll > limit + this.scrollAmount) {
        newScroll = currentScroll - this.scrollAmount;
      } else {
        this.setState({ rightArrowVisible: false });
      }
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
          <div className={"arrow left-arrow"+(this.state.leftArrowVisible ? "" : " hidden")} onClick={this.scrollLeft}>
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
          <div className={"arrow right-arrow"+(this.state.rightArrowVisible ? "" : " hidden")} onClick={this.scrollRight}>
            <img src={require("../social-icons/right-arrow.svg")} width="60px" alt="Right" />
          </div>
        </div>
      </div>
    );
  }
}
 
export default Social;
