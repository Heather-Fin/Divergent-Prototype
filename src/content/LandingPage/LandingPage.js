import React, { Component } from 'react';
import RadarGraphImg from '../../assets/RadarGraph.png';
import ResourceCard from '../../components/ResourceCard';

// icons
import CheckMarkFilled20 from '@carbon/icons-react/lib/checkmark--filled/20';
import ErrorFilled20 from '@carbon/icons-react/lib/error--filled/20';

class LandingPage extends Component {

  render () {
    return ( 
      <div className="bx--grid bx--grid--full-width">
        <div className="bx--row">
            <div className="bx--col-md-4 landing-page--container">
              <img src={RadarGraphImg} alt="CHANGE ME HEATHER!!!!!!!!" className="landing-page--radar-graph" />
            </div>
            <div className="bx--col-md-2 landing-page--container">
              <h2>Your Strengths:</h2>
              <h3><CheckMarkFilled20 />Education</h3>
              <p>Your team has a wide variety of educational backgrounds and certifications. This means your team is well-equipped to tackle problems from many different academic perspectives.</p>
              <h3><CheckMarkFilled20 />Languages</h3>
              <p>Your team has a diverse set of communication styles, meaning your team has many ways of listening and sharing ideas.</p>
            </div>
            <div className="bx--col-md-2 landing-page--container">
              <h2>Room to Improve:</h2>
              <h3><ErrorFilled20 />Skills</h3>
              <p>Your team's skills are limited mostly to technical experience. Tap into your team's potential to grow their skillset through the resources below.</p>
              <h3><ErrorFilled20 />Culture</h3>
              <p>Having a low score in culture means your team comes from similar backgrounds. You may have a limited perspective when tackling new projects.</p>
            </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
