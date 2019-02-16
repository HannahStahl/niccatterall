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

  setInstagramPhotoState = (contents) => {
    this.setState({
      photos: contents.data
    });
  }

  getInstagramPhotos() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = config.getNicInstagramURL;
    fetch(proxyurl + url)
      .then(response => response.text())
      .then(contents => this.setInstagramPhotoState(JSON.parse(contents)))
      .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
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
    var scrollContainer = document.getElementById('scroller-container');
    var pixelsScrolled = 0;
    var intervalId = setInterval(function() {
      if (Math.abs(pixelsScrolled) >= 300) {
        clearInterval(intervalId);
      } else {
        scrollContainer.scrollLeft += amountPerMillisecond;
        pixelsScrolled += amountPerMillisecond;
      }
    }, 1)
  }

  scrollLeft() {
    this.scrollSocialFeed(-5);
  }

  scrollRight() {
    this.scrollSocialFeed(5);
  }

  componentWillMount() {
    this.getInstagramPhotos();
  }

  render() {
    return (
      <div className="social-feed">
        <h1>@cattogolf on Instagram</h1>
        <div className="instagram-container">
          <div className={"arrow left-carat"+(this.state.leftArrowVisible ? "" : " hidden")} onClick={this.scrollLeft}>
            <img src={require("../misc-icons/left-carat.svg")} width="60px" alt="Left" />
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
          <div className={"arrow right-carat"+(this.state.rightArrowVisible ? "" : " hidden")} onClick={this.scrollRight}>
            <img src={require("../misc-icons/right-carat.svg")} width="60px" alt="Right" />
          </div>
        </div>
      </div>
    );
  }
}
 
export default Social;
