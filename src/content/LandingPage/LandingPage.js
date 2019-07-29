import React, { Component } from 'react';
import RadioTab from '../../components/RadioTabs';
import CurrentGraph from '../../components/CurrentGraph';

class LandingPage extends Component {

  render () {
    return ( 
      <div>
        <RadioTab />
        <CurrentGraph />
      </div>
    );
  }
}

export default LandingPage;
