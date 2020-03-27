import React, { Component } from 'react';
import '../styles/Podcast.css';
import config from '../config';

class Podcast extends Component {
  constructor(props) {
    super(props);
    this.state = { episodeURLs: [] }
  }

  componentDidMount() {
    fetch(config.podcastURL, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }).then((response) => response.json()).then((episodes) => {
      const episodeURLs = episodes.slice(0, 3).map((episode) => {
        const url = episode.audio_url.split('.mp3')[0];
        return `${url}?client_source=small_player&amp;iframe=true&amp;referrer=${url}.js?player=small`;
      });
      this.setState({ episodeURLs });
    });
  }

  render() {
    const { episodeURLs } = this.state;
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
