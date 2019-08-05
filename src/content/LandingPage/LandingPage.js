import React, { Component } from 'react';
import RadarGraphImg from '../../assets/RadarGraph.png';
//import ResourceCard from '../../components/ResourceCard';

// icons
import CheckMarkFilled20 from '@carbon/icons-react/lib/checkmark--filled/20';
import ErrorFilled20 from '@carbon/icons-react/lib/error--filled/20';

class LandingPage extends Component {

  render () {
    return ( 
      <div className="bx--grid bx--grid--full-width">
        <div className="bx--row">
            <div className="bx--col-md-4 landing-page--container">
              <img src={RadarGraphImg} alt="Radar graph chart of mockup data" className="landing-page--radar-graph" />
              <div className="bx--row landing-page--chart-legend">
                <div className="landing-page--square-pink" />
                <p>Your Current Team</p>
                <div className="landing-page--square-blue" />
                <p>Business Unit Avg.</p>
              </div>
            </div>
            <div className="bx--col-md-2 landing-page--container">
              <h2 className="landing-page--h2">Your Strengths:</h2>
              <h3 className="landing-page--h3"><CheckMarkFilled20 className="landing-pace--icons"/>Education</h3>
              <p className="landing-page--p">Your team has a wide variety of educational backgrounds and certifications. This means your team is well-equipped to tackle problems from many different academic perspectives.</p>
              <h3 className="landing-page--h3"><CheckMarkFilled20 className="landing-pace--icons"/>Languages</h3>
              <p className="landing-page--p">Your team has a diverse set of communication styles, meaning your team has many ways of listening and sharing ideas.</p>
            </div>
            <div className="bx--col-md-2 landing-page--container">
              <h2 className="landing-page--h2">Room to Improve:</h2>
              <h3 className="landing-page--h3"><ErrorFilled20 className="landing-pace--icons"/>Skills</h3>
              <p className="landing-page--p">Your team's skills are limited mostly to technical experience. Tap into your team's potential to grow their skillset through the resources below.</p>
              <h3 className="landing-page--h3"><ErrorFilled20 className="landing-pace--icons"/>Culture</h3>
              <p className="landing-page--p">Having a low score in culture means your team comes from similar backgrounds. You may have a limited perspective when tackling new projects.</p>
            </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
