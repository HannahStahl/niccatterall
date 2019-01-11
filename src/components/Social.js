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
    this.handleScroll = this.handleScroll.bind(this);
    this.scrollLeft = this.scrollLeft.bind(this);
    this.scrollRight = this.scrollRight.bind(this);
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

  handleScroll() {
    var newScroll = document.getElementById('scroller-container').scrollLeft;
    if (newScroll > 0) {
      this.setState({ leftArrowVisible: true });
      var containerWidth = document.getElementById('scroller-container').offsetWidth;
      var limit = window.screen.width > 767 ? 2160 : 1460;
      if (newScroll >= -(containerWidth - limit)) {
        this.setState({ rightArrowVisible: false });
      } else {
        this.setState({ rightArrowVisible: true });
      }
    } else {
      this.setState({ leftArrowVisible: false });
    }
  }

  scrollSocialFeed(amountPerMillisecond) {
    var i;
    var scrollContainer = document.getElementById('scroller-container');
    for (i = 0; i < 200; i++) {
      setTimeout(function() {
        scrollContainer.scrollLeft += amountPerMillisecond;
      }, 1);
    }
  }

  scrollLeft() {
    this.scrollSocialFeed(-1.5);
  }

  scrollRight() {
    this.scrollSocialFeed(1.5);
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
          <div
            id="scroller-container"
            className="instagram-photos-container"
            onScroll={this.handleScroll}
          >
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
