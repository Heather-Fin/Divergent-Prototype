import React, { Component } from 'react';
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
      <div className='charts'>
        <RadioTab />
      </div>
    );
  }
}

export default LandingPage;
