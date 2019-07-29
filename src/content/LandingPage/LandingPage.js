import React, { Component } from 'react';
import RadarGraph from '../../components/RadarGraph';
import HeatMap from '../../components/HeatMap';
import RadioTab from '../../components/RadioTabs';

class LandingPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "option1"
    };
  };

  render () {
    return ( 
      <>
        <div>
          <RadioTab />
          <RadarGraph />
          <HeatMap />
        </div>
      </>
    );
  }
}

export default LandingPage;
