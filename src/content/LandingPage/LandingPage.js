import React, { Component } from 'react';
//import RadioTab from '../../components/RadioTabs';
//import Smiley from '../../components/Smiley';

import RadarGraphImg from '../../assets/RadarGraph.png';

class LandingPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "option1"
    };
  };

  render () {
    return ( 
      <div className="bx--grid bx--grid--full-width">
        <div className="bx--row">
            <div className="bx--col landing-page--left-container">
              <h1>Your Diversity Graph</h1>
              <img src={RadarGraphImg} alt="whatever" className="landing-page--radar-graph" />
              <h2>Strengths:</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <h2>Weaknesses:</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="bx--col">
              <div className="landing-page--right-container-trainings">
                <h2>Suggested Trainings:</h2>
              </div>
              <div className="landing-page--right-container-resources">
                <h2>Suggested Resources:</h2>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
