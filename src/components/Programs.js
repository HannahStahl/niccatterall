import React, { Component } from 'react';
import '../styles/Programs.css';
import config from '../config';

class Programs extends Component {
  constructor(props) {
    super(props);
    this.state = { programs: [] };
  }

  componentDidMount() {
    Promise.all([
      fetch(`${config.apiURL}publishedItemsOfSpecifiedType/${config.nicUsername}/${config.programsConfigId}`).then(res => res.json()),
      fetch(`${config.apiURL}itemsToPhotos/${config.nicUsername}`).then(res => res.json()),
      fetch(`${config.apiURL}photos/${config.nicUsername}`).then(res => res.json())
    ]).then((results) => {
      let [programs, photosToPrograms, photos] = results;
      programs = programs.map(program => {
        const { photoId } = photosToPrograms.find(photoToProgram => photoToProgram.itemId === program.itemId);
        const { photoName } = photos.find(image => image.photoId === photoId);
        return ({ ...program, image: photoName });
      });
      this.setState({ programs });
    });
  }

  render() {
    const { programs } = this.state;
    return (
      <div className="training-programs">
        <h1>Training Programs</h1>
        <div className={`training-programs-container${programs.length <= 1 ? ' full-width' : ''}`}>
          <div className="training-programs-description">
            <p>
              Nic offers training programs designed for all levels of competency and exercise experience, 
              which can be performed right at home.
            </p>
            <p>
              Advanced sport-specific coaching is available 
              and personalized with monitoring and communication options at various levels.
            </p>
            <p>
              For more information and purchasing options, click on the links provided here.
            </p>
          </div>
          <div className="training-programs-list">
            {programs.map((program) => {
              const link = program.itemLink.startsWith('http') ? program.itemLink : `https://${program.itemLink}`;
              let description = program.itemDescription;
              if (description.length > 100) {
                let cutDescription = description.substring(0, 100);
                const words = cutDescription.split(' ');
                words.splice(-1, 1);
                cutDescription = words.join(' ');
                description = `${cutDescription}...`;
              }
              return (
                <a key={program.itemName} href={link} target="_blank" rel="noopener noreferrer">
                  <div className="training-program">
                    <img src={`${config.cloudFrontURL}${program.image}`} alt={program.itemName} />
                    <div className="training-program-details">
                      <h2>{program.itemName}</h2>
                      <p className="training-program-description">{description}</p>
                      <p>${program.itemPrice}</p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Programs;
