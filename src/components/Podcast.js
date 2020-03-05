import React, { Component } from 'react';
import '../styles/Podcast.css';

class Podcast extends Component {
  render() {
    const episodeURLs = [
      "https://www.buzzsprout.com/256006/2600131-episode-3-talking-sports-medicine-with-dr-kevin-sprouse-take-charge-of-your-performance?client_source=small_player&amp;iframe=true&map;referrer=https://www.buzzsprout.com/256006/2600131-episode-3-talking-sports-medicine-with-dr-kevin-sprouse-take-charge-of-your-performance.js?player=small",
      "https://www.buzzsprout.com/256006/1046767-nic-catterall-explores-life-on-tour-with-adam-kerley-physical-therapist-athletic-trainer-and-national-director-of-exos-physical-therapy-and-sports-performance?client_source=small_player&amp;iframe=true&amp;referrer=https://www.buzzsprout.com/256006/1046767-nic-catterall-explores-life-on-tour-with-adam-kerley-physical-therapist-athletic-trainer-and-national-director-of-exos-physical-therapy-and-sports-performance.js?player=small",
      "https://www.buzzsprout.com/256006/951972-welcome-to-the-tour-golf-podcast-with-nic-catterall-trailer?client_source=small_player&amp;iframe=true&amp;referrer=https://www.buzzsprout.com/256006/951972-welcome-to-the-tour-golf-podcast-with-nic-catterall-trailer.js?player=small",
    ];
    return (
      <div className="podcast-episodes">
        <h1>Tour Golf Podcast</h1>
        {episodeURLs.map(episodeURL => (
          <iframe
            key={episodeURL}
            src={episodeURL}
            className="podcast-episode"
            frameBorder="0"
            scrolling="no"
            title="Podcast"
          />
        ))}
        <p className="podcast-link">
          <a href="https://www.buzzsprout.com/256006" target="_blank" rel="noopener noreferrer">View all episodes 
            <img src={require("../misc-icons/right-arrow.svg")} width="26px" alt="Go" />
          </a>
        </p>
      </div>
    );
  }
}

export default Podcast;
