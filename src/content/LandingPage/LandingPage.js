import React, { Component } from 'react';

// content
import RadarGraphImg from '../../assets/RadarGraph.png';
import ResourceCard from '../../components/ResourceCard';
import Catagory from '../../components/Catagory';

// icons
import CheckMarkFilled20 from '@carbon/icons-react/lib/checkmark--filled/20';
import ErrorFilled20 from '@carbon/icons-react/lib/error--filled/20';
import ChevronRight32 from '@carbon/icons-react/lib/chevron--right/32';

import resourceData from '../../data/resources';

class LandingPage extends Component {

  render () {
    return ( 
      <div className="bx--grid bx--grid--full-width">
          <div className="bx--row landing-page--grey-container">
            <div className="bx--col-md-4 landing-page--white-container">
              <img src={RadarGraphImg} alt="Radar graph chart of mockup data" className="landing-page--radar-graph" />
              {/* <div className="bx--row landing-page--chart-legend">
                <div className="landing-page--square-pink" />
                <p>Your Current Team</p>
                <div className="landing-page--square-blue" />
                <p>Business Unit Avg.</p>
              </div> */}
            </div>
            <div className="bx--col-md-2 landing-page--white-container">
              <h2 className="landing-page--h2">Your Strengths:</h2>
                <Catagory 
                  title="Education:"
                  description="Your team has a wide variety of educational backgrounds and certifications. This means your team is well-equipped to tackle problems from many different academic perspectives."
                />
                <Catagory
                  title="Languages:"
                  description="Your team has a diverse set of communication styles, meaning your team has many ways of listening and sharing ideas."
                />
            </div>
            <div className="bx--col-md-2 landing-page--white-container">
              <h2 className="landing-page--h2">Room to Improve:</h2>
                <Catagory
                  title="Skills:"
                  description="Your team's skills are limited mostly to technical experience. Tap into your team's potential to grow their skillset through the resources below."
                /> <br/><br/><br/><br/>
                <Catagory
                  title="Culture:"
                  description="Having a low score in culture means your team comes from similar backgrounds. You may have a limited perspective when tackling new projects."
                />
            </div>
          </div>
        <div className="bx--row landing-page--grey-container">
          <div className="bx--col-xlg-4 bx--no-gutter landing-page--white-bg">
            <h1 className="landing-page--h1">Suggested Resources</h1>
            <p className="landing-page--p">Learn how to empower and diversify your team! These IBM resources were selected based on the areas your team has the most room to improve in.</p>
            <p className="landing-page--p">You can access these tools now, or bookmark them to YourLearning for later access.</p>
          </div>
          <div className="bx--col bx--no-gutter landing-page--resource-card-grp">
            <div className="bx--row">
              {resourceData.map(resource => (
                <ResourceCard 
                  className="landing-page--resource-card"
                  title={resource.title}
                  description={resource.description}
                />
              ))}
            </div>
          </div>
          <div className="bx--col-lg-1 bx--no-gutter landing-page--see-more">
            <ChevronRight32 className="landing-page--chevron"/>
            <p className="landing-page--p">See more</p>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
